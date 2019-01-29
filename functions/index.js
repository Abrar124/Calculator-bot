const functions = require('firebase-functions');

exports.webhook = functions.https.onRequest((request, response) => {
    
        console.log("request.body.result.parameters: ", request.body.result.parameters);
        let params = request.body.result.parameters;
    var x= params.number;
    console.log(x);
        response.send({
            speech:
                `Your results is ${parseInt(params.number)  + parseInt(params.number2) }`
        });
    });

    //  function Subtraction (agent) {
    //     agent.add(`I didn't understand`);
    //     agent.add(`I'm sorry, can you try again?`);
    //   }
    //   exports.Subtraction = functions.https.onRequest((request, response) => {

    //     response.send("I'm sorry, can you try again?");
    
    // });