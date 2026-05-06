"use client";

import { useState } from "react";

export default function Home() {
  // Создаем массив из 10 вкладок с использованием обратных кавычек
  const tabs = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Вкладка ${i + 1}`,
    content: `${i + 1}.Славик лох позже.`
  }));

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main className="min-h-screen bg-[#3d2b24] text-gray-200 p-6 md:p-20 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center text-white/90">Мой проект</h1>

        <div className="flex flex-col md:flex-row gap-8 bg-black/20 p-4 rounded-3xl backdrop-blur-sm">
          {/* Список вкладок слева */}
          <div className="grid grid-cols-2 md:flex md:flex-col gap-2 w-full md:w-64">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  activeTab.id === tab.id
                    ? "bg-white/10 text-white shadow-lg ring-1 ring-white/20"
                    : "hover:bg-white/5 text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Контент справа */}
          <div className="flex-1 bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {activeTab.title}
            </h2>
            <div className="h-[1px] w-full bg-white/10 mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-lg">
              {activeTab.content}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
