import { useEffect, useState } from "react";

const translateText = async (text: string, target: string) => {
  if (!window.chrome || !window.chrome.ai || !window.chrome.ai.translator) {
    // Fallback to another translation API if Chrome AI APIs aren't available
    console.error("Chrome AI APIs are not available. Using fallback translation service.");
    
    // Example using Google Translate API (or any other translation service)
    const apiKey = "YOUR_GOOGLE_CLOUD_API_KEY";
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const requestBody = {
      q: text,
      target: target,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error("Translation failed:", error);
      return "Translation failed.";
    }
  }

  // If Chrome AI APIs are available
  try {
    const result = await window.chrome.ai.translator.translate({ text, targetLang: target });
    return result.translation;
  } catch (error) {
    console.error("Chrome AI translation error:", error);
    return "Translation failed.";
  }
};



  
  export default function Message({ text }: { text: string }) {
    const [translation, setTranslation] = useState("");
    const [targetLang, setTargetLang] = useState("en");
  
    return (
      <div className="p-3 my-2 bg-blue-100 rounded-lg shadow">
        <p>{text}</p>
        <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">English</option>
          <option value="pt">Portuguese</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="tr">Turkish</option>
          <option value="fr">French</option>
        </select>
        <button
          className="text-blue-500"
          onClick={async () => setTranslation(await translateText(text, targetLang))}
        >
          Translate
        </button>
        {translation && <p className="text-sm text-gray-700">Translated: {translation}</p>}
      </div>
    );
  }
  