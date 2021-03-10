import styled from 'styled-components';
import {color1} from '../App/styles'
import {color2} from '../App/styles'

export const CardWrapper = styled.div`
     max-width: 300px;
     margin: 50px;
     box-shadow:  5px 5px 15px #181522,
             -5px -5px 15px #221d30;
     border-bottom-left-radius: 20px;
     border-bottom-right-radius: 20px;
     z-index: 1;
`;


export const CardTop = styled.div`
     margin: 0;
     background: ${color1};
     border-top-left-radius: 20px;
     border-top-right-radius: 20px;
     padding: 0 10px;
     display: flex;
     flex-direction: column;
     align-items: center;
     height: 180px;
     z-index: 100;
`;

export const CardHeading = styled.h2`
     text-align: center;
     height: 100px;
     display: flex;
     align-items: center;
`;

export const CardBottom = styled.div`
     margin: 0;
     background: transparent;
     padding: 100px 20px 10px;
    z-index: 1;
`;

export const CardIllustration = styled.div`
     width: 150px;
     height: 150px;
     border: 5px solid white;
     position: absolute; 
     margin-top: 130px;
     border-radius: 100px;
     display: flex;
     justify-content: center;
     align-items: center;
`;

export const CardImage = styled.img`
     color: white;
     font-weight: bold;
     width: 100%;
     border-radius: 100px;
`;

export const CaloriesNumber = styled.p`
     z-index: 100;
     margin-left: 140px;
     background: white;
     padding: 5px;
     border-radius: 10px;
     font-size:12px;
`;

export const BottomHeading = styled.p`
     color: white;
     font-weight: bold;
     font-size: 30px;
`;

export const BottomIngredient = styled.li`
     color: white;
`;