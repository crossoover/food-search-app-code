import React from 'react';
import {CardWrapper,CardIllustration,BottomHeading,BottomIngredient,CardImage,CaloriesNumber,CardBottom,CardHeading,CardTop} from './styles';

const Card = (props) => {
     return (  
          <CardWrapper> 
               <CardTop>
                    <CardHeading>{props.title}</CardHeading>
                    <CaloriesNumber>{Math.floor(props.calories)} cal/{Math.floor(props.weight)}g</CaloriesNumber>
                    <CardIllustration>
                         <CardImage src={props.image} alt={props.title}/>
                    </CardIllustration>
               </CardTop>
               <CardBottom>
                    <BottomHeading>Ingredients:</BottomHeading>
                    <ul>
                         {props.ingredients.map(ing=>(
                              <BottomIngredient>{ing.text}</BottomIngredient>
                         ))}
                    </ul>
               </CardBottom>
          </CardWrapper>
     )
}

export default Card; 
