import React from 'react';

import { Message} from 'semantic-ui-react';

const Success = ({text}) => {
    return (
        <Message positive>
            <Message.Header>{text}</Message.Header>
        </Message>
    )
}

export default Success;
