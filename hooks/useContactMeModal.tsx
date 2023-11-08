import {create} from 'zustand';

interface ContactMeModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useContactMeModal = create<ContactMeModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useContactMeModal;