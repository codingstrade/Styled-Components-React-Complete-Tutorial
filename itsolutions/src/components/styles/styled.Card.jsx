import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  margin: 10px 10px;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.hoverColor} 50%,
    ${(props) => props.theme.colors.bgDefault} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: snow;
    background-position: left bottom;
    cursor: pointer;
  }
  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 350px;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 350px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding};
  flex-direction: column;
`;
export const CardTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
`;
export const Description = styled.div`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 15px;
  text-align: center;
`;
export const Button = styled.a`
  color: red;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
