/** 
 * @file communication.js
 *
 * @overview
 * This script is used to process communication options
 * Purposes: - to make the different buttons in the page usable
 * 			 - use API calls to send messages in JSON format
 */

/**
 * @function attachCommunicationFunctions
 * @description prepares a JSON to be sent on button press
 * @fires sendMsg()
 */
const attachCommunicationFunctions = () => {
  $("#comeHere").click(() => {
    //  on click event
    let messageBody = {
      //  prepare message JSON
      message: "comeHere" /** @todo format message properly */
    };
    sendMsg(messageBody); //  send message
  });
  $("#foodIsReady").click(() => {
    let messageBody = {
      message: "foodIsReady"
    };
    sendMsg(messageBody);
  });
  $("#goToSleep").click(() => {
    let messageBody = {
      message: "goToSleep"
    };
    sendMsg(messageBody);
  });
  $("#wakeUp").click(() => {
    let messageBody = {
      message: "wakeUp"
    };
    sendMsg(messageBody);
  });
};


/**
 * @function sendMsg
 * @description waits for the message to be sent to the smart watch and confirms it to the user 
 * @param messageBody: Object
 * @fires smartWatchSend()
 */
const sendMsg = async messageBody => {
  try {
    let waitingForConfirmation = await smartWatchSend(messageBody);
    window.alert("Message Successfully Sent");
  } catch (err) {
    window.alert("Failed to send message. Try again later");
  }
};

/**
 * @function smartWatchSend
 * @description sends a JSON to the smartwatch using API calls
 * @fires SOME_API_CALL
 * @param {Object} messageBody
 * @returns {Promise} either a rejection or a resolve to indicate the result of the messaging attempt
 */
const smartWatchSend = async messageBody => {
  return Promise.resolve(); // only success
    /**
        @todo use API calls and Promises properly 
    */
};
