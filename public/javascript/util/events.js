/**
 * @file util/events.js
 * 
 * @description object containing a list of custom events 
 * 
 * Purposes: - to ensure that events are not misspelt 
 *           - to keep track of added custom events 
 */

 const events = {
     viewReady: "viewReady", //  when #contents is done loading 
     refreshed: "refreshed", //  when the page is refreshed and done loading
     locationUpdated: "locationUpdated", //  when location data gets updated 
     newLocation: "newLocation", //  when a new location is detected
     clearNotifications: "clearNotifications", //  when notifications should be cleared
     childListUpdated: "childListUpdated", //  when the user's list of children is updated
     temperatureUpdated: "temperatureUpdated", //  when temperature data gets updated 
     equipmentUpdated: "equipmentUpdated", //  when equipment data gets updated
     heartRateUpdated: "heartRateUpdated", //  when heartRate readings gets updated
     objectsUpdated: "objectsUpdated", //  when a new object interaction image is available 
     panicUpdated: "panicUpdated" //  when a new panic info is available
 }