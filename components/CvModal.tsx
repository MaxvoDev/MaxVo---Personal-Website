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
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>
        </Modal>
    )
}

export default CvModal;