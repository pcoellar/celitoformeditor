import { ReactNode } from "react";

export enum ElementTypes {
    'Input' = 'input',
}

export interface IElementInput extends IElement {
    textOption?: string;
}

export interface IElement {
    id: string;
    sectionId: string;
    positionOnRow: number;
    type: 'input' //in the future could support different elements (images, dropdown, radio buttons, check, etc)
    size: number;
    errorMsg?: string;
}

export interface ISection {
    id: string;
    title?: string;
    hidden?: boolean;
    errorMsg?: string;
}

export interface IEditorContextProps {
    name: string;
    SetLayoutName: React.Dispatch<React.SetStateAction<string>>;
    showSections: boolean;
    ShowSections: React.Dispatch<React.SetStateAction<boolean>>;
    sections: ISection[];
    elements: IElement[];
    AddSection: () => void;
    ChangeSection: (section: ISection) => void;
    DeleteSection: (id: string) => void;
    AddRow: (sectionId: string) => void;
    AddElement: (element: IElement) => void;
    ChangeElement: (element: IElement) => void;
    DeleteElement: (id: string) => void;
    ShowHideSection: (id: string) => void;
    ValidateForm: () => boolean;
}

export interface IEditorContextProviderProps {
    children: ReactNode;
}
