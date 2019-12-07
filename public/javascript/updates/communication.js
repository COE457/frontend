/**
 * @file updates/communication.js
 *
 * @overview used for sending messages to child's smartwatch using MQTT
 *
 * Assumptions: - JQuery has loaded
 *              - mqtt/mqtt.js has loaded
 */

const attachCommunicationMessages = () => { //  called when the user navigates to the communication page 
  $("#foodIsReady").click(e => { //  when this card is clicked
    sendMessage(
      JSON.stringify({ //  stringify the object 
        from: $("#messageSender").val(), //  get the sender name from the designated field 
        msg: "Food is ready!", //  message body 
        id: new Date(Date.now()) //  time stamp
      })
    );
  });

  $("#goToSleep").click(e => { //  same as $("#foodIsReady").click
    sendMessage(
        JSON.stringify({
          from: $("#messageSender").val(),
          msg: "Bed time!",
          id: new Date(Date.now())
        })
      );
  });

  $("#customMessage").click(e => {
    sendMessage(
        JSON.stringify({
          from: $("#messageSender").val(),
          msg: $("#customMessageBody").val(), //  custom message body 
          id: new Date(Date.now())
        })
      );
  });
};
