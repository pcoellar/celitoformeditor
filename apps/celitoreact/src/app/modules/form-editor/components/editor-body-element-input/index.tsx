import { DefaultButton, Icon } from '@fluentui/react';
import * as S from './styles';
import { IProps } from './types';
import ComboBoxField from '../../../shared/components/ComboBoxField';
import { memo, useContext, useEffect, useState } from 'react';
import { useConst } from '@fluentui/react-hooks';
import { ContextualMenuItemType, IContextualMenuProps } from '@fluentui/react/lib/ContextualMenu';
import { EditorContext } from '../../store/editor-context-provider';

const EditorBodyElementInput = (props: IProps) => {
    const editorContext = useContext(EditorContext);
    const [rowSize,setRowSize] = useState(100);

    useEffect(() => {
        const elements = editorContext?.elements.filter((x) => x.sectionId===props.element.sectionId && x.positionOnRow===props.element.positionOnRow);
        let total=0;
        if (elements) {
            for(let i=0;i<elements?.length;i++) {
                total+=elements[0].size;
            }
        }
        setRowSize(total);
    },[editorContext?.elements,editorContext?.elements.length,props.element.positionOnRow,props.element.sectionId]);

    const optionsInput = [
        {text: 'Title', key: '1'}, 
        {text: 'Summary for changes', key: '2'}, 
        {text: 'Is the document in revision', key: '3'},
        {text: 'Follow up comment', key: '4'},
        {text: 'Check in comment', key: '5'},
    ];
    const handleDelete = (id: string) => {
        editorContext?.DeleteElement(id);
    }
    const menuProps = useConst<IContextualMenuProps>(() => ({
        shouldFocusOnMount: true,
        items: [
          {
            key: 'title',
            iconProps: { iconName: 'Web Components' },
            itemType: ContextualMenuItemType.Header,
            text: 'Set Layout Rules',
          },
          {
            key: 'width',
            iconProps: { iconName: 'SkypeMinus' },
            subMenuProps: {
                items: [
                  { key: 'small', text: 'Small' , onClick:()=>{editorContext?.ChangeElement({...props.element,size:33})}, disabled:rowSize+33>100},
                  { key: 'medium', text: 'Medium' , onClick:()=>{editorContext?.ChangeElement({...props.element,size:50})}, disabled:rowSize+50>100},
                  { key: 'large', text: 'Large' , onClick:()=>{editorContext?.ChangeElement({...props.element,size:66})}, disabled:rowSize+66>100},
                  { key: 'extralarge', text: 'Extra Large' , onClick:()=>{editorContext?.ChangeElement({...props.element,size:99})}, disabled:rowSize+99>100},
                ],
              },
            text: 'Field Width',
          },
          {
            key: 'edit',
            iconProps: { iconName: 'OpenEnrollment' },
            text: 'Edit Field',
          },
          {
            key: 'delete',
            iconProps: { iconName: 'Trash' },
            text: 'Delete',
            onClick: () => {
                handleDelete(props.element.id)
            } 
          },
        ],
      }));
      const buttonStyles = {
        root: {
          maxWidth: '20px',
          minWidth: '20px',
          width: '20px',
          paddingRight: '24px', // Adjust padding to accommodate the icon space
          selectors: {
            '.ms-Button-menuIcon': {
              // Hide the arrow icon
              display: 'none',
            },
          },
        },
      };
    
    return (
        <S.RootContainer style={{width: `${props.element.size}%`}}>
            <S.Text>
                <S.ComboContainer>
                    <ComboBoxField options={optionsInput} placeholder='+ Add Input' />
                </S.ComboContainer>
                <DefaultButton menuProps={menuProps} iconProps={{ iconName: 'More' }} styles={buttonStyles} />
            </S.Text>
        </S.RootContainer>
    )
}

export default memo(EditorBodyElementInput);