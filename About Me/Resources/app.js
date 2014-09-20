// Declaration / Variables
var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();
var numberOfViews = galleryList.length;
var platWidth = Ti.Platform.displayCaps.platformWidth;
var spacing = 2;
var rowCount = 4;
var size = (platWidth - (spacing * (rowCount + 1))) / rowCount;
var galleryNum =  " of " + numberOfViews;

//Windows
mainWindow = Ti.UI.createWindow({
	title: "About Me",
	backgroundColor: "#000000",
	fullscreen: true,
	
});
tatWindow = Ti.UI.createWindow({

	title: "Tattoo Gallery",
	titleAttributes: {
		font: "Zapfino"
	},
	backgroundColor: "#000000",
	fullscreen: true,
	
});
meWin = Ti.UI.createWindow({
	title: "Philip A. Canniff",
	titleAttributes: {
		font: "Zapfino"
	},
	backgroundColor: "#ffffff",
	fullscreen: true,
	
});
navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});
scrollWindow = Ti.UI.createWindow({
	title: galleryNum,
	titleAttributes: {
		font: "Roboto",
		color: "#000",
		
	},
	backgroundColor : "#333",
});
//Labels
aboutMe = Ti.UI.createLabel({
	bottom: "5dp",
	text: "From: Northern Virginia (15minutes South of D.C.) \nAge: 24 \nMonth: 6 \nInterets: Mobile Dev, Gaming, Astronomy/Space pioneering, Tattoos, Comic Books",
	font: {
		fontFamily: "Roboto", fontSize: "14dp"
	},
});
//Containers
aboutCont = Ti.UI.createView({
	backgroundColor: "#cccccc",
	height: "100%",
	width: "100%",
	
});
meCont = Ti.UI.createView({
	backgroundColor: "#cccccc",
	height: "100%",
	width: "100%",
	
});
//Image Views
selfImage = Ti.UI.createImageView({
	top: "0dp",
	image: "spidey.jpg",
});
comicImage = Ti.UI.createImageView({
	top: "0dp",
	width: "320dp",
	image: "comic.jpg",
});
//Scroll Views
viewContainer = Ti.UI.createScrollView({
	width : platWidth,
	contentWidth : platWidth,
	layout : "horizontal",
	scrollVerticalIndicator : true,
	top: 10
});
scrollView = Ti.UI.createScrollableView({
	width : platWidth,
	contentWidth : platWidth,
	showPagingControl : true,
	views : [],
});
//Buttons
buttonOne = Ti.UI.createButton({
	bottom: "0dp",
	width: "320dp",
	height: "75dp",
	title: "CLICK FOR MOAR!",
	font: {
		fontFamily: "Roboto", fontSize: "24dp",
	},
	color: "#000",
	backgroundColor: "#6699FF"
});
// Processes
var makeViews = function(num) {
	for (var i = 0; i < num; i++) {
		var newView = Ti.UI.createView({
			top : spacing,
			left : spacing,
			backgroundColor : "#fff",
			width : size,
			height : size,
			borderRadius : 20,
			
		});
		var newImage = Ti.UI.createImageView({
			width : size + 30,
			image : "/images/" + galleryList[i],
			borderRadius : 0,
			id : i
		});
		
		newView.add(newImage);
		viewContainer.add(newView);
		

	}
};
var makeScroll = function(evt) {
	
	var imageArray =[];
	
	for (var i = 0; i < numberOfViews; i++) {
		var newViewable = Ti.UI.createView({

			backgroundColor : "#fff",
			width : platWidth,
			height : platWidth,
			borderRadius : 20,
			
		});
		var newImageable = Ti.UI.createImageView({
			width : platWidth + 30,
			image : "/images/" + galleryList[i],
			borderRadius : 0,
			id : i
		});
		newViewable.add(newImageable);
		imageArray.push(newViewable);
	}
	scrollView.setViews(imageArray);
	scrollWindow.add(scrollView);
	scrollView.scrollToView(evt.source.id);
	scrollWindow.title = (evt.source.id + 1) + galleryNum;
	navWindow.openWindow(scrollWindow);
	//console.log(evt);
};
// Event Listeners
viewContainer.addEventListener("click", makeScroll);
buttonOne.addEventListener("click", function(){
	navWindow.openWindow(meWin);
	
});
meCont.addEventListener("swipe", function(){
	navWindow.openWindow(tatWindow);

});
scrollView.addEventListener("scrollend", function(evt) {
	var current = evt.currentPage;
	scrollWindow.title = (current + 1) + galleryNum;	
	scrollView.showPagingControl = true; 
});


// Calls
meCont.add(aboutMe);
meCont.add(comicImage);
meWin.add(meCont);
makeViews(numberOfViews);
tatWindow.add(viewContainer);	
aboutCont.add(buttonOne);
aboutCont.add(selfImage);
mainWindow.add(aboutCont);
mainWindow.open();
navWindow.open();

