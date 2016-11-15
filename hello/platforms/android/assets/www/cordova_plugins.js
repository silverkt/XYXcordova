cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.eleme.phonegap.plugins.baidulocation.BiaduLocation",
        "file": "plugins/com.eleme.phonegap.plugins.baidulocation/www/baidulocation.js",
        "pluginId": "com.eleme.phonegap.plugins.baidulocation",
        "clobbers": [
            "window.baiduLocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "com.eleme.phonegap.plugins.baidulocation": "0.1.0",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-geolocation": "2.4.0"
};
// BOTTOM OF METADATA
});