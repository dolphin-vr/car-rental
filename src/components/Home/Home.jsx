import { Hero, Info, ProsItem, ProsList, Text, Title, Title2, Wrapper } from "./Home.styled"

export const Home = ()=>{
	return (
		<Wrapper>
			<Hero>
				<Title>The best Car Rental Service</Title>
				<Title2>If you’re planning to get off the beaten track and embark on a self-drive holiday, there are many choices available to you when choosing your rental options.</Title2>
			</Hero>
			<Info>
				<ProsList>
					<ProsItem>24/7 assistance</ProsItem>
					<ProsItem>Expert advice and customer service</ProsItem>
					<ProsItem>Solo traveller and group tours</ProsItem>
				</ProsList>
				<Text>Select the brand and model of the car you desire. You’ll experience an adrenaline surge when you see the possibilities, so choose wisely and resist the urge to become overwhelmed. It is best to have a roomy automobile, such as an SUV or sedan, if you want to drive with a family.</Text>
				<Text>To avoid experiencing any technical or mechanical issues while driving, it would be great if you had a thorough inspection of the car you intend to hire. For a comfortable driving experience, you must be fully informed of its capabilities and accessibility of navigation. This way you can save money from paying fines and extra money to rental companies for any damage etc. </Text>
			</Info>
	</Wrapper>
	)
}