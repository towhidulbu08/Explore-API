const url = 'https://jsonplaceholder.typicode.com/todos/1';

function loadData(){
    fetch(url)
        .then(res => res.json())
        .then(data=>console.log(data))

}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>displayUsers(data))
}
function displayUsers(input){
    console.log(input);
}