var vbOKOnly = 0;
var vbOKCancel = 1;
var vbYesNo = 4;
var vbQuestion = 32;
var vbInformation = 64;
var vbCancel = 2;
var vbYes = 6;


WSHShell = WScript.CreateObject("WScript.Shell");

WSHShell.Popup("Here I am", 0, "My Title", vbInformation );
