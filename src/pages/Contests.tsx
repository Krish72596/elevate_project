import { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Trophy } from "lucide-react";

interface Contest {
  id: number;
  status: string;
  name: string;
  time: string;
  date: string;
  description: string;
  prize: string;
  platform: string;
  difficulty: string;
}

const Contests = () => {
  const [selectedContest, setSelectedContest] = useState<Contest | null>(null);

  const contests: Contest[] = [
    {
      id: 1,
      status: "UPCOMING",
      name: "CodeForces Round #892",
      time: "9:00-12:00",
      date: "5/5/2024-23/23/2024",
      description: "A competitive programming contest featuring algorithmic challenges. Test your problem-solving skills against participants worldwide.",
      prize: "$500 for top 3 winners",
      platform: "CodeForces",
      difficulty: "Intermediate to Advanced",
    },
    {
      id: 2,
      status: "LIVE",
      name: "LeetCode Weekly Contest",
      time: "9:00-12:00",
      date: "5/5/2024-23/23/2024",
      description: "Weekly algorithmic programming competition. Solve challenging problems and improve your coding skills.",
      prize: "LeetCode coins and ranking",
      platform: "LeetCode",
      difficulty: "All levels",
    },
    {
      id: 3,
      status: "UPCOMING",
      name: "HackerRank Hackathon",
      time: "9:00-12:00",
      date: "5/5/2024-23/23/2024",
      description: "Build innovative solutions to real-world problems. Team up with other developers and create something amazing.",
      prize: "$1000 and internship opportunities",
      platform: "HackerRank",
      difficulty: "Intermediate",
    },
    {
      id: 4,
      status: "UPCOMING",
      name: "AtCoder Beginner Contest",
      time: "9:00-12:00",
      date: "5/5/2024-23/23/2024",
      description: "Perfect for beginners in competitive programming. Learn algorithmic problem solving in a friendly environment.",
      prize: "Rating points",
      platform: "AtCoder",
      difficulty: "Beginner to Intermediate",
    },
    {
      id: 5,
      status: "ENDED",
      name: "Google Code Jam Qualification",
      time: "9:00-12:00",
      date: "5/5/2024-23/23/2024",
      description: "Qualification round for the prestigious Google Code Jam competition. Solve complex algorithmic challenges.",
      prize: "Advance to next round",
      platform: "Google",
      difficulty: "Advanced",
    },
    {
      id: 6,
      status: "UPCOMING",
      name: "DevPost AI Hackathon",
      time: "9:00-12:00",
      date: "5/5/2024-23/23/2024",
      description: "Create AI-powered applications and tools. Showcase your machine learning and AI development skills.",
      prize: "$2000 and mentorship",
      platform: "DevPost",
      difficulty: "Intermediate to Advanced",
    },
    {
      id: 7,
      status: "UPCOMING",
      name: "TopCoder SRM",
      time: "9:00-12:00",
      date: "5/5/2024-23/23/2024",
      description: "Single Round Match featuring algorithmic challenges. Compete in real-time problem solving.",
      prize: "Cash prizes and rating",
      platform: "TopCoder",
      difficulty: "Advanced",
    },
    {
      id: 8,
      status: "LIVE",
      name: "Kaggle Data Science Competition",
      time: "9:00-12:00",
      date: "5/5/2024-23/23/2024",
      description: "Analyze datasets and build predictive models. Perfect for data science enthusiasts and machine learning practitioners.",
      prize: "$5000 prize pool",
      platform: "Kaggle",
      difficulty: "All levels",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE":
        return "text-red-400";
      case "UPCOMING":
        return "text-primary";
      case "ENDED":
        return "text-muted-foreground";
      default:
        return "text-primary";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-gradient-start via-hero-overlay to-hero-gradient-end">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            Contests & Hackathons
          </h1>
          
          {contests.map((contest) => (
            <div
              key={contest.id}
              onClick={() => setSelectedContest(contest)}
              className="bg-gradient-to-r from-secondary/40 to-secondary/20 backdrop-blur-sm border border-primary/20 rounded-lg p-4 cursor-pointer hover:scale-[1.02] transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4 flex-1 min-w-[200px]">
                  <span className={`font-bold text-sm ${getStatusColor(contest.status)}`}>
                    {contest.status}
                  </span>
                  <span className="text-foreground font-medium">
                    {contest.name}
                  </span>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-primary font-medium">
                    {contest.time}
                  </span>
                  <span className="text-muted-foreground">
                    {contest.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedContest} onOpenChange={() => setSelectedContest(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={getStatusColor(selectedContest?.status || "")}>
                {selectedContest?.status}
              </Badge>
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <DialogTitle className="text-2xl">{selectedContest?.name}</DialogTitle>
            <DialogDescription className="text-base mt-4">
              {selectedContest?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold">Time:</span>
              <span>{selectedContest?.time}</span>
            </div>
            
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-semibold">Date:</span>
              <span>{selectedContest?.date}</span>
            </div>
            
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-foreground">Platform:</span>
                <span className="text-muted-foreground">{selectedContest?.platform}</span>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="font-semibold text-foreground">Difficulty:</span>
                <span className="text-muted-foreground">{selectedContest?.difficulty}</span>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="font-semibold text-foreground">Prize:</span>
                <span className="text-primary">{selectedContest?.prize}</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contests;
