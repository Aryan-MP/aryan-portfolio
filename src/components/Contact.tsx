
import React, { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-rich-black">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaborations?
            I'd love to hear from you! Feel free to reach out using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-neon-purple/10 p-3 rounded-md mr-4">
                  <Mail className="text-neon-purple" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:aryan@example.com" className="text-gray-300 hover:text-neon-purple transition-colors">
                    aryan@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-neon-purple/10 p-3 rounded-md mr-4">
                  <MapPin className="text-neon-purple" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-300">
                    San Francisco, California
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-neon-purple/10 p-3 rounded-md mr-4">
                  <Phone className="text-neon-purple" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <a href="tel:+14155551234" className="text-gray-300 hover:text-neon-purple transition-colors">
                    +1 (415) 555-1234
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-charcoal rounded-lg p-6 neon-border">
              <h4 className="text-white font-medium mb-4">Connect with me</h4>
              <p className="text-gray-300 mb-4">
                Whether you have a question, a project proposal, or just want to say hello,
                I'm always open to discussing new opportunities and ideas.
              </p>
              <p className="text-gray-300">
                I typically respond to all inquiries within 24-48 hours.
              </p>
            </div>
          </div>
          
          <div className="opacity-0 animate-slideInRight" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubmit} className="bg-dark-charcoal rounded-lg p-6 neon-border">
              {submitSuccess && (
                <div className="bg-green-400/10 border border-green-400/30 text-green-400 rounded-md p-4 mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-400/10 border border-red-400/30 text-red-400 rounded-md p-4 mb-6">
                  {submitError}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-rich-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-rich-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-rich-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-rich-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
