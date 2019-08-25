import React from 'react'
import './search.css'
class Search extends React.Component {
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
        return (
            <div className="col-md-6">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    <button type="submit" className="btn btn-primary"
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