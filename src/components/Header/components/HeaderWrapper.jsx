import styled from "@emotion/styled";
import { css } from "@emotion/react";



const HeaderWrapper = styled.header`
  align-items: center;
  background-color: blue;
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;
  transition: .2s ease-in-out .4s;

  
`;

export default HeaderWrapper;
