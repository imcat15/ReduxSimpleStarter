// 'react' used to translate JSX to normal Javascript
// - The name space 'React' will retrive JSX syntax in file imported
// - The following syntax also direct to node_modules
import React from 'react';
// 'react-dom' used to render
import ReactDOM from 'react-dom';

// With another folder we need to direct by 'URI'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCkqBA7jnRo4Q4NUxf2oQosks9nlpViRBU';

// The following syntax named JSX used to create a component.
// Remember that we're using ES6,
// so we don't use 'var' key to declare variable anymore,
// use 'const' or 'let' instead. 
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
// After translating, the block code will be as follows:
// var App = function App() {
//     return React.createElement(
//         "div",
//         null,
//         "Hi!"
//     );
// };

// The following syntax used to render the component to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
