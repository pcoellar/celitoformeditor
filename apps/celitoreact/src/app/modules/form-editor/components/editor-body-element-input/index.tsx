import { Icon } from '@fluentui/react';
import * as S from './styles';
import { IProps } from './types';
import ComboBoxField from '../../../shared/components/ComboBoxField';

export default function EditorBodyElementInput(props: IProps) {
    const optionsInput = [
        {text: 'Title', key: '1'}, 
        {text: 'Summary for changes', key: '2'}, 
        {text: 'Is the document in revision', key: '3'},
        {text: 'Follow up comment', key: '4'},
        {text: 'Check in comment', key: '5'},
    ];
    return (
        <S.RootContainer style={{width: `${props.element.size}%`}}>
            <S.Text>
                <ComboBoxField options={optionsInput} placeholder='+ Add Input' />
            </S.Text>
        </S.RootContainer>
    )
}