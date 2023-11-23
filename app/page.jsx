"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh', 
  };

  const imageContainerStyle = {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '250px',
    height: '250px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  const textContainerStyle = {
    fontSize: '2em',
    marginTop: '20px', 
  };

  const textstyle ={
    color: '#3498db', // Change text color
    fontWeight: 'bold', // Add bold font weight
  }

  return (
    <main>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <Image src="/shreyas.jpg" alt="Shreyas" width={250} height={250} style={imageStyle} />
        </div>
        <div style={textContainerStyle}>
          <TypeAnimation
            sequence={[
              "Software Developer",
              1000,
              "Robotics Developer",
              1000,
              "DevOps",
              1000,
            ]}
            speed={20}
            repeat={Infinity}
            style={textstyle}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
