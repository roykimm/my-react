import React, { Component } from 'react'
import '../css/App.css';

const tasks = [
    {
        "id": 1,
        "title": "shopping",
        "description": "shopping for computer",
        "completed": false
    },
    {
        "id": 2,
        "title": "play music11",
        "description": "gogo",
        "completed": true
    },
    {
        "id": 3,
        "title": "play music22",
        "description": "gogo",
        "completed": false
    }
]

export class DjangoTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewCompleted : false,
            taskList : tasks
        }
    }

    displayCompleted = status => {
        if(status) {
            return this.setState({ viewCompleted : true});
        }
        return this.setState({ viewCompleted : false});
    }

    renderTabList = () => {
        return (
            <div className="my-5 tab-list">
                <span
                    onclick={() => this.displayCompleted(true)}
                    className={this.state.viewCompleted ? "active" : ""}
                >
                completed
                </span>
                <span
                    onclick={() => this.displayCompleted(false)}
                    className={this.state.viewCompleted ? "active" : ""}
                >
                Incompleted
                </span>
            </div>
        )
    }

    // rendering items in the list (complete || incomplete)
    renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.taskList.filter(
            item => item.completed == viewCompleted
        );

        return newItems.map(item => (
            <li key={item.id} 
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                <span className="">
                    {item.title}
                </span>
            </li>
        ))
    };

    



    render() {
        return (
            <main className="context">
                <h1 className="text-black text-uppercase text-center my-4"> Task Manager </h1>
                <h1 className="row">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <div>
                                <button className="btn btn-warning">Add Task</button>
                            </div>
                            {this.renderTabList()}
                            <ul className="list-group list-group-flush">
                                {this.renderItems()}
                            </ul>

                        </div>
                    </div>
                </h1>
            </main>
        )
    }








}

export default DjangoTodo
