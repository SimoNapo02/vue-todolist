const app = new Vue({
    el: "#app",
    data: {
        todos: [{
                text: "fare la spesa",
                isDone: false
            },
            {
                text: "stendere i panni",
                isDone: false
            },
            {
                text: "programmare pagine web",
                isDone: false
            },
        ],
        newTodo: {
            text: " ",
            isDone: false,
        },
    },
    methods: {
        addToDo() {
            if (this.newTodo !== " ") {
                this.todos.push(this.newTodo);
                this.newTodo = "";
            }
        },
        removeToDo(index) {
            this.todos.splice(index, 1)
        },
        doneToDo(index) {
            this.todos[index].isDone = !this.todos[index].isDone
        }

    },
});