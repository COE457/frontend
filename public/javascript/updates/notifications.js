$("body").on(events.newLocation, e => {
    newToast(`Your child have moved to ${dataStorage.locationHist[0].location}`)
})