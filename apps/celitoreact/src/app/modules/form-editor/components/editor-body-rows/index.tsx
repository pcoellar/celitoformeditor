import { useContext, useEffect, useState } from "react";
import { IProps } from "./types";
import { EditorContext } from "../../store/editor-context-provider";
import * as S from "./styles";
import EditorBodyRow from "../editor-body-row";

export default function EditorBodyRows(props: IProps) {
    const editorContext = useContext(EditorContext);
    const [rowNumbers, setRowNumbers] = useState<number[]|undefined>(undefined);

    useEffect(() => {
        const elements = editorContext?.elements.filter(x => x.sectionId === props.id);
        if (elements) {
            const rowsList: number[] = [];
            for(let i=0;i<elements?.length;i++) {
                if (!rowsList.includes(elements[i].positionOnRow)) {
                    rowsList.push(elements[i].positionOnRow);
                }
            }
            console.log("rowsList: ", rowsList);
            setRowNumbers(rowsList);
        }
    },[editorContext?.elements, props.id]);

    return (
        <S.RootContainer>
        {
            rowNumbers?.map((row) => {
                return <EditorBodyRow key={props.id + row} id={props.id} row={row}/>
            })
        }
        </S.RootContainer>        
    )
}