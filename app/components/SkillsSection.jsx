"use client"
import { useState } from 'react';
import { FiX, FiCode } from 'react-icons/fi';
import skills from "@/_data/skill";

export default function SkillsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const skillCategories = Object.keys(skills);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="mt-0">
        <div 
          className="bg-light-blue p-4 rounded-lg shadow-lg border-2 border-primary-blue cursor-pointer transition-all duration-300 hover:shadow-xl"
          onClick={toggleModal}
        >
          <div className="flex items-center justify-between">
            <h3 className="heading-tertiary text-primary-blue">
              Technologies & Skills
            </h3>
            <div className="text-primary-blue">
              <FiCode size={20} />
            </div>
          </div>
          
          <div className="mt-2">
            <div className="flex flex-wrap gap-1.5">
              {skillCategories.map((category, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs bg-primary-blue text-white rounded-full ui-text"
                >
                  {category.replace('_', ' & ')}
                </span>
              ))}
            </div>
            <p className="text-blue-gray text-xs mt-2 body-text">
              Click to explore all technologies
            </p>
          </div>
        </div>
      </div>

      {/* Simple Skills Overview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-light-blue rounded-lg shadow-lg max-w-lg w-full max-h-[75vh] overflow-hidden border border-primary-blue border-opacity-20">
            {/* Simple Header */}
            <div className="flex items-center justify-between p-4 border-b border-medium-blue border-opacity-30">
              <h3 className="heading-tertiary text-primary-blue">Technologies & Skills</h3>
              <button
                onClick={toggleModal}
                className="text-blue-gray hover:text-primary-blue transition-colors p-1"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Flowing Skills Content */}
            <div className="p-4 overflow-y-auto max-h-[calc(75vh-70px)] space-y-4">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  {/* Category Title */}
                  <h4 className="text-sm font-medium text-primary-blue mb-2 ui-text">
                    {category.replace('_', ' & ')}
                  </h4>
                  
                  {/* Skills Flow */}
                  <div className="flex flex-wrap gap-2 mb-1">
                    {skills[category].map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-tag px-2.5 py-1 bg-primary-blue bg-opacity-10 text-blue-gray rounded text-xs body-text border border-primary-blue border-opacity-15"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                  
                  {/* Subtle Divider */}
                  {index < skillCategories.length - 1 && (
                    <div className="h-px bg-medium-blue bg-opacity-20 mt-3"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}