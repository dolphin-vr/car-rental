// import cars from '../../assets/advertsCars.json'
import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter/Filter'
import { List } from './Catalog.styled'

export const Catalog = ()=>{
	const cars=[];
	return(
		<>
			<h2>Catalog</h2>
			<Filter />
			<List>
				{cars.map(el => <Card key={el.id} car={el} />)}				
			</List>
		</>
	)
}