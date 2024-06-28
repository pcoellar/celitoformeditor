import { useContext } from "react";
import { EditorContext } from "../../store/editor-context-provider";
import EditorBodySection from "../editor-body-section";
import * as S from "./styles";

export default function EditorBody() {
    const editorContext = useContext(EditorContext);
    return (
        <S.RootContainer>
        {
            editorContext &&
            editorContext?.sections.map((section) => {
                return (
                    <S.SectionContainer>
                        <EditorBodySection key={section.id} section={section} />
                    </S.SectionContainer>
                )
            }) 
        }
        </S.RootContainer>
    )
}