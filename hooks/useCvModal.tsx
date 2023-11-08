import {create} from 'zustand';

interface CvModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useCvModal = create<CvModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useCvModal;