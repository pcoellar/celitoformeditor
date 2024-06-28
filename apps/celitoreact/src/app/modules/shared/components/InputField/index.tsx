import { TextField, mergeStyles } from '@fluentui/react';
import { IProps } from './types';

export default function InputField (props: IProps) {
    const { backgroundColor, borderColor, shadowColor, ...restProps } = props;
    return (
        <div>
            <TextField {...restProps} 
                styles={
                    {
                        fieldGroup: {borderRadius: 4, border: `1px solid ${borderColor?borderColor:'#cccccc'}`, boxShadow: `0px 1px {shadowColor?shadowColor:'#bbbbbb'}`},
                        field: backgroundColor?{backgroundColor: backgroundColor}:{},
                    }
                }
            />    
        </div>
    )
}
