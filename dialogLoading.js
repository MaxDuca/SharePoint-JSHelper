// Show "Working on it" dialog
var loader = SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Res.dialogLoading15);

// Do your stuff here

// Hide when you have finish
loader.close();
