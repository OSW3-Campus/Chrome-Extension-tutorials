"use strict";

// Configurer l'entrée "parent" du menu contextuel
var parent = chrome.contextMenus.create({
    "title": "Test parent item"
});


// Ajouter 2 sous menu
var child1 = chrome.contextMenus.create({
    "title": "Child 1", 
    "parentId": parent, 
    // "onclick": genericOnClick
});
var child2 = chrome.contextMenus.create({
    "title": "Child 2", 
    "parentId": parent, 
    // "onclick": genericOnClick
});


var radio1 = chrome.contextMenus.create({
    "title": "Radio 1", 
    "type": "radio",
    // "onclick":radioOnClick
});
var radio2 = chrome.contextMenus.create({
    "title": "Radio 2", 
    "type": "radio",
    // "onclick":radioOnClick
});


var checkbox1 = chrome.contextMenus.create({
    "title": "Checkbox1", 
    "type": "checkbox", 
    // "onclick":checkboxOnClick
});
var checkbox2 = chrome.contextMenus.create({
    "title": "Checkbox2", 
    "type": "checkbox", 
    // "onclick":checkboxOnClick
});