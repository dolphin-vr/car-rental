import { createPortal } from 'react-dom';
import { Additions, BackDrop, BtnRent, CloseBtn, Conditions, Content, Descript, FeatureTitle, FeatureWrap, InfoSpan, InfoString, InfoWrap, Pic, Span, StyledSvg, Text, Values } from './Modal.styled';
import { useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import { city, country, minAge, trailDollar } from '../../api/utils';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ car, onClose }) => {

   useEffect(() => {
      const close = (e) => {
         if (e.keyCode === 27) {
            onClose();
         }
      };
      window.addEventListener("keydown", close);
      return () => window.removeEventListener("keydown", close);
   }, [onClose]);

   const handleBackdropClick = (event) => {
      if (event.currentTarget === event.target) {
         onClose();
      }
  };
  
   const conditions = car.rentalConditions.split("\n")

   return createPortal(
      <BackDrop onClick={handleBackdropClick}>
         <Content>
            <CloseBtn type="button" onClick={onClose}><StyledSvg><Icon tag={"close"} /></StyledSvg></CloseBtn>
            <Pic src={car.img || car.photoLink} />
            <Text >{car.make}<Span>{car.model}</Span>, {car.year}</Text>
            <InfoWrap>
               <InfoString><InfoSpan>{city(car.address)}</InfoSpan><InfoSpan>{country(car.address)}</InfoSpan><InfoSpan>Id: {car.id}</InfoSpan><InfoSpan>Year: {car.year}</InfoSpan><InfoSpan>Type: {car.type}</InfoSpan></InfoString>
               <InfoString><InfoSpan>Fuel Consumption: {car.fuelConsumption}</InfoSpan><InfoSpan>Engine Size: {car.engineSize}</InfoSpan></InfoString>               
            </InfoWrap>
            <Descript>{car.description}</Descript>
            <FeatureWrap>
               <FeatureTitle>Accessories and functionalities:</FeatureTitle>
               <InfoString>{car.accessories.map((el, idx)=> <InfoSpan key={idx}>{el}</InfoSpan>) }</InfoString>
               <InfoString>{car.functionalities.map((el, idx) => <InfoSpan key={idx}>{el}</InfoSpan>)}</InfoString>
            </FeatureWrap>
            <Conditions>
               <Descript>Rental Conditions:</Descript>
               <Additions>Minimum age: <Values>{minAge(conditions[0])}</Values></Additions>
               <Additions>{conditions[1]}</Additions>
               <Additions>{conditions[2]}</Additions>
               <Additions>Mileage: <Values>{car.mileage.toLocaleString('en-US')}</Values></Additions>
               <Additions>Price: <Values>{trailDollar(car.rentalPrice)}</Values></Additions>
            </Conditions>
            <BtnRent href="tel:+110001111111" >Rental car</BtnRent>
         </Content>
      </BackDrop>,
      modalRoot
   );
};
