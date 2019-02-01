import React from 'react';
import Card from './Card/Card';

const cards = (props) => {
    const cardList = props.list.map(item => {
        return (
            <Card 
                key={item.id}
                abv={item.abv}
                ibu={item.ibu}
                id={item.id}
                name={item.name}
                ounces={item.ounces}
                style={item.style}
                click={props.click}
            />
        );
    });
    return cardList;
};

export default cards;