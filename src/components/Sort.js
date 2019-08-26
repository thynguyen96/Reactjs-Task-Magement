import React from 'react'

class Sort extends React.Component {

    constructor(props){
        super(props);
    }

    onclick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="form-group">
                    {/* <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select> */}

                    <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={() => this.onclick('name', 1)}>A > Z</a>
                            <a className="dropdown-item"  onClick={() => this.onclick('name', -1)}>Z > A</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item"  onClick={() => this.onclick('status', 1)}>Active</a>
                            <a className="dropdown-item"  onClick={() => this.onclick('status', -1)}>Deactive</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Sort;