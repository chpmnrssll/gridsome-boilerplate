<template>
  <Layout>
    <h1 class="mb-4">FaunaDB</h1>

    <p>Todos</p>
  </Layout>
</template>

<script>
import api from '../util/api';
import isLocalHost from '../util/isLocalHost';

export default {
  metaInfo: {
    title: 'FaunaDB',
  },
  data() {
    return {
      todos: [],
      showMenu: false,
    };
  },
  mounted() {
    // Fetch all todos
    api.readAll().then(todos => {
      if (todos.message === 'unauthorized') {
        if (isLocalHost()) {
          alert(
            'FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info',
          );
        } else {
          alert(
            'FaunaDB key is not unauthorized. Verify the key `FAUNADB_SERVER_SECRET` set in Netlify enviroment variables is correct',
          );
        }
        return false;
      }

      console.log('all todos', todos);
      this.todos = todos;
      return todos;
    });
  },
};
</script>

<style lang="scss" scoped></style>
