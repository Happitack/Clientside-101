fetch('https://disease.sh/v3/covid-19/all')
    .then(resp => resp.json())
    .then (data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    })