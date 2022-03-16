//REST(REpresentational State Transfer) https://habr.com/ru/post/483202/
// HTTP HTTPS https://hostiq.ua/wiki/http-https/
const getPostsBtn = document.querySelector('.posts__get-posts');
const container = document.querySelector('.posts__list');
const postTitle = document.querySelector('.new-post__title');
const postBody = document.querySelector('.new-post__body');
const postAdd = document.querySelector('.new-post__add');
const updatePost = document.querySelector('.update__post');

//state состояние нашего проекта
const state = {
	posts: [],
	newPost: {
		title: '',
		body: '',
	},
	edit: {},
};

//CRUD  CREATE READ    UPDATE      DELETE
//      POST  GET   PUT vs PATCH  DELETE

function editPost(index) {
	//ONCLICK ICON EDIT BUTTON
	let editedPost = state.posts[index];
	state.edit = editedPost;
	postTitle.value = state.edit.title;
	postBody.value = state.edit.body;
}
//renderElement шаблон для html
const renderElement = (title, body, index) => `
            <div class="post">
               <div class="" post__wrapper>
                  <h2 class="wrapper__title">${title}
                  </h2>
                  <div class="wrapper__body">
                  ${body}
                  </div>
               </div>

               <div class="post__buttons">
                  <button class="buttons__edit" onclick="editPost(${index})">&#x270E;</button>
                  <button class=" buttons__delete" onclick="">&#10005;</button>
               </div>
            </div>`;

const showPosts = mass => {
	//функция для отрисовки всех постов
	container.innerHTML = '';
	mass.forEach(
		(posts, index) =>
			(container.innerHTML += renderElement(posts.title, posts.body, index))
	);
};

getPostsBtn.addEventListener('click', () => {
	console.log('get 15 posts');
	fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
		.then(response => response.json())
		.then(posts => {
			console.log(posts);
			state.posts = [...posts];
			showPosts(state.posts);
		});
});

postTitle.addEventListener('change', e => {
	if (state.edit.title) {
		state.edit.title = e.target.value;
	}
	let title = e.target.value;
	state.newPost.title = title;
});

postBody.addEventListener('change', e => {
	if (state.edit.body) {
		state.edit.body = e.target.value;
	}
	let { value: body } = e.target;
	state.newPost.body = body;
});

// SON FORMAT синтаксис написания {"ключ" : "значение"}

const createPost = () => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify(state.newPost),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then(response => response.json())
		.then(json => {
			console.log(json);
			state.posts.unshift(state.newPost);
			showPosts(state.posts);
		});
};
const clearInput = () => {
	postTitle.value = '';
	postBody.value = '';
};

postAdd.addEventListener('click', () => {
	//ONCLICK CREATE POST
	console.log('create post');
	createPost();
	clearInput();
});

const postUpdate = () => {
	//UPDATE POST
	fetch(`https://jsonplaceholder.typicode.com/posts/${state.edit.id}`, {
		method: 'PUT',
		body: JSON.stringify(state.edit),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then(response => response.json())
		.then(json => {
			console.log(json);
			showPosts(state.posts);
			console.log(state.posts);
		});
};

updatePost.addEventListener('click', () => {
	// ONCLICK UPDATE POST
	console.log('update post');
	postUpdate();
	clearInput();
});

const deletePost = () => {
	//DELETE POST
	fetch('https://jsonplaceholder.typicode.com/posts/1', {
		method: 'DELETE',
	});
};
