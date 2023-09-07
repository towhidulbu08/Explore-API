function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}
function displayUsers2(input2){
    console.log(input2);
}