import { useContext } from "react";
import { IProps } from "./types";
import { EditorContext } from "../../store/editor-context-provider";
import * as S from "./styles";
import EditorBodyRow from "../editor-body-row";
import { memo } from "react";

const EditorBodyRows = (props: IProps) => {
    const editorContext = useContext(EditorContext);
    const rows: number[] = [];
    const elements = editorContext?.elements.filter(x => x.sectionId === props.id);
    if (elements) {
        for(let i=0;i<elements?.length;i++) {
            if (!rows.includes(elements[i].row)) {
                rows.push(elements[i].row);
            }
        }
    }

    return (
        <S.RootContainer>
        {
            rows?.map((row) => {
                return <EditorBodyRow key={props.id + row} id={props.id} row={row}/>
            })
        }
        </S.RootContainer>        
    )
}

export default memo(EditorBodyRows);