export const city = (adr)=>{
	return adr.split(", ").slice(-2, -1)[0];
}

export const country = (adr)=>{
	return adr.split(", ").pop();
}

export const dozens = (start, stop, step) => 
	Array.from({ length: (stop - start) / step + 1 },	(value, index) => start + index * step);
