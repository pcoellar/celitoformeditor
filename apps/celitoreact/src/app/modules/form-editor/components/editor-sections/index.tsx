import { useContext } from "react";
import { EditorContext } from "../../store/editor-context-provider"
import EditorSection from "../editor-section";
import * as S from './styles';
import { memo } from "react";

const EditorSections = () => {
    const editorContext = useContext(EditorContext);
    return (
        <S.RootContainer>
            {editorContext && editorContext.sections && 
                editorContext.sections.map((section) => (
                    <EditorSection key={section.id} id={section.id} title={section.title} />
                ))
            }
            <S.AddSectionContainer onClick={() => editorContext?.AddSection()}>
                + Add Section
            </S.AddSectionContainer>
        </S.RootContainer>
    )
}

export default memo(EditorSections);