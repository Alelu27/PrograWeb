
document.getElementById("bSuma").onclick = function() {
    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value
    const suma = document.getElementById("texto")
    
    const re = parseInt(n1) + parseInt(n2)
    suma.value = re
}

document.getElementById("bResta").onclick = function() {
    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value
    const resta = document.getElementById("texto")

    const re = parseInt(n1) - parseInt(n2)
    resta.value = re
}

document.getElementById("bMulti").onclick = function() {
    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value
    const multi = document.getElementById("texto")

    const re = parseInt(n1) * parseInt(n2)
    multi.value = re
}

document.getElementById("bDiv").onclick = function() {
    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value
    const divi = document.getElementById("texto")
    if (parseInt(n1) < parseInt(n2)) {
        re = 0
    } else {
        re = parseInt(n1) / parseInt(n2)
    }

    divi.value = re
}

