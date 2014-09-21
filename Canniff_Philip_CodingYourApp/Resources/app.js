// Windows
win = Ti.UI.createWindow({
	backgroundImage: "images/space.jpg",
	fullscreen: true
});
menu = Ti.UI.createWindow({
	backgroundImage: "images/space.jpg",
	fullscreen: true,
	opacity: 1,
});
// Template
var myTemplate = {
    childTemplates: [
        {                           
            type: 'Ti.UI.ImageView', 
            bindId: 'pic',           
            properties: {            
                width: '98dp', height: '98dp', left: 0
            }
        },
         {                           
            type: 'Ti.UI.Label', 
            bindId: 'info',           
            properties: {            
                 left: "128dp", top: "30dp",
                 color: '#fff',
               	 font: { fontFamily:'Roboto', fontSize: '20dp', fontWeight:'italic' },
                
            }
        }, {                           
            type: 'Ti.UI.Label', 
            bindId: 'infoTwo',           
            properties: {            
              	left: "128dp", top: "50dp",
              	color: '#fff',
                font: { fontFamily:'Roboto', fontSize: '16dp', fontWeight:'italic' },
                
            }
        }
    ]
};
//Visual Assets
button = Ti.UI.createButton({
	bottom: "50dp",
	height: "100dp",
	width: "250dp",
	color: "#fff",
	backgroundImage: "icon/takeOff.png",
	opacity: "1"
});
logo = Ti.UI.createImageView({
	top: "100dp",
	left: "50dp",
	width: "80%",
	image: "images/logo.png",
});
logoTwo = Ti.UI.createImageView({
	top: "0dp",
	height: "10%",
	left: "50dp",
	width: "80%",
	image: "images/logo.png",
});
shuttle = Ti.UI.createButton({
	top: "60dp",
	left: "25dp",
	width: "120dp",
	height: "120dp",
	backgroundImage: "icon/shuttle.png",
	opacity: "0.9"
});
rocket = Ti.UI.createButton({
	top: "60dp",
	right: "25dp",
	height: "120dp",
	width: "120dp",
	backgroundImage: "icon/rocket.png",
	opacity: "0.9"
});
venture = Ti.UI.createButton({
	top: "190dp",
	left: "25dp",
	height: "120dp",
	width: "120dp",
	backgroundImage: "icon/venture.png",
	opacity: "0.9"
	
});
sate = Ti.UI.createButton({
	top: "190dp",
	right: "25dp",
	height: "120dp",
	width: "120dp",
	backgroundImage: "icon/sate.png",
	opacity: "0.9"
});
update = Ti.UI.createButton({
	top: "320dp",
	left: "25dp",
	height: "120dp",
	width: "120dp",
	backgroundImage: "icon/updates.png",
	opacity: "0.9"
});
events = Ti.UI.createButton({
	top: "320dp",
	right: "25dp",
	height: "120dp",
	width: "120dp",
	backgroundImage: "icon/events.png",
	opacity: "0.9"
}); 
//Search Bars
var search = Titanium.UI.createSearchBar({
    barColor:'transparent', 
    backgroundColor: 'transparent',
    showCancel:true,
    left: "0dp",
    opacity: "0.8"
});
var searchTwo = Titanium.UI.createSearchBar({
    barColor:'transparent', 
    backgroundColor: 'transparent',
    showCancel:true,
    left: "0dp",
});
var searchThree = Titanium.UI.createSearchBar({
    barColor:'transparent',
    backgroundColor: 'transparent', 
    showCancel:true,
    left: "0dp",
});
var searchFour = Titanium.UI.createSearchBar({
    barColor:'transparent',
    backgroundColor: 'transparent', 
    showCancel:true,
    left: "0dp",
});
// List Views
listView = Ti.UI.createListView({
	top: "10%",
	height: "80%",
	bottom: "10%",
	backgroundColor: "transparent",
	templates: { 'template': myTemplate },
	defaultItemTemplate: 'template',
	searchView: search,
	selectedBackgroundColor: "#f00"
});
rocketView = Ti.UI.createListView({
	top: "10%",
	height: "80%",
	bottom: "40dp",
	backgroundColor: "transparent",
	templates: { 'template': myTemplate },
	defaultItemTemplate: 'template',
	searchView: searchTwo,
	selectedBackgroundColor: "#f00"
	
});
ventureView = Ti.UI.createListView({
	top: "10%",
	height: "80%",
	bottom: "40dp",
	backgroundColor: "transparent",
	templates: { 'template': myTemplate },
	defaultItemTemplate: 'template',
	searchView: searchThree,
	selectedBackgroundColor: "#f00"
	
});
sateView = Ti.UI.createListView({
	top: "10%",
	height: "80%",
	bottom: "40dp",
	backgroundColor: "transparent",
	templates: { 'template': myTemplate },
	defaultItemTemplate: 'template',
	searchView: searchFour,
	selectedBackgroundColor: "#f00"
	
});
// List Sections
var sectionOne = Ti.UI.createListSection({ 
	headerTitle: "Shuttles",
	backgroundColor: "#ccc"
});
var sectionTwo = Ti.UI.createListSection({ 
	headerTitle: "Rockets",
	backgroundColor: "#ccc"
});
var sectionThree = Ti.UI.createListSection({ 
	headerTitle: "Venturing Vessels",
	backgroundColor: "#ccc"
});
var sectionFour = Ti.UI.createListSection({ 
	headerTitle: "Satellites",
	backgroundColor: "#ccc"
});
back = Ti.UI.createButton({
	title: "Back",
	font: {
		fontFamily: "Roboto",
		fontSize: "30%"
	},
	
	right: "0dp",
	bottom: "0dp",
	height: "10%",
	width: "50%",
	backgroundColor: "transparent",
	borderColor: "#fff"
});
home = Ti.UI.createButton({
	title: "Home",
	font: {
		fontFamily: "Roboto",
		fontSize: "30%"
	},
	
	left: "0dp",
	bottom: "0dp",
	height: "10%",
	width: "50%",
	backgroundColor: "transparent",
	borderColor: "#fff"
});
// Slider
slider = Ti.UI.createSlider({
	bottom: 10,
    min: 15,
    max: 100,
    width: '90%',
    value: 100
});
//Main Window Open

win.add(logo);
win.add(button);
win.open();

newloadFile = require("operations");


