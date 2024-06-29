import { useContext } from 'react';
import * as S from './styles';
import { EditorContext } from '../../store/editor-context-provider';

export default function EditorAcctionButtons() {
    const editorContext = useContext(EditorContext);
    const handleSave = () => {
        editorContext?.ValidateForm();
    }
    return (
        <S.RootContainer>
            <S.SaveButton onClick={() => handleSave() }>Save Changes</S.SaveButton>
        </S.RootContainer>
    )    
}