
//_____This is for class components_____
// import { Component } from "react";




import Card from '../card/card.component';
import './card-list.styles.css';



//_______Functional Component Version_________________

const CardList = (props) => {

    const { monsters } = props;

    return (
        <div className='card-list'>
            {monsters.map((monst) => {
                const { id } = monst;                        //___definining your variables that are pulling from the mapped object data
                const { name } = monst;
                const { email } = monst;

                return (                           //___this is how we added the img, the name, the email. Pulling the img from an outside url                    //___this is how we added the img, the name, the email. Pulling the img from an outside url
                    <div className='card-container' key={id}>
                        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set3&size=180x180`} />
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                );
            })}
        </div >);
};





//________Class component Version___________________

// class CardList extends Component {

//     render() {
//         const { monsters } = this.props;

//         return (
//             <div className='card-list'>
//                 {monsters.map((monst) => {
//                     const { id } = monst;                        //___definining your variables that are pulling from the mapped object data
//                     const { name } = monst;
//                     const { email } = monst;

//                     return (                           //___this is how we added the img, the name, the email. Pulling the img from an outside url                    //___this is how we added the img, the name, the email. Pulling the img from an outside url
//                         <div className='card-container' key={id}>
//                             <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//                             <h2>{name}</h2>
//                             <p>{email}</p>
//                         </div>
//                     );
//                 })}
//             </div >);
//     };
// };





export default CardList;
