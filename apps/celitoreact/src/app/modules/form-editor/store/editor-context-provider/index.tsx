import React, { useState } from 'react';
import { ISection, IEditorContextProps, IElement, IEditorContextProviderProps, IElementInput, ElementTypes} from './types';
import { v4 as uuidv4 } from 'uuid';

const defaultEditorStatus = {
    name: "",
    showSections: false,
    sections: [{id: uuidv4(), hidden: false}],
};

export const EditorContext = React.createContext<IEditorContextProps|undefined>(undefined);

// Create Provider
export default function(props: IEditorContextProviderProps) {
    const [name,setName] = useState(defaultEditorStatus.name);
    const [showSections,setShowSections] = useState(defaultEditorStatus.showSections);
    const [sections,setSections] = useState<ISection[]>(defaultEditorStatus.sections);
    const defaultElements: IElement[] = [
        {
            id: uuidv4(),
            sectionId: defaultEditorStatus.sections[0].id,
            row: 1,
            type: ElementTypes.Input,
            size: 33,         
        },
        {
            id: uuidv4(),
            sectionId: defaultEditorStatus.sections[0].id,
            row: 1,
            type: ElementTypes.Input,
            size: 33,         
        },
        {
            id: uuidv4(),
            sectionId: defaultEditorStatus.sections[0].id,
            row: 1,
            type: ElementTypes.Input,
            size: 33,         
        },
    ];
    const [elements,setElements] = useState<IElement[]>(defaultElements);

    const AddSection = () => {
        const newSection: ISection = {id: uuidv4(), hidden: false};
        setSections([...sections, newSection]);
        const elementsToAdd: IElement[] = [
            {
                id: uuidv4(),
                sectionId: newSection.id,
                row: 1,
                type: ElementTypes.Input,
                size: 33,         
            },
            {
                id: uuidv4(),
                sectionId: newSection.id,
                row: 1,
                type: ElementTypes.Input,
                size: 33,         
            },
            {
                id: uuidv4(),
                sectionId: newSection.id,
                row: 1,
                type: ElementTypes.Input,
                size: 33,         
            },
        ];
        setElements([...elements, ...elementsToAdd]);
        ClearErrors();
    }

    const ChangeSection = (section: ISection) => {
        const index = sections.findIndex(x => x.id === section.id);
        if (index>=0) {
            sections[index] = {...section};
        } else {
            throw new Error(`Section not found: ${section.id}`);
        }
        setSections([...sections]);
        ClearErrors();
    }

    const DeleteSection = (id: string) => {
        const index = sections.findIndex(x => x.id === id);
        if (index !== -1) {
            sections.splice(index, 1);
        } else {
            throw new Error(`Section not found: ${id}`);
        }
        setSections([...sections]);
        ClearErrors();
    }

    const ShowHideSection = (id: string) => {
        const index = sections.findIndex(x => x.id === id);
        if (index !== -1) {
            sections[index].hidden = !sections[index].hidden;
        } else {
            throw new Error(`Section not found: ${id}`);
        }
        setSections([...sections]);
        ClearErrors();
    }

    const AddRow = (sectionId: string) => {
        const elementsOnSection: IElement[] = elements.filter((x) => x.sectionId === sectionId);
        let maxRowNum = 0;
        for(let i=0;i<elementsOnSection.length;i++) {
            if (elementsOnSection[i].row>maxRowNum) {
                maxRowNum = elementsOnSection[i].row;
            }
        }
        const elementsToAdd: IElement[] = [
            {
                id: uuidv4(),
                sectionId: sectionId,
                row: maxRowNum+1,
                type: ElementTypes.Input,
                size: 33,         
            },
            {
                id: uuidv4(),
                sectionId: sectionId,
                row: maxRowNum+1,
                type: ElementTypes.Input,
                size: 33,         
            },
            {
                id: uuidv4(),
                sectionId: sectionId,
                row: maxRowNum+1,
                type: ElementTypes.Input,
                size: 33,         
            },
        ];
        setElements([...elements, ...elementsToAdd]);  
        ClearErrors();
    }

    const AddElement = (element: IElement) => {
        setElements([...elements,element]);
        ClearErrors();
    }

    const ChangeElement = (element: IElement) => {
        const index = elements.findIndex(x => x.id === element.id);
        if (index !== -1) {
            elements[index] = {...element};
        } else {
            throw new Error(`Element not found: ${element.id}`);
        }
        setElements([...elements]);
        ClearErrors();
    }

    const DeleteElement = (id: string) => {
        const index = elements.findIndex(x => x.id === id);
        if (index !== -1) {
            elements.splice(index, 1);
        } else {
            throw new Error(`Element not found: ${id}`);
        }
        setElements([...elements]);
        ClearErrors();
    }

    const ValidateForm = (): boolean => {
        let result = true;
        for(let i=0;i<elements.length;i++) {
            if (elements[i].type === ElementTypes.Input) {
                if (!((elements[i] as IElementInput).textOption)) {
                    elements[i].errorMsg = "Field is required";
                    result = false;
                }
            }
        }
        for(let i=0;i<sections.length;i++) {
            if (!(sections[i].title)) {
                sections[i].errorMsg = "Field is required";
                result = false;
            }
        }
        setElements([...elements]);
        return result;
    }

    const ClearErrors = () => {
        for(let i=0;i<elements.length;i++) {
            elements[i].errorMsg = "";
        }
        for(let i=0;i<sections.length;i++) {
            sections[i].errorMsg = "";
        }
    }

    return (
        <EditorContext.Provider value={{
            name,
            SetLayoutName: setName,
            showSections,
            ShowSections: setShowSections,
            sections,
            elements,
            AddSection,
            ChangeSection,
            DeleteSection,
            AddRow,
            AddElement,
            ChangeElement,
            DeleteElement,
            ShowHideSection,
            ValidateForm,
        }}>
            {props.children}
        </EditorContext.Provider>
    )
}
