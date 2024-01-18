import { Icon } from "../Icon/Icon"
import { MainNav, NavItem, StyledLink, StyledSvg, Wrapper } from "./Header.styled"

export const Header = () =>{
	return(
		<Wrapper>
			<StyledSvg><Icon tag={"logo"} /></StyledSvg>
			<MainNav>
				<NavItem><StyledLink to="/">Home</StyledLink></NavItem>
					<NavItem><StyledLink to="/catalog">Catalog</StyledLink></NavItem>
					<NavItem><StyledLink to="/favlist">Favorite</StyledLink></NavItem>
			</MainNav>
		</Wrapper>

	)
}