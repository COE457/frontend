/**
 * @file util/frequencies.js
 * 
 * @description has constants for interval delays
 */

 const frequencies = {
     locationUpdate: 30000, //  update location once every 30 seconds
     temperatureUpdate: 6000, //  update temperature once every 5 minutes
     equipmentUpdate: 60000, //  update equipment once every minute
     heartRateUpdate: 6000 , //  update heartRate once every 5 minutes
     objectUpdate: 60000 * 5, //  update object once every 5 minutes
     panicUpdate: 5 //  update panic once every 5 seconds
 }