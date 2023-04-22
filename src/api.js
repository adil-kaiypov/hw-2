import axios from "axios";

export const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts/'
});

export const create = (post) => {
    API.post('', {
      title: post.title,
      body: post.body,
      userId: 1,
    }, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => {
      console.log(response.data);
    })
  };


export const editDone = (newTitle, newBody, id) => {
    API.patch(id, {
        title: newTitle,
        body: newBody
    })
    .then((response) => console.log(response.data));
};

export const del = (id) => {
    API.delete(id)
      .then(response => {
        console.log(response.data);
      })
  };
  