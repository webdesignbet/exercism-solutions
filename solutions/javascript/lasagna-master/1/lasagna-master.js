/// <reference path="./global.d.ts" />
// @ts-check

/**
  * Task 1 - Determine whether the lasagna is done
  *
  * @param {number | undefined} remainingTime
  * @returns {string}
*/
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  }

  if (remainingTime === 0) {
    return 'Lasagna is done.';
  }

  return 'Not done, please wait.';
}

/**
  * Task 2 - Estimate the preparation time
  *
  * @param {string[]} layers
  * @param {number} [timePerLayer=2]
  * @returns {number}
*/
export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

/**
  * Task 3 - Compute the amounts of noodles and sauce needed
  *
  * @param {string[]} layers
  * @returns {{noodles: number, sauce: number}}
*/
export function quantities(layers) {
  let noodleCount = 0;
  let sauceCount = 0;

  for (const layer of layers) {
    if (layer === 'noodles') {
      noodleCount += 50;
    } else if (layer === 'sauce') {
      sauceCount += 0.2;
    }
  }

  return {
    noodles: noodleCount,
    sauce: sauceCount,
  };
}

/**
  * Task 4 - Add the secret ingredient
  *
  * @param {string[]} friendsList
  * @param {string[]} myList
  * @returns {void}
*/
export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

/**
  * Task 5 - Scale the recipe
  *
  * @param {Record<string, number>} recipe
  * @param {number} numPortions
  * @returns {<Record<string, number>}
*/
export function scaleRecipe(recipe, numPortions) {
  const scaleFactor = numPortions / 2;

  const scaledRecipe = {};

  for (const ingredient in recipe) {
    if (recipe.hasOwnProperty(ingredient)) {
      scaledRecipe[ingredient] = recipe[ingredient] * scaleFactor;
    }
  }

  return scaledRecipe;
}