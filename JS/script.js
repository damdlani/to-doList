{
    console.log("Good morning, Vietnam!");
    

    const onFormSubmit = () => {
        console.log("Działam");;
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            onFormSubmit();
        })

    }

    init()




























}