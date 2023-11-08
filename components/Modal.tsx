"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {IoMdClose} from "react-icons/io";
import {CiMinimize1} from "react-icons/ci";
import {FiMaximize} from "react-icons/fi";
import Image from 'next/image';
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    icon: string;
    title: string;
    children: React.ReactNode;
}


const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    icon,
    title,
    children
}) => {
    const production = true;
    const basePath = production ? '/porfolio' : '';
    const [isMaximized, setIsMaximized] = useState(false);
    
    return (
        <Dialog.Root
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}>
            <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content className={twMerge(`
                    fixed
                    bg-[black]
                    h-[calc(100%-70px)]
                    top-0
                    left-[50%]
                    translate-x-[-50%]
                    color-[black]
                    transition

                    flex
                    flex-col

                `,
                    isMaximized ? 'w-full' : 'w-[70%]'
                )}>
                    <Dialog.Title className="flex items-center px-5 h-[50px] bg-[rgb(71,85,105)]">
                        <Image className="mr-2" src={basePath + icon} alt="Icon" width={50} height={50}></Image>
                        <h3>{title}</h3>
                    </Dialog.Title>
                    
                    {children}
                    
                    <div className="
                        absolute
                        top-0
                        right-0
                        flex
                        items-center
                        justify-center
                    "
                    >
                        {
                            isMaximized ?
                            <button onClick={() => setIsMaximized(false)} className="flex items-center justify-center h-[50px] px-5 hover:bg-[red]">
                                <CiMinimize1></CiMinimize1>
                            </button>
                            :
                            <button onClick={() => setIsMaximized(true)} className="flex items-center justify-center h-[50px] px-5 hover:bg-[red]">
                                <FiMaximize></FiMaximize>
                            </button>
                        }
                        <button onClick={() => onChange(false)} className="flex items-center justify-center h-[50px] px-5 hover:bg-[red]">
                            <IoMdClose></IoMdClose>
                        </button>
                    </div>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default Modal;