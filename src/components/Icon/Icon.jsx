import sprite from "../../img/sprite.svg";

export const Icon = ({tag}) =>{	
	return (
		<use href={`${sprite}#${tag}`} ></use>
	)
}
