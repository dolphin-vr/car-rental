import { Selector } from "../Selector/Selector"

export const Filter = ()=>{
	const brand={
		label: "Car brand",
		placer: "Enter the text",
		options: ["Buick", "Volvo", "Subaru"],
	}
	return (
		<>
			<Selector sels={brand} />
		</>
	)
}