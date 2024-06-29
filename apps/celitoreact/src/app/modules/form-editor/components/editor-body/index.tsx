import { useContext } from "react";
import { EditorContext } from "../../store/editor-context-provider";
import EditorBodySection from "../editor-body-section";
import * as S from "./styles";
import { memo } from "react";
import EditorAcctionButtons from "../editor-acction-buttons";

const EditorBody = () => {
    const editorContext = useContext(EditorContext);
    return (
        <S.RootContainer>
        {
            editorContext &&
            editorContext?.sections.map((section) => {
                return (
                    <EditorBodySection key={section.id} section={section} />
                )
            }) 
        }
            <EditorAcctionButtons />
        </S.RootContainer>
    )
}

export default memo(EditorBody);