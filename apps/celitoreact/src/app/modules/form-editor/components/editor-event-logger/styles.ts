import styled from 'styled-components';
import C from '../../../../../assets/themes/colors';
import F from '../../../../../assets/themes/fonts-styling';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 285px;
  height: 250px;
  border: 1px solid #dddddd;
  margin: 15px;
  margin-top: 30px;
  padding: 15px;
  ${F.BODY_FONT};
  color: ${C.TEXT_HIGHLIGHT_COLOR};
  overflow-y: auto;
  overflow-x: hidden;
`;

export const EventsContainer = styled.div`
  display: block;
  width: 280px;
  height: 100%;
`;

export const EventContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  ${F.BODY_FONT};
  color: ${C.TEXT_COLOR};
`;

export const EventAttribute = styled.span`
  ${F.STRONG_FONT};
  color: ${C.TEXT_COLOR};
`;