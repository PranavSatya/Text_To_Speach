import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Upload, Mic, FileAudio, Download, Play } from "lucide-react";
import { useState, useRef } from "react";

export function SpeechToText() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const languages = [
    { code: "en-US", name: "English (US)", flag: "🇺🇸" },
    { code: "en-GB", name: "English (UK)", flag: "🇬🇧" },
    { code: "es-ES", name: "Spanish", flag: "🇪🇸" },
    { code: "fr-FR", name: "French", flag: "🇫🇷" },
    { code: "de-DE", name: "German", flag: "🇩🇪" },
    { code: "it-IT", name: "Italian", flag: "🇮🇹" },
    { code: "pt-BR", name: "Portuguese", flag: "🇧🇷" },
    { code: "ru-RU", name: "Russian", flag: "🇷🇺" },
    { code: "ja-JP", name: "Japanese", flag: "🇯🇵" },
    { code: "ko-KR", name: "Korean", flag: "🇰🇷" },
    { code: "zh-CN", name: "Chinese", flag: "🇨🇳" },
    { code: "ar-SA", name: "Arabic", flag: "🇸🇦" },
    { code: "hi-IN", name: "Hindi", flag: "🇮🇳" },
    { code: "tr-TR", name: "Turkish", flag: "🇹🇷" },
    { code: "pl-PL", name: "Polish", flag: "🇵🇱" },
    { code: "nl-NL", name: "Dutch", flag: "🇳🇱" },
    { code: "sv-SE", name: "Swedish", flag: "🇸🇪" },
    { code: "da-DK", name: "Danish", flag: "🇩🇰" },
    { code: "no-NO", name: "Norwegian", flag: "🇳🇴" },
    { code: "fi-FI", name: "Finnish", flag: "🇫🇮" },
  ];

  const sampleTranscript = "Hello, this is a sample transcription of your audio content. The AI has processed your speech and converted it to text with high accuracy, including proper punctuation and formatting.";

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Simulate transcription
      setTimeout(() => {
        setTranscript(sampleTranscript);
      }, 2000);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      // Simulate transcription
      setTimeout(() => {
        setTranscript(sampleTranscript);
      }, 1000);
    } else {
      setIsRecording(true);
      setTranscript("");
    }
  };

  const recentFiles = [
    { name: "Meeting_Recording_2024.mp3", duration: "45:23", status: "Completed", accuracy: "97%" },
    { name: "Interview_Audio.wav", duration: "32:15", status: "Processing", accuracy: "-" },
    { name: "Podcast_Episode_12.mp3", duration: "1:23:45", status: "Completed", accuracy: "95%" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl mb-4">Speech to Text</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Convert audio files and live speech to accurate text transcriptions. 
          Supports multiple languages and file formats with high precision.
        </p>
        
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Language:</label>
            <span className="text-lg">
              {languages.find(lang => lang.code === selectedLanguage)?.flag}
            </span>
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Upload File */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Audio File
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <FileAudio className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">
                  {selectedFile ? selectedFile.name : "Drop your audio file here or click to browse"}
                </p>
                <p className="text-sm text-gray-500">
                  Supports MP3, WAV, M4A, FLAC (Max 100MB)
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={handleFileUpload}
              />
              <Button 
                className="w-full" 
                disabled={!selectedFile}
                variant={selectedFile ? "default" : "outline"}
                onClick={() => alert('Starting transcription...')}
              >
                Start Transcription
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Live Recording */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="w-5 h-5" />
              Live Recording
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-8">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  isRecording ? "bg-red-100 animate-pulse" : "bg-gray-100"
                }`}>
                  <Mic className={`w-8 h-8 ${isRecording ? "text-red-600" : "text-gray-400"}`} />
                </div>
                <p className="text-gray-600 mb-2">
                  {isRecording ? "Recording in progress..." : "Click to start recording"}
                </p>
                <p className="text-sm text-gray-500">
                  Real-time speech to text conversion
                </p>
              </div>
              <Button 
                onClick={toggleRecording}
                className={`w-full ${isRecording ? "bg-red-600 hover:bg-red-700" : ""}`}
              >
                {isRecording ? "Stop Recording" : "Start Recording"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transcription Result */}
      {transcript && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Transcription Result</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              className="min-h-[150px] mb-4"
              placeholder="Your transcription will appear here..."
            />
            <div className="flex gap-3">
              <Button onClick={() => alert('Downloading transcription as TXT...')}>
                <Download className="w-4 h-4 mr-2" />
                Download TXT
              </Button>
              <Button 
                variant="outline"
                onClick={() => alert('Downloading transcription as SRT...')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download SRT
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(transcript);
                  alert('Transcription copied to clipboard!');
                }}
              >
                Copy to Clipboard
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Files */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transcriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <FileAudio className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-600">Duration: {file.duration} • Accuracy: {file.accuracy}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={file.status === "Completed" ? "default" : "secondary"}>
                    {file.status}
                  </Badge>
                  {file.status === "Completed" && (
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
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