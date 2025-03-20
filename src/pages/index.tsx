import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import blogPosts from '../data/blogPosts';
import BlogCard from '../components/BlogCard';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-gray-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Toni Ramchandani</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                AI Researcher, Automation Expert, and Author empowering businesses through innovation.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#contact" className="btn btn-primary text-lg">
                  Contact Me
                </a>
                <a href="#speaking" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary text-lg">
                  Speaking Engagements
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <Image 
                  src="/images/profile/ToniNewPic.jpg"
                  alt="Toni Ramchandani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-background-light dark:bg-background-dark">
        <div className="container-custom section-padding">
          <div className="text-center mb-10">
            <h2 className="section-title">
              About <span className="text-primary">Me</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-4 text-lg">
                I am Toni Ramchandani, an accomplished AI Researcher and Engineer specializing in cutting-edge artificial intelligence 
                solutions and automation technologies that transform how businesses operate.
              </p>
              <p className="mb-4 text-lg">
                As a Corporate Trainer, I empower teams with the knowledge and skills needed to harness 
                the power of AI and automation in their respective fields.
              </p>
              <p className="mb-4 text-lg">
                I'm the author of "<span className="font-semibold">A Generative Journey to AI</span>", a comprehensive 
                guide to understanding and implementing generative AI technologies in practical applications.
              </p>
              <p className="mb-6 text-lg">
                I'm passionate about sharing knowledge through conference speaking, workshops, and my published 
                research on AI innovations and automation frameworks.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Background</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>AI Research & Engineering</li>
                  <li>Automation Solutions Architecture</li>
                  <li>Corporate Training & Workshop Facilitation</li>
                  <li>Technical Author & Conference Speaker</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="card hover-lift p-5">
                  <h3 className="text-xl font-bold mb-2 text-accent">AI</h3>
                  <p>Research & Development</p>
                </div>
                <div className="card hover-lift p-5">
                  <h3 className="text-xl font-bold mb-2 text-accent">Automation</h3>
                  <p>Expert Solutions</p>
                </div>
                <div className="card hover-lift p-5">
                  <h3 className="text-xl font-bold mb-2 text-accent">Training</h3>
                  <p>Corporate Workshops</p>
                </div>
                <div className="card hover-lift p-5">
                  <h3 className="text-xl font-bold mb-2 text-accent">Author</h3>
                  <p>Tech Publications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section id="book" className="bg-white dark:bg-gray-800">
        <div className="container-custom section-padding">
          <div className="text-center mb-10">
            <h2 className="section-title">
              My <span className="text-primary">Book</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="h-80 w-60 mx-auto rounded-md shadow-lg overflow-hidden">
                <Image 
                  src="/images/book/BookFront.jpg"
                  alt="A Generative Journey to AI Book Cover"
                  width={240}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">"A Generative Journey to AI"</h3>
              <p className="mb-4 text-lg">
                A comprehensive exploration of generative AI technologies, their applications, 
                and how they're revolutionizing industries across the globe.
              </p>
              <p className="mb-6 text-lg">
                This book bridges the gap between theoretical AI concepts and practical implementation, 
                providing readers with actionable insights to leverage AI in their professional environments.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.amazon.in/Generative-Journey-Mastering-foundations-generative/dp/9365890845/" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-background-light dark:bg-background-dark">
        <div className="container-custom section-padding">
          <div className="text-center mb-10">
            <h2 className="section-title">
              My <span className="text-primary">Expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* AI */}
            <div className="card hover-lift p-6">
              <div className="text-accent text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">AI Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Computer Vision
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Generative AI
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Neural Networks
                </li>
              </ul>
            </div>
            
            {/* Automation */}
            <div className="card hover-lift p-6">
              <div className="text-accent text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Automation</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  RPA Solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Workflow Automation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Process Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Intelligent Automation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  CI/CD Pipelines
                </li>
              </ul>
            </div>
            
            {/* Development */}
            <div className="card hover-lift p-6">
              <div className="text-accent text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Python
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  TensorFlow/PyTorch
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Cloud Technologies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  API Integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Big Data Technologies
                </li>
              </ul>
            </div>
            
            {/* Training */}
            <div className="card hover-lift p-6">
              <div className="text-accent text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Training & Speaking</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Corporate Workshops
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Conference Presentations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Technical Writing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Online Courses
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  AI Ethics Training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="bg-white dark:bg-gray-800">
        <div className="container-custom section-padding">
          <div className="text-center mb-10">
            <h2 className="section-title">
              Conference <span className="text-primary">Speaking</span>
            </h2>
          </div>
          <div className="mb-10">
            <p className="text-lg text-center mb-8">
              Engaging audiences worldwide with insights on AI, automation, and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card hover-lift p-6">
              <div className="text-accent text-xl font-bold mb-2">2023</div>
              <h3 className="text-xl font-bold mb-3">AI Summit London</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">Keynote speech on "The Future of Generative AI in Enterprise"</p>
              <a href="#" className="text-primary hover:underline inline-flex items-center">
                View Talk
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="card hover-lift p-6">
              <div className="text-accent text-xl font-bold mb-2">2022</div>
              <h3 className="text-xl font-bold mb-3">TechCon New York</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">Panel discussion on "Ethical Considerations in AI Development"</p>
              <a href="#" className="text-primary hover:underline inline-flex items-center">
                View Panel
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="card hover-lift p-6">
              <div className="text-accent text-xl font-bold mb-2">2022</div>
              <h3 className="text-xl font-bold mb-3">Automation World Paris</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">Workshop on "Implementing End-to-End Automation Solutions"</p>
              <a href="#" className="text-primary hover:underline inline-flex items-center">
                View Workshop
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="btn btn-primary">View All Speaking Engagements</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-background-light dark:bg-background-dark">
        <div className="container-custom section-padding">
          <div className="text-center mb-10">
            <h2 className="section-title">
              My <span className="text-primary">Projects</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="card hover-lift">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                {/* Replace with project image */}
                <p className="text-gray-600">AI Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise AI Assistant</h3>
                <p className="mb-4">
                  A custom NLP-based AI assistant designed for enterprise knowledge management and automation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">NLP</span>
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">TensorFlow</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="card hover-lift">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                {/* Replace with project image */}
                <p className="text-gray-600">Automation Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Financial Process Automation</h3>
                <p className="mb-4">
                  End-to-end automation solution for financial reporting and compliance processes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">RPA</span>
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">Process Optimization</span>
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">Cloud</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="card hover-lift">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                {/* Replace with project image */}
                <p className="text-gray-600">ML Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Predictive Maintenance System</h3>
                <p className="mb-4">
                  ML-powered system for predictive maintenance in manufacturing settings.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">IoT</span>
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">Data Analytics</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="bg-white dark:bg-gray-800">
        <div className="container-custom section-padding">
          <div className="text-center mb-10">
            <h2 className="section-title">
              My <span className="text-primary">Blog</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="btn btn-primary">View All Blog Posts</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-background-light dark:bg-background-dark">
        <div className="container-custom section-padding">
          <div className="text-center mb-10">
            <h2 className="section-title">
              Get In <span className="text-primary">Touch</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="mb-6">
                For speaking engagements, consulting opportunities, or just to connect, feel free to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-20 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:toni@aiexpert.com" className="text-primary">toni@aiexpert.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-20 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p>Your City, Country</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white p-3 rounded-full hover:bg-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-400 text-white p-3 rounded-full hover:bg-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home; 