import React from 'react'
import TaskList from './TaskList';

class TaskItem extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    render() {
        var {task, index} = this.props;

        
        
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status ? 'badge badge-danger' : 'badge badge-success'}
                    onClick={this.onUpdateStatus}
                    >{task.status ? 'Active' : 'Deactive'}</span>
                </td>
                <td>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mr-2">Delete</button>
                        <button type="submit" className="btn btn-primary">Edit</button>
                    </div>
                </td>
            </tr>
        )
    }

}

export default TaskItem;