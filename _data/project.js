const projects = [
    {
        title: 'DVBS2 toolkit (SIH 2023 winner)',
        href: 'https://github.com/Chandolkar001/DVBS2-toolkit',
        languages: [
            'Django Rest framework',
            'ReactJS',
            'Pyshark',
            'FFMPEG',
            'Scapy'
        ],
        desc: [
            "Analyzing packetized and continuous streams from TS and GSE protocol.",
            "Retrieving Multiplexed media from the Transport Stream (TS).",
            "Extracting IP payload fron General Stream encapsulation (GSE).",
            "A dashboard that accepts raw data inputs in multiple formats and extensions.",
            "Real-time capture analysis from network interfaces.",
            "An user-interface to display the extracted data in readable format.",
        ]
    },
    {
        title: 'WallStreet',
        href: 'https://github.com/Chandolkar001/DalalStreet',
        languages: [
            'Django Rest framework',
            'ReactJS',
            'Redis',
            'Celery',
            'Docker'
        ],
        desc: [
            "An online stock market simulator, designed to provide an immersive learning and practice environment for aspiring traders.",
            "The simulator enables users to experience the dynamics of real-world stock trading without risking actual capital.", 
            "Gain hands-on experience by creating virtual portfolios, executing trades, and monitoring the performance of your investments in a simulated market environment."
        ]
    },
    {
        title: 'Online Judge',
        href: 'https://github.com/Chandolkar001/Online-Judge',
        languages: [
            'Python',
            'Django',
            'Linux',
            'HTML',
            'CSS',
        ],
        desc: [
            "An online web platform which hosts programming contests with questions on topics like Data Structures and Algorithms and tests the paricipants code against test cases and checks the correctness of the code.",
            "It runs code in a sandboxed environment and limits the system calls of the code and applies time and memory limits to it according to the given constraints.",
        ]
    },
    {
        title: 'Music4Mood',
        href: 'https://github.com/Chandolkar001/Music4Mood',
        languages: [
            'FastAPI',
            'React-Native',
            'Axios',
            'TFLite'
        ],
        desc: [
            "An ML emotion based Music recommender system app.",
            "The app detects facial emotions using CNN and accordingly recommends a playlist of songs based on the detected emotions."
        ]
    },
    {
        title: 'Elephant Robot (Robocon 2023)',
        href: 'https://github.com/Chandolkar001/Elephant-Robot_Robocon23',
        languages: [
            'Python',
            'ROS',
            'ESP32',
            'Fusion360',
            'Rasberry Pi',
        ],
        desc: [
            "A complete autonomous robot system, for performing pre-defined tasks for theme based national competition, DD Robocon 2023.",
            "The tasks assigned to the robot included, ring stack picking and loading, ring shooting, and autonomous locomotion maneuver."
        ]
    },
    {
        title: 'Motor-Controller-HAT',
        href: 'https://github.com/Chandolkar001/Motor-Controller-HAT',
        languages: [
            'C',
            'ESP32',
            'Atmega328p',
        ],
        desc: [
            "A HAT for the Cytron MDDA10 motor driver, utilizing the Atmega328p microcontroller to solve the ESP32 pin count issue.",
            "Multiple HATs communicate with a single ESP32 board using I2C protocol, thus forming a master-slave network."
        ]
    },

];

export default projects;