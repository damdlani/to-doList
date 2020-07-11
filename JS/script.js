{
    console.log("Good morning, Vietnam!");
    const tasksListElement = document.querySelector(".js-tasksList");
    const input = (document.querySelector(".js-input"));

    const tasks = [
        task = {
            content: "test",
            done: true,
        },
    ]
    const render = (tasks) => {
        for (task of tasks) {
            tasksListElement.innerHTML += `<li class="todo__task"><button class="todo__button todo__button--check js-checkButton"><i class="fas fa-check todo__checkMark"></i></button><span class="todo__span js-taskSpan">${task.content}</span><button class="todo__button todo__button--remove js-removeButton"><i class="fas fa-trash-alt"></i></button></li>`
        };
    }
    const crossOut = () => {
        const taskSpan = document.querySelector(".js-taskSpan");
        taskSpan.classList.toggle("todo__span--done");
    };
    const checkMark = () => {
        checkButton.classList.toggle("todo__checkMark")
    };    
    const onClickCheck = () => {
        const checkButton = document.querySelectorAll(".js-checkButton");
        console.log(checkButton);
    }
    onClickCheck();
    const onFormSubmit = () => {
        if (input.value.trim()) {
            tasks.push(task = {
                content: `${input.value}`
            });
            tasksListElement.innerHTML = "";
            render(tasks);
        };
    }
    const setFocusClear = () => {
        input.value = "";
        input.focus();
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");
        
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            onFormSubmit();
            setFocusClear();
        });
        
    }
    render(tasks);
    init()




























}