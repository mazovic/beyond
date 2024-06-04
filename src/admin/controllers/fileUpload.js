const Busboy = require("busboy");
const path = require("path");
const fs = require("fs");
const sha1 = require("sha1");
const { getExtension, isImageValid } = require("./../../utils/upload");

// Gets a filename extension.

// Test if a image is valid based on its extension and mime type.

function upload(req, callback) {
  // The route on which the image is saved.
  const fileRoute = "/uploads/";

  // Server side file path on which the image is saved.
  let saveToPath = null;

  // Flag to tell if a stream had an error.
  let hadStreamError = null;

  // Used for sending response.
  let link = null;

  // Stream error handler.
  function handleStreamError(error) {
    // Do not enter twice in here.
    if (hadStreamError) {
      return;
    }

    hadStreamError = error;

    // Cleanup: delete the saved path.
    if (saveToPath) {
      return fs.unlink(saveToPath, function (err) {
        return callback(error);
      });
    }

    return callback(error);
  }

  // Instantiate Busboy.
  try {
    var busboy = Busboy({ headers: req.headers });
  } catch (e) {
    return callback(e);
  }

  // Handle file arrival.
  busboy.on("file", function (fieldname, file, filename, encoding) {
    // Check fieldname:
    if ("file" != fieldname) {
      // Stop receiving from this stream.
      file.resume();
      return callback("Fieldname is not correct. It must be file.");
    }
    console.log({ filename });
    // Generate link.
    const randomName =
      sha1(new Date().getTime()) + "." + getExtension(filename.filename);
    link = fileRoute + randomName;

    // Generate path where the file will be saved.
    const appDir = path.dirname(require.main.filename);
    saveToPath = path.join(appDir, link);

    // Pipe reader stream (file from client) into writer stream (file from disk).
    file.on("error", handleStreamError);

    // Create stream writer to save to file to disk.
    const diskWriterStream = fs.createWriteStream(saveToPath);
    diskWriterStream.on("error", handleStreamError);

    // Validate image after it is successfully saved to disk.
    diskWriterStream.on("finish", function () {
      // Check if image is valid
      const status = isImageValid(saveToPath, filename.mimeType);

      if (!status) {
        return handleStreamError("File does not meet the validation.");
      }
      link = "http://192.168.163.103" + link;
      return callback(null, { link: link });
    });

    // Save image to disk.
    file.pipe(diskWriterStream);
  });

  // Handle file upload termination.
  busboy.on("error", handleStreamError);
  req.on("error", handleStreamError);

  // Pipe reader stream into writer stream.
  return req.pipe(busboy);
}

module.exports = upload;
