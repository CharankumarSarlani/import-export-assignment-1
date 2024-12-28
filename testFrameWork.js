export const isObject = (element) => typeof element === "object";

export function areEqual(entity1, entity2) {
  if (entity1 === entity2) {
    return true;
  }

  if (!isObject(entity1) || !isObject(entity2)) {
    return false;
  }

  const entity1Keys = Object.keys(entity1);
  const entity2Keys = Object.keys(entity2);

  if (entity1Keys.length !== entity2Keys.length) {
    return false;
  }

  return entity1Keys.every((key) => areEqual(entity1[key], entity2[key]));
}

const test = ([actual, expected]) => {
  const status = areEqual(actual, expected) ? "✅" : "❌";
  console.log(status, "actual:", actual, "expected:", expected);
};

export const groupTest = (description, testCases) => {
  console.log(description);
  testCases.map(test);
};
