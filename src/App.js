import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      tasks: [],
      isDisplayForm: false,
      taskEditing: null,
      filter:
      {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: 'name',
      sortValue: 1

    })
  }

  componentWillMount() {

    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      })
    }
  }



  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  onToggleForm = () => {

    this.setState({
      isDisplayForm: true,
      taskEditing: null
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  onSubmit = (data) => {
    var { tasks } = this.state;
    if (data.id === '') {
      data.id = this.generateID();
      tasks.push(data);
    }
    else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }

  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      this.onToggleForm();
      var taskEditing = tasks[index];
      this.setState({
        taskEditing: taskEditing
      })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      })
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    })
    return result;
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }



  onSearch = (keyword) => {
    this.setState({
      keyword: keyword.toLowerCase()
    })
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })

  }

  render() {
    var { tasks, isDisplayForm, taskEditing, filter, keyword, sortBy, sortValue } = this.state;
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.indexOf(filter.name) !== -1;
        })
      }

      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        }
        else {
          return task.status === (filter.status === 1 ? true : false)
        }
      })
    }

    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.indexOf(keyword) !== -1;
      })
    }

    if (sortBy === 'name') {
      tasks.sort((a, b) => {
        if (a.name > b.name) {
          return sortValue
        }
        else if (a.name < b.name) {
          return -sortValue;
        }
        else {
          return 0;
        }
      })
    }
    else {
      tasks.sort((a, b) => {
        if (a.status > b.status) {
          return -sortValue
        }
        else if (a.status < b.status) {
          return sortValue;
        }
        else {
          return 0;
        }
      })
    }


    var elemTaskForm = isDisplayForm ? <TaskForm
      taskEditing={taskEditing}
      onSubmit={this.onSubmit}

      onCloseForm={this.onCloseForm} /> : ''
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
              <Control
                onSearch={this.onSearch}
                onSort={this.onSort}
                sortBy={sortBy}
                sortValue={sortValue}
              />
            </div>

            <div className="row">
              <div className="col-md-12">
                <TaskList tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onUpdate={this.onUpdate}
                  onDelete={this.onDelete}
                  onFilter={this.onFilter}
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
