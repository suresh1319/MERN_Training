const stock = [
    {
        company:"wipro",
        lastPrice:200,
        currPrice:250
    },
    {
        company:"deloite",
        lastPrice:100,
        currPrice:150
    }
]

function bestStock(companies){
    n = companies.length;
    for(let i = 0;i<n;i++){
        companies[i].growth = companies[i].currPrice-companies[i].lastPrice 
        companies[i].growthper = (companies[i].growth*100)/companies[i].lastPrice
    }
}

bestStock(stock)
console.log(stock);