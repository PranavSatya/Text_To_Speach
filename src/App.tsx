import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TabNavigation } from "./components/TabNavigation";
import { TextToSpeech } from "./components/TextToSpeech";
import { AgentsPlatform } from "./components/AgentsPlatform";
import { MusicGeneration } from "./components/MusicGeneration";
import { SpeechToText } from "./components/SpeechToText";
import { DubbingStudio } from "./components/DubbingStudio";
import { VoiceCloning } from "./components/VoiceCloning";
import { ElevenReader } from "./components/ElevenReader";

export default function App() {
  const [activeTab, setActiveTab] = useState("text-to-speech");

  const renderTabContent = () => {
    switch (activeTab) {
      case "text-to-speech":
        return <TextToSpeech />;
      case "agents":
        return <AgentsPlatform />;
      case "music":
        return <MusicGeneration />;
      case "speech-to-text":
        return <SpeechToText />;
      case "dubbing":
        return <DubbingStudio />;
      case "voice-cloning":
        return <VoiceCloning />;
      case "eleveneader":
        return <ElevenReader />;
      default:
        return <TextToSpeech />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header />
      <HeroSection />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="py-8">
        {renderTabContent()}
      </main>
    </div>
  );
}