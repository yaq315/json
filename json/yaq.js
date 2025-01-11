//task1
let my1 =
'{"Name" : "yaqoot","Age" : 25,"Email" : "yagoutgharaibeh@gmail.com"}';
let jsonjs = JSON.parse(my1);
console.log(jsonjs);
let josn = JSON.stringify(jsonjs);
console.log(josn);


//task2
let my2= { name: "yaqoot", age: 25, email: "yagoutgharaibeh@gmail.com" };
function receive(m2) {
    return Object.keys(m2).length;
  }
  
  console.log(receive(my2));

  //task3

  let books = {
    library: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationDate: "1925",
      },
      { title: "1984", 
      author: "George Orwell",
       publicationDate: "1949" },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationDate: "1960",
      },
    ],
  };
  function receives(obj) {
    return obj.library.map(library => library.title);
  }
  console.log(receives(books));



//task4
function Average(jsonObject, Name) {
    const array = jsonObject.data;
    const total = array.reduce((sum, item) => sum + item[Name], 0);
    return total / array.length;
  }
  const students = {
    data: [
      { name: "Ali", grade: 85 },
      { name: "Sara", grade: 90 },
      { name: "Ahmed", grade: 78 },
      { name: "Laila", grade: 92 },
    ],
  };
  console.log(Average(students, "grade"));

  //task5
  function sortByProperty(jsonObject, propertyName) {
    const array = jsonObject.data;
    return array.sort((a, b) => b[propertyName] - a[propertyName]);
  }

  const student = {
    data: [
      { name: "Ali", grade: 85 },
      { name: "Sara", grade: 90 },
      { name: "Ahmed", grade: 78 },
      { name: "Laila", grade: 92 },
    ],
  };

  console.log(sortByProperty(students, "grade"));

  //task6
  const cities = {
    data: [
      { name: "Tokyo", population: 37400068, country: "Japan" },
      { name: "Shanghai", population: 26317104, country: "China" },
      { name: "Delhi", population: 29399141, country: "India" },
      { name: "São Paulo", population: 21846507, country: "Brazil" },
      { name: "Cairo", population: 20076002, country: "Egypt" },
    ],
  };
  function getCitiesByPopulation(jsonObject) {
    return jsonObject.data
      .sort((a, b) => b.population - a.population)
      .map((city) => city.name);
  }
  console.log(getCitiesByPopulation(cities));

  //task7


  //task8

      let fatchData = fetch(" https://api.github.com/users/yaq315/repos");
      fatchData
        .then((Response) => {
          if (!Response.ok) {
            throw "Failed to fatch data;";
          }
          return Response.json();
        })
        .then((data) => {
          let reponame = data.map((repo) => repo.name);
          console.log(reponame);
        });
   