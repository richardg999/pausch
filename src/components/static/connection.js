/**
 * Function that sends the theme (name, id and panels) to the server for processing
 * @param {string} name
 * @param {string} id
 * @param {object} panels
 */

const serverSend = (name, id, panels) => {
    console.log("this is what is going to be sent", panels);
    fetch("http://pbridge.adm.cs.cmu.edu:5000/theme",
        {
            method: 'POST',
            body: JSON.stringify({
                name, id, panels
            }),
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

export default serverSend;
