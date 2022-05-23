const app = new Vue({
    el: "#app",
    data: {
        todos: [{
                text: "fare la spesa",
                isDone: true
            },
            {
                text: "stendere i panni",
                isDone: false
            },
            {
                text: "telefonare la zia ",
                isDone: false
            },
        ],
        newTodo: {
            text: " ",
            isDone: false,
        },
    },
})