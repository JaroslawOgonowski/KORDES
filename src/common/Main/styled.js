import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-x: hidden; /* ukrywa poziomy scroll i ucina wystający content */

  @media (max-width: 1360px) {
    width: 100%;  
  }

  @media (max-width: 767px) {  
    flex-direction: column;
  }
`;