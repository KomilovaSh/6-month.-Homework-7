import React from 'react';
import styled from 'styled-components';
import backgroundImage from './assets/main.png';

const Container = styled.div`
  display: flex;
  flex-direction: row; /* Rasm va ma'lumotlar qatorining joylashuvini o'zgartirish */
  height: 100vh;
`;

const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 100vh;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
 
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

const Title=styled.h4`
font-family: Playfair Display;
font-size: 50px;
font-weight: 400;
line-height: 67px;
letter-spacing: 0px;
text-align: left;
margin: 5px;

`
const Span=styled.span`
  color: red;
`

const MainParagraphs=styled.p`
font-size: 16px;
letter-spacing: 0px;
text-align: left;
margin: 5px;

`

const ButtonOrderNow=styled.button`
background-color: red;
padding: 15px 20px;
border: none;
border-radius: 100px;
color: white;
margin-top: 10px;
margin-right: 0px;



`


const App = () => {
  return (
    <Container>
      <Background />
        <Button>Login</Button>
      <InformationContainer>
        
        <Title>Delicious cakes and <br/>desserts by <Span> Kreed <br/> Bakery</Span></Title>
       <MainParagraphs>We deserve delicious cake and deliver unique experience to you</MainParagraphs>
       <ButtonOrderNow>Order Now</ButtonOrderNow>
      </InformationContainer>
    </Container>
  );
};

export default App;
