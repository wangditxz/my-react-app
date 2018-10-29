import React, { Component } from 'react';
import Footer from '../components/Footer';
import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../components/VisibleTodoList';

// css
import './Me.scss';


export default class Me extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="page-header">
                    <AddTodo />
                </div>
                <div className="page-body">
                    <VisibleTodoList />
                </div>
                <div className="page-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}