const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce((x, y) => x + y, 0)
console.log(totalBatteries(batteryBatches));


