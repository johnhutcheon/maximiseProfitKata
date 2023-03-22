const stockPrices = require("./stockPrices.json");

function maximiseProfits(stockPrices) {
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
  let appleProfit = apple[1] - apple[0];
  for (let i = 0; i < apple.length; i++) {
    for (let j = i + 1; j < apple.length; j++) {
      if (apple[j] - apple[i] > appleProfit) appleProfit = apple[j] - apple[i];
    }
  }
  maxApple.maxProfit = appleProfit;

  const maxMicrosoft = { name: "Microsoft" };
  let microsoftProfit = microsoft[1] - microsoft[0];
  for (let i = 0; i < microsoft.length; i++) {
    for (let j = i + 1; j < microsoft.length; j++) {
      if (microsoft[j] - microsoft[i] > microsoftProfit)
        microsoftProfit = microsoft[j] - microsoft[i];
    }
  }
  maxMicrosoft.maxProfit = microsoftProfit;

  const maxTesla = { name: "Tesla" };
  let teslaProfit = tesla[1] - tesla[0];
  for (let i = 0; i < tesla.length; i++) {
    for (let j = i + 1; j < tesla.length; j++) {
      if (tesla[j] - tesla[i] > teslaProfit) teslaProfit = tesla[j] - tesla[i];
    }
  }
  maxTesla.maxProfit = teslaProfit;

  const maxAmazon = { name: "Amazon" };
  let amazonProfit = amazon[1] - amazon[0];
  for (let i = 0; i < amazon.length; i++) {
    for (let j = i + 1; j < amazon.length; j++) {
      if (amazon[j] - amazon[i] > amazonProfit)
        amazonProfit = amazon[j] - amazon[i];
    }
  }
  maxAmazon.maxProfit = amazonProfit;

  const maxGoogle = { name: "Google" };
  let googleProfit = google[1] - google[0];
  for (let i = 0; i < google.length; i++) {
    for (let j = i + 1; j < google.length; j++) {
      if (google[j] - google[i] > googleProfit)
        googleProfit = google[j] - google[i];
    }
  }
  maxGoogle.maxProfit = googleProfit;

  const answerArray = [maxApple, maxMicrosoft, maxTesla, maxAmazon, maxGoogle];

  const answer = (answerArray) => {
    const ans = {
      name: "",
      maxProfit: -Infinity,
    };
    answerArray.forEach((company) => {
      const { name, maxProfit } = company;
      if (maxProfit > ans.maxProfit) {
        ans.name = name;
        ans.maxProfit = maxProfit.toFixed(2);
      }
    });
    return ans;
  };

  return answer(answerArray);
}

console.time();

console.log(maximiseProfits(stockPrices));

console.timeEnd();
