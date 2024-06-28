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
            positionOnRow: 1,
            type: ElementTypes.Input,
            size: 33,         
        },
        {
            id: uuidv4(),
            sectionId: defaultEditorStatus.sections[0].id,
            positionOnRow: 1,
            type: ElementTypes.Input,
            size: 33,         
        },
        {
            id: uuidv4(),
            sectionId: defaultEditorStatus.sections[0].id,
            positionOnRow: 1,
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
                positionOnRow: 1,
                type: ElementTypes.Input,
                size: 33,         
            },
            {
                id: uuidv4(),
                sectionId: newSection.id,
                positionOnRow: 1,
                type: ElementTypes.Input,
                size: 33,         
            },
            {
                id: uuidv4(),
                sectionId: newSection.id,
                positionOnRow: 1,
                type: ElementTypes.Input,
                size: 33,         
            },
        ];
        setElements([...elements, ...elementsToAdd]);
    
    }

    const ChangeSection = (section: ISection) => {
        const index = sections.findIndex(x => x.id === section.id);
        if (index>=0) {
            sections[index] = {...section};
        } else {
            throw new Error(`Section not found: ${section.id}`);
        }
        setSections([...sections]);
    }

    const DeleteSection = (id: string) => {
        const index = sections.findIndex(x => x.id === id);
        if (index !== -1) {
            sections.splice(index, 1);
        } else {
            throw new Error(`Section not found: ${id}`);
        }
        setSections([...sections]);
    }

    const ShowHideSection = (id: string) => {
        const index = sections.findIndex(x => x.id === id);
        if (index !== -1) {
            sections[index].hidden = !sections[index].hidden;
        } else {
            throw new Error(`Section not found: ${id}`);
        }
        setSections([...sections]);
    }

    const AddRow = (sectionId: string) => {
        const elementsOnSection: IElement[] = elements.filter((x) => x.sectionId === sectionId);
        let maxRowNum = 0;
        for(let i=0;i<elementsOnSection.length;i++) {
            if (elementsOnSection[i].positionOnRow>maxRowNum) {
                maxRowNum = elementsOnSection[i].positionOnRow;
            }
        }
        const elementsToAdd: IElement[] = [
            {
                id: uuidv4(),
                sectionId: sectionId,
                positionOnRow: maxRowNum+1,
                type: ElementTypes.Input,
                size: 33,         
            },
            {
                id: uuidv4(),
                sectionId: sectionId,
                positionOnRow: maxRowNum+1,
                type: ElementTypes.Input,
                size: 33,         
            },
            {
                id: uuidv4(),
                sectionId: sectionId,
                positionOnRow: maxRowNum+1,
                type: ElementTypes.Input,
                size: 33,         
            },
        ];
        setElements([...elements, ...elementsToAdd]);  
    }

    const AddElement = (element: IElement) => {
        setElements([...elements,element]);
    }

    const ChangeElement = (element: ISection) => {
        let modElement: ISection|undefined = elements.find(x => x.id === element.id);
        if (modElement) {
            modElement = {...element};
        } else {
            throw new Error(`Element not found: ${element.id}`);
        }
        setElements([...elements]);
    }

    const DeleteElement = (id: string) => {
        const index = elements.findIndex(x => x.id === id);
        if (index !== -1) {
            elements.splice(index, 1);
        } else {
            throw new Error(`Element not found: ${id}`);
        }
        setElements([...elements]);
    }

    const GetRowSize = (id: string): number => {
        let total = 0;
        for(let i=0; i<elements.length; i++) {
            if (elements[i].sectionId === id) {
                total += elements[i].size;
            }
        }
        return total;
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
        }}>
            {props.children}
        </EditorContext.Provider>
    )
}
