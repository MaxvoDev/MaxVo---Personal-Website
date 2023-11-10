"use client";

import useCvModal from "@/hooks/useCvModal";
import Menu from "./Menu";
import useSocialModal from "@/hooks/useSocialModal";
import useWebsiteModal from "@/hooks/useWebsiteModal";
import useSkillsModal from "@/hooks/useSkillsModal";
import useUserModal from "@/hooks/useUserModal";
import useContactMeModal from "@/hooks/useContactMeModal";
import useProjectsModal from "@/hooks/useProjectsModal";
import {AiFillLinkedin} from "react-icons/ai";


const HomeComponent = () => {
    
    const cvModal = useCvModal();
    const socialModal = useSocialModal();
    const websiteModal = useWebsiteModal();
    const skillsModal = useSkillsModal();
    const userModal = useUserModal();
    const contactmeModal = useContactMeModal();
    const projectsModal = useProjectsModal();

    return (
        <div className='text-[#0f0] bg-zinc-900 w-full h-full bg-black flex flex-col items-center justify-center md:text-3xl'>
            <div className="grow flex flex-col items-center justify-center">
                <h1 className='mb-2 font-bold text-left md:text-4xl'>
                    <span className='text-[rgb(159,18,57)]'>root</span>
                    @Max_Vo:~$
                </h1>
                <div className='text-left flex flex-col gap-y-1'>
                    <p>\[._.]/ Hey there I'm Max Vo</p>
                    <p><span className='text-green-300'>$</span> A "Full Stack" Engineer</p>
                    <p><span className='text-green-300'>$</span> Welcome to my world</p>
                    {/* <p><span className='text-green-300'>$</span> Open my terminal to learn more here</p> */}
                    <div className="w-full grid grid-cols-12 text-sky-300 mt-5 gap-y-5">
                        <Menu className="col-span-6" onClick={userModal.onOpen} name="About"></Menu>
                        <Menu className="col-span-6" onClick={cvModal.onOpen} name="Resume"></Menu>
                        <Menu className="col-span-6" onClick={projectsModal.onOpen} name="Projects"></Menu>
                        <Menu className="col-span-6" onClick={skillsModal.onOpen} name="Skills"></Menu>
                        <div className="col-span-6">
                            <a className="hover:bg-[rgb(71,85,105)]" target="_blank" href="https://www.linkedin.com/in/max-vo/">
                                /LinkedIn
                            </a>
                        </div>
                        <Menu className="col-span-6" onClick={websiteModal.onOpen} name="Website"></Menu>
                        <Menu className="col-span-6" onClick={contactmeModal.onOpen} name="Contact"></Menu>
                    </div>
                </div>
            </div>
            <div className="p-3 flex h-[70px] w-full gap-x-3 items-center justify-center bg-blue-500/[0.03] border-t border-black/[0.3]">
                <Menu showIcon={true} name="About" image="/images/start-icon.png"></Menu>
                {/* <Menu showIcon={true} name="Projects" image="/images/folder-icon.png"></Menu> */}
                {/* <Menu showIcon={true} onClick={cvModal.onOpen} name="Skills" image="/images/terminal-start-icon.png"></Menu> */}
                <Menu showIcon={true} isActive={userModal.isOpen} onClick={userModal.onOpen} name="Socials" image="/images/user-icon.png"></Menu>
                <Menu showIcon={true} isActive={cvModal.isOpen} onClick={cvModal.onOpen} name="Website" image="/images/resume-icon.png"></Menu>
                <Menu showIcon={true} isActive={projectsModal.isOpen} onClick={projectsModal.onOpen} name="Contact" image="/images/projects-icon.png"></Menu>
                <Menu showIcon={true} isActive={skillsModal.isOpen} onClick={skillsModal.onOpen} name="Skills" image="/images/skills-icon.png"></Menu>
                <a className="flex items-center justify-center hover:bg-[rgb(71,85,105)]" target="_blank" href="https://www.linkedin.com/in/max-vo/">
                    <AiFillLinkedin width={50} height={50}></AiFillLinkedin>
                </a>
                <Menu showIcon={true} isActive={websiteModal.isOpen} onClick={websiteModal.onOpen} name="Website" image="/images/website-icon.png"></Menu>
                <Menu showIcon={true} isActive={contactmeModal.isOpen} onClick={contactmeModal.onOpen} name="Contact" image="/images/contact-icon.png"></Menu>
            </div>
        </div>
    )
}

export default HomeComponent;