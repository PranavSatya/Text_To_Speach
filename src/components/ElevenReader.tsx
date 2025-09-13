import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Play, Pause, Download, BookOpen, FileText, Upload, Volume2 } from "lucide-react";
import { useState } from "react";

export function ElevenReader() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  const documents = [
    {
      id: "1",
      title: "The Art of Technology",
      type: "PDF",
      pages: 45,
      duration: "2h 15m",
      progress: 35,
      lastRead: "2 days ago"
    },
    {
      id: "2", 
      title: "Business Strategy Report",
      type: "DOCX",
      pages: 23,
      duration: "1h 8m", 
      progress: 0,
      lastRead: "Never"
    },
    {
      id: "3",
      title: "Science Fiction Novel",
      type: "EPUB",
      pages: 234,
      duration: "8h 45m",
      progress: 78,
      lastRead: "Yesterday"
    }
  ];

  const sampleContent = `Chapter 1: The Future of AI

  In the rapidly evolving landscape of artificial intelligence, we stand at the threshold of unprecedented possibilities. The convergence of machine learning, natural language processing, and voice synthesis has opened doors that were once thought to be purely the realm of science fiction.

  As we delve deeper into this fascinating world, we discover that the boundaries between human and artificial intelligence are becoming increasingly blurred. The technology that once required enormous computational resources and expertise is now accessible to individuals and small businesses alike.

  This democratization of AI technology represents more than just a technological shift; it represents a fundamental change in how we interact with information, how we create content, and how we communicate with one another.`;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl mb-4">ElevenReader</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transform any text document into high-quality audiobooks with natural AI voices. 
          Read PDFs, Word documents, and eBooks with advanced narration features.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Document Library */}
        <div className="lg:col-span-1">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Your Library
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDocument(doc.id)}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedDocument === doc.id ? "border-blue-500 bg-blue-50" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="font-medium text-sm">{doc.title}</span>
                    </div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex justify-between">
                        <span>{doc.type} • {doc.pages} pages</span>
                        <span>{doc.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Progress: {doc.progress}%</span>
                        <span>{doc.lastRead}</span>
                      </div>
                    </div>
                    {doc.progress > 0 && (
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                        <div 
                          className="bg-blue-600 h-1 rounded-full"
                          style={{ width: `${doc.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-2">Add new document</p>
                <p className="text-xs text-gray-500 mb-3">PDF, DOCX, TXT, EPUB</p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => alert('Opening file browser for document upload...')}
                >
                  Upload File
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reader Interface */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {selectedDocument ? 
                    documents.find(d => d.id === selectedDocument)?.title : 
                    "Select a document to start reading"
                  }
                </CardTitle>
                {selectedDocument && (
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Chapter 1</Badge>
                    <Badge variant="outline">Page 3 of 45</Badge>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {selectedDocument ? (
                <div className="space-y-6">
                  {/* Reading Controls */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={() => {
                          setIsPlaying(!isPlaying);
                          alert(isPlaying ? 'Pausing audio...' : 'Playing audio...');
                        }}
                        className="bg-black text-white hover:bg-gray-800"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4" />
                        <select className="border rounded px-2 py-1 text-sm">
                          <option>Sarah - Narrator</option>
                          <option>David - Professional</option>
                          <option>Emma - Conversational</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Language:</span>
                        <select className="border rounded px-2 py-1 text-sm">
                          <option value="en-US">🇺🇸 English</option>
                          <option value="es-ES">🇪🇸 Spanish</option>
                          <option value="fr-FR">🇫🇷 French</option>
                          <option value="de-DE">🇩🇪 German</option>
                          <option value="it-IT">🇮🇹 Italian</option>
                          <option value="pt-BR">🇧🇷 Portuguese</option>
                        </select>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Speed:</span>
                        <select className="border rounded px-2 py-1 text-sm">
                          <option>0.75x</option>
                          <option>1.0x</option>
                          <option>1.25x</option>
                          <option>1.5x</option>
                        </select>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => alert('Exporting audio file...')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export Audio
                    </Button>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>0:00</span>
                      <span>12:45 / 2:15:30</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>

                  {/* Document Content */}
                  <div className="prose max-w-none">
                    <div className="text-base leading-relaxed p-6 bg-white border rounded-lg">
                      {sampleContent.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between">
                    <Button 
                      variant="outline"
                      onClick={() => alert('Going to previous page...')}
                    >
                      ← Previous Page
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => alert('Going to next page...')}
                    >
                      Next Page →
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg mb-2">No document selected</p>
                  <p className="text-sm">Choose a document from your library or upload a new one to start reading</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Reading Settings */}
          {selectedDocument && (
            <Card>
              <CardHeader>
                <CardTitle>Reading Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Voice Style</label>
                    <select className="w-full p-2 border rounded">
                      <option>Natural Reading</option>
                      <option>Expressive Narration</option>
                      <option>Educational Tone</option>
                      <option>Conversational Style</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Chapter Breaks</label>
                    <select className="w-full p-2 border rounded">
                      <option>Automatic Detection</option>
                      <option>Manual Markers</option>
                      <option>No Breaks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Background Audio</label>
                    <select className="w-full p-2 border rounded">
                      <option>None</option>
                      <option>Soft Ambient</option>
                      <option>Nature Sounds</option>
                      <option>Classical Music</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Export Format</label>
                    <select className="w-full p-2 border rounded">
                      <option>MP3 (High Quality)</option>
                      <option>MP3 (Standard)</option>
                      <option>WAV (Uncompressed)</option>
                      <option>M4A (Apple)</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}