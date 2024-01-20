import { useDispatch } from 'react-redux'
// import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter/Filter'
// import { List } from './Catalog.styled'
import { useEffect } from 'react'
import { fetchCars } from '../../redux/operations'
import { useSelector } from 'react-redux'
import { 
	// selectFilteredCars, 
	selectCars, selectShowMore } from '../../redux/carsSlice'
import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Gallery } from '../../components/Gallery/Gallery'

export const Catalog = ()=>{
	
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

	const handleLoadMore = () =>{
		setPage(prevState => (prevState +1))
	}

  const cars = useSelector(selectCars);
	// const isLoading = useSelector(selectIsLoading);
	const showBtnMore = useSelector(selectShowMore);
	console.log('cars= ', cars)
	return(
		<>
			<Filter />
			<Gallery list={cars} />
			
			{showBtnMore && <Button onClick={handleLoadMore} />}
		</>
	)
}