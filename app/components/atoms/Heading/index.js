import styled from "styled-components";

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.gray};
  font-size: 2.5rem;
`;

export default Heading;
