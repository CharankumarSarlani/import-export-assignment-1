import * as utilities from "./functions.js";
import { groupTest } from "./testFrameWork.js";
import { people } from "./data.js";

const [ananya, kavya, ramesh, rahul] = people;

const countEmployedIndividualsTest = {
  question: "1. How many individuals are currently employed?",
  answer: utilities.countEmployedIndividuals,
  testCases: [
    {
      data: [
        { ...ananya, isEmployed: true },
        { ...kavya, isEmployed: true },
        { ...ramesh, isEmployed: true },
        { ...rahul, isEmployed: true },
      ],
      expected: 4,
    },
    {
      data: [
        { ...ananya, isEmployed: false },
        { ...kavya, isEmployed: true },
        { ...ramesh, isEmployed: false },
        { ...rahul, isEmployed: true },
      ],
      expected: 2,
    },
    {
      data: [
        { ...ananya, isEmployed: false },
        { ...kavya, isEmployed: false },
        { ...ramesh, isEmployed: false },
        { ...rahul, isEmployed: false },
      ],
      expected: 0,
    },
    {
      data: [],
      expected: 0,
    },
  ],
};

const countCarOwnersTest = {
  question: "2. How many people own a car?",
  answer: utilities.countCarOwners,
  testCases: [
    {
      data: [{ vehicles: [{ type: "car" }] }, { vehicles: [{ type: "bike" }] }],
      expected: 1,
    },
    {
      data: [{ vehicles: [{ type: "car" }] }, { vehicles: [{ type: "car" }] }],
      expected: 2,
    },
    {
      data: [
        { vehicles: [{ type: "car" }] },
        { vehicles: [{ type: "car" }, { type: "truck" }] },
      ],
      expected: 2,
    },
    {
      data: [{ vehicles: [{ type: "car" }] }, { vehicles: [] }],
      expected: 1,
    },
    {
      data: [{ vehicles: [] }, { vehicles: [] }],
      expected: 0,
    },
  ],
};

const countVaccinatedPetsTest = {
  question: "3. How many pets are fully vaccinated?",
  answer: utilities.countVaccinatedPets,
  testCases: [
    {
      data: [
        { pets: [{ isFullyVaccinated: true }] },
        { pets: [{ isFullyVaccinated: true }] },
      ],
      expected: 2,
    },
    {
      data: [
        { pets: [{ isFullyVaccinated: true }] },
        { pets: [{ isFullyVaccinated: false }] },
      ],
      expected: 1,
    },
    {
      data: [
        { pets: [{ isFullyVaccinated: false }] },
        { pets: [{ isFullyVaccinated: false }] },
      ],
      expected: 0,
    },
    {
      data: [{ pets: [] }, { pets: [] }],
      expected: 0,
    },
    {
      data: [{ pets: [{ isFullyVaccinated: null }] }],
      expected: 0,
    },
    {
      data: [],
      expected: 0,
    },
  ],
};

const testSuite = [
  countEmployedIndividualsTest,
  countCarOwnersTest,
  countVaccinatedPetsTest,
];

const runTestCasesFor = (test) =>
  test.testCases.map(({ data, expected }) => [test.answer(data), expected]);

const executeTestSuite = (tests) =>
  groupTest(tests.question, runTestCasesFor(tests));

testSuite.map(executeTestSuite);
