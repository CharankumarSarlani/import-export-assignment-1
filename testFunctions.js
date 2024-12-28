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
        { isEmployed: true },
        { isEmployed: true },
        { isEmployed: true },
        { isEmployed: true },
      ],
      expected: 4,
    },
    {
      data: [
        { isEmployed: false },
        { isEmployed: true },
        { isEmployed: false },
        { isEmployed: true },
      ],
      expected: 2,
    },
    {
      data: [
        { isEmployed: false },
        { isEmployed: false },
        { isEmployed: false },
        { isEmployed: false },
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

const testSuite = [countEmployedIndividualsTest, countCarOwnersTest];

const runTestCasesFor = (test) =>
  test.testCases.map(({ data, expected }) => [test.answer(data), expected]);

const executeTestSuite = (tests) =>
  groupTest(tests.question, runTestCasesFor(tests));

testSuite.map(executeTestSuite);
