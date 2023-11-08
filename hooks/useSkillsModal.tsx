import {create} from 'zustand';

interface SkillsModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSkillsModal = create<SkillsModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useSkillsModal;