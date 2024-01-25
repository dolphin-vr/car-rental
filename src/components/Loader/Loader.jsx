import { Icon } from "../Icon/Icon"
import { BackDrop, Car } from "./Loader.styled"

export const Loader = () => {
	return (
		<BackDrop><Car><Icon tag={"car"} /></Car></BackDrop>
	)
}