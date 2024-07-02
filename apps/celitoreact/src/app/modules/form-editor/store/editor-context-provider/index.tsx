import React, { useState } from 'react';
import { ISection, IEditorContextProps, IElement, IEditorContextProviderProps, IElementInput, ElementTypes, EditorEventTypes, IEventData, IEventInfo, ISusbscribe} from './types';
import { v4 as uuidv4 } from 'uuid';

const defaultEditorStatus = {
    name: "",
    showSections: false,
    sections: [{id: uuidv4(), hidden: false}],
    showLogger: false,
};

export const EditorContext = React.createContext<IEditorContextProps|undefined>(undefined);

// Create Provider
export default function(props: IEditorContextProviderProps) {
    const [name,setName] = useState(defaultEditorStatus.name);
    const [showSections,setShowSections] = useState(defaultEditorStatus.showSections);
    const [showLogger,setShowLogger] = useState(defaultEditorStatus.showLogger);
    const [sections,setSections] = useState<ISection[]>(defaultEditorStatus.sections);
    const [eventsSubscribers, setEventsSubscribers] = useState<ISusbscribe[]>([]);
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

    const Subscribe = (subscribers: ISusbscribe[]) => {
        setEventsSubscribers([...eventsSubscribers, ...subscribers]);
    } 

    const Unsubscribe = (unSubscribers: ISusbscribe[]) => {
        setEventsSubscribers(eventsSubscribers.filter(subscriber => { unSubscribers.forEach(unSubscriber => { if (unSubscriber.eventName === subscriber.eventName && unSubscriber.callback === subscriber.callback) return false}); return true;}));
    }
      
    const Publish = (eventName: EditorEventTypes, data: IEventData) => {
        eventsSubscribers.forEach(subscriber => {
            if (subscriber.eventName === eventName) {
                subscriber.callback({eventName: eventName, timestamp: new Date(), detail: data});
            }
        });
    }

    const AddSection = () => {
        const newSection: ISection = {id: uuidv4(), hidden: false};
        Publish(EditorEventTypes.OnAddSection, {data: {newSectionData: newSection}});
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
        for(let i=0;i<elementsToAdd.length;i++) {
            Publish(EditorEventTypes.OnAddElement, {data: {newElementData: elementsToAdd[i]}});
        }
        setElements([...elements,...elementsToAdd]);
        ClearErrors();
    }

    const EditSection = (section: ISection) => {
        const index = sections.findIndex(x => x.id === section.id);
        if (index>=0) {
            Publish(EditorEventTypes.OnEditSection, {data: {oldSectionData: sections[index], newSectionData: section}});
            sections[index] = {...section};
        } else {
            throw new Error(`Section not found: ${section.id}`);
        }
        setSections([...sections]);
        ClearErrors();
    }

    const DeleteSection = (id: string) => {
        const elementsRemoved = elements.filter(x => x.sectionId === id);
        for(let i=0;i<elementsRemoved.length;i++) {
            Publish(EditorEventTypes.OnDeleteElement, {data: {deletedElementData: elementsRemoved[i]}});
        }
        const elementsFiltered = elements.filter(x => x.sectionId !== id);
        setElements([...elementsFiltered]);
        const index = sections.findIndex(x => x.id === id);
        if (index !== -1) {
            Publish(EditorEventTypes.OnDeleteSection, {data: {deletedSectionData: sections[index]}});
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
        Publish(EditorEventTypes.OnAddRow, {data: {sectionId: sectionId, row: maxRowNum + 1}});
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
        for(let i=0;i<elementsToAdd.length;i++) {
            Publish(EditorEventTypes.OnAddElement, {data: {newElementData: elementsToAdd[i]}});
        }
        setElements([...elements,...elementsToAdd]);
        ClearErrors();
    }

    const AddElement = (element: IElement) => {
        Publish(EditorEventTypes.OnAddElement, {data: {newElementData: element}});
        setElements([...elements,element]);
        ClearErrors();
    }

    const EditElement = (element: IElement) => {
        const index = elements.findIndex(x => x.id === element.id);
        if (index !== -1) {
            Publish(EditorEventTypes.OnEditElement, {data: {oldElementData: elements[index], newElementData: element}});
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
            Publish(EditorEventTypes.OnDeleteElement, {data: {deletedElementData: elements[index]}});
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
            showLogger,
            ShowLogger: setShowLogger,
            sections,
            elements,
            AddSection,
            EditSection,
            DeleteSection,
            AddRow,
            AddElement,
            EditElement,
            DeleteElement,
            ShowHideSection,
            ValidateForm,
            Subscribe,
            Unsubscribe,
        }}>
            {props.children}
        </EditorContext.Provider>
    )
}
