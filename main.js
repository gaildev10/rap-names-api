document.querySelector('button').addEventListener('click', addName)

function addName(){
    const name = document.querySelector('input').value;
    console.log(name)
    document.querySelector('h2').innerText = name;
}