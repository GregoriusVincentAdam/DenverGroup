let person = [
    {
      name: "John",
      age: 35,
    },
    {
      name: "Bill",
      age: 23,
    },
    {
      name: "Bob",
      age: 17,
    },
    {
      name: "Jack",
      age: 20,
    },
  ];
  
  
  let min = Math.min(...person.map(persons => persons.age));

  let minValues = person.filter(persons => persons.age == min);
  

  let max = Math.max(...person.map(persons => persons.age));

  let maxValues = person.filter(persons => persons.age == max);
  
  console.log(maxValues);
  console.log(minValues);