{
    console.log("Good morning, Vietnam!");
    const tasksListElement = document.querySelector(".js-tasksList");


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

    const render = () => {
        let htmlString = "";
        for (task of tasks) {
            htmlString += `<li class="todo__task">
            <button class="todo__button todo__button--check js-checkButton"><i class="fas fa-check todo__checkMark"></i></button>
            <span ${task.done ? " style=\"text-decoration: line-through\"" : ""} class="todo__span js-taskSpan">
            ${task.content}
            </span>
            <button class="todo__button todo__button--remove js-removeButton"><i class="fas fa-trash-alt"></i></button>
            </li>`
        }
        tasksListElement.innerHTML = htmlString;

        const checkButtons = document.querySelectorAll(".js-checkButton");
        const removeButtons = document.querySelectorAll(".js-removeButton");

        checkButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                setDone(index);
            })
        });
    };

    const onFormSubmit = (input) => {
        if (input.value.trim()) {
            tasks.push(task = {
                content: `${input.value}`
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