//sample HTML/JS script that will publish/subscribe to topics in the Google Chrome Console
//by Matthew Bordignon @bordignon on twitter.
var wsbroker = mqttParams.HOST; //mqtt websocket enabled broker
var wsport = mqttParams.PORT; // port for above
var client = new Paho.MQTT.Client(
  wsbroker,
  wsport,
  "myclientid_" + parseInt(Math.random() * 100, 10)
);
client.onConnectionLost = function(responseObject) {
  console.error("connection lost: " + responseObject.errorMessage);
};
client.onMessageArrived = function (message) {
    console.log(message.destinationName, ' -- ', message.payloadString);
};

var options = {
  timeout: 3,
  onSuccess: function() {
    console.log("mqtt connected");
    // Connection succeeded; subscribe to our topic, you can add multile lines of these
    client.subscribe(
      "/childMonitor/messageDismissed/" +
        localStorage.getItem("currentSmartwatch"),
      { qos: 1 }
    );
    //use the below if you want to publish to a topic on connect
    message = new Paho.MQTT.Message("Hello");
    message.destinationName = mqttParams.TOPIC;
    client.send(message);
  },
  onFailure: function(message) {
    console.error("Connection to MQTT broker failed: " + message.errorMessage);
  }
};

function MqttInit() {
  client.connect(options);
}

function sendMessage(msg) {
  message = new Paho.MQTT.Message(msg);
  message.destinationName =
    mqttParams.TOPIC + localStorage.getItem("currentSmartwatch");
  console.log(mqttParams.TOPIC + localStorage.getItem("currentSmartwatch"));
  client.send(message);
}
