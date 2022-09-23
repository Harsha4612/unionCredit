let inputData = [{name : 'Ultimate Credit Union', borrower : 'Paul Smith', amount : 1500},
                 {name : 'West Credit Union', borrower : 'Diane Winters',  amount : 2000},
                 {name : 'Credit Union of the Mountains', borrower : 'Mark Stone', amount : 750},
                 {name : 'West Credit Union', borrower : 'Cindy Block', amount : 3500},
                 {name : 'Ultimate Credit Union', borrower : 'Mrgaret Hill', amount : 1000}]

// get Input Data
let ultimateData = (data) => {
        let dataRows = '';
        inputData.forEach((data) => {
            if (data.name === 'Ultimate Credit Union') {
                inputData.push(data)
            dataRows += `<tr>
                                <td>${data.name}</td>
                                <td>${data.borrower}</td>
                                <td>${data.amount}</td>
                            </tr>`;
        }});
            document.querySelector('#ultimate').innerHTML = dataRows;
    }
    ultimateData();

    let westData = (data) => {
        let dataRows = '';
        inputData.forEach((data) => {
            if (data.name === 'West Credit Union') {
                inputData.push(data)
            dataRows += `<tr>
                                <td>${data.name}</td>
                                <td>${data.borrower}</td>
                                <td>${data.amount}</td>
                            </tr>`;
        }});
            document.querySelector('#west').innerHTML = dataRows;
    }
    westData();

    
    let mountainsData = (data) => {
        let dataRows = '';
        inputData.forEach((data) => {
            if (data.name === 'Credit Union of the Mountains') {
                inputData.push(data)
            dataRows += `<tr>
                                <td>${data.name}</td>
                                <td>${data.borrower}</td>
                                <td>${data.amount}</td>
                            </tr>`;
        }});
            document.querySelector('#mountains').innerHTML = dataRows;
    }
    mountainsData();