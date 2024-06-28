import { Checkbox } from '@fluentui/react';
import { IProps } from './types';

export default function CheckboxField (props: IProps) {
    const { ...restProps } = props;
    return (
        <div>
            <Checkbox {...restProps} />    
        </div>
    )
}
