import styled from 'styled-components';

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflow-y: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  position: absolute;
  width: 5rem;
  height: 5rem;
  bottom: 0;
  right: 0;
  bottom: 40px;
  border-radius: 50%;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  background: ${props => props.theme.variant.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowUp = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  transition: all 0.3 ease-in-out;
  /* transform: ${props => (props.filterOpen ? 'rotate(45deg)' : null)}; */
  fill: #f7b92d;
`;
