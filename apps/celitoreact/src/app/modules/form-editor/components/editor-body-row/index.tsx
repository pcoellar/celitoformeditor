import { useContext, useEffect, useState } from "react";
import { IProps } from "./types";
import { EditorContext } from "../../store/editor-context-provider";
import { ElementTypes, IElement } from "../../store/editor-context-provider/types";
import EditorBodyElementInput from "../editor-body-element-input";
import * as S from "./styles";
import { memo } from "react";
import { v4 as uuidv4 } from 'uuid';

const EditorBodyRow = (props: IProps) => {
    const editorContext = useContext(EditorContext);
    const [rowElements, setRowElements] = useState<IElement[]|undefined>(undefined);
    const [rowSize, setRowSize] = useState(99);

    useEffect(() => {
        let totalSize = 0;
        const elements = editorContext?.elements.filter(x => x.sectionId === props.id && x.row === props.row);
        if (elements) {
            for(let i=0;i<elements.length;i++) {
                totalSize += elements[i].size;
            }
        }
        setRowElements(elements);
        setRowSize(totalSize);
    },[editorContext?.elements, props.id, props.row]);

    const handleAddColumn = () => {
        const elementToAdd: IElement = {
            id: uuidv4(),
            sectionId: props.id,
            row: props.row,
            type: ElementTypes.Input,
            size: 33,         
        }
        editorContext?.AddElement(elementToAdd);
    }

    return (
        <S.RootContainer>
        {
            rowElements?.map((element) => {
                if (element.type === ElementTypes.Input) {
                    return (
                        <EditorBodyElementInput key={element.id} element={element}/>
                    )
                }
                return <div></div>
            })
        }
        {
            rowSize<99 &&
            <S.AddColumnContainer onClick={() => handleAddColumn()}>
                + Add a column
            </S.AddColumnContainer>
        }
        </S.RootContainer>
    )
}
export default memo(EditorBodyRow);