async function getData(){
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await data.json();
        const user = result.find(user => user.id === 1);
        console.log(user)
    }
    catch(err){
        console.log(err)
    }
}
getData();