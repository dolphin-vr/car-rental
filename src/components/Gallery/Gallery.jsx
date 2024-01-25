import { List } from "./Gallery.styled";
import { Card } from "../Card/Card";
import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";

export const Gallery = ({list}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [card, setCard] = useState({});
	const openModal = (car) => {
		setCard(car);
		setModalIsOpen(true)
	}
   const toggleModal = () => {
      setModalIsOpen(false);
   };

	return (
		<>
		<List>
			{list.map(el => <Card key={el.id} car={el}  onClick={openModal}  />)}
		</List>
			{modalIsOpen && <Modal car={card} onClose={toggleModal} ></Modal>}
		</>
	)
}

