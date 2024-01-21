import { useDispatch } from 'react-redux'
import { Filter } from '../../components/Filter/Filter'
import { useEffect } from 'react'
import { fetchCars } from '../../redux/operations'
import { useSelector } from 'react-redux'
import { selectFilteredCars, selectShowMore } from '../../redux/carsSlice'
import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Gallery } from '../../components/Gallery/Gallery'
import { Wrapper } from './Catalog.styled'

export const Catalog = ()=>{
	
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

	const handleLoadMore = () =>{
		setPage(prevState => (prevState +1))
	}

	const filtCars = useSelector(selectFilteredCars);
	console.log('filt cars==  ', filtCars);
	const showBtnMore = useSelector(selectShowMore);
	return(
		<Wrapper>
			<Filter />
			<Gallery list={filtCars} />
			
			{showBtnMore && <Button onClick={handleLoadMore} />}
		</Wrapper>
	)
}