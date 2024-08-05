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
  return purchases.reduce(
    (sum, item) => {
      sum.total += item.amount;

      if (!sum.categories[item.category]) {
        sum.categories[item.category] = 0;
      }
      sum.categories[item.category] += item.amount;

      if (!sum.month[item.date]) {
        sum.month[item.date] = 0;
      }
      sum.month[item.date] += item.amount;

      return sum;
    },

    { total: 0, categories: {}, month: {} }
  );
};

console.log(makePurchaseStat(purchases));
