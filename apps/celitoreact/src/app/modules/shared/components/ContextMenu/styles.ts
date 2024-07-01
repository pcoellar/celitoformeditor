import styled from 'styled-components';
import C from '../../../../../assets/themes/colors';
import F from '../../../../../assets/themes/fonts-styling';


interface IStyleProps {
    itemDisabled?: boolean;
    itemSelected?: boolean;
    isHeader?: boolean;
}

export const RootContainer = styled.div`
    position: relative;
`

export const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 160px;
  border-ratius: 7px;
  border: 1px solid #999999;
  box-shadow: -2px 12px 31px 2px rgba(0,0,0,0.6);
  -webkit-box-shadow: -2px 12px 31px 2px rgba(0,0,0,0.6);
  -moz-box-shadow: -2px 12px 31px 2px rgba(0,0,0,0.6);
  z-index: 1000;
  background-color: white;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 40px;
  &:hover {
    background-color: ${(props: IStyleProps) => (props.itemDisabled ? `` : C.MENU_HOVER_BG)};
  }
  cursor: ${(props: IStyleProps) => (props.itemDisabled || props.isHeader ? `` : `pointer`)};
`;

export const SubMenuContainer = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
    display: flex;
    width: 40px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.div`
    ${(props: IStyleProps) => (props.itemSelected ? F.MENU_SELECTED_FONT : F.MENU_FONT)};
    color: ${(props: IStyleProps) => props.isHeader ? C.TEXT_HIGHLIGHT_COLOR : (props.itemDisabled ? C.MENU_DISABLED_TEXT : C.MENU_TEXT)};
    width: 100%;
`;
