document.addEventListener('DOMContentLoaded', function() {
    // Populate student details
    const studentNames = ['Ismile Sheikh', 'Ranoka', 'Student3', 'Student4', 'Student5', 'Student6', 'Student7', 'Student8', 'Student9', 'Student10'];

    const students = [
        { A: 'Name', B: 'Ranoka' },
        { A: 'Name', B: 'Ismile Sheikh' }
    ];

    const student1Div = document.getElementById('student1');
    student1Div.querySelector('#name1').innerText = studentNames[0];
    student1Div.querySelector('#dob1').innerText = '01-01-2000'; // Example DOB
    student1Div.querySelector('#mno1').innerText = '1234567890'; // Example Mobile No.
    student1Div.querySelector('#class1').innerText = '10th Grade'; // Example Class
    student1Div.querySelector('#sec1').innerText = '2025'; // Example Session
    student1Div.querySelector('#rate1').innerText = '@Rate'; // Example Rate

    const table3 = student1Div.querySelector('#table_3');
    table3.querySelector('#sdate1').innerText = '01-01-2025'; // Example Start Date
    table3.querySelector('#today1').innerText = 'Today'; // Example Today
    table3.querySelector('#tmonths1').innerText = '12'; // Example Total Months
    table3.querySelector('#days1').innerText = '365'; // Example Days
    table3.querySelector('#tamount1').innerText = '1000'; // Example Total Amount
    table3.querySelector('#tpaid1').innerText = '500'; // Example Total Paid
    table3.querySelector('#due1').innerText = '500'; // Example Due Amount

    const table4 = student1Div.querySelector('.table_4');
    const paidDetails = [
        { date: '01-01-2025', amount: '100' },
        { date: '02-01-2025', amount: '200' },
        { date: '03-01-2025', amount: '50' },
        { date: '04-01-2025', amount: '150' }
    ];

    for (let i = 0; i < paidDetails.length; i++) {
        table4.querySelector(`#pdate${i+1}1`).innerText = paidDetails[i].date;
        table4.querySelector(`#pamount${i+1}1`).innerText = paidDetails[i].amount;
    }

    table4.querySelector('#total1').innerText = paidDetails.reduce((total, item) => total + parseInt(item.amount), 0);
});
