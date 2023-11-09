import useProjectsModal from "@/hooks/useProjectsModal";
import Modal from "./Modal";
import {useState} from "react";
import {AiFillBackward} from "react-icons/ai";

const ProjectsModal = () => {
    const [projectID, setProjectID] = useState(-1);
    const {isOpen, onClose} = useProjectsModal();
    const onChange = (open: boolean) => {
        if(!open){
            setProjectID(-1);
            onClose();
        }
    }

    const projectList = [
        {
            position: 'Public Safety Management (PSM)',
            time: 'Sep 2023 - Nov 2023',
            shortDesc: 'A solution for CrimeStoppers and future tenants to modernise crime reporting and processing online in the cloud.',
            fullDesc: {
                role: 'Co-developer, full stack',
                achievement: `- Released a full stack solution for CrimeStoppers\n- Set up the whole cloud infrastructure, CI/CD Pipelines & Devops for the major project.\n- Did a lot of work on both the frontend and backend with another team member.\n- Re-worked the Identity Server solution for the project.`,
                description: `Public Safety Management was a multi-part solution and major project I played a part in for our sponsored client at Starfish Company.\n
                The publicly accessible website was a simple, mobile friendly web application allowing the general public to report crimes anonymously to management. You could also upload media files which I implemented the functionality for using Azure Blob Storage and utilisation of various cloud features.\n
                The management portal is a complex web application backed by an identity server and separate admin portal for registering users, sending confirmation emails/password resets and assigning roles/permissions.\n
                The management portal also had an audit trail API running as a microservice to log out every action taken by a user for a report to ensure auditability. Other features included was the encoding and streaming/downloading of media files.\n
                Furthermore, statistics based on months or years was included to show various types of information for reports such as fequency of reporting dates, report type ratios and many more which were displayed using the user-friendly charting framework ngx-charts.\n
                The whole solution was developed using Angular 13, .NET 6, MongoDB, SQL Server (for identity), MJML for emails and the Azure cloud to host our solution.`
            }
        },
        {
            position: 'NOCC Notification App + Rework',
            time: 'Sep 2023 - Nov 2023',
            shortDesc: 'A legacy application written in Winforms + VBA which I eventually re-wrote and modernised',
            fullDesc: {
                role: 'Legacy app support, sole developer of the re-worked solution',
                achievement: `- Supported an existing solution developed in-house after a lead developer resigned.
                - Did not know Visual Basic & Winforms. Learned it on the job while supporting.
                - Praised for my hard work numerous times by the Network Operations Control Centre (NOCC) team.
                - Promised to re-work the solution before I resigned. Achieved a reworked modernised solution within a month.`,
                description: `The NOCC Notification App was an internal tool developed by an ex-employee that allowed our NOCC team to send out emails to customers in cases of outages to our networks.\n
                I was tasked to support the application and did so for many months. It was clunky, poorly designed and used an old framework. There was a lot of manual supporting I had to do such as small modifications to email templates would have to be requested to me before they were done.\n
                I wanted to streamline the process and allow the NOCC to be able to modify distribution lists, create their own templates and send out emails more efficiently. I came up with a proof of concept and design for a re-worked version of the application shortly later.\n
                Some of the tech I used included (but not limited to) Angular 13, .NET 6, MJML for the email templates, MongoDB to store our data, Google OAuth (made it so you could only sign in using our internal emails for security) and finally, a vast permission based system for each user.\n
                The app also talks to an SMTP server hosted on premises and another service which fetched data for incidents and incident management. I was praised for the work I did to help the team out vastly and eventually get rid of the legacy software.`
            }
        },
        {
            position: 'Sierra Wireless Airlink Manager',
            time: 'Sep 2023 - Nov 2023',
            shortDesc: 'A fullstack solution to configure and apply configurations to routers seamlessly using csv documents.',
            fullDesc: {
                role: 'Sole developer',
                achievement: `- First full stack internal application developed for Starfish Solutions.
                - Re-worked the application months later and improved efficiency and speed of the API vastly.
                - Removed the need to manually configure each router with its configuration files. Seamlessly applying configurations to routers using only 1 csv file saved a ton of time.`,
                description: `SWAM was an internal tool I developed for Starfish Solutions to make the process of applying configurations to a router seamless instead of manually applying each file to a router.\n
                I cannot talk much about it due to it being an internal tool but it was a full stack application developed using SQL Server, .NET 5 Web API & Angular 12. It was hosted on-premises at the end and available only on our internal network.\n
                It grabs a tar.gz zipped file and unzips it, reads variables prefixed with dollar signs ($) and uses that baseline configuration to replace those variables when a user uploads a csv file with the variables in the header cells. The user gets to select which baseline configuration file to use and what version they can then download later once applying a configuration.\n
                This made the process of applying 1 configuration to each router manually much more smoother. A user can have hundreds of configurations in a csv file separated by rows and the application would create those hundreds on the fly for you to download later.`
            }
        }
    ];

    

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
            <div className="flex flex-col h-full overflow-y-scroll pb-10 px-10 gap-y-3 flex-col text-[rgb(204,204,204)]">
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