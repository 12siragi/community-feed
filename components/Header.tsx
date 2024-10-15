// components/Header.tsx
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: orange;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

interface HeaderProps {
  title?: string; // Optional prop for a customizable title
}

const Header: React.FC<HeaderProps> = ({ title = "Community Feed" }) => {
  return <HeaderWrapper>{title}</HeaderWrapper>;
}

export default Header;

