import { List } from "./Gallery.styled";
import { Card } from "../Card/Card";

export const Gallery = ({list, onClick}) => {
	return (
		<List>
			{list.map(el => <Card key={el.id} car={el} onClick={onClick} />)}
		</List>
	)
}

