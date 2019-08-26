import React from 'react'

import Search from './Search';
import Sort from './Sort';
class Control extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
            <Search onSearch={this.props.onSearch}
            
            />

            <Sort 
            onSort={this.props.onSort}
            sortBy={this.props.sortBy}
            sortValue={this.props.sortValue}
            />
            </>
        )
    }

}

export default Control;