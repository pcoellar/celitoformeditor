import styled from 'styled-components';
import C from '../../../../../assets/themes/colors';
import F from '../../../../../assets/themes/fonts-styling';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: Column;
  width: 100%;
  margin-bottom: 10px;
`;

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${C.SECTION_BG};
  border-radius: 5px;
`
export const Title = styled.div`
  width: 100%;
  ${F.SUBTITLE_FONT};
  margin-left: 15px;
`;

export const IconContainer = styled.div`
  width: 35px;
`;

export const AddRowContainer = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  background-color: ${C.SECONDARY_BUTTON_BG};
  ${F.ACTION_FONT};
  color: ${C.TEXT_HIGHLIGHT_COLOR};
  border-radius: 5px;
`
