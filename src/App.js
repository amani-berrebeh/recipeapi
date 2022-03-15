import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ListRecipe from './Components/ListRecipe';
import { getrecipe } from './redux/action';

function App() {
  const dispatch= useDispatch()
  const recipes=useSelector((state)=>state.recipes)
 useEffect(() => {
   dispatch(getrecipe())
 
   
 }, [])
 
  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder=" ...rearch your meal" />
      </form>
     <ListRecipe recipes={recipes}/>
    </div>
  );
}

export default App;
