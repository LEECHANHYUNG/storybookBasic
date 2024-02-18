import React from 'react';
import { 
    

    Input
 } from 'reactstrap';


const Checkbox = ({
    id,
    className,
    disabled,
    indeterminate,
    label,
    helpLabel,
    helpPlacement,
    ...props
}) => {
    return (
        <Input
        {...props}
        id={id}
        type="checkbox"
        disabled={disabled}
    />
    );
};

export default Checkbox;