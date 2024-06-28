import { useContext } from "react";
import EditorBody from "../../components/editor-body";
import EditorHeader from "../../components/editor-header";
import EditorSections from "../../components/editor-sections";
import { EditorContext } from "../../store/editor-context-provider";
import * as S from "./styles";

export default function Editor() {
    const editorContext = useContext(EditorContext);
    return (
        <S.RootContainer>
            <EditorHeader />
            <S.BodyContainer>
                {
                    editorContext?.showSections &&
                    <EditorSections />
                }
                <EditorBody />
            </S.BodyContainer>
        </S.RootContainer>
    )
}