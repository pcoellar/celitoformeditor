import ContextMenuSubItem from "./subitem";
import { IPropsItemsSubMenu } from "./types";
import * as S from './styles';

export default function ContextMenuSubItems(props: IPropsItemsSubMenu) {
    return (
        <S.MenuContainer>
            {
                props.subitems.map((subitem, index)=>{
                    return <ContextMenuSubItem key={index} subitem={subitem} closeFunction={props.closeFunction}/>
                })
            }
        </S.MenuContainer>
    )
}