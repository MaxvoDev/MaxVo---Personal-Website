"use client";

import ContactMeModal from "@/components/ContactMe";
import CvModal from "@/components/CvModal";
import ProjectsModal from "@/components/Projects";
import SkillsModal from "@/components/SkillsModal";
import UserModal from "@/components/UserComponent";
import WebsiteModal from "@/components/WebsiteModal";
import { useEffect, useState } from "react";


const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMounted){
        return null;
    }

    return (
        <>
            <CvModal></CvModal>
            <WebsiteModal></WebsiteModal>
            <SkillsModal></SkillsModal>
            <UserModal></UserModal>
            <ContactMeModal></ContactMeModal>
            <ProjectsModal></ProjectsModal>
        </>
    )
}

export default ModalProvider;