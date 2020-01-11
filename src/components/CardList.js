
import React from 'react';
import Card from './Card';



class CardList extends React.Component {
    render(){

        const cardComponent = this.props.robots.map((user, index) =>{
            return <Card key={index} robots={this.props.robots[index]}/>

        })
        return(
            <div>
                {cardComponent}
            </div>
        )
    }
}


export default CardList;