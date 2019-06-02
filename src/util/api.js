// Api methods to call /functions

export default {
  create: data => {
    return fetch('/.netlify/functions/todos-create', {
      body: JSON.stringify(data),
      method: 'POST',
    }).then(response => response.json());
  },

  readAll: () => {
    return fetch('/.netlify/functions/todos-read-all').then(response => response.json());
  },

  update: (todoId, data) => {
    return fetch(`/.netlify/functions/todos-update/${todoId}`, {
      body: JSON.stringify(data),
      method: 'POST',
    }).then(response => response.json());
  },

  delete: todoId => {
    return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
      method: 'POST',
    }).then(response => response.json());
  },

  batchDelete: todoIds => {
    return fetch(`/.netlify/functions/todos-delete-batch`, {
      body: JSON.stringify({
        ids: todoIds,
      }),
      method: 'POST',
    }).then(response => response.json());
  },
};
