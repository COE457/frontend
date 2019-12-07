/**
 * @file updates/refresh.js
 *
 * @overview runs the methods that need to be ran when the page is refreshed/loaded for the first time
 *
 * Assumptions: - mqtt.js loaded
 *              - interface/modal.js loaded
 *              - util/events.js loaded
 */
((window, document) => {
  MqttInit(); //  initialize MQTT handler. //  from mqtt.js
  showLoading(); //  show loading screen. //  from interface/modal.js
  let page = localStorage.getItem("latestPage"); //  getting the latest page the user have entered
  let load = page === null ? ".menuLink#home" : `.menuLink#${page}`; //  if no latest page was found trigger home. otherwise trigger latest page 
  $(load).trigger(events.refreshed); //  triggers an event that loads either home or latestPage
})(this, this.document);
