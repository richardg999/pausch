export const serverSend = (input) => {
    console.log("this is what is going to be sent", input);
    fetch("http://pbridge.adm.cs.cmu.edu:5000/theme",
        {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                "Content-Type": 'application/json',
            },
        }
    ).then(function(returnedValue) {
        console.log("this is a success with a value of", returnedValue);
    }).catch(function(err) {
        console.log("There is an error ", err);
    });
};
