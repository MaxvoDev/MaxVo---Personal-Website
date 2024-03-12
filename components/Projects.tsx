import useProjectsModal from "@/hooks/useProjectsModal";
import Modal from "./Modal";
import { useState } from "react";
import { AiFillBackward } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const projectList = [
    {
        position: '[Side Project] Restore - E-Commerce Store with .NET, React, and Redux',
        time: 'Adelaide - Australia',
        shortDesc: 'Led a four-person team in developing a fully operational E-commerce website using .NET Core, Entity Framework, React, and Redux as part of my Master of IT program in Adelaide.',
        fullDesc: {
            role: 'Software Engineer',
            achievement: '- Enhanced understanding of .NET Core, Entity Framework, React, and Redux.',
            description: `As part of my Master of IT program in Adelaide, I led a four-person team in developing a fully operational E-commerce website using .NET Core, Entity Framework, React, and Redux. 
            This project enhanced my understanding of these technologies and allowed me to refine my skills in configuring development environments, creating APIs with .NET WebAPI, and managing application state using Redux.
            `,
            images: ['restore.png'],
            git: 'https://github.com/MaxvoDev/Restore-Build-an-E-commerce-Store-with-Dotnet-React-Redux'
        }
    },
    {
        position: '[Side Project] Text to Video using AI Voice with GUI',
        time: 'Adelaide - Australia',
        shortDesc: 'Developed a Python application aimed at seamlessly transforming textual input into captivating videos with integrated subtitles using Python, FFMPEG, Tkinter, and text-to-speech.',
        fullDesc: {
            role: 'Software Engineer',
            achievement: '- Demonstrated proficiency in video and audio manipulation using Python and FFMPEG.',
            description: `I developed a Python application aimed at seamlessly transforming textual input into captivating videos with integrated subtitles. Leveraging robust libraries including MoviePy and PyDub for video and audio manipulation, this application offers a user-friendly experience through a Tkinter-based graphical interface. Key features of this project include:
            •   Utilizing an API endpoint to convert textual input into speech.
            •   Skillfully embedding the synthesized speech as subtitles onto a chosen background video.
            •   Offering a straightforward and intuitive graphical interface, ensuring ease of use for all users.
            `,
            images: ['text-to-video.png'],
            git: 'https://github.com/MaxvoDev/Python---Text-to-Video-using-AI-Voice-with-GUI'
        }
    },
    {
        position: '[Side Project] Visa Application Assistance Bot',
        time: 'Adelaide - Australia',
        shortDesc: 'Developed an automated bot to streamline and optimize the visa application process using Python, Selenium, and AWS Lambda.',
        fullDesc: {
            role: 'Software Engineer',
            achievement: '- Streamlined and optimized the visa application process using web automation and cloud-based deployment.',
            description: `•   Developed an automated bot to streamline and optimize the visa application process, utilizing Python, Selenium, and AWS Lambda, demonstrating proficiency in web automation and cloud-based deployment.
            •   Implemented advanced features, including CAPTCHA solving and real-time notifications via Twilio and Telegram, enhancing user experience and application success rates.
            •   Engineered the bot to efficiently handle and process user data, ensuring accuracy and reliability in application submissions, and showcasing strong skills in data handling and user privacy considerations.
            `,
            images: ['visa.png'],
        }
    },
    {
        position: '[Side Project] Agecare Shift Sniper',
        time: 'Adelaide - Australia',
        shortDesc: 'Created a Python program to help healthcare workers grab shifts more easily from a specific website using Python, BeautifulSoup, requests, and threading.',
        fullDesc: {
            role: 'Software Engineer',
            achievement: '- Simplified shift scheduling process for healthcare workers using Python automation.',
            description: `I created a Python program to help healthcare workers grab shifts more easily from a specific website. It uses Python and different tools like BeautifulSoup, requests, and threading to find, sort, and understand shift information on the site.\n
            •   Shift Sniping: Automatically catches shifts that fit certain criteria, like how far they are from home, how long they last, and which days they're on.
            •   Telegram Integration: Sends messages through Telegram to keep users updated on the program's status and any shifts it catches.
            •   Easy Settings: Lets users adjust settings like how far they're willing to travel, how often the program checks for shifts, and areas they don't want to work in.
            •   Saving Data: Keeps track of shift details, past shift lists, and user settings in simple files, so everything stays the same each time the program runs.
            `,
            images: ['agecare.png'],
            git: 'https://github.com/MaxvoDev/BOT-Python-AgeCare-Shift-Sniper'
        }
    },
    {
        position: 'Freelance Work & Travel',
        time: 'Adelaide - Australia, Oct 2022 - Present',
        shortDesc: 'Worked remotely as a developer during my working holiday in Australia, specializing in creating bots, web applications, and occasional smart contracts in Solidity.',
        fullDesc: {
            role: 'Remote Developer',
            achievement: '- Delivered various projects remotely while enjoying the flexibility of remote work during my working holiday in Australia.',
            description: `• Joined freelancer platforms and worked remotely as a developer during my working holiday in Australia.
            • Specialized in creating bots, web applications, and occasional smart contracts in Solidity.
            • Enjoyed the flexibility of remote work, balancing professional commitments with exploration and experiences in Australia.`
        }
    },
    {
        position: 'Web Developer',
        time: 'Starfish Software Company Limited, Viet Nam, Jan 2020 – May 2022',
        shortDesc: 'Collaborated with a team of 10 developers in the design and development of the front-end aspects of an online crime reporting website with future support for multitenancy.',
        fullDesc: {
            role: 'Front-End Developer',
            achievement: '- Optimized the old codebase, resulting in a 20% increase in website speed.',
            description: `• Worked collaboratively with a team of 10 developers in the design and development of the front-end aspects of an online
            crime reporting website with future support for multitenancy.
            • Integrating front-end components for audit logs functionality to monitor user actions, ensuring transparency and
            accountability in report processing.
            • Working closely with a multidisciplinary team to create a fully mobile-responsive front-end, enabling seamless access for
            public users to report crimes anonymously and upload media.
            • Implementing front-end functionalities for permissions management and report statistics, providing administrators and
            stakeholders with comprehensive insights and functionality.
            • Optimized the old codebase, resulting in a 20% increase in website speed.`
        }
    },
    {
        position: 'Junior Web Developer',
        time: 'DXC Technology, Viet Nam, Sep 2018 – Nov 2019',
        shortDesc: 'Collaborated closely with cross-functional teams to translate UI/UX designs into functional front-end code, maintaining code quality and adherence to design standards.',
        fullDesc: {
            role: 'Front-End Developer',
            achievement: '- Developed fully responsive, user-friendly web applications using ReactJS and AngularJS.',
            description: `• Collaborated closely with cross-functional teams to translate UI/UX designs into functional front-end code, maintaining code
            quality and adherence to design standards. Translated UI / UX designs wireframes from Figma into functional front-end code.
            • Engineered fully responsive, user-friendly web applications using tools such as JavaScript frameworks for ReactJS, AngularJS.
            • Constructed various Angular Libraries for the development team to use in different projects.`
        }
    }
];


