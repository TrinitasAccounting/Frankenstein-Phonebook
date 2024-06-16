
import { Component } from "react";

import './search-box.styles.css';                               //___had to import our CSS page for specific stlying of this component


const SearchBox = (props) => {
    const { className } = props;                                //___can assign your variables this way, or in the way below like so 'placeholder=(props.placeholder)
    const { placeholder } = props;                                  //___if you assing them here. You will just have below 'placeholder={placeholder}' for all of them
    const { onChangeHandler } = props;
    // const {className, placeholder, onChangeHandler} = props        //____I think this way will work to by destructing

    return (
        <input
            className={` search-box ${props.className}`}
            type='search'
            placeholder={props.placeholder}
            onChange={props.onChangeHandler}
        />

    )
};







//________Class Component Version_________________

// class SearchBox extends Component {

//     render() {

//         return (
//             <input
//                 className={` search-box ${this.props.className}`}
//                 type='search'
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}
//             />

//         )
//     }
// }

export default SearchBox;






