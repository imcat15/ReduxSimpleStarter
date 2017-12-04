// As we know that React component can show other components
// So we just create a component in this file
import React, { Component } from 'react';
// With the above syntax, curly braces mean importing
// named export under the name 'React'.
// It's symbolic of 'const Component = React.Component;'

class SearchBar extends Component /* can be React.Component*/ {
    constructor(props) {
        // Super is the same as callparent
        super(props);

        this.state = { term: 'Fuck you' };
    }

    render() {
        // The following syntax expressing how to handle user event
        // Think simple, 'onChange' is a property combining 'on' key word
        // and event name ('change'). And it's using camelCase
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

// The following syntax used to give the component for the others
// so that they can import and render this one as well.
export default SearchBar;