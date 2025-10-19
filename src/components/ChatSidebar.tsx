import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings, Plus, ChevronsLeft } from "lucide-react";

const ChatSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const chatSessions = [
    "Something....",
    "Something....",
    "Something....",
    "Something....",
    "Something....",
  ];

  return (
    <aside
      className={`bg-muted border-r border-border flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-80"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Button
          className={`w-full flex items-center justify-center ${
            collapsed ? "px-2 py-2" : ""
          }`}
          variant="elevate"
          aria-label="New chat"
        >
          <Plus className="w-4 h-4 mr-2" />
          {!collapsed && "New Chat"}
        </Button>
      </div>

      {/* Chat Sessions */}
      <div className="flex-1 p-4 overflow-y-auto">
        {!collapsed && (
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Recent Chats
          </h3>
        )}
        <div className="space-y-2">
          {chatSessions.map((session, index) => (
            <button
              key={index}
              className={`w-full text-left p-3 rounded-lg hover:bg-background transition-colors duration-200 text-foreground flex items-center ${
                collapsed ? "justify-center" : ""
              }`}
              title={session}
            >
              <div className="flex items-center space-x-2">
                <Settings className="w-4 h-4 text-muted-foreground" />
                {!collapsed && <span className="text-sm truncate">{session}</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className={`flex-1 justify-start ${collapsed ? "justify-center" : ""}`}
            aria-label="Settings"
          >
            <Settings className="w-4 h-4 mr-2" />
            {!collapsed && "Settings"}
          </Button>

          {/* Toggle button */}
          <button
            onClick={() => setCollapsed((s) => !s)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="p-2 rounded-md hover:bg-background/50 transition-colors"
            title={collapsed ? "Expand" : "Collapse"}
          >
            <ChevronsLeft
              className={`w-4 h-4 transform transition-transform duration-200 ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ChatSidebar;