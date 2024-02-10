"use client";

import useCvModal from "@/hooks/useCvModal";
import Modal from "./Modal";

const CvModal = () => {
    const {isOpen, onClose} = useCvModal();
    const onChange = (open: boolean) => {
        if(!open){
            onClose();
        }
    };

    return (
        <Modal 
            isOpen={isOpen}
            onChange={onChange}
            icon="/images/resume-icon.png"
            title="Current CV">
            <object data="Resume.pdf" type="application/pdf" width="100%" height="100%">
            </object>
        </Modal>
    )
}

export default CvModal;