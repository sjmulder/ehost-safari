// By Sijmen Mulder <sjmudler@gmail.com>
// Published under the BSD licence.

(function() {
	// <link rel="image_src" href="…">
	// used by imgur, TwitPic, PhotoBucket, Flickr, Twitgoo
	var getImageSrcLinkImage = function() {
		var imageSrcLink = document.querySelector('link[rel="image_src"]');
		return imageSrcLink ? imageSrcLink.href : null;
	};

	// <meta property="og:image" value="…">
	// used by yFrog
	var getOpenGraphImage = function() {
		var metaTags = document.querySelectorAll('meta[property]');
		for (var i = 0; i < metaTags.length; i++) {
			var metaTag = metaTags[i];
			if (metaTag.getAttribute('property') === 'og:image') {
				return metaTag.getAttribute('content');
			}
		}

		return null;
	};

	var findImageUrl = function() {
		return getImageSrcLinkImage() || getOpenGraphImage();
	};
	
	var handleContextMenu = function(event) {
		var imgNodeSrc = event.target.nodeName == "IMG" ? event.target.src : null;
		var imageUrl = imgNodeSrc || findImageUrl();
		safari.self.tab.setContextMenuEventUserInfo(event, { imageUrl: imageUrl });
	};

	document.addEventListener("contextmenu", handleContextMenu, false);
})();
