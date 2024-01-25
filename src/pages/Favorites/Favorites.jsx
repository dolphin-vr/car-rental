import { useSelector } from "react-redux"
import { selectFavorite,  } from "../../redux/favoriteSlice"
import { Gallery } from "../../components/Gallery/Gallery";
import { Wrapper } from "../Catalog/Catalog.styled";
import { Empty, StyledLink } from "./Favorites.styled";

export const Favorites = () =>{
	const favcars = useSelector(selectFavorite);
	const showGallery = (favcars.length > 0);
	return (
		<Wrapper>
			{showGallery ? <Gallery list={favcars} /> : 
			<Empty>Your favorite list is empty now. <br />You can add cars on <StyledLink to="/catalog">Catalog</StyledLink> page</Empty>}
		</Wrapper>
	)
}