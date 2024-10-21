const axios = require('axios');

async function translateText(textToTranslate, targetLanguage) {
  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: `Translate the following text to ${targetLanguage} , i need just a straight single translated statement , also , if there are new line characters or indentations , please , add them also to the translated text , remember, resoponse should only contain translated text and nothing more, the language will be specified as the language code : "${textToTranslate}"`
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        }
      }
    );

    return response.data.content[0].text;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
}



module.exports = {
    translateText:translateText
}