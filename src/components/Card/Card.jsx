import { useSelector } from "react-redux"
import { city, country } from "../../api/utils"
import { Icon } from "../Icon/Icon"
import { BtnLearn, InfoSpan, InfoString, Item, Like, Pic, Price, Span, StyledSvg, Text } from "./Card.styled"
import { useDispatch } from "react-redux"
import { changeFavorites, selectFavorite } from "../../redux/favoriteSlice"

export const Card = ({car, onClick})=>{
	const dispatch = useDispatch();
	const favorites = useSelector(selectFavorite);
	const isLiked = favorites.some(el => el.id === car.id);
	const handleFavorite = car => dispatch(changeFavorites(car));
	const textLen = (car.make + car.model).length;
return(
	<Item key={car.id}>
		<Like type='button' onClick={() => handleFavorite(car)} $isliked={isLiked} ><StyledSvg><Icon tag={"heart"} /></StyledSvg></Like>
		<Pic src={car.img || car.photoLink} />
		<Text $len={textLen} >{car.make}<Span>{car.model}</Span>, {car.year}<Price>{car.rentalPrice}</Price></Text>
		<InfoString><InfoSpan>{city(car.address)}</InfoSpan><InfoSpan>{country(car.address)}</InfoSpan><InfoSpan>{car.rentalCompany}</InfoSpan><InfoSpan>Premium</InfoSpan></InfoString>
		<InfoString><InfoSpan>{car.type}</InfoSpan><InfoSpan>{car.model}</InfoSpan><InfoSpan>{car.mileage} mi</InfoSpan><InfoSpan>{car.functionalities[0]}</InfoSpan></InfoString>
		<BtnLearn type='button' onClick={()=>onClick(car)} >Learn more</BtnLearn>
	</Item>
)
}