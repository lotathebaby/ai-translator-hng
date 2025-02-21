import { useState } from "react";
import Message from "./Message";

export default function ChatInput() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<{ id: number; text: string }[]>([]);

  const handleSend = () => {
    if (!text.trim()) return;

    // Add new message to chat
    setMessages((prev) => [...prev, { id: Date.now(), text }]);
    setText(""); // Clear input
  };

  return (
    <div className="flex flex-col w-full">
      {/* Chat Window */}
      <div className="h-80 overflow-y-auto border p-3 rounded bg-gray-50">
        {messages.map((msg) => (
          <Message key={msg.id} text={msg.text} />
        ))}
      </div>

      {/* Input Field */}
      <div className="flex items-center border rounded-lg overflow-hidden mt-3">
        <textarea
          className="w-full p-3 border-none outline-none resize-none"
          placeholder="Enter your text..."
          rows={2}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSend} className="p-3 bg-blue-500 text-white">
          ➤
        </button>
      </div>
    </div>
  );
}

