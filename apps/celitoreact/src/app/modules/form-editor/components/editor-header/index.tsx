import CheckboxField from '../../../shared/components/CheckboxField';
import DropDownField from '../../../shared/components/DropDownField';
import InputField from '../../../shared/components/InputField';
import { EditorContext } from '../../store/editor-context-provider';
import * as S from './styles';
import { useContext } from 'react';


export default function EditorHeader() {
    const editorContext = useContext(EditorContext);
    const viewTypeOptions = [{key: 'Create', text: 'Create'}, {key: 'Edit', text: 'Edit'}, {key: 'View', text: 'View'}];
    return (
        <S.RootContainer>
            <S.InputsContainer>
                <S.ColumnContainer>
                    <S.Label>
                        Label *
                    </S.Label>
                    <S.Input>
                        <InputField />
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
            <S.SectionsContainer>
                <CheckboxField label="Show Sections" checked={editorContext?.showSections} onChange={() => editorContext?.ShowSections(!editorContext?.showSections)}/>
            </S.SectionsContainer>
        </S.RootContainer>
    )
}