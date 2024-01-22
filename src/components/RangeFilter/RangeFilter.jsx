import { BtnSearch, FromInput, Label, Placer, Span, ToInput, Wrapper } from "./RangeFilter.styled"

export const RangeFilter = () => {
	const handleSearch = () => {
		
	}
	return (
		<Label>
			Сar mileage / km
			<Wrapper>
				<Placer>
					<FromInput />
					<Span>From</Span>
				</Placer>
				<Placer>
				<ToInput />
					<Span>To</Span>
				</Placer>
				<BtnSearch type='button' onClick={ handleSearch }>Search</BtnSearch>
			</Wrapper>
		</Label>
	)
}