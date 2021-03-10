import React, {useEffect, useState} from 'react'
import Card from '../Card';
import {Wrapper,Navigation,Calories,ActiveControllerWrapper,Note,NavigationString,MenuList,ResultHeading,ControllerWrapper,ListItem,Range,List,SearchBlock,Menu,SearchButton,SearchInput,Heading,GlobalStyle,MenuSummary} from './styles';

const App = () => {
     const APP_ID = "c2b98cb7";
     const APP_KEY = "f0869bf01680a8472affea83a20507fa";

     const [recipes, setRecipes] = useState([]);
     const [error, setError] = useState(undefined);
     
     const [search, setSearch] = useState('');
     const [query, setQuery] = useState('burger');
     
     const [caloriesNum, setCaloriesNum] = useState(200);
     const [calories, setCalories] = useState(200);

     const [quantityNum, setQuantityNum] = useState(11);
     const [quantity, setQuantity] = useState(11);
     
     const [dietTrigger, setDietTrigger] = useState('');
     const [diet, setDiet] = useState('balanced');

     const [healthTrigger, setHealthTrigger] = useState('');
     const [health, setHealth] = useState('fish-free');

     const [counter, setCounter] = useState(false);
     

     const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${quantity}&calories=1-${calories}&diet=${diet}&health=${health}`;

     useEffect(()=>{
          getIngredients()
     },[query,calories,diet,health,quantity]);

     const getIngredients = async()=>{
          try{
               console.log(exampleRequest);
               const response = await fetch(exampleRequest);
               const data = await response.json();
               setRecipes(data.hits);
               console.log(data.hits);
          }catch{
               setError('error happened')
          }
     }    

     const updateSearch = e => {
          setSearch(e.target.value);
     }

     const updateDiet = e => {
          setDietTrigger(e.target.value);
     }

     const updateHealth = e => {
          setHealthTrigger(e.target.value);
     }

     const updateCalories = e => {
          setCaloriesNum(e.target.value);
     }

     const updateQuantity = e => {
          setQuantityNum(e.target.value);
     }

     const getSearch = e =>{
          e.preventDefault();
          setQuery(search);
          setCalories(caloriesNum);
          setQuantity(quantityNum);
          setDiet(dietTrigger);
          if(dietTrigger==''){
               setDiet('balanced');
          }
          setHealth(healthTrigger);
          if(healthTrigger==''){
               setHealth('fish-free');
          }
          setSearch('');
          setCounter(false);
     }

     const showMenu = () =>{
          if(counter===false){
               setCounter(true);
          }else if(counter===true){
               setCounter(false);
          }
     }

     const Controls = counter ? ActiveControllerWrapper : ControllerWrapper;

     return (
          <Wrapper>
               <GlobalStyle/>
               <Controls>
               <Heading>Food searching engine</Heading>
                    <Menu onSubmit={getSearch}>
                         <SearchBlock>
                              <SearchInput type="text" value={search} placeholder='Enter any dish' onChange={updateSearch}/>
                              <SearchButton type='sybmit'>Search</SearchButton>
                         </SearchBlock>

                         <Calories>
                              <p>Calories level: <b>{caloriesNum} cal/100g</b></p>
                              <Range type="range" value={caloriesNum} min="1" max="1000" onChange={updateCalories}></Range>
                              <Note>{caloriesNum < 200 ? `Note: if calories level is too low the system will show you dishes with most possible low calories level, but not certain number.` : ``}</Note>
                         </Calories>
                         
                         <MenuList>
                              <MenuSummary>Diet types:</MenuSummary>
                              <ul>
                                   <ListItem><label><input onChange={updateDiet} value='balanced' type="radio" name="diet"></input></label>Balanced</ListItem>
                                   <ListItem><label><input onChange={updateDiet} value='high-protein' type="radio" name="diet"></input></label>High-protein</ListItem>
                                   <ListItem><label><input onChange={updateDiet} value='low-carb' type="radio" name="diet"></input></label>Low-carb</ListItem>
                                   <ListItem><label><input onChange={updateDiet} value='low-fat' type="radio" name="diet"></input></label>Low-fat</ListItem>
                                   <Note><i>By default it`s balanced, as author loves balance.</i></Note>
                              </ul>
                         </MenuList>

                         <MenuList>
                              <MenuSummary>Health details:</MenuSummary>
                              <ul>
                                   <ListItem><label><input onChange={updateHealth} value='keto-friendly' type="radio" name="health"></input>keto-friendly</label></ListItem>
                                   <ListItem><label><input onChange={updateHealth} value='low-sugar' type="radio" name="health"></input>low-sugar</label></ListItem>
                                   <ListItem><label><input onChange={updateHealth} value='vegan' type="radio" name="health"></input></label>vegan</ListItem>
                                   <ListItem><label><input onChange={updateHealth} value='fish-free' type="radio" name="health"></input></label>fish-free</ListItem>
                                   <ListItem><label><input onChange={updateHealth} value='alcohol-free' type="radio" name="health"></input></label>alcohol-free</ListItem>
                                   <ListItem><label><input onChange={updateHealth} value='dairy-free' type="radio" name="health"></input>dairy-free</label></ListItem>
                                   <ListItem><label><input onChange={updateHealth} value='peanut-free' type="radio" name="health"></input>peanut-free</label></ListItem>
                                   <Note><i>By default it`s fish-free, as author is allergic to fish.</i></Note>
                              </ul>
                         </MenuList>
                         <div>
                              <p>Quantity of elements you see:
                                   <br/>
                              <b>{quantityNum} elements on page</b></p>
                              <Range type="range" value={quantityNum} min="4" max="32" onChange={updateQuantity}></Range>
                              
                         </div>
                    </Menu>
                    {error}
               </Controls>
               
               <List>
                    <ResultHeading>{query === '' ? `Here are your results.` : `Here are results for "${query}".`}</ResultHeading>
                    
               <Navigation onClick={showMenu}>
                    <NavigationString/>
                    <NavigationString/>
                    <NavigationString/>
               </Navigation>
                    {
                    recipes.length > 0 ?
                    recipes.map(recipe => (
                         <Card 
                         key={recipe.recipe.label} 
                         title={recipe.recipe.label} 
                         calories={recipe.recipe.calories} 
                         image={recipe.recipe.image}
                         ingredients={recipe.recipe.ingredients}
                         weight={recipe.recipe.totalWeight}
                         />
                    ))
                    : <h1 style={{color:'white'}}>There's no result for such request.</h1>     
               }</List>
          </Wrapper>
     )
} 

export default App;
