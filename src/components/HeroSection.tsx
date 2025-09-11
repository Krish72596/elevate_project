const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-gradient-start via-hero-gradient-end to-hero-overlay"></div>
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(72,187,120,0.2),transparent_50%)] opacity-40"></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-6 font-medium tracking-wide">
            KGP'S own Cheatcode
          </p>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tight">
            Elevate
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your ultimate platform for contests, hackathons, and career growth. 
            Join the community that's shaping the future of tech.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-button-primary hover:bg-button-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
              Get Started
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white hover:text-hero-gradient-start px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/25 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;