import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = () => {
  const socialMediaLinks = {
    twitter: 'https://twitter.com/Shreyasc01',
    instagram: 'https://instagram.com/shreyasc_01',
    linkedin: 'https://www.linkedin.com/in/shreyaschandolkar/',
    github: 'https://github.com/Chandolkar001',
    resume: 'https://drive.google.com/file/d/1m-lkY-a3qVblVINE4C7kaw92T_Dfh_DT/view?usp=sharing'
  };

  const getIconComponent = (platform) => {
    switch (platform) {
      case 'twitter':
        return <FaTwitter />;
      case 'instagram':
        return <FaInstagram />;
      case 'linkedin':
        return <FaLinkedin />;
      case 'github':
        return <FaGithub />;
      case 'resume':
        return <div>Resume</div>
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-40">
      <div className="p-4 md:p-8 bg-gray-200 rounded-md shadow-md">
        <h4 className="text-2xl md:text-3xl font-bold mb-4">Follow Me on:</h4>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {Object.keys(socialMediaLinks).map((platform) => (
            <a
              key={platform}
              href={socialMediaLinks[platform]}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 text-center"
            >
              {getIconComponent(platform)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
