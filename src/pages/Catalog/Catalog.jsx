import { useDispatch } from 'react-redux'
import { Filter } from '../../components/Filter/Filter'
import { useEffect } from 'react'
import { fetchCars, fetchMore } from '../../redux/operations'
import { useSelector } from 'react-redux'
import { selectFilteredCars, selectShowMore } from '../../redux/carsSlice'
import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Gallery } from '../../components/Gallery/Gallery'
import { Wrapper } from './Catalog.styled'
import { selectIsLoading } from "../../redux/carsSlice";
import { Loader } from '../../components/Loader/Loader'

export const Catalog = ()=>{
	const isLoading = useSelector(selectIsLoading);
	
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
	useEffect(() => {
		if (page === 1) {
			dispatch(fetchCars(page));
		} else {
			dispatch(fetchMore(page));
		}    
  }, [dispatch, page]);

  const scrollUp=()=>{
    const height = (window.innerHeight - 128) / 18;
    function scr(){
      window.scrollBy(0, height)
    }
    for (let i = 1; i < 19; i++) {
      const delay = i*50;
      setTimeout(scr, delay);
    }
  }

	const handleLoadMore = () =>{
		setPage(prevState => (prevState + 1));
		scrollUp();
	}

	const filtCars = useSelector(selectFilteredCars);
	const showGallery = (filtCars.length > 0);
	const isMore = useSelector(selectShowMore);
	const showBtnMore = !isLoading && isMore;
	
	return(
		<Wrapper>
			<Filter />
			{showGallery && <Gallery list={filtCars} />}
			{isLoading && <Loader />}
			{showBtnMore && <Button onClick={handleLoadMore} />}
		</Wrapper>
	)
}