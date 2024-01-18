export const city = (adr)=>{
	return adr.split(", ").slice(-2, -1)[0];
}

export const country = (adr)=>{
	return adr.split(", ").pop();
}
