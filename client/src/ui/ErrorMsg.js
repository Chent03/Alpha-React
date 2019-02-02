import React from 'react';

import { Message} from 'semantic-ui-react';

const ErrorMsg = ({text, size}) => {
    return (
        <Message negative size={size}>
            <Message.Header>{text}</Message.Header>
        </Message>
    )
}

export default ErrorMsg;
