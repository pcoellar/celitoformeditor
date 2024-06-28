import styled from 'styled-components';
import Editor from './modules/form-editor/pages/editor-page';
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Editor />
    </StyledApp>
  );
}

export default App;
