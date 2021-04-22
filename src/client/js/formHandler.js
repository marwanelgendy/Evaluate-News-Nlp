const {checkForURL} = require('./urlChecker')

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    if(checkForURL(formText)){

        postData(formText)
        .then(function(res){
            console.log('Client side response',res)
            document.getElementById('irony').innerHTML = 'Irony : ' + res.irony
            document.getElementById('confidence').innerHTML = 'Confidence : ' + res.confidence
            document.getElementById('subjectivity').innerHTML = 'Subjectivity : ' + res.subjectivity
            document.getElementById('polarity').innerHTML = 'Polarity : ' + res.score_tag
            document.getElementById('agreement').innerHTML = 'agreement : ' + res.agreement
        })
    }
    else{
        alert("Please Enter Valid URL")
    }

}

const postData = async(url ="") => {
    const response = await fetch('http://localhost:8081/test',{
        method : 'POST',
        mode : 'cors',
        credentials : 'same-origin',
        headers :{'Content-type':'application/json',},
        body : JSON.stringify( {"url" : url}),
    });

    try{
        const newData = await response.json();
        console.log(newData)
        return newData
    }
    catch(error){
        console.log("error",error)
    }
}

export { handleSubmit }
