import { useSelector } from "react-redux";
import { Selector } from "../Selector/Selector";
import { handleFilterBrand, handleFilterMileage, handleFilterPrice, selectFilterBrand, selectFilterMileage, selectFilterPrice } from "../../redux/filterSlice";
import brands from '../../assets/makes.json'
import { BrandSelector, BtnClear, PriceSelector, Wrapper } from "./Filter.styled";
import { dozens } from "../../api/utils";
import { useDispatch } from "react-redux";
import { RangeFilter } from "../RangeFilter/RangeFilter";

export const Filter = ()=>{
	const dispatch = useDispatch();
	const filterBrand = useSelector(selectFilterBrand);
	const filterPrice = useSelector(selectFilterPrice);
	const filterMileage = useSelector(selectFilterMileage);
	
	const prices = dozens(30, 500, 10);

	const handleSearch = (data) => {
		dispatch(handleFilterMileage(data))
	}
	const clearFilters = () => {
		dispatch(handleFilterBrand(""));
		dispatch(handleFilterPrice(""));
		dispatch(handleFilterMileage({from: 0, to: Number.MAX_SAFE_INTEGER}))
	}

	return (
		<Wrapper>
			<BrandSelector>
				<Selector label={"Car brand"} type={"text"} name={"model"} value={filterBrand} placer={"Enter the text"} options={brands} action={handleFilterBrand} />
			</BrandSelector>
			<PriceSelector>
			<Selector label={"Price/ 1 hour"} type={"number"} name={"price"} value={filterPrice} placer={"To $"} options={prices} action={handleFilterPrice} />
			</PriceSelector>
			<RangeFilter range={filterMileage} handleSubmit={handleSearch} />
			<BtnClear type='button' onClick={ clearFilters }>Clear filter</BtnClear>
		</Wrapper>
	)
}