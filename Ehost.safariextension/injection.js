// By Sijmen Mulder <sjmudler@gmail.com>
// Published under the BSD licence.

(function() {
	var handleContextMenu = function(event) {
		var userInfo = {};
		userInfo.isUploadableImage = event.target.nodeName === "IMG";
		if (userInfo.isUploadableImage) {
			userInfo.imageUrl = event.target.src;
		}
		safari.self.tab.setContextMenuEventUserInfo(event, userInfo);
	};

	document.addEventListener("contextmenu", handleContextMenu, false);
})();
