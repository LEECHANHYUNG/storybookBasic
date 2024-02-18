import React from 'react';
import {Button as RSButton } from 'reactstrap';

const Button = ({ label, ...args}) => {
    return (
        <RSButton {...args}>{label}</RSButton>
    );
};

export default Button;