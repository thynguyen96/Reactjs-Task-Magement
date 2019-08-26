import React from 'react'
import TaskItem from './TaskItem';

class TaskList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            filterName:'',
            filterStatus: -1 // -1: all, 1: active, 0: deactive
        }
    }

    onChange = (event) => {
        var {filterName, filterStatus} = this.state;
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : filterName,
            name === 'filterStatus' ? value : filterStatus
        )

        this.setState({
            [name] :value,
        })

    }

    render() {

        var {tasks} = this.props;
        var {filterName, filterStatus} = this.state;
        var itemTasks = tasks.map((task, index) => {
            return <TaskItem key={task.id} index={index} task={task} 
                onUpdateStatus={this.props.onUpdateStatus}
                onUpdate={this.props.onUpdate}
                onDelete={this.props.onDelete}
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
                            <input type="text" className="form-control" 
                                name="filterName"
                                value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <div className="form-group">
                                <select className="form-control"
                                name="filterStatus"
                                value={filterStatus}
                                onChange={this.onChange}
                                >
                                    <option value={-1}>All</option>
                                    <option value={1}>Active</option>
                                    <option value={0}>Deactive</option>
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