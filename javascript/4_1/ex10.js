let productUnitCost = 12.50;
let productPrice = 25;
let totalSales = 1000;
let taxes = 0.2;

// product cost after taxes
let productCost = productUnitCost * (taxes + 1);

// total product cost base on number of sales
let totalCost = totalSales * productCost;

// total product revenue
let productRevenue = totalSales * productPrice;

// net profit after 1k units sold
let netProfit = productRevenue - totalCost;

if (productUnitCost < 0 || productPrice < 0) {
  console.log("Error!");
} else {
  console.log(netProfit);
}





