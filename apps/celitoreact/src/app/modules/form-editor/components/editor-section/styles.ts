import styled from 'styled-components';
import C from '../../../../../assets/themes/colors';
import F from '../../../../../assets/themes/fonts-styling';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 55px;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${C.PRIMARY_BUTTON_BG};
  color: ${C.PRIMARY_BUTTON_TEXT};
  border-radius: 5px;
`;

export const Title = styled.div`
  width: 100%;
  ${F.ACTION_FONT};
  margin-left: 15px;
`;

export const IconContainer = styled.div`
  width: 35px;
`;
