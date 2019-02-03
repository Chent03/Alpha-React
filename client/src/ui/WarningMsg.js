import React from 'react';
import { Message } from 'semantic-ui-react';

const WarningMsg = ({text, size}) => {
    return (
        <Message 
            className="warningMsg"
            warning 
            size={size}>
            <Message.Header>{text}</Message.Header>
        </Message>
    )
}

export default WarningMsg;