import React from "react";
import styled from "styled-components";
import avatarImage1 from "../../images/staff1.jpg";
import avatarImage2 from "../../images/staff2.jpg";
import avatarImage3 from "../../images/staff3.jpg";
import avatarImage4 from "../../images/staff4.jpg";
import TextBanner from "../textbanner/TextBanner";
const Container = styled.div`
  padding: 5%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  margin: 1%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MemberName = styled.div`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 2% 2%;
`;

const TeamPosition = styled.div`
  color: ${(props) => props.theme.colors.textDark};
`;

const Teams = () => {
  return (
    <Container>
      <TextBanner title={"Wir union"} subtitle={"Our Team"} />
      <Wrapper>
        <Card>
          <CardImage src={avatarImage1} />
          <TextWrapper>
            <MemberName>John Doe</MemberName>
            <TeamPosition>Marketing Specialist</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage2} />
          <TextWrapper>
            <MemberName>Jane Doe</MemberName>
            <TeamPosition>Project Manager</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage3} />
          <TextWrapper>
            <MemberName>Mary bean</MemberName>
            <TeamPosition>Web Designer</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage4} />
          <TextWrapper>
            <MemberName>Rock Bean</MemberName>
            <TeamPosition>Marketing Coordinator</TeamPosition>
          </TextWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Teams;
