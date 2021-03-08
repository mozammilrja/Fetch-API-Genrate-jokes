const joke = document.getElementById('joke');
const jokebtn = document.getElementById('jokebtn');


getJokes();

jokebtn = addEventListener('click',getJokes);
// ----------------Method-1--------------------------------
async function getJokes(){
    const config ={
        headers:{
            "Accept": "application/Json"
        }
    }

    const res = await fetch(' https://icanhazdadjoke.com/', config)
        const data = await  res.json();
            joke.innerText = data.joke;
        }


//      --------------------Method-2 ----------------------
// function getJokes(){
//     const config ={
//         headers:{
//             "Accept": "application/Json"
//         }
//     }

//     fetch(' https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then(data =>{
//             joke.innerText = data.joke
//         })
// }