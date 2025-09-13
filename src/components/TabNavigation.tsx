import { useState } from "react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: "text-to-speech", label: "TEXT TO SPEECH", icon: "🎤" },
    { id: "agents", label: "AGENTS", icon: "🤖" },
    { id: "music", label: "MUSIC", icon: "🎵" },
    { id: "speech-to-text", label: "SPEECH TO TEXT", icon: "📝" },
    { id: "dubbing", label: "DUBBING", icon: "🎬" },
    { id: "voice-cloning", label: "VOICE CLONING", icon: "👥" },
    { id: "eleveneader", label: "ELEVENEADER", icon: "📖" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 px-6 py-8 border-b">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${
            activeTab === tab.id
              ? "bg-black text-white"
              : "text-gray-600 hover:text-black"
          }`}
        >
          <span className="text-xs">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}