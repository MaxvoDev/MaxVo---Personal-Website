import Modal from "./Modal";
import useContactMeModal from "@/hooks/useContactMeModal";
import emailjs from '@emailjs/browser';

const ContactMeModal = () => {

    const {isOpen, onClose} = useContactMeModal();
    const onChange = (open: boolean) => {
        if(!open){
            onClose();
        }
    }

    const sendEmail = (e: any) => {
        e.preventDefault();
        alert(1);
        emailjs.sendForm('service_uiskozm', 'template_hjg6i5a', "test", 'BPOdAfZ6eYVHV-bBk')
        .then((result: any) => {
            console.log(result.text);
        }, (error: any) => {
            console.log(error.text);
        });
    }

    return (
        <Modal isOpen={isOpen}
            onChange={onChange}
            icon="/images/contact-icon.png"
            title="Contact Me"
        >
            <div className="px-3 md:px-10 py-5 flex flex-col h-full">
                <form onSubmit={sendEmail} className="h-full flex flex-col items-center justify-center">
                    <div className="grid grid-cols-12">
                        <label className="col-span-4 md:col-span-2 md:text-xl text-[#0f0]" htmlFor="">From: </label>
                        <input className="col-span-8 md:md:col-span-10 p-3 text-black bg-slate-300 outline-none border-2 border-b-green-500 rounded" name="user.email" type="text" placeholder="Enter your email address here"/>
                    </div>
                    <div className="grid grid-cols-12 mt-2">
                        <label className="col-span-4 md:col-span-2 md:text-xl text-[#0f0]" htmlFor="">Name: </label>
                        <input className="col-span-8 md:col-span-10 p-3 text-black bg-slate-300 outline-none border-2 border-b-green-500 rounded" name="user.name" type="text" placeholder="Enter your name"/>
                    </div>
                    <div className="grid grid-cols-12 mt-2">
                        <label className="col-span-4 md:col-span-2 md:text-xl text-[#0f0]" htmlFor="">Subject: </label>
                        <input className="col-span-8 md:col-span-10 p-3 text-black bg-slate-300 outline-none border-2 border-b-green-500 rounded" name="user.title" type="text" placeholder="Subject of the email"/>
                    </div>
                    <div className="grid grid-cols-12 grow mt-2">
                        <label className="col-span-4 md:col-span-2 md:text-xl text-[#0f0]" htmlFor="">Message: </label>
                        <textarea className="col-span-8 md:col-span-10 p-3 text-black bg-slate-300 outline-none border-2 border-b-green-500 rounded" name="user.message" placeholder="Email message"/>
                    </div>
                    <div className="flex items-center justify-center mt-5 ">
                        <button className="w-[70%] py-5 bg-blue-500/75 ">Send</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default ContactMeModal;