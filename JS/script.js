{
    console.log("Good morning, Vietnam!");

    const tasks = [];

    const setDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }
    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const render = () => {
        const tasksListElement = document.querySelector(".js-tasksList");
        let htmlString = "";
        if (tasks.length !== 0){
            for (task of tasks) {
                htmlString += `<li class="todo__task">
                <button class="todo__button todo__button--check js-checkButton">${task.done ? " <i class=\"fas fa-check\"></i>" : ""}</button>
                <span class="todo__span ${task.done ? "todo__span--done" : ""} js-taskSpan">
                ${task.content}
                </span>
                <button class="todo__button todo__button--remove js-removeButton"><i class="fas fa-trash-alt"></i></button>
                </li>`
            }
        } else {
            htmlString = `<li class="todo__empty">Nie masz na razie żadnych zadań.</li>`
        }
        tasksListElement.innerHTML = htmlString;
        
        bind();

    };

    const bind = () => {
        const checkButtons = document.querySelectorAll(".js-checkButton");
        const removeButtons = document.querySelectorAll(".js-removeButton");

        checkButtons.forEach((checkButton, index) => {
            checkButton.addEventListener("click", () => {
                setDone(index);
            })
        });

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            })
        });
    }

    const onFormSubmit = (input) => {
        if (input.value.trim()) {
            tasks.push(task = {
                content: `${input.value}`,
                done: false
            });
            setFocusClear(input);
            render();
        } else {
            setFocusClear(input)
        };
    }

    const setFocusClear = (input) => {
        input.value = "";
        input.focus();
    }
    const init = () => {
        render();
        const input = (document.querySelector(".js-input"));
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            onFormSubmit(input);
        });
    }

    init()




























}