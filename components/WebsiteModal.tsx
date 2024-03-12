"use client";

import useWebsiteModal from "@/hooks/useWebsiteModal";
import Modal from "./Modal";

const WebsiteModal = () => {
    const {isOpen, onClose} = useWebsiteModal();
    const onChange = (open: boolean) => {
        if(!open){
            onClose();
        }
    };

    return (
        <Modal 
            isOpen={isOpen}
            onChange={onChange}
            icon="/images/website-icon.png"
            title="Website">
            <h4 className="text-[#0f0] font-bold py-3 text-center">How I made this website</h4>

            <div className="px-10 flex flex-col  h-full overflow-y-scroll pb-10">
                <p>I made this website in a few weeks of on and off coding. I decided to make a portfolio in order to expand my knowledge in React since my role at Starfish Company Limited was based mainly on the Angular framework for frontend work.</p>
                <p className="mt-5">I want to be known as a technology agnostic person. I can learn and adapt to new languages, frameworks and/or technologies quite quickly as seen with this website I created.</p>
                <p className="text-left text-[#0f0] mt-10">Tech stack:</p>
                <p>- React<br/>
    - Next.Js<br/>
    - TailwindCSS<br/>
    - Git<br/>
    - EmailJS for sending emails to myself<br/>
    - A bunch of npm packages. Feel free to contact me if you have any questions on how I developed something.</p>
            </div>
        </Modal>
    )
}

export default WebsiteModal;