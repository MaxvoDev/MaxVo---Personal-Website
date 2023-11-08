import {create} from 'zustand'

interface WebsiteModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useWebsiteModal = create<WebsiteModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useWebsiteModal;