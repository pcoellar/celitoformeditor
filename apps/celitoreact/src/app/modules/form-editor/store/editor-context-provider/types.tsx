import { ReactNode } from "react";

export enum ElementTypes {
    'Input' = 'input',
}

export enum EditorEventTypes {
    'OnAddSection' = 'OnAddSection',
    'OnEditSection' = 'OnEditSection',
    'OnDeleteSection' = 'OnDeleteSection',
    'OnAddRow' = 'OnAddRow',
    'OnAddElement' = 'OnAddElement',
    'OnEditElement' = 'OnEditElement',
    'OnDeleteElement' = 'OnDeleteElement',
}

export interface IElementInput extends IElement {
    textOption?: string;
}

export interface IElement {
    id: string;
    sectionId: string;
    row: number;
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
    showLogger: boolean;
    ShowLogger: React.Dispatch<React.SetStateAction<boolean>>;
    sections: ISection[];
    elements: IElement[];
    AddSection: () => void;
    EditSection: (section: ISection) => void;
    DeleteSection: (id: string) => void;
    AddRow: (sectionId: string) => void;
    AddElement: (element: IElement) => void;
    EditElement: (element: IElement) => void;
    DeleteElement: (id: string) => void;
    ShowHideSection: (id: string) => void;
    ValidateForm: () => boolean;
    Subscribe: (subscribers: ISusbscribe[]) => void;
    Unsubscribe: (unSubscribers: ISusbscribe[]) => void;
}

export interface IEditorContextProviderProps {
    children: ReactNode;
}

export interface IAddSectionEventData {
    newSectionData: ISection;
}

export interface IEditSectionEventData {
    oldSectionData: ISection;
    newSectionData: ISection;
}

export interface IDeleteSectionEventData {
    deletedSectionData: ISection;
}

export interface IAddRowEventData {
    sectionId: string;
    row: number;
}

export interface IAddElementEventData {
    newElementData: IElement;
}

export interface IEditElementEventData {
    oldElementData: IElement;
    newElementData: IElement;
}

export interface IDeleteElementEventData {
    deletedElementData: IElement;
}

export type IEventData = {
    data: IAddSectionEventData | IEditSectionEventData | IDeleteSectionEventData | IAddRowEventData | IAddElementEventData | IDeleteElementEventData | IEditElementEventData;
}

export type ISusbscribe = {
    eventName: EditorEventTypes;
    callback: (eventInfo: IEventInfo) => void;
}

export interface IEventInfo {
    eventName: EditorEventTypes;
    timestamp: Date;
    detail: IEventData;
}
