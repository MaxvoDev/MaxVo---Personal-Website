import {create} from 'zustand';

interface AnimationTextStore{
    isFinished: boolean;
    onFinished: () => void;
}

const useAnimationText = create<AnimationTextStore>((set) => ({
    isFinished: false,
    onFinished: () => set({isFinished: true}),
}));

export default useAnimationText;