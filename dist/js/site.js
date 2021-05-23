import {siteUI}from'./ui.js';import {XR}from'./webXR.js';const XRtype = 'vr'; // ar or vr

siteUI.init(XRtype, XR);

if(navigator.xr) {
    XR.init(XRtype, siteUI);
}