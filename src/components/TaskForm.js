import React from 'react'

class TaskForm extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Featured
              </div>
                <div className="card-body">

                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default TaskForm;