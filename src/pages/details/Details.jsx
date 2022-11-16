import React from 'react'
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngContainer, OtherPart } from './Details.styled';
import { useLocation } from 'react-router-dom';
import diet from "../../assets/diet.svg"

const Details = () => {
  const {state}=useLocation();
  console.log("state geldi mi:", state);
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{state.label}</h1>
        <img src={diet} />
        </HeaderContainer>

        <DetailPart>
          <OtherPart>
            <h4>NUTRIENTS</h4>
            <p>
            {state.totalNutrients.CA.label} :{' '}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{' '}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{' '}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{' '}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <p>Calories: {Math.round(state.calories)}</p>
          {state.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
          </OtherPart>

          <ImgContainer>
            <img src={state.image}></img>
          </ImgContainer>

          <IngContainer>
            {state.ingredientLines.map((ingredient,index)=>(
              <p>{index+1}-{ingredient}</p>
            ))}
          </IngContainer>
        </DetailPart>
      </DetailContainer>
  )
}

export default Details;