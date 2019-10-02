const attachCommunicationFunctions = () => {
    $("#comeHere").click(() => {
        let messageBody = {
            message: "comeHere"
        }
        sendMsg(messageBody); 
    });
    $("#foodIsReady").click(() => {
        let messageBody = {
            message: "foodIsReady"
        }
        sendMsg(messageBody); 
    });
    $("#goToSleep").click(() => {
        let messageBody = {
            message: "goToSleep"
        }
        sendMsg(messageBody); 
    });
    $("#wakeUp").click(() => {
        let messageBody = {
            message: "wakeUp"
        }
        sendMsg(messageBody); 
    });
}

const sendMsg = async(messageBody) => {
    try{
        let waitingForConfirmation = await smartWatchSend(messageBody);
        window.alert("Message Successfully Sent");
    } catch(err){
        window.alert("Failed to send message. Try again later");
    }
}

const smartWatchSend = async (messageBody) => {
    return Promise.resolve();  // only success
    /* 
        TO BE FILLED WHEN THE BACKEND IS READY
    */ 
}