
import { ChangeEvent, ChangeEventHandler } from "react";

import { Component } from "react";

import './search-box.styles.css';              //___had to import our CSS page for specific stlying of this component

// Interface Example   (also you must add it into the destructuring on the props passed, like so =>   ({className, placeholder, onChangeHandler}: ISearchBoxProps))
// interface ISearchBoxProps extends IChangeHandlerProps {
//     className: string;
//     placeholder?: string;
// }

// interface IChangeHandlerProps {
//     onChangeHandler: (a: string) => void
// }



// Types Example (I think preferred in React applications)
type SearchBoxProps = {
    className: string;
    placeholder?: string;
    // onChangeHandler: (a: string) => void;     //this one is wrong, just an example of how you would represent a function type
    onChangeHandler: ChangeEventHandler;
    // onChangeHandler: ChangeEventHandler<HTMLInputElement>;      //this is used if the onChange is a call back function (closure) for example {(e) => onChangeHandler(e)}
    // onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}


// Union Type___________________________________________________
// type CanadianAddress = {
//     street: string;
//     province: string;
// }
// type USAAddress = {
//     street: string;
//     state: string
// }
// type ItalianAddress = {
//     street: string;
//     region: string
// }

// type NorthAmericanAddress = CanadianAddress | USAAddress | ItalianAddress;

// const Address: NorthAmericanAddress = {
//     street: 'Random',
//     state: 'Random'       //can be either a province or state, since it is a union type then it will accept either
// }
// _____________________________________________________________



const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {
    // const { className } = props;                                //___can assign your variables this way, or in the way below like so 'placeholder=(props.placeholder)
    // const { placeholder } = props;                                  //___if you assing them here. You will just have below 'placeholder={placeholder}' for all of them
    // const { onChangeHandler } = props;
    // const {className, placeholder, onChangeHandler} = props        //____I think this way will work to by destructing

    return (
        <input
            className={` search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
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






