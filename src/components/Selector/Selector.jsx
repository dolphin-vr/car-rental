import { BtnOpen, Input, Label, Option, Options, StyledSvg, Wrapper } from "./Selector.styled"
import { Icon } from "../Icon/Icon"
import { useState } from "react";

export const Selector = ({sels, handleChange})=>{
  const [showList, setShowList] = useState(false);
	return(
		<Wrapper>
			<Label>
				{sels.label}
				<Input 
            type="text"
            placeholder={sels.placer}
            name="model"
            onChange={handleChange}
            value={sels.placer}/>
						<BtnOpen type="button" onClick={() => { setShowList(!showList); }} >
								{showList ? ( <StyledSvg><Icon tag={"up"} /></StyledSvg> ) : (  <StyledSvg><Icon tag={"down"} /></StyledSvg> )}
							</BtnOpen>
			</Label>
				<Options $isopen={showList}>
					{sels.options.map(el=> <Option key={el}>{el}</Option>)}
				</Options>
		</Wrapper>
	)
}