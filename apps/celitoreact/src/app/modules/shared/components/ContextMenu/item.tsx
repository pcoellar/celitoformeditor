import { IPropsItem } from "./types";
import * as S from './styles';
import { Icon } from "@fluentui/react";
import ContextMenuSubItems from "./subitems";
import { useState } from "react";

export default function ContextMenuItem(props: IPropsItem){
    const [openSubMenu,setOpenSubMenu] = useState(false);
    const handleOnClick = () => {
        if (props.item.disabled) {
            return;
        }
        if (props.item.itemsSubmenu) {
            setOpenSubMenu(!openSubMenu);
        }
        if (props.item.onClick) {
            props.item.onClick();
            props.closeFunction();
        }
    }
    return (
        <S.ItemContainer itemDisabled={props.item.disabled} isHeader={props.item.header}>
            <S.IconContainer>
                {
                    <Icon iconName={props.item.iconName} onClick={() => handleOnClick()}/>
                }
            </S.IconContainer>
            <S.Text itemSelected={props.item.selected} itemDisabled={props.item.disabled} isHeader={props.item.header} onClick={() => handleOnClick()}>
                {props.item.text}
            </S.Text>
            <S.IconContainer>
                {
                    props.item.itemsSubmenu &&
                    <Icon iconName={!openSubMenu?'ChevronRightMed':'ChevronLeftMed'} onClick={()=> handleOnClick()} />
                }
            </S.IconContainer>
            {
                props.item.itemsSubmenu && openSubMenu && 
                <div style={{position: "relative", top: "-30px"}}>
                    <ContextMenuSubItems subitems={props.item.itemsSubmenu} closeFunction={props.closeFunction}/>
                </div>
            }
        </S.ItemContainer>
    )
}