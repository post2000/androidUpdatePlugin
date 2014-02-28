/**
 * 检查并更新APP
 * version.js
 * [{'verCode':2,'verName':'1.2.1','apkPath':'http://****.com/your.apk'}]
 * verCode 版本号
 * verName 版本名称
 * apkPath APK下载路径
 * @author 
 */
var update = {
	updateEvent: function(url,successCallback,errorCallback){
		cordova.exec(
			successCallback,
			errorCallback,
			'UpdateApp',
			'checkAndUpdate',
			[url]
		);
	}
}
module.exports = update;
