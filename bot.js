const axios = require('axios');
const express = require('express');

// Replace with your actual token and chat ID
const TELEGRAM_TOKEN = '7515756008:AAHbStxPySuqNam2QBnlTruRjCwjDjn1Ssk';
const CHAT_ID = '-4540754160'; // You can get this by sending a message to your bot and checking the updates
const PORT = 3000;

// Define the function to send messages to Telegram
async function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    const payload = {
        chat_id: CHAT_ID,
        text: message,
    };

    try {
        await axios.post(url, payload);
        console.log('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

// // Example error message
// const errorMessage = 'Hello Bimo';

// // Send the error message
// sendTelegramMessage(errorMessage);

const app = express ();
app.use(express.json());

app.get("/messages", (req, res) => {
    const errorMessage = 'Hello Bimo';
    sendTelegramMessage(errorMessage);
    
    res.json([
        {
            code: 200,
            message: 'Success'
        }
    ])
 });

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