const ProjectsModal = () => {
    const [projectID, setProjectID] = useState(-1);
    const { isOpen, onClose } = useProjectsModal();
    const onChange = (open: boolean) => {
        if (!open) {
            setProjectID(-1);
            onClose();
        }
    }

    return (
        <Modal isOpen={isOpen}
            onChange={onChange}
            icon="/images/projects-icon.png"
            title="Projects"
        >
            <h4 className="text-[#0f0] font-bold py-3 text-center">
                {
                    projectID === -1 ? "Select a project to view in detail" :
                        projectList[projectID].position
                }
            </h4>
            <div className="flex flex-col h-full overflow-y-scroll pb-10 px-10 gap-y-3 text-[rgb(204,204,204)]">
                {
                    projectID === -1 ?
                        projectList.map((item, index) => (
                            <div key={index} onClick={() => setProjectID(index)} className="p-5 bg-sky-900/50 hover:bg-sky-900/75 hover:cursor-pointer rounded-lg">
                                <p className="text-[#0f0]">{item.position}</p>
                                <p>{item.time}</p>
                                <p>{item.shortDesc}</p>
                            </div>
                        ))
                        :
                        <div>
                            <p className="text-[#0f0]">Role: </p>
                            <p>{projectList[projectID].fullDesc.role}</p>
                            <p className="text-[#0f0] mt-3">Achievements:</p>
                            <p className="whitespace-pre-line">{projectList[projectID].fullDesc.achievement}</p>
                            <p className="text-[#0f0] mt-3">Description:</p>
                            <p className="whitespace-pre-line">{projectList[projectID].fullDesc.description}</p>
                            <div className="flex flex-col items-center justify-center">
                                {
                                    projectList[projectID].fullDesc.images && projectList[projectID].fullDesc.images?.map(img => (
                                        <img className="mt-3" src={img} alt="GUI"></img>
                                    ))
                                }
                                {
                                    projectList[projectID].fullDesc.git && (
                                        <a className="mt-3 hover:bg-[rgb(71,85,105)] flex flex-col items-center gap-y-1"
                                            target="_blank"
                                            href={projectList[projectID].fullDesc.git}>
                                            <FaGithub size={40}></FaGithub>
                                            Github
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                }
            </div>
            {
                projectID !== -1 &&
                <button onClick={() => setProjectID(-1)} className="flex items-center justify-center text-sky-300 p-5">
                    <AiFillBackward className="mr-5"></AiFillBackward> Back to projects
                </button>
            }
        </Modal>
    )
}

export default ProjectsModal;