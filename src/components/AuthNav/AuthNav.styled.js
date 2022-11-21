import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
`;
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
  :hover {
    color: blue;
  }
  &.active {
    color: blue;
  }
`;
