import React, {Fragment} from 'react';

import { Loader, Dimmer } from 'semantic-ui-react';

const Loading = ({Message, children, active}) => {
    return (
        <Fragment>
            <Dimmer active={active} inverted>
                <Loader>{Message}</Loader>
            </Dimmer>
            {children}
        </Fragment>
    )
}

export default Loading;
