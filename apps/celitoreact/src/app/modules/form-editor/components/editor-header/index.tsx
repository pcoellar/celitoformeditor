import CheckboxField from '../../../shared/components/CheckboxField';
import DropDownField from '../../../shared/components/DropDownField';
import InputField from '../../../shared/components/InputField';
import { EditorContext } from '../../store/editor-context-provider';
import * as S from './styles';
import { useContext } from 'react';


export default function EditorHeader() {
    const editorContext = useContext(EditorContext);
    const viewTypeOptions = [{key: 'Create', text: 'Create'}, {key: 'Edit', text: 'Edit'}, {key: 'View', text: 'View'}];
    const hangleNameChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        editorContext?.SetLayoutName(e.currentTarget.value);
    }
    return (
        <S.RootContainer>
            <S.InputsContainer>
                <S.ColumnContainer>
                    <S.Label>
                        Label *
                    </S.Label>
                    <S.Input>
                        <InputField value={editorContext?.name} onChange={hangleNameChange} />
                    </S.Input>
                </S.ColumnContainer>
                <S.ColumnContainer>
                    <S.Label>
                        View Type
                    </S.Label>
                    <S.Input>
                        <DropDownField options={viewTypeOptions} iconName='Search' defaultSelectedKey={'Create'}/>
                    </S.Input>
                </S.ColumnContainer>
            </S.InputsContainer>
            <S.ChecksContainer>
                <S.SectionsContainer>
                    <CheckboxField label="Show Sections" checked={editorContext?.showSections} onChange={() => editorContext?.ShowSections(!editorContext?.showSections)}/>
                </S.SectionsContainer>
                <S.Spacer/>
                <S.SectionsContainer>
                    <CheckboxField label="Show Logger" checked={editorContext?.showLogger} onChange={() => editorContext?.ShowLogger(!editorContext?.showLogger)}/>
                </S.SectionsContainer>
            </S.ChecksContainer>
        </S.RootContainer>
    )
}