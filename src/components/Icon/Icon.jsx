import sprite from '../../assets/sprite.svg'

export const Icon = ({ tag }) => {	
	return (
		<use href={`${sprite}#${tag}`} ></use>
	)
}
