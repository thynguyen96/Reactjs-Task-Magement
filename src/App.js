import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = ({
      tasks: [],
      isDisplayForm: false
    })
  }

  componentWillMount(){

    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      })
    }
  }



  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  onToggleForm = () => {
    this.setState({isDisplayForm : true})
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  onSubmit = (data) => {
    var {tasks} = this.state;
    data.id = this.generateID();
    tasks.push(data);
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
     
  }

  onUpdateStatus = (result) => {
    console.log("result " + result)
  }

  

  render() {

    var {tasks, isDisplayForm} = this.state;
    var elemTaskForm = isDisplayForm ? <TaskForm 
    onSubmit={this.onSubmit}
    
    onCloseForm={this.onCloseForm}/> : ''
    return (
      <div className="container">
        <h1 className="mt-5 text-center">Task Management</h1>

        <div className="row">
          <div className={isDisplayForm ? 'col-md-4' : ''}>
            {elemTaskForm}
          </div>

          <div className={isDisplayForm ? 'col-md-8' : 'col-md-12'}>

            <button type="submit" className="btn btn-primary mb-2" onClick={this.onToggleForm}>
              <span>Add new task</span>
            </button>

            <div className="row mb-2">
              <Control />
            </div>

            <div className="row">
              <div className="col-md-12">
                <TaskList tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
