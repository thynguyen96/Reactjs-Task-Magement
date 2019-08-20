import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        )
    }

}

export default Search;