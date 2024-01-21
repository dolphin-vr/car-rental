import { Icon } from "../Icon/Icon"
import { Contact, Fixer, Logo, MainNav, NavItem, StyledLink, StyledSvg, Wrapper } from "./Header.styled"

export const Header = () =>{
	return (
		<Fixer>
			<Wrapper>
				<Logo><StyledSvg><Icon tag={"logo"} /></StyledSvg>Car Rental Service</Logo>				
				<MainNav>
					<NavItem><StyledLink to="/">Home</StyledLink></NavItem>
						<NavItem><StyledLink to="/catalog">Catalog</StyledLink></NavItem>
						<NavItem><StyledLink to="/favorites">Favorite</StyledLink></NavItem>
				</MainNav>
				<Contact>Contact us +380730000000</Contact>
			</Wrapper>
		</Fixer>
	)
}