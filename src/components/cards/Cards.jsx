import React from 'react'
import { Button } from 'react-bootstrap';
import { Card, Header,Image, MainContainer } from './Cards.Style';
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from 'react-router-dom';

const Cards = ({recipes}) => {
    const navigate= useNavigate();
    
  return (
    <MainContainer wrap="wrap">
        {recipes.map(({recipe},index)=>{
            return(
                <Card key={index}>
                    <Header>{recipe.label}</Header>
                    <Image src={recipe.image || defaultImage}/>
                    <Button onClick={()=>navigate("details",{state:recipe, replace:false})}>View More</Button>
                </Card>

            )
        })}
    </MainContainer>
  )
}

export default Cards;