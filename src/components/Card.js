import React from 'react';


class Card extends React.Component {
    render(){
        const {name, email, id} = this.props.robots;
        return(
            <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
                <img src={`https://robohash.org/${id}?200x200`} alt="A Robot"></img>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
}

export default Card;
