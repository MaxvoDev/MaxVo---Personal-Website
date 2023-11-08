"use client";

import Image from 'next/image';
import {twMerge} from "tailwind-merge";

interface MenuProps {
    showIcon?: boolean;
    name: string;
    image: string;
    onClick?: () => void;
    className?: string;
    isActive?: boolean;
}

const Menu: React.FC<MenuProps> = ({
    showIcon = false,
    name,
    image,
    onClick,
    className,
    isActive = false
}) => {
    return (
        <div className={twMerge(`
        `,
            className
        )}>
            <button className={twMerge(`
            hover:bg-[rgb(71,85,105)]`,
                isActive && `border-b-4 border-indigo-500`
            )} onClick={onClick}>
                {
                    !showIcon && 
                    <span>/{name}</span>
                }
                {
                    showIcon && 
                    <Image src={image} alt='test' width={50} height={50}></Image>
                }
            </button>
        </div>
    );
}

export default Menu;