import { useDispatch } from 'react-redux'
import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter/Filter'
import { List } from './Catalog.styled'
import { useEffect } from 'react'
import { fetchCars } from '../../redux/operations'
import { useSelector } from 'react-redux'
import { selectCars, selectFilteredCars, selectIsLoading } from '../../redux/carsSlice'

export const Catalog = ()=>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const cars = useSelector(selectCars);
	const isLoading = useSelector(selectIsLoading);
	return(
		<>
			<Filter />
			<List>
				{!isLoading && cars.map(el => <Card key={el.id} car={el} />)}
			</List>
		</>
	)
}