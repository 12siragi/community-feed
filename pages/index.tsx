// pages/index.tsx
import Header from '../components/Header';
import Card from '../components/Card';

interface Question {
  question_id: number; // Ensure the question ID is correctly typed
  title: string;
  view_count: number;
  answer_count: number;
}

interface HomeProps {
  questions: Question[];
}

const Home: React.FC<HomeProps> = ({ questions }) => {
  return (
    <>
      <Header />
      <div>
        {questions.map((question) => (
          <Card
            key={question.question_id}
            id={question.question_id} // Pass the question ID
            title={question.title}
            views={question.view_count}
            answers={question.answer_count}
          />
        ))}
      </div>
    </>
  );
};

// Fetching data on the server side
export async function getServerSideProps() {
  const res = await fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow');
  const data = await res.json();

  return {
    props: {
      questions: data.items,
    },
  };
}

export default Home;

