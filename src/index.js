import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';


const render = Component => {
    ReactDOM.render(<Component/>,  document.getElementById('app'));
}

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        render(NextApp);
    });
}


