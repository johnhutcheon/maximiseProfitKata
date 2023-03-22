const { maximiseProfits } = require("../kata");
const stockPrices = require("../stockPrices.json");

describe("maximiseProfits function", () => {
  test("function returns an object", () => {
    const testArray = stockPrices;
    expect(typeof maximiseProfits(testArray)).toBe("object");
  });

  test("function returns an error message if no stock data passed through", () => {
    expect(maximiseProfits()).toEqual("Please provide stock data");
  });
  test("function returns correct answer when passed prices for two days", () => {
    const testArray = [
      [
        {
          name: "Apple",
          price: 120.25,
        },
      ],
      [
        {
          name: "Apple",
          price: 125.58,
        },
      ],
    ];
    expect(maximiseProfits(testArray)).toEqual({
      name: "Apple",
      maxProfit: 5.33,
    });
  });
  test("function returns correct answer as a loss, if no profit will be made", () => {
    const testArray = [
      [
        {
          name: "Apple",
          price: 125.58,
        },
      ],
      [
        {
          name: "Apple",
          price: 120.25,
        },
      ],
    ];
    expect(maximiseProfits(testArray)).toEqual({
      name: "Apple",
      maxProfit: -5.33,
    });
  });
  test("function returns correct answer with 2 days of prices for multiple companies", () => {
    const testArray = [
      [
        {
          name: "Apple",
          price: 125.58,
        },
        {
          name: "Microsoft",
          price: 240.5,
        },
      ],
      [
        {
          name: "Apple",
          price: 120.25,
        },
        {
          name: "Microsoft",
          price: 248.72,
        },
      ],
    ];
    expect(maximiseProfits(testArray)).toEqual({
      name: "Microsoft",
      maxProfit: 8.22,
    });
  });
  test("function returns correct answer with full stock data", () => {
    const testArray = stockPrices;
    expect(maximiseProfits(testArray)).toEqual({
      name: "Google",
      maxProfit: 59.15,
    });
  });
});
