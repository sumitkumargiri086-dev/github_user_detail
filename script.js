// const username = 'sakibraza-dev';

async function getInfo(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    // console.log(response)
    const data = await response.json();
    const response1=await fetch(`https://api.github.com/users/${username}/repos`);
    const repoData=await response.json();
    console.log(repoData);
    // // console.log(data);
    showInfo(data);
    showRepo(repoData);
    
}

// async function getRepo(username){
//     // const response=await fetch(`https://api.github.com/users/${username}/repos`);
//     // const repoData=await response.json();
//     // console.log(repoData);
//     // showInfo(repoData);

// }

// getInfo(username);


const search = document.getElementById("search-bar");
// console.log(search);

search.addEventListener("change" , (event)=>{
    getInfo(event.target.value);
    getRepo(event.target.value);
    console.log(repoData[0].name)
})

const profile = document.querySelector(".avatar");
const name = document.querySelector(".name");
const username = document.querySelector(".username");
const bio = document.querySelector(".bio");
const userLocation = document.querySelector(".location");
const company = document.querySelector(".company");
const profileLink = document.querySelector(".profile-link");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const repo = document.querySelector(".repo");


function showInfo(data) {
    profile.setAttribute("src" , data.avatar_url);
    name.innerText = data.name;
    username.innerText = data.login;
    bio.innerText = data.bio;
    userLocation.innerText ="📍"+data.location;
    company.innerText=data.company;
    profileLink.href=`https://github.com/${search.value}`;
    profileLink.innerText="Github Profile Link";
    followers.innerText=data.followers;
    following.innerText=data.following;
    repo.innerText=data.public_repos;
}

function showRepo(repoData){
    
}
