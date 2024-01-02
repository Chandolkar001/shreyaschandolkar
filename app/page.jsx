"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64">
        <Image
          src="/shreyas.jpg"
          alt="Shreyas"
          width={250}
          height={250}
          className="rounded-full"
          sizes="100vw"
          loading="lazy"
          style={{
            width: "100%",
            height: "auto"
          }} />
      </div>
      <div className="text-center mt-4 text-lg md:text-2xl font-bold text-blue-500">
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
        />
      </div>
    </main>
  );
};

export default Home;
