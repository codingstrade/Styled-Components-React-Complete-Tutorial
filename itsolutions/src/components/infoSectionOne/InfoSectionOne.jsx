import React from "react";
import sectionOneImage from "../../images/section1.png";
import {
  Container,
  Description,
  Header,
  Image,
  Left,
  List,
  ListItem,
  Right,
  Title,
  Wrapper,
} from "../styles/styled.Section";

const InfoSectionOne = () => {
  return (
    <Container>
      <Wrapper direction={"row"}>
        <Right>
          <Image src={sectionOneImage} />
        </Right>
        <Left>
          <Title>Why Choose Us?</Title>
          <Header>IT lifecycle management all in one place</Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam, nostrud
          </Description>
          <List>
            <ListItem> Transparent advice</ListItem>
            <ListItem> Volume bundling</ListItem>
            <ListItem> Global IT sourcing</ListItem>
            <ListItem> International deliveries</ListItem>
            <ListItem> Software refuelling</ListItem>
            <ListItem> Nationwide service network</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionOne;
