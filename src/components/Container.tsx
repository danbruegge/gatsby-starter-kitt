import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto 2rem;
  max-width: ${(props) => props.theme.breakpoints.desktopSize};
  padding: 1.5rem;
`;
