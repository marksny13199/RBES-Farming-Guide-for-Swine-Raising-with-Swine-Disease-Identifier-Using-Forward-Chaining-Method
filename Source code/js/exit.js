
function onDeviceReady() {
    if(device.platform == "Android"){
        document.addEventListener("backbutton", onBackKeyDown, false);
    }
}


function onBackKeyDown() {// Handle the back button
    navigator.notification.confirm(
            'Are you certain you want to close the app?',  // message
            function( index ){
                if( index == 1 ){//look at the docs for this part
                    navigator.app.exitApp();
                }
            },              // callback to invoke with index of button pressed
            'Exit',            // title
            'Yes,No'          // buttonLabels
        );
}
