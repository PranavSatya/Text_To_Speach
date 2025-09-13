import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Play, Download, Music, AudioWaveform } from "lucide-react";
import { useState } from "react";

export function MusicGeneration() {
  const [selectedGenre, setSelectedGenre] = useState("ambient");
  const [prompt, setPrompt] = useState("A peaceful ambient track with soft piano melodies and nature sounds");

  const genres = [
    { id: "ambient", name: "Ambient", color: "bg-blue-100 text-blue-800" },
    { id: "cinematic", name: "Cinematic", color: "bg-purple-100 text-purple-800" },
    { id: "electronic", name: "Electronic", color: "bg-green-100 text-green-800" },
    { id: "classical", name: "Classical", color: "bg-yellow-100 text-yellow-800" },
    { id: "jazz", name: "Jazz", color: "bg-orange-100 text-orange-800" },
    { id: "rock", name: "Rock", color: "bg-red-100 text-red-800" },
  ];

  const recentTracks = [
    { name: "Sunset Memories", duration: "2:34", genre: "Ambient", status: "Generated" },
    { name: "Epic Journey", duration: "3:21", genre: "Cinematic", status: "Processing" },
    { name: "Digital Dreams", duration: "2:56", genre: "Electronic", status: "Generated" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl mb-4">AI Music Generation</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create original music tracks using AI. Describe your vision and generate 
          professional-quality music for any project or mood.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-8 mb-6">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3">Music Description</label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the music you want to create. Be specific about instruments, mood, tempo, and style..."
            className="min-h-[100px]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-3">Genre</label>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
                className={`px-3 py-2 rounded-full text-sm transition-all ${
                  selectedGenre === genre.id
                    ? "ring-2 ring-blue-500 " + genre.color
                    : genre.color + " hover:scale-105"
                }`}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <select className="w-full p-3 border rounded-lg">
              <option>30 seconds</option>
              <option>1 minute</option>
              <option>2 minutes</option>
              <option>3 minutes</option>
              <option>5 minutes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Tempo</label>
            <select className="w-full p-3 border rounded-lg">
              <option>Slow (60-80 BPM)</option>
              <option>Medium (80-120 BPM)</option>
              <option>Fast (120-160 BPM)</option>
              <option>Very Fast (160+ BPM)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Mood</label>
            <select className="w-full p-3 border rounded-lg">
              <option>Peaceful</option>
              <option>Energetic</option>
              <option>Dramatic</option>
              <option>Mysterious</option>
              <option>Uplifting</option>
              <option>Melancholic</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
            className="bg-black text-white hover:bg-gray-800"
            onClick={() => alert(`Generating ${selectedGenre} music...`)}
          >
            <Music className="w-4 h-4 mr-2" />
            Generate Music
          </Button>
          <Button 
            variant="outline"
            onClick={() => alert('Opening advanced music generation options...')}
          >
            <AudioWaveform className="w-4 h-4 mr-2" />
            Advanced Options
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Generations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTracks.map((track, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{track.name}</p>
                    <p className="text-sm text-gray-600">{track.genre} • {track.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={track.status === "Generated" ? "default" : "secondary"}>
                    {track.status}
                  </Badge>
                  {track.status === "Generated" && (
                    <div className="flex gap-1">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => alert(`Playing ${track.name}...`)}
                      >
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => alert(`Downloading ${track.name}...`)}
                      >
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