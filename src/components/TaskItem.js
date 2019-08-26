import React from 'react'
class TaskItem extends React.Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }
    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
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
                        <button type="button" className="btn btn-primary mr-2" onClick={this.onDelete}>Delete</button>
                        <button type="button" className="btn btn-primary" onClick={this.onUpdate}>Edit</button>
                    </div>
                </td>
            </tr>
        )
    }

}

export default TaskItem;