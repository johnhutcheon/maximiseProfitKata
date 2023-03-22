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

module.exports = { getMaxProfit, answerFunc };
