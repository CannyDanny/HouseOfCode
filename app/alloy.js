// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// Global colors
Alloy.Globals.viewTitle = "#54d4d4"; // lightblue
Alloy.Globals.blueText = "#66dad4"; // lightblue text, different from viewTitle
Alloy.Globals.whiteText = "#ffffff"; // plain white text
Alloy.Globals.blueElement = "#58d3ca"; // lightblue color for elements, like button and back arrow
Alloy.Globals.redElement = "#b83030"; // red color, for the delete button
Alloy.Globals.tabIcon = "#172935"; // darkblue color for the icon in the tabGroup at the bottom
Alloy.Globals.tabIconBackground = "#192834"; // darkblue color for the tappend icons in the bottom
Alloy.Globals.backgroundColor = "#182b38"; // background color for all the views

// Global Require
Alloy.Globals.Map = require('ti.map');

// USAGE
// In a *.tss file you can write the following to get a specific color:
// ".Label": {
// 	color: Alloy.Globals.blueElement
// }
