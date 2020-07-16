{
    console.log("Good morning, Vietnam!");

    let tasks = [
        {content: 'test', done: true}
    ];

    const addNewTask = (input) => {
        tasks = [
            ...tasks,
            {
                content: `${input.value}`,
                done: false,
            },
        ]
    }

    const setDone = (editIndex) => {
        const isDone = tasks[editIndex].done;
        tasks = [
            ...tasks.slice(0, editIndex),
            {...tasks[editIndex], done: !isDone},
            ...tasks.slice(editIndex + 1),
        ]
        console.log(tasks)
        render();
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }
    const renderButtons = () => {
        const buttonsArea = document.querySelector(".js-todoHeader");
        let buttonsHTMLString = "";
        if (tasks.length !== 0) {
                buttonsHTMLString = ` 
                <h2 class="todo__title">Lista zadań</h2>                   
                <button class="todo__doneButton js-hideDone">Pokaż ukończone</button>
                <button class="todo__doneButton js-setEachDone">Ukończ wszystkie</button>`
        } else {
            buttonsHTMLString = `<h2 class=\"todo__title\">Lista zadań</h2>`
        }
        buttonsArea.innerHTML = buttonsHTMLString;
    }

    const renderTasks = () => {
        const tasksListElement = document.querySelector(".js-tasksList");
        let taskHTMLString = "";
        if (tasks.length !== 0) {
            for (const task of tasks) {
                taskHTMLString += `<li class="todo__task">
                <button class="todo__button todo__button--check js-checkButton">${task.done ? " <i class=\"fas fa-check\"></i>" : ""}</button>
                <span class="todo__span ${task.done ? "todo__span--done" : ""} js-taskSpan">
                ${task.content}
                </span>
                <button class="todo__button todo__button--remove js-removeButton"><i class="fas fa-trash-alt"></i></button>
                </li>`
            }
        } else {
            taskHTMLString = `<li class="todo__empty">Nie masz na razie żadnych zadań.</li>`
        }
        tasksListElement.innerHTML = taskHTMLString;
    }

    const render = () => {
        renderTasks();
        renderButtons();
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
            addNewTask(input);
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