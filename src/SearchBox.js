import React, {Component} from 'react';

class SearchBox extends Component {
    render(){
        return(
            <div className="p2">
                <input className="pa3 ba b--green bg-lightest-blue"
                 type='search' placeholder='search robots.'/>
            </div>
        )
    }
}

export default SearchBox