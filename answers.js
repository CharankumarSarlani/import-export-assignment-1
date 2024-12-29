import {
  countEmployedIndividuals,
  countCarOwners,
  countVaccinatedPets,
  cities,
  getHobbiesAndCount,
  getPetNamesAndTypes,
} from "./functions.js";

import { people } from "./data.js";
import { groupTest } from "./testFrameWork.js";

groupTest("1. How many individuals are currently employed?", [
  [countEmployedIndividuals(people), 2],
]);

groupTest("2. How many people own a car?", [[countCarOwners(people), 1]]);

groupTest("3. How many pets are fully vaccinated?", [
  [countVaccinatedPets(people), 5],
]);

groupTest(
  "4. What are the names of all the pets, and what type of animal is each?",
  [
    [
      getPetNamesAndTypes(people),
      [
        { name: "Max", type: "dog" },
        { name: "Kiwi", type: "parrot" },
        { name: "Bella", type: "cat" },
        { name: "Leo", type: "cat" },
        { name: "Snowy", type: "rabbit" },
      ],
    ],
  ]
);

groupTest("5. Which cities do the individuals live in?", [
  [cities(people), ["Pune", "Bangalore", "Jaipur", "Chennai"]],
]);

groupTest("6. How many hobbies are shared across the group? What are they?", [
  [
    getHobbiesAndCount(people),
    {
      hobbies: ["playing", "gardening", "cooking", "book reading", "watching"],
      noOfHobbies: 5,
    },
  ],
]);
