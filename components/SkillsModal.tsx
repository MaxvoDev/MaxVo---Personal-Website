import useSkillsModal from "@/hooks/useSkillsModal";
import Modal from "./Modal";

const SkillsModal = () => {
    const {isOpen, onClose} = useSkillsModal();
    const onChange = (open: boolean) => {
        if(!open){
            onClose();
        }
    }

    return (
        <Modal isOpen={isOpen}
            onChange={onChange}
            icon="/images/skills-icon.png"
            title="Skills"
        >
            <h4 className="text-[#0f0] font-bold py-3 text-center">My skills 💪</h4>
            <p className="px-10">Below you can find my skills and how i rate myself in that skill with moon emojis / 5.</p>
            <div className="px-10 flex flex-col h-full overflow-y-scroll  pb-10">
                <p className="text-left w-full text-[#0f0] mt-5">Languages:</p>
                <table className="w-full">
                    <tr>
                        <td className="text-center">Skill</td>
                        <td>Moon Rating</td>
                    </tr>
                    <tr>
                        <td>C#</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                    <tr>
                        <td>HTML5</td>
                        <td>🌕🌕🌕🌕🌕</td>
                    </tr>
                    <tr>
                        <td>Javascript</td>
                        <td>🌕🌕🌕🌕🌕</td>
                    </tr>
                    <tr>
                        <td>Typescript</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                    <tr>
                        <td>CSS3</td>
                        <td>🌕🌕🌕🌕🌕</td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                    <tr>
                        <td>C++</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                </table>

                <p className="text-left w-full mt-5 text-[#0f0]">Languages:</p>
                <table className="w-full">
                    <tr>
                        <td className="text-center">Skill</td>
                        <td>Moon Rating</td>
                    </tr>
                    <tr>
                        <td>Angular</td>
                        <td>🌕🌕🌕🌕🌕</td>
                    </tr>
                    <tr>
                        <td>.NET</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                    <tr>
                        <td>Bootstrap</td>
                        <td>🌕🌕🌕🌕🌕</td>
                    </tr>
                    <tr>
                        <td>TailwindCSS</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                    <tr>
                        <td>Next.JS</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                </table>

                <p className="text-left w-full mt-5 text-[#0f0]">Languages:</p>
                <table className="w-full">
                    <tr>
                        <td className="text-center">Skill</td>
                        <td>Moon Rating</td>
                    </tr>
                    <tr>
                        <td>Git</td>
                        <td>🌕🌕🌕🌕🌕</td>
                    </tr>
                    <tr>
                        <td>MongoDB</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                    <tr>
                        <td>CI/CD</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                    <tr>
                        <td>NPM, Nuget</td>
                        <td>🌕🌕🌕🌕🌕</td>
                    </tr>
                    <tr>
                        <td>Azure, Cloud</td>
                        <td>🌕🌕🌕🌗🌑</td>
                    </tr>
                    <tr>
                        <td>Node.JS</td>
                        <td>🌕🌕🌕🌕🌑</td>
                    </tr>
                </table>
            </div>
        </Modal>
    )
}

export default SkillsModal;