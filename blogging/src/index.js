import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={PostsIndex} ></Route>
                    <Route path="/posts/new" component={PostsNew} ></Route>
                    <Route path="/posts/:id" component={PostsShow} ></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);