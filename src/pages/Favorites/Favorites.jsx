import { useSelector } from "react-redux"
import { selectFavorite,  } from "../../redux/favoriteSlice"
import { Gallery } from "../../components/Gallery/Gallery";
import { Wrapper } from "../Catalog/Catalog.styled";

export const Favorites = () =>{
	const favcars = useSelector(selectFavorite);
	console.log('favcars= ', favcars);
	return (
		<Wrapper>
			<Gallery list={favcars} />
		</Wrapper>
	)
}