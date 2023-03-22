const stockPrices = require("./stockPrices.json");

function getMaxProfit(array) {
  let companyProfit = array[1] - array[0];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] - array[i] > companyProfit)
        companyProfit = array[j] - array[i];
    }
  }
  return companyProfit;
}

function answerFunc(array) {
  const ans = {
    name: "",
    maxProfit: -Infinity,
  };
  array.forEach((company) => {
    const { name, maxProfit } = company;
    if (maxProfit > ans.maxProfit) {
      ans.name = name;
      ans.maxProfit = Number(maxProfit.toFixed(2));
    }
  });
  return ans;
}

function maximiseProfits(stockPrices) {
  if (!stockPrices) return "Please provide stock data";

  const flatten = stockPrices.flat(1);

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
