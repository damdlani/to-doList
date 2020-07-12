{
    console.log("Good morning, Vietnam!");
    const tasksListElement = document.querySelector(".js-tasksList");
    const input = (document.querySelector(".js-input"));

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
    const render = () => {
        let htmlString = "";
        for (task of tasks) {
            htmlString += `<li class="todo__task"><button class="todo__button todo__button--check js-checkButton"><i class="fas fa-check todo__checkMark"></i></button><span class="todo__span js-taskSpan">${task.content}</span><button class="todo__button todo__button--remove js-removeButton"><i class="fas fa-trash-alt"></i></button></li>`
        }
        tasksListElement.innerHTML = htmlString;
    };
    const onFormSubmit = () => {
        if (input.value.trim()) {
            tasks.push(task = {
                content: `${input.value}`
            });
            render();
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