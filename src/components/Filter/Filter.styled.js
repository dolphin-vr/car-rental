import styled from "styled-components";
import { Selector } from "../Selector/Selector";

export const Wrapper = styled.div`
	width: 860px;
	display: flex;
	gap: 18px;
	margin: 4px auto;
`

export const BrandSelector = styled(Selector)`
	width: 224px;
`

export const PriceSelector = styled(Selector)`
	width: 124px;
`