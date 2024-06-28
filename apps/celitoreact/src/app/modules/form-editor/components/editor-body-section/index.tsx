import { IProps } from "./types";
import * as S from "./styles";
import { Icon } from "@fluentui/react";
import { useContext } from "react";
import { EditorContext } from "../../store/editor-context-provider";
import EditorBodyRows from "../editor-body-rows";

export default function EditorBodySection(props: IProps) {
    const editorContext = useContext(EditorContext);
    const handleShowHide = (id: string) => {
        editorContext?.ShowHideSection(id);
    }
    const handleAddRow = (sectionId: string) => {
        editorContext?.AddRow(sectionId);
    }
    
    return (
        <S.RootContainer>
            <S.SectionContainer>
                <S.Title style={{color: props.section.title?"#666666":"#bbbbbb"}}>
                    {props.section.title || 'Section Name'}
                </S.Title>
                <S.IconContainer>
                    <Icon onClick={() => handleShowHide(props.section.id)} iconName={props.section.hidden?'ChevronDown':'ChevronUp'} style={{cursor: 'pointer'}} />
                </S.IconContainer>
            </S.SectionContainer>
            {
                !props.section.hidden &&
                <EditorBodyRows id={props.section.id}/>
            }
            <S.AddRowContainer style={{cursor: "pointer"}} onClick={() => handleAddRow(props.section.id)}>
                + Add Row
            </S.AddRowContainer>
        </S.RootContainer>
    )
}