import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = ({
      tasks: []
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

  onGenarateDate = () =>{
    var tasks = [
      {
        id: this.generateID(),
        name: 'Cleanning',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Swimming',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Study',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Clean',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Clean',
        status: true
      }
    ]

    this.setState({
      tasks: tasks
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks)
  }

  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  render() {

    var {tasks} = this.state;
    console.log("this.props" + JSON.stringify(tasks))
    return (
      <div className="container">
        <h1 className="mt-5 text-center">Task Management</h1>

        <div className="row">
          <div className="col-md-4">
            <TaskForm />
          </div>

          <div className="col-md-8">

            <button type="submit" className="btn btn-primary mb-2">
              <span>Add new task</span>
            </button>

            <button type="button" className="btn btn-danger mb-2"
              onClick={this.onGenarateDate}
            >
              <span>Genarate data</span>
            </button>

            <div className="row mb-2">
              <Control />
            </div>

            <div className="row">
              <div className="col-md-12">
                <TaskList tasks={tasks}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
