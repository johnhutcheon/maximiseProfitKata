const stockPrices = require("./stockPrices.json");
const { answerFunc, getMaxProfit } = require("./utils/utils");

function maximiseProfits(stockPrices) {
  if (!stockPrices) return "Please provide stock data";

  const clone = structuredClone(stockPrices);
  const flatten = clone.flat(1);

  const apple = [];
  const microsoft = [];
  const tesla = [];
  const amazon = [];
  const google = [];

  for (let i = 0; i < flatten.length; i++) {
    if (flatten[i].name === "Apple") {
      apple.push(flatten[i].price);
    } else if (flatten[i].name === "Microsoft") {
      microsoft.push(flatten[i].price);
    } else if (flatten[i].name === "Tesla") {
      tesla.push(flatten[i].price);
    } else if (flatten[i].name === "Amazon") {
      amazon.push(flatten[i].price);
    } else if (flatten[i].name === "Google") google.push(flatten[i].price);
  }

  const maxApple = { name: "Apple" };
  maxApple.maxProfit = getMaxProfit(apple);

  const maxMicrosoft = { name: "Microsoft" };
  maxMicrosoft.maxProfit = getMaxProfit(microsoft);

  const maxTesla = { name: "Tesla" };
  maxTesla.maxProfit = getMaxProfit(tesla);

  const maxAmazon = { name: "Amazon" };
  maxAmazon.maxProfit = getMaxProfit(amazon);

  const maxGoogle = { name: "Google" };
  maxGoogle.maxProfit = getMaxProfit(google);

  const answerArray = [maxApple, maxMicrosoft, maxTesla, maxAmazon, maxGoogle];

  return answerFunc(answerArray);
}

module.exports = { maximiseProfits };
