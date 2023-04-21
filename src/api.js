import axios from "axios";

export const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts/'
});

export const create = (post) =>{
    fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));  
};

export const editDone = (newTitle, newBody, id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: newTitle,
            body: newBody
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export const del = (id) =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
    })
};