import styled from "styled-components";

function Button({disabled, backgroundColor, size, children}) {
    return <StyledButton disabled={disabled} backgroundColor={backgroundColor} size={size}>{children}</StyledButton>
}

const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({backgroundColor}) => backgroundColor || 'rgb(107,78,254)'};
  color: ${props => props.backgroundColor ? 'black' : 'white'};
  padding: 9px;
  height: 2.25rem;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;

`;

export default Button;