import { Dropdown, Icon } from '@fluentui/react';
import { IProps } from './types';

export default function DropDownField (props: IProps) {
    const { iconName, ...restProps } = props;
    const onRenderCaretDown = (): JSX.Element => {
        return (
                props.iconName ?
                <Icon iconName={props.iconName} />
                : <div></div>
        );
    };
    return (
        <div>
            <Dropdown onRenderCaretDown={onRenderCaretDown} styles={{title: {borderRadius: 4, border: '1px solid #cccccc', boxShadow: '0px 1px #bbbbbb'}}} {...restProps} />    
        </div>
    )
}
