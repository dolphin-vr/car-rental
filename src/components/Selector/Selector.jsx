import { BtnOpen, Input, Label, Option, Options, StyledSvg, Wrapper } from "./Selector.styled"
import { Icon } from "../Icon/Icon"
import { useState } from "react";
import { useEffect } from "react";

export const Selector = ({label, type, name, value, placer, options, handleFilter})=>{
  const [showList, setShowList] = useState(false);
	const [filtered, setFiltered] = useState(options);
	const [filter, setFilter] = useState(value);

	const handleChange =(str)=>{
		setFiltered(options.filter(el => el.toString().toLowerCase().startsWith(str.toString().toLowerCase())));
		setFilter(str);		
		handleFilter(str);
	}	
	const onClick = (str) =>{
		handleChange(str);
		setShowList(false);
		setFiltered(options);
	}
	useEffect(() => {
		setFilter(value)
	}, [value])
	
	return(
		<Wrapper>
			<Label>{label}</Label>
			<Input  type={type} name={name} value={filter} placeholder={placer} onChange={ev => handleChange(ev.target.value)} onSelect={()=>setShowList(true)}/>
			<BtnOpen type="button" onClick={() => { setShowList(!showList); }} >
				{showList ? ( <StyledSvg><Icon tag={"up"} /></StyledSvg> ) : (  <StyledSvg><Icon tag={"down"} /></StyledSvg> )}
			</BtnOpen>			
			<Options $isopen={showList}>
				{filtered.map(el=> <Option key={el} onClick={()=>onClick(el)}>{el}</Option>)}
			</Options>
		</Wrapper>
	)
}