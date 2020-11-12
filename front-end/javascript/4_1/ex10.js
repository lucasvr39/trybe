const productUnitCost = 12.5;
const productPrice = 25;
const totalSales = 1000;
const taxes = 0.2;

// product cost after taxes
const productCost = productUnitCost * (taxes + 1);

// total product cost base on number of sales
const totalCost = totalSales * productCost;

// total product revenue
const productRevenue = totalSales * productPrice;

// net profit after 1k units sold
const netProfit = productRevenue - totalCost;

if (productUnitCost < 0 || productPrice < 0) {
  console.log('Error!');
} else {
  console.log(netProfit);
}
