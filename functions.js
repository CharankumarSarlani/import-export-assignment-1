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
const getPetNamesAndTypes = function (data) {
  return data
    .flatMap((person) => person.pets)
    .map(({ name, type }) => ({ name, type }));
};
