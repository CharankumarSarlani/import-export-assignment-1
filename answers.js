import {
  countEmployedIndividuals,
  countCarOwners,
  countVaccinatedPets,
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
