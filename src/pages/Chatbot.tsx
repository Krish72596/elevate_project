import Navigation from "@/components/Navigation";
import ChatSidebar from "@/components/ChatSidebar";
import ChatInterface from "@/components/ChatInterface";

const Chatbot = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex h-[calc(100vh-4rem)]">
        <ChatSidebar />
        <ChatInterface />
      </div>
    </div>
  );
};

export default Chatbot;