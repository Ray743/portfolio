import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I'm Raynold's Portfolio Assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply || "🤖 Sorry, I didn’t catch that." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const botMessage = { sender: "bot", text: "🤖 Something went wrong. Try again!" };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-[#39FF14] text-white p-4 rounded-full shadow-lg shadow-[#39FF14]/50 z-50"
        >
          <MessageCircle size={24} className="text-white" />
        </motion.button>
      )}

      {/* Chatbot Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 w-80 max-w-full sm:max-w-xs bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 flex flex-col overflow-hidden shadow-2xl z-50"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-[#0f0f0f] px-4 py-3 border-b border-gray-700">
              <span className="font-semibold text-sm text-[#39FF14]">
                Raynold's Assistant
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-red-400"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto text-sm space-y-3 max-h-80 sm:max-h-96 custom-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-2.5 rounded-xl max-w-[85%] break-words ${msg.sender === "bot"
                      ? "bg-gray-800/70 text-gray-200 self-start"
                      : "bg-[#39FF14]/90 text-black self-end ml-auto shadow-sm"
                    }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {/* Optional loading indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gray-800/50 text-gray-200 p-2.5 rounded-xl self-start max-w-[50%]"
                >
                  🤖 Thinking...
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="flex border-t border-gray-700">
              <input
                type="text"
                className="flex-1 p-2 text-sm bg-transparent text-gray-200 placeholder-gray-500 outline-none"
                placeholder="Ask me something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="px-4 bg-[#39FF14] text-black hover:bg-[#32cc10] transition"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
