import React from "react";
import { Button } from "react-bootstrap";
import {HeaderContainer,MainHeader,FormContainer,FoodInput,Select} from "./Header.styled";

const Header = ({setQuery,setSelectedMeal,mealType,getData}) => {

  const handleSubmit = (e)=>{
    e.preventDefault();
    getData()
  }

  return (
    <HeaderContainer>
      <MainHeader>
        Recipe App
      </MainHeader>
    
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput type="text" placeholder="Search"
        onChange={(e)=>setQuery(e.target.value)}
        />
        <Button type="submit">SEARCH</Button>
        <Select name="mealType" id="mealType"
        onChange={(e)=>setSelectedMeal(e.target.value)} >
         
         {mealType.map((meal,index)=>{
            return(
              <option key={index} value={meal}>{meal}</option>
            );
            })}
         

        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
