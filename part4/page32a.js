let customers = [
    {
        id:1,
        name:'John',
        balance:5000,
        transactions:[]
    },
    {
        id:2,
        name:"Amy",
        balance:5000,
        transactions:[]
    }
]

function deposit(id,amount){
    const customer = customers.find(c=>c.id === id);
    if(customer){
        customer.balance+=amount
        customer.transactions = [...customer.transactions,{type:"Credit",amount:amount,date:Date.now()}]
        console.log(`${amount} is deposited successfully`)
        return 
    }
    else{
        console.log("Customer not Found")
    }
}

function checkBalance(id){
    const customer = customers.find(c=>c.id === id);
    if(customer){
        console.log(`Balance of ${customer.name} is ${customer.balance}`)
        return
    }
    console.log("Customer not found")
}

function withDrawal(id,amount){
    const customer = customers.find(c => c.id === id)
    if(!customer){
        console.log("Not Customer Found");
        return 
    }
    if(customer.balance<amount){    
        console.log("Insufficient Balance");
        return 
    }
    customer.balance -= amount 
    customer.transactions = [...customer.transactions,{type:"debit",amount:amount,date:Date.now()}]
    console.log("Withdrawal Successfull");
}

function showTransactions(id){
    const customer = customers.find(c=>c.id === id);
    if(!customer){
        console.log("customer not found")
        return 
    }
    console.log("Transactions :")
    customer.transactions.forEach((transaction)=>{
        console.log(`${transaction.type} : ${transaction.amount} : ${transaction.date}`)
    })
    console.log(`Total Balance is ${customer.balance}`);
}

function transferMoney(from,to,amount){
    const fromCust = customers.find(c=>c.id === from);
    const toCust = customers.find(c=>c.id === to)
    if(!fromCust || !toCust){
        console.log("Customer not found");
        return 
    }
    if(customers.amount<amount){
        console.log("Insufficient Balance");
        return 
    }
    fromCust.amount-=amount;
    fromCust.transactions = [...fromCust.transactions,{type:'debit',amount:amount,date:Date.now()}]
    toCust.amount += amount;
    toCust.transactions = [...toCust.transactions,{type:'credit',amount:amount,date:Date.now()}]
}
checkBalance(1);
deposit(1,500)
withDrawal(1,1000);
checkBalance(1)
showTransactions(1)
transferMoney(1,2,2000)
showTransactions(1)
showTransactions(2)