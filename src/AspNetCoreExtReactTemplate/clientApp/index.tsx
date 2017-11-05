import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './app/App'; // app components
import { launch } from '@extjs/reactor';

// Polyfills
import 'whatwg-fetch';
import './polyfills/object-assign';
import './polyfills/array-find';


let viewport;

const render = (Component, target) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        target
    )
}

launch(target => render(App, viewport = target));

// Allow Hot Module Replacement

declare var module: any;

if (module.hot) {
    module.hot.accept('./', () => render(App, viewport));
}