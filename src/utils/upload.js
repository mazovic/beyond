function getExtension(filename) {
  return filename.split(".").pop();
}
function isImageValid(filename, mimetype) {
  const allowedExts = ["gif", "jpeg", "jpg", "png", "svg", "blob"];
  const allowedMimeTypes = [
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/x-png",
    "image/png",
    "image/svg+xml",
  ];

  // Get image extension.
  const extension = getExtension(filename);

  return (
    allowedExts.indexOf(extension.toLowerCase()) != -1 &&
    allowedMimeTypes.indexOf(mimetype) != -1
  );
}

module.exports = { getExtension, isImageValid };
