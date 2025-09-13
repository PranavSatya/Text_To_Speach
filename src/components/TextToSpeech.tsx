import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { VoiceTag } from "./VoiceTag";
import { Play, Square, Download } from "lucide-react";
import { SUPPORTED_LANGUAGES, getLanguageFlag, getLanguageName } from "./languages";

export function TextToSpeech() {
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [selectedVoice, setSelectedVoice] = useState("samara");
  const [isPlaying, setIsPlaying] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [userText, setUserText] = useState("");
  const [speechStatus, setSpeechStatus] = useState<'idle' | 'loading' | 'playing' | 'error'>('idle');
  const audioRef = useRef<HTMLAudioElement>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);



  const getSampleText = (langCode: string) => {
    const sampleTexts: { [key: string]: string } = {
      "en-US": `In the ancient land of Eldoria, where skies shimmered and forests whispered secrets to the wind, lived a dragon named Zephyros. [sarcastically] Not the "burn it all down" kind... [giggles] but he was gentle, wise, with eyes like old stars. [whispers] Even the birds fell silent when he passed.`,
      "es-ES": `En la antigua tierra de Eldoria, donde los cielos brillaban y los bosques susurraban secretos al viento, vivía un dragón llamado Zephyros. No era del tipo que quema todo... sino gentil y sabio, con ojos como estrellas antiguas.`,
      "fr-FR": `Dans l'ancienne terre d'Eldoria, où les cieux scintillaient et les forêts murmuraient des secrets au vent, vivait un dragon nommé Zephyros. Il était doux et sage, avec des yeux comme de vieilles étoiles.`,
      "de-DE": `Im alten Land Eldoria, wo Himmel schimmerten und Wälder Geheimnisse dem Wind zuflüsterten, lebte ein Drache namens Zephyros. Er war sanft und weise, mit Augen wie alte Sterne.`,
      "it-IT": `Nell'antica terra di Eldoria, dove i cieli luccicavano e le foreste sussurravano segreti al vento, viveva un drago di nome Zephyros. Era gentile e saggio, con occhi come stelle antiche.`,
      "pt-BR": `Na antiga terra de Eldoria, onde os céus brilhavam e as florestas sussurravam segredos ao vento, vivia um dragão chamado Zephyros. Era gentil e sábio, com olhos como estrelas antigas.`,
      "ru-RU": `В древней земле Эльдория, где небеса мерцали, а леса шептали секреты ветру, жил дракон по имени Зефирос. Он был добрым и мудрым, с глазами как древние звезды.`,
      "ja-JP": `空がきらめき、森が風に秘密をささやく古代の土地エルドリアに、ゼフィロスという名の竜が住んでいました。彼は優しく賢く、古い星のような目をしていました。`,
      "ko-KR": `하늘이 반짝이고 숲이 바람에게 비밀을 속삭이는 고대 땅 엘도리아에 제피로스라는 용이 살고 있었습니다. 그는 부드럽고 현명했으며, 오래된 별 같은 눈을 가지고 있었습니다.`,
      "zh-CN": `在古老的艾尔多利亚大地上，天空闪闪发光，森林向风儿诉说着秘密，住着一条名叫泽菲罗斯的龙。他温和而智慧，有着像古老星辰般的眼睛。`,
      "ar-SA": `في أرض إلدوريا القديمة، حيث تتلألأ السماء وتهمس الغابات بالأسرار للرياح، عاش تنين يُدعى زفيروس. كان لطيفًا وحكيمًا، بعيون كالنجوم القديمة.`,
      "hi-IN": `प्राचीन भूमि एल्डोरिया में, जहाँ आकाश चमकता था और जंगल हवा को रहस्य फुसफुसाते थे, ज़ेफायरोस नाम का एक ड्रैगन रहता था। वह कोमल और बुद्धिमान था, पुराने सितारों जैसी आँखों के साथ।`,
    };
    
    return sampleTexts[langCode] || sampleTexts["en-US"];
  };

  const sampleText = getSampleText(selectedLanguage);
  
  // Initialize userText with sample text when language changes
  const currentText = userText || sampleText;

  const voiceTags = [
    { name: "Samara", description: "Narrate a story", color: "#E8F4FD", id: "samara", voiceIndex: 0, pitch: 1.1, rate: 0.9 },
    { name: "Squidz", description: "Recount an old story", color: "#FFF2E8", id: "squidz", voiceIndex: 1, pitch: 0.8, rate: 0.8 },
    { name: "2 speakers", description: "Create a dialogue", color: "#F0E8FF", id: "speakers", voiceIndex: 2, pitch: 1.0, rate: 1.0 },
    { name: "Jessica", description: "Provide customer support", color: "#E8FFF4", id: "jessica", voiceIndex: 3, pitch: 1.2, rate: 0.95 },
    { name: "Announcer", description: "Voiceover a game", color: "#FFE8F4", id: "announcer", voiceIndex: 4, pitch: 0.9, rate: 1.1 },
    { name: "Sargeant", description: "Play a drill sargeant", color: "#F4E8FF", id: "sargeant", voiceIndex: 5, pitch: 0.7, rate: 1.2 },
  ];

  // Load available voices and clean up on unmount
  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      setAvailableVoices(voices);
    };

    // Load voices immediately
    loadVoices();
    
    // Also load when voices change (some browsers load them asynchronously)
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
      setIsPlaying(false);
    };
  }, []);

  // Update userText when language changes (if empty) and stop speech
  useEffect(() => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    }
    // Only update text if user hasn't typed anything
    if (!userText.trim()) {
      setUserText(sampleText);
    }
  }, [selectedLanguage, sampleText]);

  // Initialize userText on mount
  useEffect(() => {
    if (!userText) {
      setUserText(sampleText);
    }
  }, []);

  // Initialize voices and handle voice changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = speechSynthesis.getVoices();
        setAvailableVoices(voices);
        console.log('Loaded', voices.length, 'voices');
      };

      // Load voices immediately
      loadVoices();

      // Set up voice change listener
      speechSynthesis.onvoiceschanged = loadVoices;

      return () => {
        // Clean up
        speechSynthesis.onvoiceschanged = null;
      };
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Enter to play
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (currentText.trim()) {
          handlePlay();
        }
      }
      // Escape to stop
      if (e.key === 'Escape' && isPlaying) {
        e.preventDefault();
        handleStop();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentText, isPlaying]);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window && (speechSynthesis.speaking || speechSynthesis.pending)) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  const handleLanguageChange = (value: string) => {
    console.log('Language changing from', selectedLanguage, 'to', value);
    setSelectedLanguage(value);
  };

  const handleStop = () => {
    try {
      if (speechSynthesis.speaking || speechSynthesis.pending) {
        speechSynthesis.cancel();
      }
      setIsPlaying(false);
      setSpeechStatus('idle');
      utteranceRef.current = null;
      console.log('Speech synthesis stopped');
    } catch (error) {
      console.error('Error stopping speech synthesis:', error);
      setIsPlaying(false);
      setSpeechStatus('idle');
      utteranceRef.current = null;
    }
  };

  const handlePlay = async () => {
    if (isPlaying) {
      handleStop();
      return;
    }

    // Validate text content
    if (!currentText || currentText.trim().length === 0) {
      console.warn('No text to speak');
      return;
    }

    // Check browser support
    if (!('speechSynthesis' in window)) {
      console.error('Speech synthesis not supported in this browser');
      alert('Text-to-speech is not supported in your browser. Please try a different browser.');
      return;
    }

    try {
      // Cancel any existing speech first
      if (speechSynthesis.speaking || speechSynthesis.pending) {
        speechSynthesis.cancel();
        // Wait for cancellation to complete
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Ensure voices are loaded
      let voices = speechSynthesis.getVoices();
      if (voices.length === 0) {
        // Wait for voices to load
        await new Promise<void>((resolve) => {
          let attempts = 0;
          const checkVoices = () => {
            voices = speechSynthesis.getVoices();
            attempts++;
            if (voices.length > 0 || attempts > 10) {
              resolve();
            } else {
              setTimeout(checkVoices, 100);
            }
          };
          
          if ('onvoiceschanged' in speechSynthesis) {
            speechSynthesis.onvoiceschanged = () => {
              voices = speechSynthesis.getVoices();
              if (voices.length > 0) {
                resolve();
              }
            };
          }
          
          checkVoices();
        });
      }

      setAvailableVoices(voices);

      // Create utterance with clean text
      const cleanText = currentText.trim().substring(0, 4096); // Limit text length
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utteranceRef.current = utterance;
      
      // Get selected voice configuration
      const selectedVoiceConfig = voiceTags.find(v => v.id === selectedVoice);
      
      // Set language based on selection
      utterance.lang = selectedLanguage || 'en-US';
      
      // Find appropriate voice for the selected language
      if (voices.length > 0) {
        const languageCode = selectedLanguage.split('-')[0];
        const exactLanguageVoices = voices.filter(v => 
          v.lang && v.lang.toLowerCase() === selectedLanguage.toLowerCase()
        );
        const generalLanguageVoices = voices.filter(v => 
          v.lang && v.lang.toLowerCase().startsWith(languageCode.toLowerCase())
        );
        
        const languageVoices = exactLanguageVoices.length > 0 ? exactLanguageVoices : generalLanguageVoices;
        
        if (languageVoices.length > 0) {
          if (selectedVoiceConfig && selectedVoiceConfig.voiceIndex !== undefined) {
            const voiceIndex = selectedVoiceConfig.voiceIndex % languageVoices.length;
            utterance.voice = languageVoices[voiceIndex];
          } else {
            utterance.voice = languageVoices[0];
          }
        } else if (voices.length > 0) {
          // Fallback to first available voice
          utterance.voice = voices[0];
        }
      }
      
      // Set safe rate and pitch values
      if (selectedVoiceConfig) {
        utterance.rate = Math.max(0.1, Math.min(2, selectedVoiceConfig.rate || 1));
        utterance.pitch = Math.max(0, Math.min(2, selectedVoiceConfig.pitch || 1));
      } else {
        utterance.rate = 0.9;
        utterance.pitch = 1;
      }
      
      // Set volume
      utterance.volume = 0.8;
      
      utterance.onstart = () => {
        console.log('Speech started successfully');
        setIsPlaying(true);
        setSpeechStatus('playing');
      };
      
      utterance.onend = () => {
        console.log('Speech ended');
        setIsPlaying(false);
        setSpeechStatus('idle');
        utteranceRef.current = null;
      };
      
      utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
        const errorMsg = `Speech synthesis error: ${event.error || 'Unknown error'}`;
        console.error(errorMsg, event);
        setIsPlaying(false);
        setSpeechStatus('error');
        utteranceRef.current = null;
        
        // Show user-friendly error message
        if (event.error === 'network') {
          alert('Speech synthesis failed due to network issues. Please check your internet connection.');
        } else if (event.error === 'synthesis-failed') {
          alert('Speech synthesis failed. Please try a different voice or text.');
        } else if (event.error === 'language-not-supported') {
          alert('The selected language is not supported. Please try a different language.');
        } else {
          alert('Speech synthesis failed. Please try again.');
        }
      };
      
      utterance.onpause = () => {
        console.log('Speech paused');
      };
      
      utterance.onresume = () => {
        console.log('Speech resumed');
      };
      
      // Attempt to speak
      console.log('Starting speech synthesis...', {
        text: cleanText.substring(0, 50) + '...',
        language: utterance.lang,
        voice: utterance.voice?.name || 'default',
        rate: utterance.rate,
        pitch: utterance.pitch
      });
      
      setSpeechStatus('loading');
      speechSynthesis.speak(utterance);
      
      // Fallback timeout to prevent hanging
      setTimeout(() => {
        if (utteranceRef.current && !speechSynthesis.speaking && speechStatus === 'loading') {
          console.warn('Speech synthesis appears to have failed silently');
          setIsPlaying(false);
          setSpeechStatus('error');
          utteranceRef.current = null;
        }
      }, 2000);

    } catch (error) {
      console.error('Error in speech synthesis:', error);
      setIsPlaying(false);
      setSpeechStatus('error');
      utteranceRef.current = null;
      alert('An error occurred while trying to speak the text. Please try again.');
    }
  };

  const handleDownload = () => {
    // Simulate download functionality
    const blob = new Blob([currentText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'speech.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserText(e.target.value);
    // Stop current speech if playing
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      setSpeechStatus('idle');
    }
  };

  const handleClearText = () => {
    setUserText("");
  };

  const handleUseSample = () => {
    setUserText(sampleText);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm border p-8 mb-6">
        <div className="relative">
          <Textarea
            value={currentText}
            onChange={handleTextChange}
            placeholder={`Type your text here or use the sample text in ${SUPPORTED_LANGUAGES.find(l => l.code === selectedLanguage)?.name}...`}
            className="min-h-[120px] text-base leading-relaxed resize-none border-0 focus:ring-0 bg-transparent pr-20"
          />
          
          {/* Text controls */}
          <div className="absolute top-2 right-2 flex gap-1">
            {userText !== sampleText && (
              <Button
                size="sm"
                variant="ghost"
                onClick={handleUseSample}
                className="text-xs px-2 py-1 h-6"
                title="Use sample text"
              >
                Sample
              </Button>
            )}
            {userText && (
              <Button
                size="sm"
                variant="ghost"
                onClick={handleClearText}
                className="text-xs px-2 py-1 h-6"
                title="Clear text"
              >
                Clear
              </Button>
            )}
          </div>
        </div>
        
        {/* Text statistics */}
        <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
          <div className="flex gap-4">
            <span>{currentText.split(' ').filter(word => word.length > 0).length} words</span>
            <span>{currentText.length} characters</span>
            <span>~{Math.ceil(currentText.split(' ').filter(word => word.length > 0).length / 150)} min read</span>
          </div>
          {currentText.length > 1000 && (
            <div className="text-amber-600 text-xs">
              ⚠ Long text may be truncated by browser
            </div>
          )}
        </div>
        
        <div className="mt-6 flex flex-wrap gap-3">
          {voiceTags.map((voice) => (
            <VoiceTag
              key={voice.id}
              name={voice.name}
              description={voice.description}
              color={voice.color}
              isSelected={selectedVoice === voice.id}
              onClick={() => setSelectedVoice(voice.id)}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {getLanguageFlag(selectedLanguage)}
              </span>
              <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-48 border border-gray-300 bg-white">
                  <SelectValue placeholder="Select language..." />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto" sideOffset={4}>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={handlePlay}
              disabled={!currentText.trim() || speechStatus === 'loading'}
              className="bg-black text-white hover:bg-gray-800 rounded-full px-6 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {speechStatus === 'loading' ? (
                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <Square className="w-4 h-4 mr-2" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              {speechStatus === 'loading' ? "LOADING..." : isPlaying ? "STOP" : "PLAY"}
            </Button>
            
            <Button
              onClick={handleDownload}
              disabled={!currentText.trim()}
              variant="outline"
              className="rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              size="icon"
              title="Download text"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-blue-50 rounded-xl p-4 mt-6 max-w-4xl mx-auto">
        <h4 className="text-sm font-medium mb-2 text-blue-900">💡 Quick Tips</h4>
        <div className="grid md:grid-cols-2 gap-3 text-xs text-blue-800">
          <div>• Use <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Ctrl/Cmd + Enter</kbd> to play</div>
          <div>• Press <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Esc</kbd> to stop playback</div>
          <div>• Different voices work better with different languages</div>
          <div>• Add pauses with commas and periods for natural speech</div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-500 mb-4">Powered by Eleven v3 (alpha)</p>
        <div className="mb-4">
          <span className="text-sm text-gray-600">EXPERIENCE THE FULL AUDIO AI PLATFORM</span>
        </div>
        <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
          SIGN UP
        </Button>
      </div>

      <audio ref={audioRef} />
    </div>
  );
}