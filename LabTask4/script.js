
const result = document.getElementById('result');

/
function showDemo(val) {
    result.value += val;
}

function clearDisplay() {
    result.value = '';
}

function del() {
    result.value = result.value.slice(0, -1);
}


function calculate() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        result.value = 'Error';
    }
}