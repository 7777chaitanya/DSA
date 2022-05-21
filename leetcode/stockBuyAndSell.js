// 121

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let initProfitValue = prices[1]-prices[0] 
    let maximumProfit = initProfitValue > 0 ? initProfitValue : 0
    for(let i = 0;i<prices.length-1;i++){
        let j = i+1;
        while(j<prices.length){
            profit = prices[j]-prices[i];
            if(profit > 0 && profit > maximumProfit){
                maximumProfit = profit
            }
            j++;
        }
    }
    return maximumProfit;
};