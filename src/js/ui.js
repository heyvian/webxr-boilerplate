function UI(XRtype) { };

let siteUI = new UI();

siteUI.init = function(XRtype, XR) {
    console.log('|||| Init UI');
    this.XRtype = XRtype;
    this.XR = XR;
    this.startXRbtn = document.querySelector('.js-start-webxr');
    this.XRsupportedBtnText = "Start " + this.XRtype.toUpperCase() + " session";
    this.XRnotSupportedBtnText = this.XRtype.toUpperCase() + " not supported on this device";
    
    if(navigator.xr) {
        navigator.xr.isSessionSupported( 'immersive-' + this.XRtype ).then( function ( supported ) {
            supported ? siteUI.immersiveSupported() : siteUI.immersiveNotSupported();
        })
        .catch( siteUI.immersiveNotSupported.bind(siteUI));
    } else {
        console.log('%c no navigator.xr', 'color: #990000');
        this.immersiveNotSupported();
    }
}

siteUI.immersiveSupported = function() {
    console.log('%c|||| ' + this.XRtype.toUpperCase() + ' is supported', 'color: #006600');
    this.startXRbtn.textContent = this.XRsupportedBtnText;

    this.startXRbtn.addEventListener('click', e => {
        this.XR.startXRSession();
    });
}

siteUI.immersiveNotSupported = function() {
    console.log('%c|||| ' + this.XRtype.toUpperCase() + ' is not supported', 'color: #990000');
    this.startXRbtn.textContent = this.XRnotSupportedBtnText;
}

export { siteUI };