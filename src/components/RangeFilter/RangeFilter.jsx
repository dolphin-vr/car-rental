import { useRef } from "react";
import { BtnSearch, FromInput, Form, Placer, Span, ToInput, Wrapper } from "./RangeFilter.styled"
import { useEffect } from "react";

export const RangeFilter = ({ range, handleSubmit }) => {
	const form = useRef();

	const onSubmit = (ev) => {
		ev.preventDefault();
		handleSubmit({ from: form.current.elements.from.value, to: form.current.elements.to.value });
	}

	useEffect(() => {
		if (range.from === 0 && range.to === Number.MAX_SAFE_INTEGER) {
			form.current.reset()
		}
	})

	return (
		<Form ref={form} onSubmit={onSubmit}>
			Сar mileage / km
			<Wrapper>
				<Placer>
					<FromInput type="number" name="from" />
					<Span>From</Span>
				</Placer>
				<Placer>
				<ToInput  type="number" name="to"  />
					<Span>To</Span>
				</Placer>
				<BtnSearch type='submit' >Search</BtnSearch>
			</Wrapper>
		</Form>
	)
}