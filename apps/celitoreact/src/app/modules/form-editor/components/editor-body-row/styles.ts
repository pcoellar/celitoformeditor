import styled from 'styled-components';
import C from '../../../../../assets/themes/colors';
import F from '../../../../../assets/themes/fonts-styling';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

export const AddColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${C.TEXT_HIGHLIGHT_COLOR};
  ${F.ACTION_FONT};
  margin-left: 20px;
  height: 30px;
`;
