var storedName = localStorage.getItem('name');
var storedPw = localStorage.getItem('pw');

function store() {
    let name = document.getElementById('name').value
    let password = document.getElementById('pw').value

    if (!storedName && !storedPw) {
        localStorage.setItem('name', name)
        localStorage.setItem('pw', password)
        hideForm()
        showMessage('Вы успешно зарегистрировались')
    } else if (storedName == name && storedPw == password) {
        hideForm()
        showMessage('Вы успешно вошли в систему')
    } else if (storedName != name || storedPw != password) {
        hideForm()
        showMessage('Логин или пароль введены неверно')
    }

    return false;
}

function showMessage(message) {
    document.getElementById('message').textContent = message
    document.getElementById('message').style.display = 'block'
}

function hideForm() {
    document.getElementById('register').style.display = 'none'
}
