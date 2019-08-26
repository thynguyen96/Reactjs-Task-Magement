import React from 'react'
import './search.css'
class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = ({
            keyword: ''
        })
    }

    onChange = (event) => {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        this.setState({
            [name]: value
        })
        // this.props.filterSearch(event.target.value);
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword)
    }
    render() {
        var style = {
            background: "transparent",
            border: 0,
            position: "absolute",
            right: 0,
            top: 0,
            paddingRight: 2,
            width: 40,
            height: 40
        }
        var {keyword} = this.state;
        return (
            <div className="col-md-6">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"
                        onChange={this.onChange}
                        value={keyword}
                        name="keyword"
                     />
                    <button type="button" className="btn btn-primary"
                    onClick={this.onSearch}
                        style={style}>
                        {/* <i className="far fa-search icon_search"></i> */}
                        <i className="fas fa-search icon_search pr-2"></i>
                    </button>
                </div>
            </div>
        )
    }

}

export default Search;