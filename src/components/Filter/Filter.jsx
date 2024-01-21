import { useSelector } from "react-redux";
// import { Selector } from "../Selector/Selector";
import { handleFilterBrand, handleFilterPrice, selectFilterBrand, selectFilterPrice } from "../../redux/filterSlice";
import brands from '../../assets/makes.json'
import { BrandSelector, PriceSelector, Wrapper } from "./Filter.styled";
import { dozens } from "../../api/utils";

export const Filter = ()=>{
	const filterBrand = useSelector(selectFilterBrand);
	const filterPrice = useSelector(selectFilterPrice);
	const prices = dozens(30, 500, 10);
	
	return (
		<Wrapper>
			<BrandSelector label={"Car brand"} type={"text"} name={"model"} value={filterBrand} placer={"Enter the text"} options={brands} action={handleFilterBrand} />
			<PriceSelector label={"Price/ 1 hour"} type={"number"} name={"price"} value={filterPrice} placer={"To $"} options={prices} action={handleFilterPrice} />
		</Wrapper>
	)
}