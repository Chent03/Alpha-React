import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

import Root from './Root';

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root')
);

serviceWorker.unregister();
