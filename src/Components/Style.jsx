const Style = () => {
  const rating = 5
    const phones = [
    { id: 1, name: "realme", rating: 5.1 },
    { id: 2, name: "oppo", rating: 6 },
  ];

  return (
    <div>
      {phones.map((mobileBrand) => (
        <h2 key={mobileBrand.id} className={mobileBrand.rating >=rating ? 'green': 'yellow'}>{`${mobileBrand.name} rating is ${mobileBrand.rating}`}</h2>
      ))}
    </div>
  );
};

export default Style;
