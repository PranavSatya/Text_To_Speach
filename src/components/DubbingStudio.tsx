import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Play, Upload, Globe, Download, Video } from "lucide-react";
import { useState } from "react";

export function DubbingStudio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "1",
      name: "Corporate Training Video",
      originalLanguage: "English",
      targetLanguages: ["Spanish", "French", "German"],
      duration: "12:34",
      status: "Completed",
      progress: 100
    },
    {
      id: "2", 
      name: "Product Demo",
      originalLanguage: "English",
      targetLanguages: ["Mandarin", "Japanese"],
      duration: "5:42",
      status: "Processing",
      progress: 65
    },
    {
      id: "3",
      name: "Educational Content",
      originalLanguage: "English",
      targetLanguages: ["Portuguese", "Italian"],
      duration: "8:23",
      status: "Ready",
      progress: 0
    }
  ];

  const availableLanguages = [
    { code: "en-US", name: "English (US)", flag: "🇺🇸" },
    { code: "en-GB", name: "English (UK)", flag: "🇬🇧" },
    { code: "es-ES", name: "Spanish (Spain)", flag: "🇪🇸" },
    { code: "es-MX", name: "Spanish (Mexico)", flag: "🇲🇽" },
    { code: "fr-FR", name: "French", flag: "🇫🇷" },
    { code: "de-DE", name: "German", flag: "🇩🇪" },
    { code: "it-IT", name: "Italian", flag: "🇮🇹" },
    { code: "pt-BR", name: "Portuguese (Brazil)", flag: "🇧🇷" },
    { code: "pt-PT", name: "Portuguese (Portugal)", flag: "🇵🇹" },
    { code: "ru-RU", name: "Russian", flag: "🇷🇺" },
    { code: "ja-JP", name: "Japanese", flag: "🇯🇵" },
    { code: "ko-KR", name: "Korean", flag: "🇰🇷" },
    { code: "zh-CN", name: "Chinese (Simplified)", flag: "🇨🇳" },
    { code: "zh-TW", name: "Chinese (Traditional)", flag: "🇹🇼" },
    { code: "ar-SA", name: "Arabic", flag: "🇸🇦" },
    { code: "hi-IN", name: "Hindi", flag: "🇮🇳" },
    { code: "tr-TR", name: "Turkish", flag: "🇹🇷" },
    { code: "pl-PL", name: "Polish", flag: "🇵🇱" },
    { code: "nl-NL", name: "Dutch", flag: "🇳🇱" },
    { code: "sv-SE", name: "Swedish", flag: "🇸🇪" },
    { code: "da-DK", name: "Danish", flag: "🇩🇰" },
    { code: "no-NO", name: "Norwegian", flag: "🇳🇴" },
    { code: "fi-FI", name: "Finnish", flag: "🇫🇮" },
    { code: "cs-CZ", name: "Czech", flag: "🇨🇿" },
    { code: "hu-HU", name: "Hungarian", flag: "🇭🇺" },
    { code: "ro-RO", name: "Romanian", flag: "🇷🇴" },
    { code: "bg-BG", name: "Bulgarian", flag: "🇧🇬" },
    { code: "hr-HR", name: "Croatian", flag: "🇭🇷" },
    { code: "sk-SK", name: "Slovak", flag: "🇸🇰" },
    { code: "uk-UA", name: "Ukrainian", flag: "🇺🇦" },
    { code: "he-IL", name: "Hebrew", flag: "🇮🇱" },
    { code: "th-TH", name: "Thai", flag: "🇹🇭" },
    { code: "vi-VN", name: "Vietnamese", flag: "🇻🇳" },
    { code: "id-ID", name: "Indonesian", flag: "🇮🇩" },
    { code: "ms-MY", name: "Malay", flag: "🇲🇾" },
    { code: "tl-PH", name: "Filipino", flag: "🇵🇭" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl mb-4">AI Dubbing Studio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Automatically dub your videos into multiple languages while preserving 
          the original speaker's voice characteristics and emotional delivery.
        </p>
      </div>

      {/* Upload New Video */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Start New Dubbing Project
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Video className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Upload your video file</p>
                <p className="text-sm text-gray-500">MP4, MOV, AVI (Max 500MB)</p>
                <Button 
                  className="mt-4"
                  onClick={() => alert('Opening file browser...')}
                >
                  Choose File
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Original Language</label>
                <select className="w-full p-3 border rounded-lg">
                  {availableLanguages.slice(0, 10).map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Target Languages</label>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto border rounded-lg p-3">
                  {availableLanguages.map((lang) => (
                    <label key={lang.code} className="flex items-center gap-2 p-2 border rounded cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="checkbox" className="rounded" />
                      <span>{lang.flag}</span>
                      <span className="text-xs">{lang.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Button 
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => alert('Starting dubbing process...')}
            >
              Start Dubbing
            </Button>
            <Button 
              variant="outline"
              onClick={() => alert('Opening advanced dubbing settings...')}
            >
              Advanced Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Active Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Dubbing Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{project.name}</h4>
                    <p className="text-sm text-gray-600">
                      {project.originalLanguage} → {project.targetLanguages.join(", ")} • {project.duration}
                    </p>
                  </div>
                  <Badge variant={
                    project.status === "Completed" ? "default" : 
                    project.status === "Processing" ? "secondary" : "outline"
                  }>
                    {project.status}
                  </Badge>
                </div>

                {project.status === "Processing" && (
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Processing</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                )}

                <div className="flex gap-2">
                  {project.status === "Completed" && (
                    <>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => alert(`Previewing ${project.name}...`)}
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => alert(`Downloading all files for ${project.name}...`)}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download All
                      </Button>
                    </>
                  )}
                  {project.status === "Ready" && (
                    <Button 
                      size="sm"
                      onClick={() => alert(`Starting processing for ${project.name}...`)}
                    >
                      Start Processing
                    </Button>
                  )}
                  {project.targetLanguages.map((lang, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}