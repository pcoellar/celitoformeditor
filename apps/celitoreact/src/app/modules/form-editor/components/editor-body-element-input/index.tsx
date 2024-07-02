import { IComboBoxProps, Icon } from '@fluentui/react';
import * as S from './styles';
import { IProps } from './types';
import ComboBoxField from '../../../shared/components/ComboBoxField';
import { memo, useContext, useEffect, useState } from 'react';
import { EditorContext } from '../../store/editor-context-provider';
import ContextMenu from '../../../shared/components/ContextMenu';
import { IElementInput } from '../../store/editor-context-provider/types';

const EditorBodyElementInput = (props: IProps) => {
    const editorContext = useContext(EditorContext);
    const [rowSize,setRowSize] = useState(99);
    const [openContextMenu, setOpenContextMenu] = useState(false);

    useEffect(() => {
        const elements = editorContext?.elements.filter((x) => x.sectionId===props.element.sectionId && x.row===props.element.row);
        let total=0;
        if (elements) {
            for(let i=0;i<elements?.length;i++) {
                total+=elements[0].size;
            }
        }
        setRowSize(total);
    },[editorContext?.elements,editorContext?.elements.length,props.element.row,props.element.sectionId]);

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

    const handleComboOnChange: IComboBoxProps['onChange'] = (event, option) => {
      editorContext?.EditElement({...props.element,textOption:option?.key as string} as IElementInput);
    }

    return (
        <S.RootContainer style={{width: `${props.element.size}%`}}>
            <S.Text>
                <S.ComboContainer>
                    <ComboBoxField options={optionsInput} placeholder='+ Add Input' onChange={handleComboOnChange} />
                </S.ComboContainer>
                <S.IconContainer onClick={() => setOpenContextMenu(!openContextMenu)}>
                  <Icon iconName='More'/>
                </S.IconContainer>
                {
                  openContextMenu && 
                  <ContextMenu items={
                    [
                      {
                        text: 'Set Layout Rules',
                        header: true,
                      },
                      {
                        iconName: 'SkypeMinus',
                        text: 'Field Width',
                        itemsSubmenu: [
                          {
                            text: 'Small' , 
                            onClick:()=>{editorContext?.EditElement({...props.element,size:33})}, 
                            disabled:rowSize+33-props.element.size>100,
                            selected:props.element.size===33,
                          },
                          {
                            text: 'Medium' , 
                            onClick:()=>{editorContext?.EditElement({...props.element,size:50})}, 
                            disabled:rowSize+50-props.element.size>100,
                            selected:props.element.size===50,
                          },
                          {
                            text: 'Large' , 
                            onClick:()=>{editorContext?.EditElement({...props.element,size:66})}, 
                            disabled:rowSize+66-props.element.size>100,
                            selected:props.element.size===66,
                          },
                          {
                            text: 'Extra Large' , 
                            onClick:()=>{editorContext?.EditElement({...props.element,size:99})}, 
                            disabled:rowSize+99-props.element.size>100,
                            selected:props.element.size===99,
                          },
                        ]
                      },
                      {
                        iconName: 'OpenEnrollment',
                        text: 'Edit Field',
                      },
                      {
                        iconName: 'Trash',
                        text: 'Delete',
                        onClick: () => {
                            handleDelete(props.element.id)
                        } 
                      },
                    ]
                    }
                    closeFunction={() => setOpenContextMenu(false)}
                  />
                }
            </S.Text>            
            {
              props.element.errorMsg &&
              <S.Error>{props.element.errorMsg}</S.Error>
            }
        </S.RootContainer>
    )
}

export default memo(EditorBodyElementInput);