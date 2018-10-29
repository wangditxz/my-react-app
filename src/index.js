import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './page/Home';
import List from './page/List';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thumkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


// reducers
import todoApp from './redux/reducers';
const loggerMiddleware = createLogger();

const customMiddleware = ({ dispatch, getState }) => next => action => {

    console.log('我是自己写的 middleware');
    let r = next(action);
    console.log('我是自己写的 middleware end !!!');
    return r;
  };


const store = createStore(
    todoApp,
    applyMiddleware(
        thumkMiddleware,
        loggerMiddleware, // 记录日志
        customMiddleware   // 自定义
    )
);
console.log(store.getState());
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/home' exect component={Home} />
                <Route path='/list' component={List} />
            </Switch>       
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
