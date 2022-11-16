import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Cards from "../../components/cards/Cards"
import { HeaderText, HomeImg, ImgDiv } from "./Home.styled";
import homeSvg from "../../assets/home.svg";



const Home = () => {
  const APP_ID= "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const [query,setQuery]=useState("egg");
  const[selectedMeal,setSelectedMeal]=useState("breakfast");
  const [recipes,setRecipes]=useState("");
  const mealType=["Breakfast", "Lunch", "Dinner", "Snack","TeaTime"];


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;


    const getData = async ()=>{
      if (query){

      try {
        const {data} = await axios(url)
        setRecipes(data.hits)
      } catch (error) {
        console.log(error);
      }
    }else{
      alert("Fill the Form")
    }            
      
     
    }
    
    console.log(recipes);
    // useEffect(()=>{
    //   getData()
    // },[]);

  return (
    <div>
      {/* <Navbar /> */}
      <Header setQuery={setQuery} 
      setSelectedMeal={setSelectedMeal}
       mealType={mealType} 
       getData={getData}/>

       {!recipes && 
       <ImgDiv>
       <HomeImg src={homeSvg}/>
       </ImgDiv>}

       {recipes?.length===0 && <HeaderText>The Food can not be found</HeaderText>}

       {recipes?.length>0 && <Cards recipes={recipes}/>}

      
    </div>
  );
};

export default Home;
