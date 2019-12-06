/**
 * @file updates/notifications.js
 * 
 * @overview used to generate notifications (toasts) based on events
 */
$("body").on(events.newLocation, e => { //  when a new location is detected
    newToast(`Your child have moved to ${dataStorage.locationHist[0].location}`) //  show a toast to the user with that location
})