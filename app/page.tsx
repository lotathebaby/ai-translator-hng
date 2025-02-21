"use client";

import ChatInput from "../components/ChatInput";

export default function HomePage() {
  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">AI-Powered Text Processing</h1>
      <ChatInput />
    </div>
  );
}


  