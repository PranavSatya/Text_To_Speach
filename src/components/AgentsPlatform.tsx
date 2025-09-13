import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Play, MessageSquare, Phone, Settings } from "lucide-react";

export function AgentsPlatform() {
  const agents = [
    {
      name: "Customer Support Agent",
      description: "Handle customer inquiries with natural conversation",
      status: "Active",
      conversations: 1420,
      satisfaction: "96%",
      color: "bg-green-100"
    },
    {
      name: "Sales Assistant",
      description: "Qualify leads and schedule appointments",
      status: "Active", 
      conversations: 856,
      satisfaction: "94%",
      color: "bg-blue-100"
    },
    {
      name: "Product Demo Agent",
      description: "Provide interactive product demonstrations",
      status: "Training",
      conversations: 234,
      satisfaction: "92%",
      color: "bg-orange-100"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl mb-4">AI Agents Platform</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Deploy conversational AI agents that can handle customer interactions, 
          sales calls, and support inquiries with human-like voice quality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {agents.map((agent, index) => (
          <Card key={index} className="relative">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{agent.name}</CardTitle>
                <Badge variant={agent.status === "Active" ? "default" : "secondary"}>
                  {agent.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{agent.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Conversations</span>
                  <span className="font-medium">{agent.conversations}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Satisfaction</span>
                  <span className="font-medium text-green-600">{agent.satisfaction}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => alert(`Testing ${agent.name} agent`)}
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Test
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => alert(`Configure ${agent.name} settings`)}
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-8">
        <h3 className="text-xl mb-4">Create New Agent</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Agent Purpose</label>
            <select className="w-full p-3 border rounded-lg">
              <option>Customer Support</option>
              <option>Sales & Lead Generation</option>
              <option>Appointment Scheduling</option>
              <option>Product Information</option>
              <option>Technical Support</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Language</label>
            <select className="w-full p-3 border rounded-lg mb-3">
              <option value="en-US">🇺🇸 English (US)</option>
              <option value="en-GB">🇬🇧 English (UK)</option>
              <option value="es-ES">🇪🇸 Spanish</option>
              <option value="fr-FR">🇫🇷 French</option>
              <option value="de-DE">🇩🇪 German</option>
              <option value="it-IT">🇮🇹 Italian</option>
              <option value="pt-BR">🇧🇷 Portuguese</option>
              <option value="ja-JP">🇯🇵 Japanese</option>
              <option value="zh-CN">🇨🇳 Chinese</option>
              <option value="ar-SA">🇸🇦 Arabic</option>
            </select>
            <label className="block text-sm font-medium mb-2">Voice Style</label>
            <select className="w-full p-3 border rounded-lg">
              <option>Professional & Friendly</option>
              <option>Casual & Conversational</option>
              <option>Formal & Authoritative</option>
              <option>Warm & Empathetic</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Agent Instructions</label>
            <textarea 
              className="w-full p-3 border rounded-lg h-24"
              placeholder="Describe how your agent should behave, what information it has access to, and how it should handle different scenarios..."
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <Button 
            className="bg-black text-white hover:bg-gray-800"
            onClick={() => alert('Creating new AI agent...')}
          >
            Create Agent
          </Button>
          <Button 
            variant="outline"
            onClick={() => alert('Opening template library...')}
          >
            Import from Template
          </Button>
        </div>
      </div>
    </div>
  );
}