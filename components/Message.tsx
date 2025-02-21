import { useEffect, useState } from "react";

const translateText = async (text: string, target: string) => {
  const chromeAI = (window as any).chrome?.ai?.translator;
  
  if (!chromeAI) {
    console.error("Chrome AI APIs are not available. Using fallback translation service.");
    
    // Fallback translation logic
    return "Fallback translation service not configured.";
  }

  try {
    const result = await chromeAI.translate({ text, targetLang: target });
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
  