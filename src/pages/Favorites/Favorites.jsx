import { useSelector } from "react-redux"
import { selectFavorite,  } from "../../redux/favoriteSlice"
import { Gallery } from "../../components/Gallery/Gallery";

export const Favorites = () =>{
	const favcars = useSelector(selectFavorite);
	console.log('favcars= ', favcars);
	return (
		<Gallery list={favcars} />
	)
}