{
    console.log("Good morning, Vietnam!");

    const tasks = [
        task = {
            content: "test",
            done: true,
        },
        task = {
            content: "test",
            done: false,
        },
        task = {
            content: "test",
            done: true,
        },
    ];

    const setDone = (index) => {
        tasks[index].done === false ? tasks[index].done = true : tasks[index].done = false;
        render();
    }
    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const render = () => {
        const tasksListElement = document.querySelector(".js-tasksList");
        let htmlString = "";
        for (task of tasks) {
            htmlString += `<li class="todo__task">
            <button class="todo__button todo__button--check js-checkButton">${task.done ? " <i class=\"fas fa-check\"></i>" : ""}</button>
            <span ${task.done ? " style=\"text-decoration: line-through; font-style: italic;\"" : ""} class="todo__span js-taskSpan">
            ${task.content}
            </span>
            <button class="todo__button todo__button--remove js-removeButton"><i class="fas fa-trash-alt"></i></button>
            </li>`
        }
        tasksListElement.innerHTML = htmlString;

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
    };

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