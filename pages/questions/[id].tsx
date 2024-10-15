// pages/questions/[id].tsx
import { useRouter } from 'next/router';
import Header from '../../components/Header';

const QuestionDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the question ID from the URL

  return (
    <>
      <Header />
      <h2>Question Details for ID: {id}</h2>
      {/* Fetch and display question details using the ID */}
    </>
  );
};

export default QuestionDetailPage;

