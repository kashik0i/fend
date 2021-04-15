function handleSubmit(event){
    event.preventDefault();


    // check what test was added into the form fields
    const formText = document.getElementById('name').value
    checkForName(formText)

    console.log(" Form Submitted")
    fetch('http://localhost:8080/test')
        .then(res => res.json())
        .then(res =>{
            document.getElementById('results').innerHTML = res.message
        })
}