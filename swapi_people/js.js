const url = 'https://swapi.dev/api/people';

const imgURL = 'https://starwars-visualguide.com/assets/img/characters/'; //1.jpg

const container = document.querySelector('.container');


// const state = {
// 	users: [],
// };
/*
class Promise {
	constructor()
}
*/


// const promise = {
// 	status: ['pending', 'fulfilled', 'reject']
// }

// function getData(){
// 	return new Promise((resolve, reject) => {
// 		console.log('Promise {<pending/>}');
// 		resolve({ name: 'name'});
// 	// reject('error')

// 		console.log('posle');
// 	});
// }

// // console.log(getData().then(res => console.log(res)));




// function getTodos(){
// 	fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
// 	.then(response => response.json())
// 	.then(json => console.log(json))
// 	.catch(err => {
// 		console.log("err: ", err);
// 	});
// }
// function getUsers(){
// 	fetch('https://jsonplaceholder.typicode.com/users')
// 	.then(response => response.json())
// 	.then(json => console.log(json))
// 	.catch(err => {
// 		console.log("err: ", err);
// 	});
// }

// async function getAllData(){
// 	return await Promise.all([getTodos(), getUsers()]) 
// }

// getAllData().then(data => {
// 	console.log('data: ', data);
// })

// function getTodos() {
// 	console.log('do');
// 	fetch('https://jsonplaceholder.typicode.com/todos')
//    .then(response => response.json())
//    .then(json => console.log(json))
// 	.catch(error => {
// 		console.log("error: ", error);
// 	})
// 	console.log('posle');
// }
// getTodos()
// async function getData(){
// 	console.log('do');
// 	const response = await fetch('https://jsonplaceholder.typicode.com/todos')
// 	const data = await response.json()

// }

// console.log(getData());


const state = {
	users: [],
}

let user = {
	url: 'https://starwars-visualguide.com', 
	birth_year: 5,
};



async function getUsers() {
	const response = await fetch(`${url}`);
	const data = await response.json();
	// console.log("data: ", data);
	let users = data.results.map(({ url,birth_year,name,gender }) => {
		// console.log('url: ', url);
		// console.log('birth_year: ', birth_year);
		//                    https://swapi.dev/api/people         /10/   10
		let id = url.replace('https://swapi.dev/api/people', '').replace(/\//g,'')
		// console.log("id: ", id);
		return {
			id,
			birth_year,
			name,
			gender,
		};
	});
	state.users = [...users];
	showUsers(state.users);
}
getUsers();

function renderElement(id,name,year,gender) {
	return `	<div class="card">
					<div class="card-header">
						<img class="img" src=${imgURL + id + '.jpg'} alt="img" />
					</div>
					<h4>${name}<span>${year}</span></h4>
					<p>${gender}</p>
				</div>`;
}

function showUsers(mass) {
	container.innerHTML = '';
	mass.forEach(
		({ id, birth_year, name, gender }) =>	
		(container.innerHTML += renderElement(id, birth_year, name, gender))
	);
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then(response => response.json())
//    .then(json => console.log(json))
// 	.catch(err => console.log(err)

const spinnerBorder = document.querySelector('.spinner-border');
spinnerBorder.style.display = 'none';
async function name() {
	try {
		spinnerBorder.style.display = 'block';
		const response = await fetch('https://jsonplaceholder.typicode.com/photos');
		console.log("response: ", response);
		if(!response.ok){
			return new Error(response.status)
		}

		const data = await response.json();
	} catch (error) {
		console.log("error: ", error.message);
	}
	finally{
		spinnerBorder.style.display = 'none';
	}
}
name();