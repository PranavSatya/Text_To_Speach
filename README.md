# 🎤 Text-to-Speech AI Platform

A comprehensive AI-powered text-to-speech application built with React, TypeScript, and Vite. Features multiple voice AI capabilities including text-to-speech, voice cloning, music generation, and more.

## ✨ Features

- **🎤 Text-to-Speech**: Convert text to natural-sounding speech with multiple voice options
- **🤖 AI Agents Platform**: Deploy conversational AI agents for customer support
- **🎵 Music Generation**: Create original music tracks using AI
- **📝 Speech-to-Text**: Convert audio to text with high accuracy
- **🎬 Dubbing Studio**: Multi-language video dubbing capabilities
- **👥 Voice Cloning**: Clone voices from audio samples
- **📖 ElevenReader**: AI-powered document reading and narration

## 🌍 Multi-Language Support

Supports 20+ languages including English, Spanish, French, German, Italian, Portuguese, Russian, Japanese, Korean, Chinese, Arabic, Hindi, and more.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment
```bash
# Deploy to production
npm run deploy
```

## 🌐 Live Demo

- **Development**: http://localhost:3000
- **Production**: http://localhost:3002

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **UI Components**: Radix UI, Tailwind CSS
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom design system

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── TextToSpeech.tsx
│   ├── AgentsPlatform.tsx
│   ├── MusicGeneration.tsx
│   ├── SpeechToText.tsx
│   ├── DubbingStudio.tsx
│   ├── VoiceCloning.tsx
│   └── ElevenReader.tsx
├── styles/             # Global styles
└── main.tsx           # Application entry point
```

## 🎯 Key Components

### Text-to-Speech
- Multiple voice options (Samara, Squidz, Jessica, etc.)
- Language selection with 20+ supported languages
- Real-time speech synthesis
- Voice customization (pitch, rate, volume)

### AI Agents Platform
- Create and manage conversational AI agents
- Test agent responses
- Monitor conversation metrics
- Template-based agent creation

### Music Generation
- AI-powered music creation
- Genre selection (Ambient, Cinematic, Electronic, etc.)
- Customizable duration, tempo, and mood
- Download generated tracks

## 🚀 Deployment

The project is ready for deployment on various platforms:

- **Vercel**: `cd build && vercel --prod`
- **Netlify**: `cd build && netlify deploy --prod --dir .`
- **GitHub Pages**: Upload build directory to gh-pages branch
- **Firebase**: `firebase deploy`
- **AWS S3**: Upload build contents to S3 bucket

## 📊 Performance

- **Build Size**: ~441 KB (gzipped: ~122 KB)
- **Load Time**: Optimized for fast loading
- **Bundle**: Tree-shaken and minified for production

## 🔧 Configuration

All configuration files are included:
- `vercel.json` - Vercel deployment config
- `netlify.toml` - Netlify configuration
- `_redirects` - SPA routing redirects

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or support, please contact the development team.

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**