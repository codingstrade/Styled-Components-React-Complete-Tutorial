import React from "react";
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
import sectionThreeImage from "../../images/section3.png";

const InfoSectionThree = () => {
  return (
    <Container>
      <Wrapper direction={"row-reverse"}>
        <Right>
          <Image src={sectionThreeImage} />
        </Right>
        <Left>
          <Title>WHY TRUST US?</Title>
          <Header>
            Software Asset Management (SAM) / Software Lifecycle Management
          </Header>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <List>
            <ListItem> Guarantee processing</ListItem>
            <ListItem> Returns programme</ListItem>
            <ListItem> Certified data deletion</ListItem>
            <ListItem> End-of-life management</ListItem>
            <ListItem> Volume bundling</ListItem>
            <ListItem> Connection to shop systems</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionThree;
