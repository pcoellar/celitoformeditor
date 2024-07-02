import { ComboBox } from '@fluentui/react';
import { IProps } from './types';

export default function ComboBoxField (props: IProps) {
    const { initialIcon, endIcon , ...restProps } = props;
    return (
        <div>
            <ComboBox {...restProps} />    
        </div>
    )
}
