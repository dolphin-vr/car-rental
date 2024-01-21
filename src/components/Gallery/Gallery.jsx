import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/carsSlice";
import { List } from "./Gallery.styled";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";

export const Gallery = ({list, onClick}) => {
	const isLoading = useSelector(selectIsLoading);
	return (
		<List>
			{isLoading && <Loader />}
			{!isLoading && list.map(el => <Card key={el.id} car={el} onClick={onClick} />)}
		</List>
	)
}

