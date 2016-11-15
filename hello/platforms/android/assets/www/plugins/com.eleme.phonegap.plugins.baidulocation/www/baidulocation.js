cordova.define("com.eleme.phonegap.plugins.baidulocation.BiaduLocation", function(require, exports, module) {
var locationService = {
	execute: function(action, successCallback, errorCallback) {
		cordova.exec(    
			function(pos) {
				var errcode = pos.code;
				if (errcode == 61 || errcode == 65 || errcode == 161) {
					successCallback(pos);
				} else {
					if (typeof(errorCallback) != "undefined") {
						if (errcode >= 162) {
							errcode = 162;
						}
						errorCallback(pos)
					};
				}
			}, 
			function(err){},
			"BaiduLocation",
			action,
			[]
		)
	},
	getCurrentPosition: function(successCallback, errorCallback) {
		this.execute("getCurrentPosition", successCallback, errorCallback);
	},
	stop: function(action, successCallback, errorCallback) {
		this.execute("stop", successCallback, errorCallback);
	}
}

if (!window.plugins) {
    window.plugins = {};
}

if (!window.plugins.locationService) {
    window.plugins.locationService = locationService;
}
module.exports = locationService;

});
