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
import CursorBlinker from "./CursorBlinker";
import { useState } from "react";
import TextAnim from "./TextAnimation";
import useAnimationText from "@/hooks/useAnimationText";
import {motion} from "framer-motion";


const HomeComponent = () => {
    const cvModal = useCvModal();
    const websiteModal = useWebsiteModal();
    const skillsModal = useSkillsModal();
    const userModal = useUserModal();
    const contactmeModal = useContactMeModal();
    const projectsModal = useProjectsModal();

    const { isFinished, onFinished } = useAnimationText();

    const [showFull, setShowFull] = useState(false);

    return (
        <div className='text-[#0f0] bg-zinc-900 w-full h-full flex flex-col items-center justify-center md:text-3xl'>
            <div className="grow flex flex-col items-center justify-center">
                <div className='mb-2 w-full font-bold text-left md:text-6xl flex items-center'>
                    <span className='text-[rgb(159,18,57)]'>root</span>
                    @Max_Vo:~$
                    <CursorBlinker className="ml-1 h-full w-[10px] bg-[#0f0]"></CursorBlinker>
                </div>
                {
                    showFull ?
                    <div className='text-left flex flex-col gap-y-1 text-xl'>
                        <TextAnim/>
                        {
                            isFinished &&
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 3 }}
                                className="w-full grid grid-cols-12 text-sky-300 mt-5 gap-y-5">
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
                            </motion.div>
                        }
                    </div>
                    :
                    <button onClick={() => setShowFull(true)} className="text-white flex mx-auto mt-20 xxxs:mt-16 font-bold p-3 px-12 rounded-xl bg-blue-500/75 hover:bg-blue-600/75 shadow-lg shadow-gray-500/25 hover:shadow-gray-400/25 animate-bounce transition-all ease-in-out delay-150">Click me!</button>
                }
            </div>
            {
                isFinished &&
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="p-3 flex h-[70px] w-full gap-x-3 items-center justify-center bg-blue-500/[0.03] border-t border-black/[0.3]">
                    <Menu showIcon={true} name="About" image="/images/start-icon.png"></Menu>
                    <Menu showIcon={true} isActive={userModal.isOpen} onClick={userModal.onOpen} name="Socials" image="/images/user-icon.png"></Menu>
                    <Menu showIcon={true} isActive={cvModal.isOpen} onClick={cvModal.onOpen} name="Website" image="/images/resume-icon.png"></Menu>
                    <Menu showIcon={true} isActive={projectsModal.isOpen} onClick={projectsModal.onOpen} name="Contact" image="/images/projects-icon.png"></Menu>
                    <Menu showIcon={true} isActive={skillsModal.isOpen} onClick={skillsModal.onOpen} name="Skills" image="/images/skills-icon.png"></Menu>
                    <a className="flex items-center justify-center hover:bg-[rgb(71,85,105)]" target="_blank" href="https://www.linkedin.com/in/max-vo/">
                        <AiFillLinkedin width={50} height={50}></AiFillLinkedin>
                    </a>
                    <Menu showIcon={true} isActive={websiteModal.isOpen} onClick={websiteModal.onOpen} name="Website" image="/images/website-icon.png"></Menu>
                    <Menu showIcon={true} isActive={contactmeModal.isOpen} onClick={contactmeModal.onOpen} name="Contact" image="/images/contact-icon.png"></Menu>
                </motion.div>
            }
        </div>
    )
}

export default HomeComponent;