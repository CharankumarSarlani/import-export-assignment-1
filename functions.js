//1. How many individuals are currently employed?
export const countEmployedIndividuals = (data) =>
  data.filter((person) => person.isEmployed).length;

//2. How many people own a car?
const isCar = (vehicles) => vehicles.type === "car";

export const countCarOwners = (data) =>
  data.flatMap((person) => person.vehicles.filter(isCar)).length;

const sum = (num1, num2) => num1 + num2;

//3. How many pets are fully vaccinated?
const noOfVaccinatedPetsOf = ({ pets }) =>
  pets.filter((pet) => pet.isFullyVaccinated).length;

export const countVaccinatedPets = (data) =>
  data.map(noOfVaccinatedPetsOf).reduce(sum, 0);

//4. What are the names of all the pets, and what type of animal is each?
export const getPetNamesAndTypes = function (data) {
  return data
    .flatMap((person) => person.pets)
    .map(({ name, type }) => ({ name, type }));
};

//5. Which cities do the individuals live in?
export const cities = (data) => data.map((person) => person.city);

//6. How many hobbies are shared across the group? What are they?
const removeDuplicates = (element, index, array) =>
  array.indexOf(element) === index;

export const getHobbiesAndCount = function (data) {
  const hobbies = data.flatMap((person) => person.hobbies);

  const titlesOf = hobbies.map(({ title }) => title).filter(removeDuplicates);

  return { hobbies: titlesOf, noOfHobbies: titlesOf.length };
};

//7. How many pets belong to people who are currently unemployed?
export const noOfPetsWithUnemployedPeople = function (data) {
  return data
    .filter((person) => !person.isEmployed)
    .flatMap((person) => person.pets).length;
};

//8. What is the average age of the individuals mentioned in the passage?

export const averageAge = function (data) {
  const totalAges = data.reduce((acc, person) => acc + person.age, 0);
  return totalAges / data.length;
};

//9. How many individuals have studied computer science, and how many of them have pets?
const isCSStudent = ({ qualification }) =>
  qualification.some(({ major }) => major.includes("computer science"));

const hasPets = ({ pets }) => pets.length > 0;

export const studiedCSAndHavePets = (data) =>
  data.filter((person) => isCSStudent(person) && hasPets(person)).length;

//10. How many individuals own more than one pet?
export const countPeopleWithMoreThanOnePet = (data) =>
  data.filter(({ pets }) => pets.length > 1).length;

//11. Which pets are associated with specific favorite activities?
export const petsWithFavouriteActivites = function (data) {
  const pets = data.flatMap((person) => person.pets);

  return pets.map(({ name, favouriteActivities }) => ({
    name,
    favouriteActivities,
  }));
};

//12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
const isFromBangaloreOrChennai = (person) =>
  person.city === "Bangalore" || person.city === "Chennai";

export const fetchPetsInBangaloreOrChennai = (data) =>
  data
    .filter(isFromBangaloreOrChennai)
    .flatMap((person) => person.pets)
    .map((pet) => pet.name);

//13. How many vaccinated pets belong to people who do not own a car?

export const vaccinatedPetsOfPeopleWithoutCar = function (data) {
  const peopleWithoutCar = data.filter((person) =>
    person.vehicles.every((vehicle) => {
      return !vehicle.type.includes("car");
    })
  );

  return peopleWithoutCar.flatMap((person) =>
    person.pets.filter(({ isFullyVaccinated }) => isFullyVaccinated)
  ).length;
};

//14. What is the most common type of pet among the group?
const occurences = (object, element) => {
  object[element] = (object[element] || 0) + 1;
  return object;
};

export const commonPetType = function (data) {
  const pets = data.flatMap((person) => person.pets).map((pet) => pet.type);

  const petTypesAndOccurances = pets.reduce(occurences, {});

  return Object.entries(petTypesAndOccurances).reduce((commonPet, currentPet) =>
    commonPet[1] > currentPet[1] ? commonPet : currentPet
  )[0];
};

//15. How many individuals have more than two hobbies?
export const countPeopleWithMoreThanTwoHobbies = (data) =>
  data.filter((person) => person.hobbies.length > 2).length;

//17. Which pet is the youngest, and what is its name?
export const youngestPet = function (data) {
  const petDetails = data.flatMap((person) => person.pets);

  const pet = petDetails.reduce((youngestPet, currentpet) =>
    currentpet.age < youngestPet.age ? currentpet : youngestPet
  );

  return { type: pet.type, name: pet.name };
};

//18. What types of books are mentioned as interests, and who reads them?
export const bookReadersAndTypesOfBooks = function (data) {
  return data.flatMap((person) =>
    person.hobbies
      .filter(({ title }) => title === "book reading")
      .map(({ details }) => ({
        person: person.name,
        bookType: details,
      }))
  );
};

//19. How many individuals live in cities starting with the letter "B"?
export const countIndividualsInCitiesStartsWithB = (data) =>
  data.filter((person) => person.city.startsWith("B")).length;

//20. Which individuals do not own any pets?
export const peopleWithoutPets = (data) =>
  data.filter((person) => person.pets.length < 1).map((person) => person.name);
