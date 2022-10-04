import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

const Title = styled.div`
  color: tomato;
`;
const Subtitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin: 5px;
  color: ${(props) => props.theme.colors.primary};
`;

const TextBanner = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default TextBanner;
