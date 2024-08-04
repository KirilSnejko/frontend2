const purchases = [
  { date: "Feb", category: "Food", amount: 50 },
  { date: "Feb", category: "Clothing", amount: 100 },
  { date: "Feb", category: "Entertainment", amount: 75 },
  { date: "Mar", category: "Food", amount: 25 },
  { date: "Mar", category: "Clothing", amount: 200 },
  { date: "Mar", category: "Entertainment", amount: 50 },
  { date: "Mar", category: "Food", amount: 100 },
  { date: "Mar", category: "Clothing", amount: 150 },
  { date: "Apr", category: "Entertainment", amount: 100 },
  { date: "Apr", category: "Food", amount: 100 },
  { date: "Apr", category: "Clothing", amount: 100 },
  { date: "Apr", category: "Clothing", amount: 100 },
  { date: "Jun", category: "Food", amount: 100 },
  { date: "Jun", category: "Entertainment", amount: 100 },
  { date: "Jun", category: "Food", amount: 100 },
  { date: "Jun", category: "Entertainment", amount: 100 },
  { date: "Jul", category: "Clothing", amount: 100 },
  { date: "Jul", category: "Entertainment", amount: 100 },
  { date: "Jul", category: "Food", amount: 100 },
  { date: "Jul", category: "Clothing", amount: 100 },
];

const makePurchaseStat = (purchases) => {
  const results = {
    // total: 0,
    // categories: {
    //   Food: 0,
    //   Clothing: 0,
    //   Entertainment: 0,
    // },
    // month: {
    //  Feb: 0,
    //  Mar: 0,
    //  Apr: 0,
    //  Jun: 0,
    //  Jul: 0,
    // },
  };

  purchases.reduce((sum, item) => {
    if (!results.total) {
      results.total = 0;
    }
    results.total += item.amount;

    if (!results.categories) {
      results.categories = {};
    }
    if (!results.categories[item.category]) {
      results.categories[item.category] = 0;
    }
    results.categories[item.category] += item.amount;

    if (!results.month) {
      results.month = {};
    }
    if (!results.month[item.date]) {
      results.month[item.date] = 0;
    }
    results.month[item.date] += item.amount;
  });

  return results;
};

console.log(makePurchaseStat(purchases));
