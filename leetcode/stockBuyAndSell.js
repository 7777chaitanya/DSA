/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let bbp = prices[0]
    let bsp = prices[1];
    let profit = bsp - bbp;
    let maxProfit = profit > 0 ? profit : 0;
    let lowestPriceSoFar = bbp;
    
    for(let i =1;i<prices.length;i++){
        if(prices[i-1] < lowestPriceSoFar){
            lowestPriceSoFar = prices[i-1]
        }
        if(prices[i] - lowestPriceSoFar >= maxProfit){
            bsp = prices[i]
            bbp = lowestPriceSoFar
            maxProfit = bsp-bbp
        }
    }
    let finalProfit = bsp-bbp
    return finalProfit > 0 ? finalProfit : 0
    
};