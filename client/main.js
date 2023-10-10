const { createApp } = Vue;

createApp({
  data() {
    return {
      baseUrl: "http://localhost:3000",
      page: "login",
      inputUsername: "",
      messageError: "",
      selected: "All",
      imageUrl:
        "https://i.pinimg.com/736x/68/4f/72/684f72f5ae6597f88a9786eff437d5cf.jpg",
      newTodo: {
        name: "",
        description: "",
        priority: "",
      },
      todos: [],
    };
  },

  methods: {
    handleLogin() {
      // 3. simpan access_token ke localStorage
      localStorage.access_token = "ini akses token anggap saja";

      // 4. pindah page
      this.page = "home";
      this.fetchTodos();
    },

    async fetchTodos() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/todos",
          method: "get",
        });

        // console.log(response.data, "<<<<");

        this.todos = data;
      } catch (error) {
        console.log(error, "<<<<");
      }
    },

    async submitHandler() {
      try {
        await axios({
          url: this.baseUrl + "/todos",
          method: "post",
          data: this.newTodo,
        });

        this.fetchTodos();

        this.newTodo.name = "";
        this.newTodo.description = "";
        this.newTodo.priority = "";
      } catch (error) {
        console.log(error, "<<<<");
      }
    },

    methodMathRandom() {
      return this.newTodo.name + "-" + Math.random();
    },
  },

  created() {
    if (localStorage.access_token) {
      this.page = "home";
      this.fetchTodos();
    }
  },

  // lifecycle yang ke trigger tiap ada state yang berubah
  // beforeUpdate() {
  //   console.log("ketrigger before update");
  // },

  // updated() {
  //   console.log("ketrigger updated");
  // },

  watch: {
    inputUsername(newValue, oldValue) {
      if (newValue.includes("@")) {
        this.messageError = "yang bener bro jangan ada AT";
      } else {
        this.messageError = "";
      }
    },
  },

  // GETTER
  computed: {
    tambahinMr() {
      return "Mr. " + this.inputUsername;
    },

    filteredTodos() {
      if (this.selected === "All") {
        return this.todos;
      } else {
        return this.todos.filter((el) => el.priority === this.selected);
      }
    },

    computedMathRandom() {
      return this.newTodo.name + "-" + Math.random();
    },
  },
}).mount("#app");
