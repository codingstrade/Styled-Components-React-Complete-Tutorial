import React from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardTitle,
  Description,
  Button,
} from "../styles/styled.Card";
import TextBanner from "../textbanner/TextBanner";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

const InfoBoxes = () => {
  return (
    <div>
      <TextBanner title={"What we provid"} subtitle={"Our Services"} />
      <Container>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Training Courses</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Read More</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Service Desk</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Read More</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Data Recovery</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Read More</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Proactive Services</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Read More</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>User Support</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Read More</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>24/7 Services</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto odio eius rem distinctio. Doloremque, quia voluptate. Eius
              quos ullam eum, commodi enim vitae aspernatur vero dignissimos
              necessitatibus ad accusamus?
            </Description>
            <Button href="#">Read More</Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default InfoBoxes;
