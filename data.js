const rahul = {
  name: "Rahul",
  age: 28, //default age
  city: "Pune",

  qualification: [{ major: "computer science" }],
  profession: "software engineer",
  isEmployed: true,

  hobbies: [
    {
      title: "playing",
      details: "chess",
    },
    {
      title: "gardening",
      details: "does when he's not busy coding",
    },
  ],

  vehicles: [
    {
      type: "car",
      company: "maruthi",
      model: "swift",
    },
  ],
  preferredTransportation: [],

  pets: [
    {
      type: "dog",
      breed: "golden retriever",
      name: "Max",
      age: 4,
      isFullyVaccinated: true,
      favouriteActivities: ["playing fetch in the park"],
      abilities: "",
    },
  ],
};

const ananya = {
  name: "Ananya",
  age: 30,
  city: "Bangalore",

  qualification: [{ major: "computer science" }, { minor: "graphic design" }],
  profession: "",
  isEmployed: false,

  hobbies: [
    {
      title: "cooking",
      details: "Italian cuisine",
    },
  ],

  vehicles: [],
  preferredTransportation: ["public transport"],

  pets: [
    {
      type: "parrot",
      breed: "",
      name: "Kiwi",
      age: 0,
      isFullyVaccinated: true,
      favouriteActivities: ["mimics voices"],
      abilities: ["knows over 20 phrases"],
    },
  ],
};

const ramesh = {
  name: "Ramesh",
  age: 45,
  city: "Jaipur",

  qualification: [{ major: "computer science" }],
  profession: "business owner",
  isEmployed: true,

  hobbies: [
    {
      title: "gardening",
      details: "rose gardening",
    },
    {
      title: "book reading",
      details: "historical fiction",
    },
  ],

  vehicles: [],
  preferredTransportation: [],

  pets: [
    {
      type: "cat",
      breed: "Persian cat",
      name: "Bella",
      age: 3,
      isFullyVaccinated: true,
      favouriteActivities: ["love lounging in the sun"],
      abilities: [],
    },
    {
      type: "cat",
      breed: "Persian cat",
      name: "Leo",
      age: 3,
      isFullyVaccinated: true,
      favouriteActivities: ["love lounging in the sun"],
      abilities: [],
    },
  ],
};

const kavya = {
  name: "Kavya",
  age: 28,
  city: "Chennai",

  profession: "professional dancer",
  qualification: [],
  isEmployed: false,

  hobbies: [
    {
      title: "watching",
      details: "sci-fi shows",
    },
    {
      title: "book reading",
      details: "modern fantasy novels",
    },
  ],

  vehicles: [],
  preferredTransportation: [],

  pets: [
    {
      type: "rabbit",
      breed: "",
      name: "Snowy",
      age: 2,
      isFullyVaccinated: true,
      favouriteActivities: [
        "enjoys hopping around her backyard",
        "nibbling on carrots",
      ],
      abilities: [],
    },
  ],
};

export const people = [rahul, ananya, ramesh, kavya];
