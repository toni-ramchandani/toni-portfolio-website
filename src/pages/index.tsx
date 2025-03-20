import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

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
                  src="/images/profile/ToniNewPic.jpeg"
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
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              Toni Ramchandani is an accomplished AI Researcher and Engineer specializing in cutting-edge artificial intelligence solutions and automation technologies that transform how businesses operate. With over a decade of experience in AI and automation, he has helped numerous organizations leverage technology to achieve remarkable efficiency gains and innovation breakthroughs.
            </p>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              He is the author of "A Generative Journey to AI," a comprehensive guide to understanding and implementing generative AI technologies in practical applications. The book has been widely acclaimed for its practical approach and real-world examples.
            </p>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              Beyond his corporate responsibilities, Toni is a passionate advocate for sharing knowledge and learning continuously. He is a sought-after conference speaker, where he shares his insights on the latest trends in AI, ML, QA, DevSecOps, and cloud computing.
            </p>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              As a corporate trainer, he has trained numerous professionals, helping them to upskill and stay ahead in the rapidly evolving tech landscape. His commitment to education is also evident in his work as an author, where he writes about complex technological concepts, making them accessible to a broader audience.
            </p>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              A resident of Pune, Maharashtra, India, Toni's life is not just about technology. He is driven by a deep love for sports, adventure, and innovation. These passions fuel his professional endeavors, giving him the energy and creativity to tackle challenges and inspire those around him. Whether he is exploring new technological solutions or pushing the limits in sports and adventure, Toni approaches every challenge with a can-do attitude and a relentless drive for excellence.
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/toni-ramchandani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center"
              >
                LinkedIn Profile
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://github.com/toni-ramchandani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center"
              >
                GitHub Profile
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96">
              <Image
                src="/images/book/BookFront.jpg"
                alt="A Generative Journey to AI"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">My Book</h2>
              <p className="text-gray-600 dark:text-gray-200 mb-6">
                "A Generative Journey to AI" is a comprehensive guide that demystifies the world of generative AI and provides practical insights for implementing these technologies in real-world applications. The book covers everything from fundamental concepts to advanced implementations, making it an essential resource for both beginners and experienced practitioners.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.amazon.in/Generative-Journey-Mastering-foundations-generative/dp/9365890845/ref=sr_1_1?crid=OE46WMT36AWB&dib=eyJ2IjoiMSJ9.LD7MnXE_JPE_rmsiGjD7ioSpbfh6B_QIA4LjQneLuttbuhtO9zpdDFNr9Ubf-GoMO1yrxzdzasHAa28oMDHyAJLSOVFLr-DWNLU9ViS08dT5ozrwswBEJfYQ4eaIvEbDCap-ftbqdbeN8XWrM81-FluOQ-aAj4gDRRFv8rn8J9zmpwU9D-fFGRBaTTGBM0CYYnO6q88vUyhW5DSdmw46xqR13afk1vyNJNt37c4nOGI.TBMG6VxKjC6V4an_Uk8_yyf3yogfEw8erahcbuWEf4w&dib_tag=se&keywords=a+generative+journey+to+ai&qid=1742467959&sprefix=A+generative+%2Caps%2C577&sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center"
                >
                  Purchase on Amazon
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">AI Research</h3>
              <p className="text-gray-600 dark:text-gray-200">Specialized in generative AI, natural language processing, and machine learning applications for business automation.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Process Automation</h3>
              <p className="text-gray-600 dark:text-gray-200">Expert in developing end-to-end automation solutions using RPA, AI, and custom software development.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Ethical AI</h3>
              <p className="text-gray-600 dark:text-gray-200">Leading expert in ethical AI development, focusing on bias mitigation, transparency, and responsible AI implementation.</p>
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
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Automation Guild 2025</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">Speaker on AI and Test Automation best practices</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Virtual Conference
              </div>
              <div className="mt-4">
                <a 
                  href="https://testguild.com/automation-guild-2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  View Conference
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Automation Guild 2024</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">Presenter on modern automation strategies and AI integration</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Virtual Conference
              </div>
              <div className="mt-4">
                <a 
                  href="https://testguild.com/automation-guild-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  View Conference
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">TestMu Conference 2024</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">Featured speaker on testing and AI integration at LambdaTest's premier testing conference</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Virtual Conference
              </div>
              <div className="mt-4">
                <a 
                  href="https://www.lambdatest.com/testmuconf-2024/toni-ramchandani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  View Conference
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Global Testing Retreat 2024</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">Hands-on Lab (60 Min) - "Vector Databases: Data Management for AI Applications"</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                ATA Conference
              </div>
              <div className="mt-4">
                <a 
                  href="https://gtr.agiletestingalliance.org/toni-r/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  View Conference
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">AI Summit 2023</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">Keynote speaker on "The Future of Generative AI in Business"</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                San Francisco, CA
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="btn btn-primary">View All Speaking Engagements</a>
          </div>
        </div>
      </section>

      {/* Corporate Trainings Section */}
      <section id="trainings" className="bg-background-light dark:bg-background-dark">
        <div className="container-custom section-padding">
          <div className="text-center mb-10">
            <h2 className="section-title">
              Corporate <span className="text-primary">Trainings</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Testing AI Apps - GPT, LLMs, and More</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">Learn to test AI applications like ChatGPT and Meta AI with this comprehensive 12+ hour course. Covers AI/ML basics, vector databases, RAG, and practical testing approaches for PDFs, images, audio, and video.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Recorded Course</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">12+ Hours</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">10+ Modules</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Lifetime access, certificate included</span>
                </div>
                <a
                  href="https://www.thetesttribe.com/courses/testing-ai-apps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center text-sm"
                >
                  View Course Details
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Live Training: Testing AI Apps</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">Interactive live sessions covering the fundamentals and advanced concepts of testing AI applications. Benefit from real-time feedback, hands-on exercises, and personalized guidance.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Live Sessions</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Interactive</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Q&A Included</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Scheduled cohorts with limited seats</span>
                </div>
                <a
                  href="https://www.thetesttribe.com/live-trainings/testing-ai-apps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center text-sm"
                >
                  Check Next Batch
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">AI Bootcamp</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">Intensive bootcamp covering a wide range of AI technologies and testing methodologies. Perfect for organizations looking to upskill their teams on AI testing at scale.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Hands-on</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Enterprise</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Training</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Customizable for corporate teams</span>
                </div>
                <a
                  href="https://www.thetesttribe.com/ai-bootcamp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center text-sm"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Custom Corporate AI Training</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">Tailored training programs designed specifically for your organization's needs. From AI fundamentals to advanced testing methodologies for your specific AI implementations.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Custom</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">On-site/Virtual</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Exclusive</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Curriculum tailored to your needs</span>
                </div>
                <a
                  href="#contact"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center text-sm"
                >
                  Contact For Details
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="#contact" className="btn btn-primary">Inquire About Corporate Training</a>
          </div>
        </div>
      </section>

      {/* Connect With Me Section - Replacing the Blog Section */}
      <section id="connect" className="bg-white dark:bg-gray-800">
        <div className="container-custom section-padding">
          <div className="text-center mb-10">
            <h2 className="section-title">
              Connect <span className="text-primary">With Me</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Medium Blog Card */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-primary mb-4">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Read My Articles</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  I regularly share insights on AI, automation, and technology trends on Medium. Follow me to stay updated with my latest articles and tutorials.
                </p>
                <a
                  href="https://medium.com/@toniramchandani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center"
                >
                  Visit My Medium
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Topmate Card */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-primary mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Book a Session</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  Need personalized guidance or consultation? Book a 1:1 session with me on Topmate for mentorship, career advice, or technical discussion.
                </p>
                <a
                  href="https://topmate.io/toni_ramchandani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center"
                >
                  Book on Topmate
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Buy Me Coffee Card */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-primary mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Support My Work</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  If you find my content valuable and would like to support my work, consider buying me a coffee. Your support helps me create more free resources.
                </p>
                <a
                  href="https://buymeacoffee.com/toniramchandani?l=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center"
                >
                  Buy Me a Coffee
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-200 mb-6">
                I'm always interested in connecting with fellow AI enthusiasts, potential collaborators, and organizations looking to leverage AI and automation technologies. Whether you have a question about my research, want to discuss a potential collaboration, or are interested in speaking engagements, I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:ramchandani.toni@gmail.com" className="text-primary hover:underline">ramchandani.toni@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Pune, India</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const nameInput = document.getElementById('name') as HTMLInputElement;
                const emailInput = document.getElementById('email') as HTMLInputElement;
                const messageInput = document.getElementById('message') as HTMLTextAreaElement;
                
                if (nameInput && emailInput && messageInput) {
                  const subject = `Contact from ${nameInput.value} via Portfolio`;
                  const body = `Name: ${nameInput.value}%0D%0AEmail: ${emailInput.value}%0D%0A%0D%0AMessage:%0D%0A${messageInput.value}`;
                  window.location.href = `mailto:ramchandani.toni@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                }
              }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
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