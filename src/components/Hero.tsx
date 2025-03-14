
import React from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rich-black to-dark-charcoal -z-10"></div>
      
      {/* Animated dots background */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_#9b87f5_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-start max-w-3xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <p className="text-neon-purple font-mono text-sm md:text-base mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            Hi there, I'm
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            Aryan <span className="text-neon-purple">.</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl text-gray-300 font-light mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
            Passionate about technology, web development, AI/ML, and more.
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-xl mb-10 opacity-0 animate-fadeIn" style={{ animationDelay: "1s" }}>
            I build innovative digital experiences that combine cutting-edge technology with
            user-centered design principles to create solutions that matter.
          </p>
          
          <div className="flex items-center space-x-5 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: "1.2s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
          </div>
          
          <div className="flex space-x-4 opacity-0 animate-fadeIn" style={{ animationDelay: "1.4s" }}>
            <a 
              href="#projects" 
              className="btn btn-primary"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-neon-purple transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
