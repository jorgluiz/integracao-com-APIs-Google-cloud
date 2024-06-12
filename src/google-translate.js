const fs = require("fs");
const path = require("path");
const speech = require("@google-cloud/speech");
const { Translate } = require("@google-cloud/translate").v2;

require('dotenv').config()

const fileCredential = path.join(__dirname, "./google-credential/arquivo-de-credenciais.json");

process.env.GOOGLE_APPLICATION_CREDENTIALS=fileCredential

const googleSpeechClient = new speech.SpeechClient();
const translate = new Translate();

const filePath = path.join(__dirname, "../Authentication-with-stripe-node.mp3");

async function transcribeAudio(filePath) {
    const audio = { content: fs.readFileSync(filePath).toString("base64"), };

    const config = {
        encoding: "MP3",
        languageCode: "en-US",
    };

    const [response] = await googleSpeechClient.recognize({ audio, config });
    const transcription = response.results.map(result => result.alternatives[0].transcript).join("\n");
    return transcription;
}

async function translateText(text) {
    const [translation] = await translate.translate(text, "pt");
    return translation;
}

async function main() {
    try {
        const audioTranscription = await transcribeAudio(filePath);
        console.log("Transcription:", audioTranscription);

        const translatedText = await translateText(audioTranscription);
        console.log("Translation:", translatedText);

        // Agora você pode enviar `translatedText` para o OpenAI para análise ou processamento adicional, se necessário.
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
