import React from 'react';
import useSkillsModal from "@/hooks/useSkillsModal";
import Modal from "./Modal";

interface Skill {
  skill: string;
  rating: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <>
    <p className="text-left w-full mt-5 text-[#0f0]">{title}:</p>
    <table className="w-full">
      <tbody>
        <tr>
          <td className="text-center">Skill</td>
          <td>Moon Rating</td>
        </tr>
        {skills.map(({ skill, rating }) => (
          <tr key={skill}>
            <td>{skill}</td>
            <td>{rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

const SkillsModal: React.FC = () => {
  const { isOpen, onClose } = useSkillsModal();

  const onChange = (open: boolean): void => {
    if (!open) {
      onClose();
    }
  };

  const skillCategories: SkillCategoryProps[] = [
    {
      title: "Languages",
      skills: [
        { skill: "C#", rating: "🌕🌕🌕🌕🌑" },
        { skill: "HTML5", rating: "🌕🌕🌕🌕🌕" },
        { skill: "Javascript", rating: "🌕🌕🌕🌕🌕" },
        { skill: "Typescript", rating: "🌕🌕🌕🌕🌑" },
        { skill: "CSS3", rating: "🌕🌕🌕🌕🌕" },
        { skill: "Python", rating: "🌕🌕🌕🌕🌑" },
        { skill: "C++", rating: "🌕🌕🌕🌕🌑" },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { skill: "Angular", rating: "🌕🌕🌕🌕🌕" },
        { skill: ".NET", rating: "🌕🌕🌕🌕🌑" },
        { skill: "Bootstrap", rating: "🌕🌕🌕🌕🌕" },
        { skill: "TailwindCSS", rating: "🌕🌕🌕🌕🌑" },
        { skill: "React", rating: "🌕🌕🌕🌕🌑" },
        { skill: "Next.JS", rating: "🌕🌕🌕🌕🌑" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { skill: "Git", rating: "🌕🌕🌕🌕🌕" },
        { skill: "MongoDB", rating: "🌕🌕🌕🌕🌑" },
        { skill: "CI/CD", rating: "🌕🌕🌕🌕🌑" },
        { skill: "NPM, Nuget", rating: "🌕🌕🌕🌕🌕" },
        { skill: "Azure, Cloud", rating: "🌕🌕🌕🌗🌑" },
        { skill: "Node.JS", rating: "🌕🌕🌕🌕🌑" },
      ],
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      icon="/images/skills-icon.png"
      title="Skills"
    >
      <h4 className="text-[#0f0] font-bold py-3 text-center">My skills 💪</h4>
      <p className="px-10">
        Below you can find my skills and how I rate myself in that skill with
        moon emojis / 5.
      </p>
      <div className="px-10 flex flex-col h-full overflow-y-scroll pb-10">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} title={category.title} skills={category.skills} />
        ))}
      </div>
    </Modal>
  );
};

export default SkillsModal;
