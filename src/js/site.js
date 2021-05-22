import { siteUI } from './ui';
import { XR } from './webXR';

const XRtype = 'vr'; // ar or vr

siteUI.init(XRtype, XR);

if(navigator.xr) {
    XR.init(XRtype, siteUI);
}