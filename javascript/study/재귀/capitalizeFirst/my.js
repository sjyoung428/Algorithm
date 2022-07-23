const capitalizeFirst = (array) => {
  let store = [];

  const recursive = (array) => {
    if (!array[0]) return;
    let string = array[0];
    let result = string.replace(string[0], string[0].toUpperCase());
    store.push(result);
    recursive(array.slice(1));
  };
  recursive(array);
  return store;
};
// capitalizeFirst(["car", "taco", "banana"]);
console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
