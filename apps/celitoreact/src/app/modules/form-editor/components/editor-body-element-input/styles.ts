import styled from 'styled-components';
import C from '../../../../../assets/themes/colors';
import F from '../../../../../assets/themes/fonts-styling';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const Text = styled.div`
  ${F.ACTION_FONT};
  justify-content: center;
  width: 90%;
`;

export const IconContainer = styled.div`
  width: 35px;
`;
