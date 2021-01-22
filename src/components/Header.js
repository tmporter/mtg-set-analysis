import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  background: rgba(0, 50, 50, 0.2);
  color: rgba(0, 0, 0, 0.7);

  & > * {
    margin: 0 1rem;
  }

  & > a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 600;

    &.active {
      text-decoration: underline;
    }

    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export default Header;
