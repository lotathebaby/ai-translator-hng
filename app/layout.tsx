import "./globals.css";
export const metadata = {
  title: "AI Text Processor",
  description: "Summarize, Translate & Detect Language using AI APIs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <main className="flex flex-col items-center min-h-screen p-4">
          {children}
        </main>
      </body>
    </html>
  );
}

