import React, { Component } from 'react';
import { Route, Link, Redirect, NavLink } from 'react-router-dom';
import './Home.scss';
import List from './List';
import Me from './Me';


function Category(props) {
  return <h3>我是子组件哎</h3>;
}
function StudentList(props) {
  return (
    <ul>
      <li>我是列表</li>
      <li>我是列表</li>
      <li>我是列表</li>
      <li>我是列表</li>
    </ul>
  );
}
class Home extends Component {
  render() {
    return (
      <div className="App">
      {/* <Redirect to={{pathname: '/app'}} /> */}
      <div className='app-head'>
        <span>我是 head</span>
      </div>
      <div className='app-container'>
      <NavLink to={`/list`}>首页</NavLink>
        <Route path="/home/home" component={StudentList} exact />
        <Route path="/home/me" component={Category} />
        <Route path="/home/closedCar" component={List} />
        <Route path="/home/inStock" component={Me} />
        
      </div>
      <div className='app-footer'>
        <div className='app-tab'>
          <NavLink to={`/home/home`}>首页</NavLink>
        </div>
        <div className='app-tab'>
          <NavLink to="/home/closedCar">收车</NavLink>
        </div>
        <div className='app-tab'>
          <NavLink to={`/home/inStock`}>库存</NavLink>
        </div>
        <div className='app-tab'>
          <NavLink to={`/home/me`}>我的</NavLink>
        </div>
      </div>
    </div>
    );

  }
}

export default Home;