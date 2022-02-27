let button = document.getElementById('finish')

const checkTest = () => {
    let result = 0
    let printRes
    let a1 = document.getElementById('q1').value
    let a2 = document.getElementById('q2').value
    let a3 = document.getElementById('q3').value
    let a4 = document.getElementById('q4').value
    let a5 = document.getElementById('q5').value

    if(a1 == '12') {
        result++
    }
    if(a2 == '-8') {
        result++
    }
    if(a3 == '273') {
        result++
    }
    if(a4 == '10.8' || a4 == '10,8' || a4 == '10.83' || a4 == '10,83') {
        result++
    }
    if(a5 == '1') {
        result++
    }
    if(result == 5) {
        alertRes = 'Все ответы правильны!'
    } else {
        alertRes = `Правильных результатов: ${result} из 5`
    }

    return alert(alertRes)
}

button.addEventListener('click', checkTest)