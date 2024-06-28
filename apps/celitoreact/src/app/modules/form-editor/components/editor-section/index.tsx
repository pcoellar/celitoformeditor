import { IProps } from "./types";
import * as S from './styles';
import { Icon } from "@fluentui/react";
import { useContext, useRef, useState } from "react";
import { EditorContext } from "../../store/editor-context-provider";
import { memo } from "react";


const EditorSection = (props: IProps) => {
    const [text, setText] = useState<string|undefined>(props.title);
    const divRef = useRef<HTMLDivElement>(null);
    const editorContext = useContext(EditorContext);
    const maxLength = 70;

    const handleOnchange = (e:React.FormEvent<HTMLDivElement>,id:string) => {
        let newText = e.currentTarget.textContent || '';
        if (newText.length >= maxLength) {
            newText = newText.substring(0, maxLength);
            setText(newText);
            if (divRef && divRef.current) {
                divRef.current.blur()
            }
        }
        else {
            editorContext?.ChangeSection({ id: props.id, title: newText });
        }
    };

    const handleIconOnClick = (id: string) => {
        editorContext?.DeleteSection(id);
    }

    return (
        <S.RootContainer>
            <S.Title>
                <div ref={divRef} contentEditable={true} onInput={(e) => handleOnchange(e, props.id)} style={{outline: 'none',border: 0}}>{text}</div>
            </S.Title>
            <S.IconContainer><Icon iconName="Trash" onClick={() => handleIconOnClick(props.id)} style={{cursor:"pointer"}} /></S.IconContainer>
        </S.RootContainer>
    )
}

export default memo(EditorSection);