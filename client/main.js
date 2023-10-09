const { createApp } = Vue;
createApp({
  data() {
    return {
      baseUrl: "http://localhost:3000",
      page: "login",
      inputUsername: "",
      messageError: "",
      selected: "All",
      isLogin: false,
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
    //
  },
}).mount("#app");
