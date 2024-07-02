import styled from 'styled-components';
import C from '../../../../../assets/themes/colors'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${C.PRIMARY_BUTTON};
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 100%;
`;
