import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Mic, Upload, Play, Download, User, Settings } from "lucide-react";
import { useState } from "react";

export function VoiceCloning() {
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);

  const clonedVoices = [
    {
      id: "1",
      name: "John's Voice",
      description: "Professional narrator voice",
      samplesCount: 15,
      quality: "High",
      status: "Ready",
      trainedAt: "2 days ago"
    },
    {
      id: "2",
      name: "Sarah's Voice", 
      description: "Customer service representative",
      samplesCount: 12,
      quality: "Medium",
      status: "Training",
      trainedAt: "In progress"
    },
    {
      id: "3",
      name: "Mike's Voice",
      description: "Podcast host voice",
      samplesCount: 20,
      quality: "Very High",
      status: "Ready",
      trainedAt: "1 week ago"
    }
  ];

  const sampleTexts = [
    "Hello, this is a test of the voice cloning system.",
    "The quick brown fox jumps over the lazy dog.",
    "Thank you for choosing our service. How can I help you today?",
    "Welcome to our company. We're excited to work with you.",
    "Please hold while I transfer your call to the appropriate department."
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl mb-4">Voice Cloning</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create AI voice clones that capture unique vocal characteristics, 
          speech patterns, and emotional nuances for personalized voice generation.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Create New Voice Clone */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Create New Voice Clone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Voice Name</label>
              <input 
                type="text" 
                placeholder="Enter a name for this voice"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <input 
                type="text" 
                placeholder="Describe the voice characteristics"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Language</label>
              <select className="w-full p-3 border rounded-lg mb-4">
                <option value="en-US">🇺🇸 English (US)</option>
                <option value="es-ES">🇪🇸 Spanish</option>
                <option value="fr-FR">🇫🇷 French</option>
                <option value="de-DE">🇩🇪 German</option>
                <option value="it-IT">🇮🇹 Italian</option>
                <option value="pt-BR">🇧🇷 Portuguese</option>
                <option value="ja-JP">🇯🇵 Japanese</option>
                <option value="zh-CN">🇨🇳 Chinese</option>
                <option value="ar-SA">🇸🇦 Arabic</option>
              </select>
              
              <label className="block text-sm font-medium mb-3">Upload Audio Samples</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Upload 5-20 audio samples (30s - 5min each)
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  WAV, MP3 recommended for best quality
                </p>
                <Button 
                  size="sm"
                  onClick={() => alert('Opening file browser for voice samples...')}
                >
                  Choose Files
                </Button>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Tips for Best Results:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Use clear, high-quality recordings</li>
                <li>• Include varied emotional expressions</li>
                <li>• Record in a quiet environment</li>
                <li>• Avoid background music or noise</li>
              </ul>
            </div>

            <Button 
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={() => alert('Starting voice training process...')}
            >
              Start Voice Training
            </Button>
          </CardContent>
        </Card>

        {/* Test Existing Voice */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Test Voice Clone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Select Voice</label>
              <select 
                className="w-full p-3 border rounded-lg"
                value={selectedVoice || ""}
                onChange={(e) => setSelectedVoice(e.target.value)}
              >
                <option value="">Choose a voice...</option>
                {clonedVoices.filter(v => v.status === "Ready").map((voice) => (
                  <option key={voice.id} value={voice.id}>
                    {voice.name} - {voice.description}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Test Text</label>
              <textarea 
                className="w-full p-3 border rounded-lg h-24"
                placeholder="Enter text to generate with the selected voice..."
                defaultValue={sampleTexts[0]}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Quick Test Phrases</label>
              <div className="grid grid-cols-1 gap-2">
                {sampleTexts.slice(1).map((text, index) => (
                  <button
                    key={index}
                    className="text-left p-2 text-sm border rounded hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
                      if (textarea) textarea.value = text;
                    }}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                className="flex-1" 
                disabled={!selectedVoice}
              >
                <Play className="w-4 h-4 mr-2" />
                Generate & Play
              </Button>
              <Button variant="outline" disabled={!selectedVoice}>
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cloned Voices Library */}
      <Card>
        <CardHeader>
          <CardTitle>Your Voice Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clonedVoices.map((voice) => (
              <div key={voice.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{voice.name}</h4>
                      <p className="text-xs text-gray-600">{voice.description}</p>
                    </div>
                  </div>
                  <Badge variant={voice.status === "Ready" ? "default" : "secondary"}>
                    {voice.status}
                  </Badge>
                </div>

                <div className="space-y-2 text-xs text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Samples:</span>
                    <span>{voice.samplesCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality:</span>
                    <span className={
                      voice.quality === "Very High" ? "text-green-600" :
                      voice.quality === "High" ? "text-blue-600" : "text-yellow-600"
                    }>
                      {voice.quality}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trained:</span>
                    <span>{voice.trainedAt}</span>
                  </div>
                </div>

                {voice.status === "Training" && (
                  <div className="mb-3">
                    <Progress value={65} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">Training in progress...</p>
                  </div>
                )}

                <div className="flex gap-2">
                  {voice.status === "Ready" && (
                    <>
                      <Button size="sm" className="flex-1">
                        <Play className="w-3 h-3 mr-1" />
                        Test
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="w-3 h-3" />
                      </Button>
                    </>
                  )}
                  {voice.status === "Training" && (
                    <Button size="sm" variant="outline" className="flex-1" disabled>
                      Training...
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}