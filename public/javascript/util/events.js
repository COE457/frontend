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
     clearNotifications: "clearNotifications" //  when notifications should be cleared
 }