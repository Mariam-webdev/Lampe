function validateForm(){
    const inputEmail = document.getElementById('email')
    const inputError = document.getElementById('email-error')
    if(inputEmail.value ===''){
        inputError.textContent = 'le champ ne doit pas être vide'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize = '18px'
    }
    else if(inputEmail.value.length <6){
        inputError.textContent = 'Le nomre de caractère doit être superieur à 6'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize = '18px'
    }
    else{
        inputError.textContent = ''
        inputEmail.value = ''
    }
    inputEmail.addEventListener('input', () =>(
        inputError.style.display = inputEmail.value === '' ? 'block': 'none'
    ))

    inputEmail.addEventListener('blur' , () => (
        inputError.style.display === '' ? 'block' : 'none'
    ))
        const textMessage = document.getElementById('message')
        const textError = document.getElementById('message-error')
        if(textMessage.value === ''){
            textError.textContent = 'le champ Message ne doit pas être vide'
            textError.style.textAlign = 'center'
        textError.style.color = 'red'
        textError.style.fontSize = '18px'
        }
        else{
            textError.textContent = ''
            textMessage.value = ''
            alert('votre message a été bien enregistré')
        }
        textMessage.addEventListener('input', () =>(
            textError.style.display = textMessage.value === '' ? 'block': 'none'
        ))
    
        textMessage.addEventListener('blur' , () => (
            textError.style.display === '' ? 'block' : 'none'
        ))

    return false

}