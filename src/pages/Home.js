import phonebook from '../images/phonebook.jpg';
import { Container, Title, Link, Content } from './Home.styled';
const Home = () => {
  return (
   <Container> <Content>
      <Title>Welcom to phonebook</Title>
      <Link to="/register">Go 
&#10230; </Link>
    </Content>
     <img src={phonebook} alt="phonebook" width="360px" /></Container>
  );
};
export default Home;
