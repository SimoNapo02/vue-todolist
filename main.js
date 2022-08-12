const app = new Vue({
    el: "#container",
    data: {
        todo: [
            {
                text: "Fare la spesa",
                done: true,
            },
            {
                text: "Camminare",
                done: false,
            },
            {
                text: "Fare esercizio fisico",
                done: false,
            },
            {
                text: "Pulire casa",
                done: true,
            },
        ],
        target: "",

    },
    methods: {
        addTodo() {
            if(this.target !== "") {
                elm = {"text": this.target, "done": false};
                this.todo.push(elm);
                this.target = "";
            }
        },
        removeTodo(index) {
            this.todo.splice(index, 1);
        },
    },
});