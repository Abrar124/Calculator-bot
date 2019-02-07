const functions = require('firebase-functions');
var admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
var firestore = admin.firestore();

exports.webhook = functions.https.onRequest((request, response) => {
    let params = request.body.result.parameters;


    switch (request.body.result.action) {

        case 'addition':
            
            response.send({
                speech:
                    `Your results is ${parseInt(params.number) + parseInt(params.number2)}`
            });
            break;

        case 'subtraction':

            response.send({
                speech:
                    `Your results is ${parseInt(params.number) - parseInt(params.number2)}`
            });
            break;

            case 'Multiply':

            response.send({
                speech:
                    `Your results is ${parseInt(params.number) * parseInt(params.number2)}`
            });
            break;

            case 'Divide':

            response.send({
                speech:
                    `Your results is ${parseInt(params.number) / parseInt(params.number2)}`
            });
            break;

        default:
            response.send({
                speech: "no action matched in webhook"
            })
    }
});