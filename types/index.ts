import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface SearchManufacturerProps {
    menufacturer: string;
    setMenufacturer: (menufacturer: string) => void;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}