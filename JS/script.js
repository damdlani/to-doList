{
    console.log("Good morning, Vietnam!");

    let tasks = [];
    let hideDoneTask = false;

    const renderButtons = () => {
        const buttonsArea = document.querySelector(".js-todoHeader");
        let buttonsHTMLString = "";
        if (tasks.length !== 0) {
            buttonsHTMLString = ` 
                <h2 class="todo__title">Lista zadań</h2>                   
                <button class="todo__doneButton js-hideDone">${hideDoneTask === false ? "Ukryj ukończone" : "Pokaż wszystkie"}</button>
                <button class="todo__doneButton js-setEachDone">Ukończ wszystkie</button>`
        } else {
            buttonsHTMLString = `<h2 class=\"todo__title\">Lista zadań</h2>`
        }
        buttonsArea.innerHTML = buttonsHTMLString;
    }
    const renderTasks = (tasks) => {
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
            taskHTMLString = `<li class="todo__empty">Nie masz na razie żadnych ${hideDoneTask === true ? "niezrobionych" : ""} zadań.</li>`
        }
        tasksListElement.innerHTML = taskHTMLString;
    }

    const render = () => {
        renderTasks(tasks);
        renderButtons();
        bind();
    };
    
    const hideButtonInnertext = () => {
        const hideDoneButton = document.querySelector(".js-hideDone");
        const undoneTasks = tasks.filter(({ done }) => done === false);

        if(tasks.some(({done}) => done === true)){
            hideDoneButton.addEventListener("click", () => {
                hideDoneTask = !hideDoneTask;
                console.log(hideDoneTask)
                hideDoneTask === true ? (render(), renderTasks(undoneTasks)) : render();
            });
        }
        else {
            hideDoneButton.setAttribute("disabled", "");
        }
    }


    const bind = () => {
        const checkButtons = document.querySelectorAll(".js-checkButton");
        const removeButtons = document.querySelectorAll(".js-removeButton");
        

        if (tasks.length !== 0) {
            hideButtonInnertext();
        }
        else { return };
        

        if (tasks.length !== 0) {
            checkButtonStatus();
        }
        else { return };

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
    const checkButtonStatus = () => {
        const setEachDoneButton = document.querySelector(".js-setEachDone");
        if ((tasks.every(({ done }) => done === true))) {
            setEachDoneButton.setAttribute("disabled", "");
        }
        else {
            setEachDoneButton.addEventListener("click", () => {
                setEachDone();
            })
        }
    };
    const setEachDone = () => {
        tasks = [
            ...tasks,
        ];
        for (const task of tasks) {
            task.done = true;
        }

        render();
    };
    const setDone = (editIndex) => {
        const isDone = tasks[editIndex].done;
        tasks = [
            ...tasks.slice(0, editIndex),
            {
                ...tasks[editIndex],
                done: !isDone,
            },
            ...tasks.slice(editIndex + 1),
        ]
        render();
    };

    const onFormSubmit = (input) => {
        if (input.value.trim()) {
            addNewTask(input);
            setFocusClear(input);

        } else {
            setFocusClear(input)
        };
    };
    const addNewTask = (input) => {
        tasks = [
            ...tasks,
            {
                content: `${input.value}`,
                done: false,
            },
        ];
        render();
    };
    const setFocusClear = (input) => {
        input.value = "";
        input.focus();
    };
    const removeTask = (removeIndex) => {
        tasks = [
            ...tasks.slice(0, removeIndex),
            ...tasks.slice(removeIndex + 1),
        ]
        render();
    };
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