import React from 'react'

class TaskForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: '',
            name : '',
            status: false
        }
    }

    componentWillMount(){
        if(this.props.taskEditing){
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status,
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.taskEditing){
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status,
            })
        }
        
        if(!nextProps.taskEditing){
            this.setState({
                id: '',
                name : '',
                status: false
            })
        }
    }
        
    onCloseForm = () =>{
        this.props.onCloseForm();
    }    

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true :false
        }
        this.setState({
            [name] : value,
        })
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
    }

    onClear = () => {
        this.setState({
            name : '',
            state: false
        })
    }

    render() {
        var {id} = this.state;

        return (
            <div className="card">
                <div className="card-header">
                    <span>{id ? 'Update Task': 'Add new task'}</span>

                    <button style={{float : "right"}} onClick={this.onCloseForm}>
                        <i className="fas fa-times-circle"></i>
                    </button>
              </div>
                <div className="card-body">

                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" 
                                onChange={this.onChange} 
                                name="name"
                                value={this.state.name}
                                />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                                <select 
                                    className="form-control"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                    >
                                    <option value={true}>Active</option>
                                    <option value={false}>Deactive</option>
                                </select>
                            </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mr-2">Save</button>
                            <button type="button" className="btn btn-primary" onClick={this.onClear}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default TaskForm;