
// import { Component } from "react";



// import './card.styles.css';




//________Functional Component Version_________

const Card = (props) => {
    const { name, email, id } = props.monster;

    return (                        //___this is how we added the img, the name, the email. Pulling the img from an outside url
        <div className='card-container' key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};





//______Class Component Version___________________________Doesn't work properly!!!!!

// class Card extends Component {
//     render() {
//         const { name, email, id } = this.props.monster;

//         return (                        //___this is how we added the img, the name, the email. Pulling the img from an outside url
//             <div className='card-container' key={id}>
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     }
// };

// export default Card;




























