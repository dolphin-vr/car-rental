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
import { Modal } from '../../components/Modal/Modal'

export const Catalog = ()=>{
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [card, setCard] = useState({})
	
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

	const openModal = (car) => {
		setCard(car);
		setModalIsOpen(true)
	}
   const toggleModal = () => {
      setModalIsOpen(false);
   };

	const filtCars = useSelector(selectFilteredCars);
	const showBtnMore = useSelector(selectShowMore);
	return(
		<Wrapper>
			<Filter />
			<Gallery list={filtCars} onClick={openModal} />			
			{showBtnMore && <Button onClick={handleLoadMore} />}
      {modalIsOpen && <Modal car={card} onClose={toggleModal} ></Modal>}
		</Wrapper>
	)
}