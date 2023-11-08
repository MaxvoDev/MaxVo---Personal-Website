import {create} from 'zustand'

interface SocialModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSocialModal = create<SocialModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useSocialModal;