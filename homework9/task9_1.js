const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
  backend: [
    { name: "Alex", salary: 2300 },
    { name: "Bublik", salary: 4000 },
  ],
};

function countTotalSalary(company) {
  if (Array.isArray(company)) {
    let sumArray = 0;
    for (let i = 0; i < company.length; i++) {
      const element = company[i];
      sumArray += element.salary;
    }
    return sumArray;
  } else {
    let totalSalary = 0;
    const value = Object.values(company);
    for (const elem of value) {
      totalSalary += countTotalSalary(elem);
    }
    return totalSalary;
  }
}

console.log(countTotalSalary(company));
