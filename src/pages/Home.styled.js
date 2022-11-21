
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Content = styled.div`

`
export const Container = styled.div`
  margin: 30px auto;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: blue 2px 2px 4px 1px;
  width: 600px;
`;
export const Title = styled.h1`
  margin: 0 0 10px 0;
  text-transform: uppercase;

`;
export const Link = styled(NavLink)`
    text-transform: uppercase;
    text-decoration: none;
     font-family: system-ui;
  font-size: 18px;
  font-weight: 700;
 background-color: blue;
    color: white;
    border-radius: 4px;
    padding: 3px 20px;
`;
