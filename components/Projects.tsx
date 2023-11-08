import useProjectsModal from "@/hooks/useProjectsModal";
import Modal from "./Modal";
import {useState} from "react";
import {AiFillBackward} from "react-icons/ai";

const ProjectsModal = () => {
    const {isOpen, onClose} = useProjectsModal();
    const onChange = (open: boolean) => {
        if(!open){
            onClose();
        }
    }

    const projectList = [
        {
            position: 'Open AI/Langchain/Pinecone Journey builder',
            time: 'Sep 2023 - Nov 2023',
            shortDesc: 'A POC developed at preezie to implement Generative AI in our solution',
            fullDesc: {
                role: 'Main developer - Backend',
                achievement: `- Implemented newly researched industry standard Generative AI techniques.
                - Working closely with our Microsoft partnership to gain insight on AI development.
                - Learned from scratch prompt engineering techniques using tutorials
                - Successfully refined my work & delivering in a timely scoped manner.`,
                description: `CEO of preezie wanted an AI POC of our product to demonstrate to investors for a potential series B raise and investment in the future of AI in Australian businesses.
                A small team of developers worked closely with the head of technology to scope out requirements and develop a MVP within a couple months.
                I implemented vector search using Open AI embeddings and Pinecone DB to store our data for the POC. We built a self-serve Journey quiz builder which eliminates the need for manual customer success related work.
                Used Open AI GPT-3.5-turbo-16k and GPT-4 APIs to demonstrate the capability of generative AI for our solution. A Node.Js solution was developed with a ts.ED web api backend, react frontend, PostgreSQL database, Pinecone DB, Open AI APIs & Langchain.`
            }
        },
        {
            position: 'a',
            time: 'Sep 2023 - Nov 2023',
            shortDesc: 'A POC developed at preezie to implement Generative AI in our solution',
            fullDesc: {
                role: 'Main developer - Backend',
                achievement: `- Implemented newly researched industry standard Generative AI techniques.
                - Working closely with our Microsoft partnership to gain insight on AI development.
                - Learned from scratch prompt engineering techniques using tutorials
                - Successfully refined my work & delivering in a timely scoped manner.`,
                description: `CEO of preezie wanted an AI POC of our product to demonstrate to investors for a potential series B raise and investment in the future of AI in Australian businesses.
                A small team of developers worked closely with the head of technology to scope out requirements and develop a MVP within a couple months.
                I implemented vector search using Open AI embeddings and Pinecone DB to store our data for the POC. We built a self-serve Journey quiz builder which eliminates the need for manual customer success related work.
                Used Open AI GPT-3.5-turbo-16k and GPT-4 APIs to demonstrate the capability of generative AI for our solution. A Node.Js solution was developed with a ts.ED web api backend, react frontend, PostgreSQL database, Pinecone DB, Open AI APIs & Langchain.`
            }
        }
    ];

    const [projectID, setProjectID] = useState(-1);

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
                        <p>{projectList[projectID].fullDesc.achievement}</p>
                        <p className="text-[#0f0] mt-3">Description:</p>
                        <p>{projectList[projectID].fullDesc.description}</p>
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