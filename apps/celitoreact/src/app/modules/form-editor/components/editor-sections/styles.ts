import styled from 'styled-components';
import C from '../../../../../assets/themes/colors';
import F from '../../../../../assets/themes/fonts-styling';

export const RootContainer = styled.div`
  display: block;
  width: 90%;
  height: 500px;
  margin-left: 15px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const AddSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 99%;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: ${C.SECONDARY_BUTTON_BG};
  color: ${C.SECONDARY_BUTTON_TEXT};
  border-radius: 5px;
  ${F.ACTION_FONT};
  cursor: pointer;
  border: 1px solid ${C.TEXT_HIGHLIGHT_COLOR}
`;

