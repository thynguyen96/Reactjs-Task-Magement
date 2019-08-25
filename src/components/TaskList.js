import React from 'react'
import TaskItem from './TaskItem';

class TaskList extends React.Component {

    // constructor(props){
    //     super(props);
    // }


    render() {

        var {tasks} = this.props;
        var itemTasks = tasks.map((task, index) => {
            return <TaskItem key={task.id} index={index} task={task} 
                onUpdateStatus={this.props.onUpdateStatus}
            />
        })
        return (

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                    {itemTasks}
                </tbody>
            </table>
        )
    }

}

export default TaskList;