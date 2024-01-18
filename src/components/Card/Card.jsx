import { Item } from "./Card.styled"

export const Card = ({car})=>{
return(
	<Item key={car.id}></Item>
)
}