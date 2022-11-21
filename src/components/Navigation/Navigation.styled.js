import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`

`
export const Link = styled(NavLink)`
  font-family: system-ui;
  font-size: 18px;
  font-weight: 700;
  margin-right: 20px;
  color: black;
    text-decoration: none;
  :last-child {
    margin-right: 0;
  }
    &.active {
    background-color: blue;
    color: white;
    border-radius: 4px;
    padding: 3px;
    text-decoration: none;
  }
`