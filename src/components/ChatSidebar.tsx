import { Button } from "@/components/ui/button";
import { Settings, Plus } from "lucide-react";

const ChatSidebar = () => {
  const chatSessions = [
    "Something....",
    "Something....",
    "Something....",
    "Something....",
    "Something....",
  ];

  return (
    <aside className="w-80 bg-muted border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Button className="w-full" variant="elevate">
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
      </div>

      {/* Chat Sessions */}
      <div className="flex-1 p-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Recent Chats</h3>
        <div className="space-y-2">
          {chatSessions.map((session, index) => (
            <button
              key={index}
              className="w-full text-left p-3 rounded-lg hover:bg-background transition-colors duration-200 text-foreground"
            >
              <div className="flex items-center space-x-2">
                <Settings className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm truncate">{session}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </aside>
  );
};

export default ChatSidebar;