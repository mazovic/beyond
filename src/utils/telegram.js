const axios = require("axios");

const sendMessage = async (chatId, message) => {
  const url = `https://api.telegram.org/bot7429469029:AAEynmZOHrX9_NtPIW8B0yLWlECtYmNoHNE/sendMessage`;
  const response = await axios.post(url, {
    chat_id: chatId,
    text: message,
  });
  console.log("Message sent:", response.data);
};
module.exports = sendMessage;
