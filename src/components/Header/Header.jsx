import { Icon } from "../Icon/Icon"
import { Contact, Logo, MainNav, NavItem, StyledLink, StyledSvg, Wrapper } from "./Header.styled"

export const Header = () =>{
	return (
			<Wrapper>
				<Logo to="/"><StyledSvg><Icon tag={"logo"} /></StyledSvg>Car Rental Service</Logo>				
				<MainNav>
					<NavItem><StyledLink to="/">Home</StyledLink></NavItem>
						<NavItem><StyledLink to="/catalog">Catalog</StyledLink></NavItem>
						<NavItem><StyledLink to="/favorites">Favorites</StyledLink></NavItem>
				</MainNav>
				<Contact href="tel:+380730000000">Contact us +380730000000</Contact>
			</Wrapper>
	)
}