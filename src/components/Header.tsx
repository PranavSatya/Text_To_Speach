import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-lg font-semibold">ElevenLabs</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-1">
              <span className="text-sm">Creative Platform</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => alert('Navigate to Text to Speech')}>Text to Speech</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Voice Cloning')}>Voice Cloning</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Music Generation')}>Music Generation</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Dubbing Studio')}>Dubbing Studio</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-1">
              <span className="text-sm">Agents Platform</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => alert('Navigate to AI Agents')}>AI Agents</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Conversational AI')}>Conversational AI</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Voice Assistants')}>Voice Assistants</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Customer Support')}>Customer Support</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-1">
              <span className="text-sm">Developers</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => alert('Navigate to API Documentation')}>API Documentation</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to SDKs & Libraries')}>SDKs & Libraries</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Code Examples')}>Code Examples</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Developer Tools')}>Developer Tools</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-1">
              <span className="text-sm">Resources</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => alert('Navigate to Help Center')}>Help Center</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Tutorials')}>Tutorials</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Blog')}>Blog</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert('Navigate to Community')}>Community</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => alert('Navigate to Enterprise')}
        >
          Enterprise
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => alert('Navigate to Pricing')}
        >
          Pricing
        </Button>
      </nav>

      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => alert('Login functionality - redirect to login page')}
        >
          Log in
        </Button>
        <Button 
          size="sm" 
          className="bg-black text-white hover:bg-gray-800"
          onClick={() => alert('Sign up functionality - redirect to sign up page')}
        >
          Sign up
        </Button>
      </div>
    </header>
  );
}