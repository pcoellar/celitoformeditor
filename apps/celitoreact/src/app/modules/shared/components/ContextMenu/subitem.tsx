import { Icon } from "@fluentui/react";
import { IPropsItemSubMenu } from "./types";
import * as S from './styles';

export default function ContextMenuSubItem(props: IPropsItemSubMenu){
    const handleOnClick = () => {
        if (props.subitem.disabled) {
            return;
        }
        if (props.subitem.onClick) {
            props.subitem.onClick();
            props.closeFunction();
        }
    }
    return (
        <S.ItemContainer itemDisabled={props.subitem.disabled} isHeader={props.subitem.header}>
            <S.IconContainer>
                {
                    <Icon iconName={props.subitem.iconName} onClick={() => handleOnClick()}/>
                }
            </S.IconContainer>
            <S.Text itemSelected={props.subitem.selected} itemDisabled={props.subitem.disabled} isHeader={props.subitem.header} onClick={() => handleOnClick()}>
                {props.subitem.text}
            </S.Text>
        </S.ItemContainer>
    )
}