const todoListHtml = document.querySelector('.todo-list');

const todoList = [{
        name: "Review code", dueDate: "4/12/2024"
    },{
        name: "Take a bath", dueDate: "5/12/2024"
    }
];

function renderTodo(){
    let todoListHtml = "";

    todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="js-delete-btn">Delete</button>
        `

    todoListHtml += html;
    })

    const deletebtn = document.querySelector('.js-delete-btn')
};


renderTodo()