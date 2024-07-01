import { IProps } from "./types";
import * as S from './styles';
import ContextMenuItem from "./item";
import { useEffect, useRef } from "react";
import useClickedOutside from "../../hooks/useClickOutside";

export default function ContextMenu(props: IProps){
    const menuRef = useRef(null);
    const clickedOutside = useClickedOutside(menuRef);

    useEffect(()=> {
        if (clickedOutside) {
            props.closeFunction();
        }
    },[clickedOutside, props]);

    return (
        <S.RootContainer>
        <S.MenuContainer ref={menuRef}>
        {
            props.items.map((item, index) => {
                return <ContextMenuItem key={index} item={item} closeFunction={props.closeFunction} />
            })
        }
        </S.MenuContainer>
        </S.RootContainer>
    );
}
