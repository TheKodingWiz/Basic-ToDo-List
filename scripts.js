let addTask = document.getElementById('add-btn');

addTask.addEventListener("click", function() {

    let input = document.getElementById('enter-task');

    /* --- Saves the value of input variable --- */
    let inputVal = input.value;

    if(input.value === ''){
        return;
    }

    let taskElement = document.createElement('li');
    /* --- Sets the user's text content from the input as a list --- */
    taskElement.textContent = inputVal;

    let taskDelete = document.createElement('button')
    taskDelete.textContent = 'DELETE'
    taskDelete.classList.add('delete-task')
    
    

    taskDelete.addEventListener('click', function(){

        taskElement.parentNode.removeChild(taskElement)

    })

    taskElement.appendChild(taskDelete)

    let taskContainer = document.getElementById('task-container')
    taskContainer.appendChild(taskElement);


    input.value = '';

    

});


