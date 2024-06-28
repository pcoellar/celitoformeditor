import styled from 'styled-components';
import C from '../../../../../assets/themes/colors';
import F from '../../../../../assets/themes/fonts-styling';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 30px;
  background-color: #f8f8f8;
  margin-left: 15px;
  color: ${C.TITLE_COLOR};
  ${F.TITLE_FONT};
`;
