import useSocialModal from "@/hooks/useSocialModal";
import Modal from "./Modal";

const SocialModal = () => {
    const {isOpen, onClose} = useSocialModal();
    const onChange = (open: boolean) => {
        if(!open){
            onClose();
        }
    }

    return (
        <Modal isOpen={isOpen}
            onChange={onChange}
            icon="/images/socials-icon.png"
            title="Socials"
        >
            <h4 className="text-[#0f0] font-bold py-3 text-center">📲 Socials 🤳</h4>
            <div className="px-10 flex flex-col text-sky-300">
                <button>LinkedIn</button>
                <button>Github</button>
            </div>
        </Modal>
    )
}

export default SocialModal;