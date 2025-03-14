
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  // Set up the document title and meta description for SEO
  useEffect(() => {
    document.title = "Aryan - Web Developer, AI Enthusiast & Tech Explorer";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Aryan is a passionate web developer and technology enthusiast focusing on web development, AI/ML, and modern tech stacks.');
    
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Aryan",
      "url": window.location.origin,
      "jobTitle": "Web Developer & Tech Enthusiast",
      "knowsAbout": ["Web Development", "Artificial Intelligence", "Machine Learning", "Cloud Computing"],
      "description": "Passionate about technology, web development, AI/ML, and more."
    };
    
    let scriptTag = document.querySelector('#structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
    
  }, []);

  return (
    <div className="bg-rich-black min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
