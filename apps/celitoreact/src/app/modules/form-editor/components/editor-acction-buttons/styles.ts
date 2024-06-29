import styled from 'styled-components';
import C from '../../../../../assets/themes/colors';
import F from '../../../../../assets/themes/fonts-styling';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: right;
`;

export const SaveButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 45px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: 30px;
  background-color: ${C.PRIMARY_BUTTON_BG};
  color: ${C.PRIMARY_BUTTON_TEXT};
  border-radius: 5px;
  cursor: pointer;
  ${F.ACTION_FONT};
`;
