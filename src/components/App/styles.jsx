import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

let randomColor = require('randomcolor'); // import the script
export let color1 = randomColor({luminosity: 'bright'});
export let color2 = randomColor({luminosity: 'bright'});

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Helvetica', sans-serif;
    border: none;
    outline: none;
  }
  body {
    margin: 0;
    padding: 0;
  }
`
export const Wrapper = styled.div`
     display: flex;
`;

export const Menu = styled.form`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: left;
     padding: 30px;
     width: 300px;

     @media screen and (max-width: 770px){
          width: 770px;
          z-index: 1000;
     }
`;

export const Heading = styled.h1`
     font-weight: bolder;
     font-size: 50px;
     width: 200px;
     margin-left: 20px;
`;

export const SearchInput = styled.input`
     padding: 10px 20px;
     width: 150px;
     border-radius: 0px;
     border-bottom-left-radius: 20px;
     border-top-left-radius: 20px;
     background: #241f33;
     color: white;

     &::placeholder{
          color: white;
     }
`;

export const SearchButton = styled.button`
     padding: 10px 20px;
     border-bottom-right-radius: 20px;
     border-top-right-radius: 20px; 
     background: rgb(29,25,41);
     color: white;
     font-weight: bold;
     cursor: pointer;
     transition: 0.2s;
     &:hover{
          color: ${color2};
     }
`;

export const SearchBlock = styled.div`
     display: flex;
     width: 100%;
     margin: 0 auto;
`;

export const Calories = styled.div`
     display: flex;
     flex-direction: column;
     margin-top: 20px;
`;

export const Range = styled.input`
     width: 230px;

     &::-webkit-slider-runnable-track {
          background: #241f33;
          border: 0;
          border-radius: 25px;
          width: 100%;
          height: 7px;
          cursor: pointer;
     }

     &::-webkit-slider-thumb {
          margin-top: -5px;
          width: 16px;
          height: 16px;
          border-radius: 50px;
          cursor: pointer;
          -webkit-appearance: none;
     }
`;

export const MenuList = styled.details`
     margin: 5px;
`;

export const MenuSummary = styled.summary`
     cursor: pointer;
`;

export const ListItem = styled.li`
     list-style: none;
     margin-top: 3px;
`;

export const ResultHeading = styled.h2`
     background: linear-gradient(-230deg, ${color1},${color2});
     padding: 10px 20px;
     border-radius: 30px;
     position: absolute;
     margin-top: -80px;
     text-align: center;

     @media screen and (max-width: 770px){
          background: ${color1};
          margin-top: -30px;
     }
`;

export const List = styled.div`
     width: 100%;
     margin-left: 300px;
     min-height: 300vh;
     background: rgb(29,25,41);
     display: flex;
     flex-flow: row wrap;
     padding: 100px 4px;
     justify-content:center;

     @media screen and (max-width: 770px){
          margin-left: 0;
     }
`;

export const ControllerWrapper = styled.div`
     background: linear-gradient(110deg, ${color2},${color1});
     position: fixed;
     height: 100vh;
     z-index: 1000;
     
     @media screen and (max-width: 770px){
          visibility: hidden;
          opacity: 0;
          transform: translateX(100%);
          transition: 0.3s;
     }
`;

export const ActiveControllerWrapper = styled(ControllerWrapper)`
        @media screen and (max-width: 770px){
          visibility: visible;
          opacity: 1;
          transform: translateX(0%);
          transition: 0.3s;
     }
`;

export const Navigation = styled.button`
     position: absolute;
     align-self: right;
     position: fixed;
     z-index: 1000;
     right: 10px;
     top: 10px;
     border-radius: 50px;
     height: 55px;
     width: 55px;
     background: ${color1};
     flex-direction: column;
     align-items: center;
     justify-content: center;
     display: none;

     @media screen and (max-width: 770px){
          display: flex;
     }
`;

export const NavigationString = styled.div`
     width: 30px;
     height: 3px;
     background: #fff;
     margin-top: 10px;
     
     &:nth-child(1){
          margin-top: 0;
     }
`;

export const Note = styled.p`
     @media screen and (max-width: 770px){
          width:300px;
     }
`;