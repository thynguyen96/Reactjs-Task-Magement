import React from 'react'

class TaskItem extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        var {task, index} = this.props;

        
        
        return (
            <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{task.name}</td>
                    <td>
                        <span className={task.status ? 'badge badge-danger' : 'badge badge-success'}>Primary</span>
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