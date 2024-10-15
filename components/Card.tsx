// components/Card.tsx
import styled from 'styled-components';
import Link from 'next/link'; // Import Link for navigation

const CardWrapper = styled.div`
  background: lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin: 0;
`;

const Count = styled.span`
  color: darkgray;
`;

interface CardProps {
  id: number; // Add id prop for the question ID
  title: string;
  views: number;
  answers: number;
}

const Card: React.FC<CardProps> = ({ id, title, views, answers }) => {
  return (
    <Link href={`/questions/${id}`}> {/* Link to the individual question page */}
      <CardWrapper>
        <Title>{title}</Title>
        <Count>{`Views: ${views} | Answers: ${answers}`}</Count>
      </CardWrapper>
    </Link>
  );
};

export default Card;

