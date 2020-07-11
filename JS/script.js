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
            done: true,
        },
        task = {
            content: "test",
            done: true,
        },
    ]
    /*  funkcja do renderowania, odpalana za każdą zmianą
        for each task of tasks dodaje do elementu todo__tasks element listy z buttonami 
        //<li class="todo__task"><button>test</button><span>tekst</span><button>tekst</button></li>
 */
    const render = () => {

        tasks.forEach((task, index) => {
            tasksListElement.innerHTML += `<li class="todo__task"><button class="todo__button todo__button--check js-checkButton"></button><span class="todo__span">${task.content}</span><button class="todo__button todo__button--remove js-removeButton"></button></li>`
        });
    }

    const clearInput = () => {
        let inputValue = (document.querySelector(".js-input"))
        if (inputValue.value) {
            inputValue.value = ""
        }
    }
    const onFormSubmit = () => {
        if (input.value.trim()) {
            tasks.push(task = {
                content: `${input.value}`
            });
            tasksListElement.innerHTML = "";
            render();
        } else {
            // render()
        };
    }
    const setFocus = () => {
        input.focus();
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const submitButtonElement = document.querySelector(".js-buttonSubmit");
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            onFormSubmit();
            clearInput();
            setFocus();
        });
        render();
    }

    init()




























}