import styled from 'styled-components';
import C from '../../../../../assets/themes/colors';
import F from '../../../../../assets/themes/fonts-styling';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  margin-left: 15px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
`;

export const ChecksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Spacer = styled.div`
  width: 20px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-right: 15px;
`;

export const SectionsContainer = styled.div`
  color: ${C.TEXT_COLOR}
`;

export const Label = styled.div`
  ${F.LABEL_FONT};
  color: ${C.LABEL_COLOR};
  padding-bottom: 7px;
`;

export const Input = styled.div`
  ${F.INPUT_FONT};
  color: ${C.TEXT_COLOR};
`;

export const Check = styled.div`
  display: flex;
  flex-direction: row;
  ${F.INPUT_FONT};
  color: ${C.TEXT_COLOR};
`;
