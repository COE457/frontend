/**
 * @file util/frequencies.js
 * 
 * @description has constants for interval delays
 */

 const frequencies = {
     locationUpdate: 30000, //  update location once every 30 seconds
     temperatureUpdate: 60000 * 5, //  update temperature once every 5 minutes
     equipmentUpdate: 60000, //  update equipment once every minute
     heartRateUpdate: 60000 * 5 //  update heartRate once every 5 minutes
 }