cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/src/browser/DeviceProxy.js",
        "id": "org.apache.cordova.device.DeviceProxy",
        "runs": true
    },
    {
        "file": "plugins/com.dooble.phonertc/www/phonertc.js",
        "id": "com.dooble.phonertc.PhoneRTC",
        "clobbers": [
            "cordova.plugins.phonertc"
        ]
    },
    {
        "file": "plugins/com.dooble.phonertc/src/browser/PhoneRTCProxy.js",
        "id": "com.dooble.phonertc.PhoneRTCProxy",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.console": "0.2.13",
    "org.apache.cordova.device": "0.3.0",
    "com.dooble.phonertc": "2.0.0"
}
// BOTTOM OF METADATA
});