import useUserModal from "@/hooks/useUserModal";
import Modal from "./Modal";
import { useState } from "react";

const UserModal = () => {
    const { isOpen, onClose } = useUserModal();
    const [dob] = useState(new Date("02/05/1995"));

    const onChange = (open) => {
        if (!open) {
            onClose();
        }
    }

    const getCurrentAge = () => {
        const ageInMilliseconds = Date.now() - dob.getTime();
        const ageInYears = new Date(ageInMilliseconds).getFullYear() - 1970;
        return ageInYears;
    }

    return (
        <Modal
            isOpen={isOpen}
            onChange={onChange}
            icon="/images/user-icon.png"
            title="About Me"
        >
            <h4 className="text-[#0f0] font-bold py-3 text-center">Who is Max Vo?</h4>
            <div className="px-10 flex flex-col h-full overflow-y-scroll text-[rgb(204,204,204)] pb-10">
                <p>Well, I'm glad you have asked 🤓</p>
                <p className="mt-4">I'm currently <span className="text-[#0f0]">{getCurrentAge()}</span> years old (age updates automatically 😉)!</p>
                <p className="mt-4">I was born in <span className="text-[#0f0]">Ho Chi Minh City, Viet Nam</span> and currently living in <span className="text-[#0f0]">Adelaide, Australia</span>. I’ve always been a great problem solver, an independent learner and a technophile obsessed with the latest devices and tech. Today, I’m working as a software engineer and I get to show off all the elements of who I am.</p>
                <p className="mt-4">I started learning to code when I was a teenager, though it was always more of a hobby than a career focus. After a college education in Criminology/IT Security, I continued to pursue my hobby and finished a degree in Computer Science. I realised software engineering was the right field for me.</p>
                <p className="mt-4">Since then, I have worked on a countless number of projects and experienced hands on work with clients while making some great work buddies along the way. I love to learn, love to teach others and love to solve complex tasks which have never been tackled before. I describe myself as a technology agnostic person who can adapt to new tech super quickly.</p>
                <p className="mt-4">I’m familiar with a variety of programming languages, including Javascript/Typescript, HTML, CSS, a variety of the latest JS Frameworks (Angular/React etc.), .NET & C#, Python, C++. I'm a fanboy for automating manual tasks and most of all, I adore making a difference and being recognised as a passionate worker.</p>
            </div>
        </Modal>
    );
}

export default UserModal;
