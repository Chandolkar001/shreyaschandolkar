"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import about from "@/_data/about";
import SkillsSection from "./components/SkillsSection";

const Home = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 mt-0 flex-grow">
      {/* Name - Full Width */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl text-primary-blue mb-3 name-title text-center lg:text-left">{about.name}</h1>
      </div>

      {/* Mobile: Profile Picture First */}
      <div className="lg:hidden flex flex-col items-center space-y-4 mb-8">
        {/* Profile Picture */}
        <div className="rounded-lg overflow-hidden w-64 h-64 shadow-lg">
          <Image
            src={about.profileImage}
            alt={about.name}
            width={300}
            height={300}
            className="object-cover w-full h-full"
            sizes="256px"
            priority
          />
        </div>
        
        {/* Animation */}
        <div className="text-center text-xl text-medium-blue ui-text">
          <TypeAnimation
            sequence={about.typeAnimation.flatMap(text => [text, 1000])}
            speed={20}
            repeat={Infinity}
          />
        </div>
        
        {/* Skills Section */}
        <div className="w-full">
          <SkillsSection />
        </div>
      </div>

      {/* Desktop: Content and Image Side by Side */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-6 items-start mb-8">
        {/* Left Column - Content */}
        <div className="lg:col-span-3">
          <div className="bg-light-blue p-6 rounded-lg shadow-lg border-2 border-primary-blue max-w-2xl">
            <div className="text-blue-gray leading-relaxed text-justify whitespace-pre-line body-text">
              {about.about.split('FlytBase').map((flytBasePart, flytBaseIndex) => (
                flytBaseIndex === 0 ? 
                  flytBasePart.split('PICT').map((pictPart, pictIndex) => (
                    pictIndex === 0 ? pictPart :
                    <span key={`pict-${pictIndex}`}>
                      <a 
                        href={about.externalLinks.pict} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-primary-blue hover:text-dark-blue underline"
                      >
                        PICT
                      </a>
                      {pictPart}
                    </span>
                  ))
                : 
                <span key={flytBaseIndex}>
                  <a 
                    href={about.externalLinks.flytbase} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-primary-blue hover:text-dark-blue underline"
                  >
                    FlytBase
                  </a>
                  {flytBasePart.split('PICT').map((pictPart, pictIndex) => (
                    pictIndex === 0 ? pictPart :
                    <span key={`pict-${pictIndex}`}>
                      <a 
                        href={about.externalLinks.pict} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-primary-blue hover:text-dark-blue underline"
                      >
                        PICT
                      </a>
                      {pictPart}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Profile Picture, Animation, and Skills */}
        <div className="lg:col-span-2 flex flex-col items-start space-y-4">
          {/* Profile Picture */}
          <div className="rounded-lg overflow-hidden w-full h-64 shadow-lg">
            <Image
              src={about.profileImage}
              alt={about.name}
              width={300}
              height={300}
              className="object-cover w-full h-full"
              sizes="300px"
              priority
            />
          </div>
          
          {/* Animation */}
          <div className="text-left text-xl md:text-2xl text-medium-blue ui-text">
            <TypeAnimation
              sequence={about.typeAnimation.flatMap(text => [text, 1000])}
              speed={20}
              repeat={Infinity}
            />
          </div>
          
          {/* Skills Section */}
          <div className="w-full">
            <SkillsSection />
          </div>
        </div>
      </div>

      {/* Mobile: Content Below */}
      <div className="lg:hidden">
        <div className="bg-light-blue p-6 rounded-lg shadow-lg border-2 border-primary-blue">
          <div className="text-blue-gray leading-relaxed text-justify whitespace-pre-line body-text">
            {about.about.split('FlytBase').map((flytBasePart, flytBaseIndex) => (
              flytBaseIndex === 0 ? 
                flytBasePart.split('PICT').map((pictPart, pictIndex) => (
                  pictIndex === 0 ? pictPart :
                  <span key={`pict-${pictIndex}`}>
                    <a 
                      href="https://www.pict.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-primary-blue hover:text-dark-blue underline"
                    >
                      PICT
                    </a>
                    {pictPart}
                  </span>
                ))
              : 
              <span key={flytBaseIndex}>
                <a 
                  href="https://www.flytbase.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-primary-blue hover:text-dark-blue underline"
                >
                  FlytBase
                </a>
                {flytBasePart.split('PICT').map((pictPart, pictIndex) => (
                  pictIndex === 0 ? pictPart :
                  <span key={`pict-${pictIndex}`}>
                    <a 
                      href="https://www.pict.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-primary-blue hover:text-dark-blue underline"
                    >
                      PICT
                    </a>
                    {pictPart}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
