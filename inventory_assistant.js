
// Comment // 
console.log("Hello this is the AI Inventory assistant")


// Part 1 // 
let itemName = "USB-C Cable"
let unitCost = "3.25"
let currentStock = "100"
let reorderLevel = "400"
let targetStock = "100 on Hand"
let weeklyDemand = "200 Units Sold Per Week"
let supplierLeadTimeWeeks = "2 Weeks"
// Part 2 // 
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0, targetStock - currentStock)
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost = reorderQuantity * unitCost
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks
