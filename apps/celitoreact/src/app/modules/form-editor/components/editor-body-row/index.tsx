import { useContext, useEffect, useState } from "react";
import { IProps } from "./types";
import { EditorContext } from "../../store/editor-context-provider";
import { ElementTypes, IElement } from "../../store/editor-context-provider/types";
import EditorBodyElementInput from "../editor-body-element-input";
import * as S from "./styles";

export default function EditorBodyRow(props: IProps) {
    const editorContext = useContext(EditorContext);
    const [rowElements, setRowElements] = useState<IElement[]|undefined>(undefined);

    useEffect(() => {
        const elements = editorContext?.elements.filter(x => x.sectionId === props.id && x.positionOnRow === props.row);
        setRowElements(elements);
    },[editorContext?.elements, props.id, props.row]);

    return (
        <S.RootContainer>{props.row}
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
        </S.RootContainer>
    )
}