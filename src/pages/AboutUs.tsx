import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Empowering students with the tools and knowledge to excel in competitive programming and career development.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community where students can learn, grow, and succeed together.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to provide the best learning experience for our users.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality content and resources to help you achieve your goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-gradient-start via-hero-overlay to-hero-gradient-end">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              About Elevate
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              KGP's own cheatcode for competitive programming success
            </p>
          </div>

          {/* Story Section */}
          <Card className="mb-12 bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Elevate was born from a simple idea: every student at IIT Kharagpur deserves access to 
                the best resources for competitive programming and career development.
              </p>
              <p>
                We understand the challenges students face - from keeping track of contests across 
                multiple platforms to finding the right guidance for career preparation. That's why 
                we created Elevate, a one-stop platform that brings everything together.
              </p>
              <p>
                With our AI-powered chatbot, comprehensive contest tracking, and curated resources, 
                we're making it easier than ever for students to excel in their coding journey.
              </p>
            </CardContent>
          </Card>

          {/* Values Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:scale-105 transition-transform duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 backdrop-blur-sm animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Join Our Community</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Start your journey with Elevate today and take your competitive programming 
                skills to the next level.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a 
                  href="/contests" 
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
                >
                  Browse Contests
                </a>
                <a 
                  href="/chatbot" 
                  className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-medium transition-colors"
                >
                  Try Our AI Chatbot
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
