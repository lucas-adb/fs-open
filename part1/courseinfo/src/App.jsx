import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

const App = () => {
  const courseInfo = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={courseInfo.name} />
      <Content parts={courseInfo.parts} />
      <Total exercises={courseInfo.parts.map((part) => part.exercises)} />
    </div>
  );
};

export default App;
