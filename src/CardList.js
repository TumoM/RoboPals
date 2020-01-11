
import React from 'react';
import {robots} from './robots';
import Card from './Card';



class CardList extends React.Component {
    render(){
        const cardComponent = robots.map((user, index) =>{
            return <Card key={index} robots={robots[index]}/>

        })
        return(
            <div>
                {cardComponent}
            </div>
        )
    }
}


export default CardList;