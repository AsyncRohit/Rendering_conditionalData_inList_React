const App = () => {
  const peoples = [
    { name: "Rohit", age: 12 },
    { name: "nikki", age: 19 },
  ];
  let voters = peoples.filter((person) => person.age > 18);

  return (
    <div>
      <h1>Peoples eligible for votings are as follows </h1>
      {voters.map((person, i) => (
        <h1 key={i}>
          {person.name} - {person.age}
        </h1>
      ))}
    </div>
  );
};

export default App;
