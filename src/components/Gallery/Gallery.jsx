import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/carsSlice";
import { List } from "./Gallery.styled";
import { Card } from "../Card/Card";

export const Gallery = ({list}) => {
	const isLoading = useSelector(selectIsLoading);
	return (
		<List>
			{!isLoading && list.map(el => <Card key={el.id} car={el} />)}
		</List>
	)
}

