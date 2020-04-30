// Your code goes in here

const tipCalculate = () => {
    const bill = Number(document.getElementById('bill').value);
    let people = Number(document.getElementById('people').value);
    const option = Number(document.getElementById('option').value);
    if (bill === 0 || people === 0 || option === 0) {
        alert('You need to fill in all the fields!');
    }
    if (people === '' || people <= 1) {
        document.getElementById('each').style.display = 'none';
        people = 1;
    } else {
        document.getElementById('each').style.display = 'block';
    }
    const results = ((bill * option) / people).toFixed(2);
    document.getElementById('result').innerHTML = `<h3>Total Tip<br> $${results}</h3>`;
};
document.getElementById('each').style.display = 'none';