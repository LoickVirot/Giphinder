import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom'

import store from './stores/store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home';
import SearchGifs from './components/SearchGifs';
import NavBar from './components/NavBar';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <NavBar />
                <Route path='/' component={Home} exact={true}/>
                <Route path='/search/:term' component={SearchGifs} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
