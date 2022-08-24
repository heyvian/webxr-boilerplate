(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function yl(o){}let Yt=new yl;Yt.init=function(o,e){console.log("|||| Init UI"),this.XRtype=o,this.XR=e,this.startXRbtn=document.querySelector(".js-start-webxr"),this.XRsupportedBtnText="Start "+this.XRtype.toUpperCase()+" session",this.XRnotSupportedBtnText=this.XRtype.toUpperCase()+" not supported on this device",navigator.xr?navigator.xr.isSessionSupported("immersive-"+this.XRtype).then(function(t){t?Yt.immersiveSupported():Yt.immersiveNotSupported()}).catch(Yt.immersiveNotSupported.bind(Yt)):(console.log("%c no navigator.xr","color: #990000"),this.immersiveNotSupported())};Yt.immersiveSupported=function(){console.log("%c|||| "+this.XRtype.toUpperCase()+" is supported","color: #006600"),this.startXRbtn.textContent=this.XRsupportedBtnText,this.startXRbtn.addEventListener("click",o=>{this.XR.startXRSession()})};Yt.immersiveNotSupported=function(){console.log("%c|||| "+this.XRtype.toUpperCase()+" is not supported","color: #990000"),this.startXRbtn.textContent=this.XRnotSupportedBtnText};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wr="143",Ml=0,Gr=1,Sl=2,Do=1,bl=2,Ei=3,ni=0,Rt=1,En=2,wl=1,hn=0,ei=1,Vr=2,Hr=3,Wr=4,Tl=5,Jn=100,El=101,Al=102,Xr=103,qr=104,Cl=200,Ll=201,Rl=202,Pl=203,Io=204,No=205,Dl=206,Il=207,Nl=208,Fl=209,Ol=210,Ul=0,zl=1,Bl=2,ur=3,kl=4,Gl=5,Vl=6,Hl=7,Tr=0,Wl=1,Xl=2,$t=0,ql=1,jl=2,Yl=3,Kl=4,Zl=5,Fo=300,ii=301,si=302,hr=303,dr=304,_s=306,ri=1e3,bt=1001,ms=1002,et=1003,fr=1004,pr=1005,ft=1006,Oo=1007,ui=1008,An=1009,$l=1010,Jl=1011,Uo=1012,Ql=1013,yn=1014,un=1015,Ri=1016,ec=1017,tc=1018,ti=1020,nc=1021,ic=1022,Lt=1023,sc=1024,rc=1025,bn=1026,ai=1027,ac=1028,oc=1029,lc=1030,cc=1031,uc=1033,Cs=33776,Ls=33777,Rs=33778,Ps=33779,jr=35840,Yr=35841,Kr=35842,Zr=35843,hc=36196,$r=37492,Jr=37496,Qr=37808,ea=37809,ta=37810,na=37811,ia=37812,sa=37813,ra=37814,aa=37815,oa=37816,la=37817,ca=37818,ua=37819,ha=37820,da=37821,fa=36492,Pi=2300,oi=2301,Ds=2302,pa=2400,ma=2401,ga=2402,dc=2500,fc=1,zo=2,Cn=3e3,Fe=3001,pc=3200,mc=3201,xs=0,gc=1,jt="srgb",Mn="srgb-linear",Is=7680,_c=519,mr=35044,xc=35048,_a="300 es",gr=1035;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xa=1234567;const Ci=Math.PI/180,Di=180/Math.PI;function Pt(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tt[o&255]+tt[o>>8&255]+tt[o>>16&255]+tt[o>>24&255]+"-"+tt[e&255]+tt[e>>8&255]+"-"+tt[e>>16&15|64]+tt[e>>24&255]+"-"+tt[t&63|128]+tt[t>>8&255]+"-"+tt[t>>16&255]+tt[t>>24&255]+tt[n&255]+tt[n>>8&255]+tt[n>>16&255]+tt[n>>24&255]).toLowerCase()}function lt(o,e,t){return Math.max(e,Math.min(t,o))}function Er(o,e){return(o%e+e)%e}function vc(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function yc(o,e,t){return o!==e?(t-o)/(e-o):0}function Li(o,e,t){return(1-t)*o+t*e}function Mc(o,e,t,n){return Li(o,e,1-Math.exp(-t*n))}function Sc(o,e=1){return e-Math.abs(Er(o,e*2)-e)}function bc(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function wc(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Tc(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Ec(o,e){return o+Math.random()*(e-o)}function Ac(o){return o*(.5-Math.random())}function Cc(o){o!==void 0&&(xa=o);let e=xa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lc(o){return o*Ci}function Rc(o){return o*Di}function _r(o){return(o&o-1)===0&&o!==0}function Bo(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function gs(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Pc(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),m=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*m,a*c);break;case"YXY":o.set(l*m,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dc(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ic(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Nc=Object.freeze({__proto__:null,DEG2RAD:Ci,RAD2DEG:Di,generateUUID:Pt,clamp:lt,euclideanModulo:Er,mapLinear:vc,inverseLerp:yc,lerp:Li,damp:Mc,pingpong:Sc,smoothstep:bc,smootherstep:wc,randInt:Tc,randFloat:Ec,randFloatSpread:Ac,seededRandom:Cc,degToRad:Lc,radToDeg:Rc,isPowerOfTwo:_r,ceilPowerOfTwo:Bo,floorPowerOfTwo:gs,setQuaternionFromProperEuler:Pc,normalize:Ic,denormalize:Dc});class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],y=i[1],w=i[4],b=i[7],S=i[2],E=i[5],R=i[8];return s[0]=r*p+a*y+l*S,s[3]=r*f+a*w+l*E,s[6]=r*_+a*b+l*R,s[1]=c*p+h*y+u*S,s[4]=c*f+h*w+u*E,s[7]=c*_+h*b+u*R,s[2]=d*p+m*y+g*S,s[5]=d*f+m*w+g*E,s[8]=d*_+m*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,m=c*s-r*l,g=t*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*r)*p,e[3]=d*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(r*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],r=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*r+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*r+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ko(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function Ii(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ns={[jt]:{[Mn]:wn},[Mn]:{[jt]:fs}},Tt={legacyMode:!0,get workingColorSpace(){return Mn},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Ns[e]&&Ns[e][t]!==void 0){const n=Ns[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={r:0,g:0,b:0},Et={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function Fs(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Vi(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mn){return this.r=e,this.g=t,this.b=n,Tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mn){if(e=Er(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Fs(r,s,e+1/3),this.g=Fs(r,s,e),this.b=Fs(r,s,e-1/3)}return Tt.toWorkingColorSpace(this,i),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Tt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Tt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Tt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Tt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=jt){const n=Go[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Tt.fromWorkingColorSpace(Vi(this,Ke),e),lt(Ke.r*255,0,255)<<16^lt(Ke.g*255,0,255)<<8^lt(Ke.b*255,0,255)<<0}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mn){Tt.fromWorkingColorSpace(Vi(this,Ke),t);const n=Ke.r,i=Ke.g,s=Ke.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Mn){return Tt.fromWorkingColorSpace(Vi(this,Ke),t),e.r=Ke.r,e.g=Ke.g,e.b=Ke.b,e}getStyle(e=jt){return Tt.fromWorkingColorSpace(Vi(this,Ke),e),e!==jt?`color(${e} ${Ke.r} ${Ke.g} ${Ke.b})`:`rgb(${Ke.r*255|0},${Ke.g*255|0},${Ke.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Et),Et.h+=e,Et.s+=t,Et.l+=n,this.setHSL(Et.h,Et.s,Et.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Et),e.getHSL(Gi);const n=Li(Et.h,Gi.h,t),i=Li(Et.s,Gi.s,t),s=Li(Et.l,Gi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}pe.NAMES=Go;let zn;class Vo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zn===void 0&&(zn=Ii("canvas")),zn.width=e.width,zn.height=e.height;const n=zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ii("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=wn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ho{constructor(e=null){this.isSource=!0,this.uuid=Pt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Os(i[r].image)):s.push(Os(i[r]))}else s=Os(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Os(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Vo.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fc=0;class ut extends hi{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,n=bt,i=bt,s=ft,r=ui,a=Lt,l=An,c=1,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Pt(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ri:e.x=e.x-Math.floor(e.x);break;case bt:e.x=e.x<0?0:1;break;case ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ri:e.y=e.y-Math.floor(e.y);break;case bt:e.y=e.y<0?0:1;break;case ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ut.DEFAULT_IMAGE=null;ut.DEFAULT_MAPPING=Fo;class ze{constructor(e=0,t=0,n=0,i=1){ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(m+1)/2,S=(_+1)/2,E=(h+d)/4,R=(u+p)/4,x=(g+f)/4;return w>b&&w>S?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=R/n):b>S?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=E/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=R/s,i=x/s),this.set(n,i,s,t),this}let y=Math.sqrt((f-g)*(f-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-p)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ln extends hi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ze(0,0,e,t),this.scissorTest=!1,this.viewport=new ze(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wo extends ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oc extends ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],m=s[r+1],g=s[r+2],p=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==d||c!==m||h!==g){let f=1-a;const _=l*d+c*m+h*g+u*p,y=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const S=Math.sqrt(w),E=Math.atan2(S,_*y);f=Math.sin(f*E)/S,a=Math.sin(a*E)/S}const b=a*y;if(l=l*f+d*b,c=c*f+m*b,h=h*f+g*b,u=u*f+p*b,f===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],m=s[r+2],g=s[r+3];return e[t]=a*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-a*m,e[t+2]=c*g+h*m+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(r-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(r-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(va.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(va.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=l*t+r*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-r*t,d=-s*t-r*n-a*i;return this.x=c*l+d*-s+h*-a-u*-r,this.y=h*l+d*-r+u*-s-c*-a,this.z=u*l+d*-a+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Us.copy(this).projectOnVector(e),this.sub(Us)}reflect(e){return this.sub(Us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new C,va=new Dn;class di{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,a=s.count;r<a;r++)fn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(fn)}else n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox),zs.applyMatrix4(e.matrixWorld),this.union(zs);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Hi.subVectors(this.max,vi),Bn.subVectors(e.a,vi),kn.subVectors(e.b,vi),Gn.subVectors(e.c,vi),en.subVectors(kn,Bn),tn.subVectors(Gn,kn),pn.subVectors(Bn,Gn);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-pn.z,pn.y,en.z,0,-en.x,tn.z,0,-tn.x,pn.z,0,-pn.x,-en.y,en.x,0,-tn.y,tn.x,0,-pn.y,pn.x,0];return!Bs(t,Bn,kn,Gn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,Bn,kn,Gn,Hi))?!1:(Wi.crossVectors(en,tn),t=[Wi.x,Wi.y,Wi.z],Bs(t,Bn,kn,Gn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kt=[new C,new C,new C,new C,new C,new C,new C,new C],fn=new C,zs=new di,Bn=new C,kn=new C,Gn=new C,en=new C,tn=new C,pn=new C,vi=new C,Hi=new C,Wi=new C,mn=new C;function Bs(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){mn.fromArray(o,s);const a=i.x*Math.abs(mn.x)+i.y*Math.abs(mn.y)+i.z*Math.abs(mn.z),l=e.dot(mn),c=t.dot(mn),h=n.dot(mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Uc=new di,ya=new C,Xi=new C,ks=new C;class fi{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ks.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Xi.set(0,0,1).multiplyScalar(e.radius):Xi.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ya.copy(e.center).add(Xi)),this.expandByPoint(ya.copy(e.center).sub(Xi)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gt=new C,Gs=new C,qi=new C,nn=new C,Vs=new C,ji=new C,Hs=new C;class vs{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gt.copy(this.direction).multiplyScalar(t).add(this.origin),Gt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gs.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),nn.copy(this.origin).sub(Gs);const s=e.distanceTo(t)*.5,r=-this.direction.dot(qi),a=nn.dot(this.direction),l=-nn.dot(qi),c=nn.lengthSq(),h=Math.abs(1-r*r);let u,d,m,g;if(h>0)if(u=r*l-a,d=r*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,m=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(qi).multiplyScalar(d).add(Gs),m}intersectSphere(e,t){Gt.subVectors(e.center,this.origin);const n=Gt.dot(this.direction),i=Gt.dot(Gt)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gt)!==null}intersectTriangle(e,t,n,i,s){Vs.subVectors(t,e),ji.subVectors(n,e),Hs.crossVectors(Vs,ji);let r=this.direction.dot(Hs),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;nn.subVectors(this.origin,e);const l=a*this.direction.dot(ji.crossVectors(nn,ji));if(l<0)return null;const c=a*this.direction.dot(Vs.cross(nn));if(c<0||l+c>r)return null;const h=-a*nn.dot(Hs);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,a,l,c,h,u,d,m,g,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vn.setFromMatrixColumn(e,0).length(),s=1/Vn.setFromMatrixColumn(e,1).length(),r=1/Vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,m=r*u,g=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=g+m*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,g=c*h,p=c*u;t[0]=d+p*a,t[4]=g*a-m,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=m*a-g,t[6]=p+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,g=c*h,p=c*u;t[0]=d-p*a,t[4]=-r*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=r*h,t[9]=p-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,m=r*u,g=a*h,p=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,m=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-d*u,t[8]=g*u+m,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-p*u}else if(e.order==="XZY"){const d=r*l,m=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=r*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zc,e,Bc)}lookAt(e,t,n){const i=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),sn.crossVectors(n,_t),sn.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),sn.crossVectors(n,_t)),sn.normalize(),Yi.crossVectors(_t,sn),i[0]=sn.x,i[4]=Yi.x,i[8]=_t.x,i[1]=sn.y,i[5]=Yi.y,i[9]=_t.y,i[2]=sn.z,i[6]=Yi.z,i[10]=_t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],y=n[3],w=n[7],b=n[11],S=n[15],E=i[0],R=i[4],x=i[8],A=i[12],F=i[1],I=i[5],K=i[9],Y=i[13],P=i[2],V=i[6],z=i[10],j=i[14],q=i[3],O=i[7],H=i[11],ee=i[15];return s[0]=r*E+a*F+l*P+c*q,s[4]=r*R+a*I+l*V+c*O,s[8]=r*x+a*K+l*z+c*H,s[12]=r*A+a*Y+l*j+c*ee,s[1]=h*E+u*F+d*P+m*q,s[5]=h*R+u*I+d*V+m*O,s[9]=h*x+u*K+d*z+m*H,s[13]=h*A+u*Y+d*j+m*ee,s[2]=g*E+p*F+f*P+_*q,s[6]=g*R+p*I+f*V+_*O,s[10]=g*x+p*K+f*z+_*H,s[14]=g*A+p*Y+f*j+_*ee,s[3]=y*E+w*F+b*P+S*q,s[7]=y*R+w*I+b*V+S*O,s[11]=y*x+w*K+b*z+S*H,s[15]=y*A+w*Y+b*j+S*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*m-n*l*m)+p*(+t*l*m-t*c*d+s*r*d-i*r*m+i*c*h-s*l*h)+f*(+t*c*u-t*a*m-s*r*u+n*r*m+s*a*h-n*c*h)+_*(-i*a*h-t*l*u+t*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],y=u*f*c-p*d*c+p*l*m-a*f*m-u*l*_+a*d*_,w=g*d*c-h*f*c-g*l*m+r*f*m+h*l*_-r*d*_,b=h*p*c-g*u*c+g*a*m-r*p*m-h*a*_+r*u*_,S=g*u*l-h*p*l-g*a*d+r*p*d+h*a*f-r*u*f,E=t*y+n*w+i*b+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=y*R,e[1]=(p*d*s-u*f*s-p*i*m+n*f*m+u*i*_-n*d*_)*R,e[2]=(a*f*s-p*l*s+p*i*c-n*f*c-a*i*_+n*l*_)*R,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*m-n*l*m)*R,e[4]=w*R,e[5]=(h*f*s-g*d*s+g*i*m-t*f*m-h*i*_+t*d*_)*R,e[6]=(g*l*s-r*f*s-g*i*c+t*f*c+r*i*_-t*l*_)*R,e[7]=(r*d*s-h*l*s+h*i*c-t*d*c-r*i*m+t*l*m)*R,e[8]=b*R,e[9]=(g*u*s-h*p*s-g*n*m+t*p*m+h*n*_-t*u*_)*R,e[10]=(r*p*s-g*a*s+g*n*c-t*p*c-r*n*_+t*a*_)*R,e[11]=(h*a*s-r*u*s-h*n*c+t*u*c+r*n*m-t*a*m)*R,e[12]=S*R,e[13]=(h*p*i-g*u*i+g*n*d-t*p*d-h*n*f+t*u*f)*R,e[14]=(g*a*i-r*p*i-g*n*l+t*p*l+r*n*f-t*a*f)*R,e[15]=(r*u*i-h*a*i+h*n*l-t*u*l-r*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,m=s*h,g=s*u,p=r*h,f=r*u,_=a*u,y=l*c,w=l*h,b=l*u,S=n.x,E=n.y,R=n.z;return i[0]=(1-(p+_))*S,i[1]=(m+b)*S,i[2]=(g-w)*S,i[3]=0,i[4]=(m-b)*E,i[5]=(1-(d+_))*E,i[6]=(f+y)*E,i[7]=0,i[8]=(g+w)*R,i[9]=(f-y)*R,i[10]=(1-(d+p))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Vn.set(i[0],i[1],i[2]).length();const r=Vn.set(i[4],i[5],i[6]).length(),a=Vn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],At.copy(this);const c=1/s,h=1/r,u=1/a;return At.elements[0]*=c,At.elements[1]*=c,At.elements[2]*=c,At.elements[4]*=h,At.elements[5]*=h,At.elements[6]*=h,At.elements[8]*=u,At.elements[9]*=u,At.elements[10]*=u,t.setFromRotationMatrix(At),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(r+s)/(r-s),m=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,r){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,d=(n+i)*c,m=(r+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vn=new C,At=new Ce,zc=new C(0,0,0),Bc=new C(1,1,1),sn=new C,Yi=new C,_t=new C,Ma=new Ce,Sa=new Dn;class Ui{constructor(e=0,t=0,n=0,i=Ui.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-lt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ma,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sa.setFromEuler(this),this.setFromQuaternion(Sa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ui.DefaultOrder="XYZ";Ui.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ar{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kc=0;const ba=new C,Hn=new Dn,Vt=new Ce,Ki=new C,yi=new C,Gc=new C,Vc=new Dn,wa=new C(1,0,0),Ta=new C(0,1,0),Ea=new C(0,0,1),Hc={type:"added"},Aa={type:"removed"};class Ge extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Pt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DefaultUp.clone();const e=new C,t=new Ui,n=new Dn,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new wt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=Ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.premultiply(Hn),this}rotateX(e){return this.rotateOnAxis(wa,e)}rotateY(e){return this.rotateOnAxis(Ta,e)}rotateZ(e){return this.rotateOnAxis(Ea,e)}translateOnAxis(e,t){return ba.copy(e).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wa,e)}translateY(e){return this.translateOnAxis(Ta,e)}translateZ(e){return this.translateOnAxis(Ea,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Vt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ki.copy(e):Ki.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vt.lookAt(yi,Ki,this.up):Vt.lookAt(Ki,yi,this.up),this.quaternion.setFromRotationMatrix(Vt),i&&(Vt.extractRotation(i.matrixWorld),Hn.setFromRotationMatrix(Vt),this.quaternion.premultiply(Hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Aa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Aa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,Gc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),m=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ge.DefaultUp=new C(0,1,0);Ge.DefaultMatrixAutoUpdate=!0;const Ct=new C,Ht=new C,Ws=new C,Wt=new C,Wn=new C,Xn=new C,Ca=new C,Xs=new C,qs=new C,js=new C;class Kt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ct.subVectors(e,t),i.cross(Ct);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ct.subVectors(i,t),Ht.subVectors(n,t),Ws.subVectors(e,t);const r=Ct.dot(Ct),a=Ct.dot(Ht),l=Ct.dot(Ws),c=Ht.dot(Ht),h=Ht.dot(Ws),u=r*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(c*l-a*h)*d,g=(r*h-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wt),Wt.x>=0&&Wt.y>=0&&Wt.x+Wt.y<=1}static getUV(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,Wt),l.set(0,0),l.addScaledVector(s,Wt.x),l.addScaledVector(r,Wt.y),l.addScaledVector(a,Wt.z),l}static isFrontFacing(e,t,n,i){return Ct.subVectors(n,t),Ht.subVectors(e,t),Ct.cross(Ht).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ct.subVectors(this.c,this.b),Ht.subVectors(this.a,this.b),Ct.cross(Ht).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Kt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;Wn.subVectors(i,n),Xn.subVectors(s,n),Xs.subVectors(e,n);const l=Wn.dot(Xs),c=Xn.dot(Xs);if(l<=0&&c<=0)return t.copy(n);qs.subVectors(e,i);const h=Wn.dot(qs),u=Xn.dot(qs);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Wn,r);js.subVectors(e,s);const m=Wn.dot(js),g=Xn.dot(js);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Xn,a);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return Ca.subVectors(s,i),a=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(Ca,a);const _=1/(f+p+d);return r=p*_,a=d*_,t.copy(n).addScaledVector(Wn,r).addScaledVector(Xn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Wc=0;class Dt extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=Pt(),this.name="",this.type="Material",this.blending=ei,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Io,this.blendDst=No,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===wl;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zt extends Dt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ye=new C,Zi=new Ae;class pt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=mr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new pe),t[n++]=r.r,t[n++]=r.g,t[n++]=r.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new Ae),t[n++]=r.x,t[n++]=r.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new C),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new ze),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z,t[n++]=r.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zi.fromBufferAttribute(this,t),Zi.applyMatrix3(e),this.setXY(t,Zi.x,Zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix3(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xo extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qo extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xc=0;const St=new Ce,Ys=new Ge,qn=new C,xt=new di,Mi=new di,$e=new C;class vt extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Pt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ko(e)?qo:Xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return St.makeRotationFromQuaternion(e),this.applyMatrix4(St),this}rotateX(e){return St.makeRotationX(e),this.applyMatrix4(St),this}rotateY(e){return St.makeRotationY(e),this.applyMatrix4(St),this}rotateZ(e){return St.makeRotationZ(e),this.applyMatrix4(St),this}translate(e,t,n){return St.makeTranslation(e,t,n),this.applyMatrix4(St),this}scale(e,t,n){return St.makeScale(e,t,n),this.applyMatrix4(St),this}lookAt(e){return Ys.lookAt(e),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];xt.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,xt.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,xt.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(xt.min),this.boundingBox.expandByPoint(xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(xt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];Mi.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(xt.min,Mi.min),xt.expandByPoint($e),$e.addVectors(xt.max,Mi.max),xt.expandByPoint($e)):(xt.expandByPoint(Mi.min),xt.expandByPoint(Mi.max))}xt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)$e.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($e));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(qn.fromBufferAttribute(e,c),$e.add(qn)),i=Math.max(i,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let F=0;F<a;F++)c[F]=new C,h[F]=new C;const u=new C,d=new C,m=new C,g=new Ae,p=new Ae,f=new Ae,_=new C,y=new C;function w(F,I,K){u.fromArray(i,F*3),d.fromArray(i,I*3),m.fromArray(i,K*3),g.fromArray(r,F*2),p.fromArray(r,I*2),f.fromArray(r,K*2),d.sub(u),m.sub(u),p.sub(g),f.sub(g);const Y=1/(p.x*f.y-f.x*p.y);!isFinite(Y)||(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(Y),y.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(Y),c[F].add(_),c[I].add(_),c[K].add(_),h[F].add(y),h[I].add(y),h[K].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let F=0,I=b.length;F<I;++F){const K=b[F],Y=K.start,P=K.count;for(let V=Y,z=Y+P;V<z;V+=3)w(n[V+0],n[V+1],n[V+2])}const S=new C,E=new C,R=new C,x=new C;function A(F){R.fromArray(s,F*3),x.copy(R);const I=c[F];S.copy(I),S.sub(R.multiplyScalar(R.dot(I))).normalize(),E.crossVectors(x,I);const Y=E.dot(h[F])<0?-1:1;l[F*4]=S.x,l[F*4+1]=S.y,l[F*4+2]=S.z,l[F*4+3]=Y}for(let F=0,I=b.length;F<I;++F){const K=b[F],Y=K.start,P=K.count;for(let V=Y,z=Y+P;V<z;V+=3)A(n[V+0]),A(n[V+1]),A(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,r=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,f),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const r=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,r.length-c);for(let u=0,d=c;u<h;u++,d++)r[d]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$e.fromBufferAttribute(e,t),$e.normalize(),e.setXYZ(t,$e.x,$e.y,$e.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*h;for(let _=0;_<h;_++)d[g++]=c[m++]}return new pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const La=new Ce,jn=new vs,Ks=new fi,rn=new C,an=new C,on=new C,Zs=new C,$s=new C,Js=new C,$i=new C,Ji=new C,Qi=new C,es=new Ae,ts=new Ae,ns=new Ae,Qs=new C,is=new C;class ct extends Ge{constructor(e=new vt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),e.ray.intersectsSphere(Ks)===!1)||(La.copy(s).invert(),jn.copy(e.ray).applyMatrix4(La),n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const _=m[p],y=i[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let S=w,E=b;S<E;S+=3){const R=a.getX(S),x=a.getX(S+1),A=a.getX(S+2);r=ss(this,y,e,jn,l,c,h,u,d,R,x,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let _=p,y=f;_<y;_+=3){const w=a.getX(_),b=a.getX(_+1),S=a.getX(_+2);r=ss(this,i,e,jn,l,c,h,u,d,w,b,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const _=m[p],y=i[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let S=w,E=b;S<E;S+=3){const R=S,x=S+1,A=S+2;r=ss(this,y,e,jn,l,c,h,u,d,R,x,A),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const p=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=p,y=f;_<y;_+=3){const w=_,b=_+1,S=_+2;r=ss(this,i,e,jn,l,c,h,u,d,w,b,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function qc(o,e,t,n,i,s,r,a){let l;if(e.side===Rt?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side!==En,a),l===null)return null;is.copy(a),is.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(is);return c<t.near||c>t.far?null:{distance:c,point:is.clone(),object:o}}function ss(o,e,t,n,i,s,r,a,l,c,h,u){rn.fromBufferAttribute(i,c),an.fromBufferAttribute(i,h),on.fromBufferAttribute(i,u);const d=o.morphTargetInfluences;if(s&&d){$i.set(0,0,0),Ji.set(0,0,0),Qi.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const f=d[g],_=s[g];f!==0&&(Zs.fromBufferAttribute(_,c),$s.fromBufferAttribute(_,h),Js.fromBufferAttribute(_,u),r?($i.addScaledVector(Zs,f),Ji.addScaledVector($s,f),Qi.addScaledVector(Js,f)):($i.addScaledVector(Zs.sub(rn),f),Ji.addScaledVector($s.sub(an),f),Qi.addScaledVector(Js.sub(on),f)))}rn.add($i),an.add(Ji),on.add(Qi)}o.isSkinnedMesh&&(o.boneTransform(c,rn),o.boneTransform(h,an),o.boneTransform(u,on));const m=qc(o,e,t,n,rn,an,on,Qs);if(m){a&&(es.fromBufferAttribute(a,c),ts.fromBufferAttribute(a,h),ns.fromBufferAttribute(a,u),m.uv=Kt.getUV(Qs,rn,an,on,es,ts,ns,new Ae)),l&&(es.fromBufferAttribute(l,c),ts.fromBufferAttribute(l,h),ns.fromBufferAttribute(l,u),m.uv2=Kt.getUV(Qs,rn,an,on,es,ts,ns,new Ae));const g={a:c,b:h,c:u,normal:new C,materialIndex:0};Kt.getNormal(rn,an,on,g.normal),m.face=g}return m}class In extends vt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(p,f,_,y,w,b,S,E,R,x,A){const F=b/R,I=S/x,K=b/2,Y=S/2,P=E/2,V=R+1,z=x+1;let j=0,q=0;const O=new C;for(let H=0;H<z;H++){const ee=H*I-Y;for(let J=0;J<V;J++){const $=J*F-K;O[p]=$*y,O[f]=ee*w,O[_]=P,c.push(O.x,O.y,O.z),O[p]=0,O[f]=0,O[_]=E>0?1:-1,h.push(O.x,O.y,O.z),u.push(J/R),u.push(1-H/x),j+=1}}for(let H=0;H<x;H++)for(let ee=0;ee<R;ee++){const J=d+ee+V*H,$=d+ee+V*(H+1),ue=d+(ee+1)+V*(H+1),_e=d+(ee+1)+V*H;l.push(J,$,_e),l.push($,ue,_e),q+=6}a.addGroup(m,q,A),m+=q,d+=j}}static fromJSON(e){return new In(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nt(o){const e={};for(let t=0;t<o.length;t++){const n=li(o[t]);for(const i in n)e[i]=n[i]}return e}function jc(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const Yc={clone:li,merge:nt};var Kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Dt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kc,this.fragmentShader=Zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=jc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jo extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class it extends jo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Di*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ci*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yn=90,Kn=1;class $c extends Ge{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new it(Yn,Kn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new C(1,0,0)),this.add(i);const s=new it(Yn,Kn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new C(-1,0,0)),this.add(s);const r=new it(Yn,Kn,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new C(0,1,0)),this.add(r);const a=new it(Yn,Kn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new C(0,-1,0)),this.add(a);const l=new it(Yn,Kn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);const c=new it(Yn,Kn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=$t,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Yo extends ut{constructor(e,t,n,i,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jc extends Ln{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new In(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:hn});s.uniforms.tEquirect.value=t;const r=new ct(i,s),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=ft),new $c(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const er=new C,Qc=new C,eu=new wt;class gn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=er.subVectors(n,t).cross(Qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eu.getNormalMatrix(e),i=this.coplanarPoint(er).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new fi,rs=new C;class Cr{constructor(e=new gn,t=new gn,n=new gn,i=new gn,s=new gn,r=new gn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],y=n[14],w=n[15];return t[0].setComponents(a-i,u-l,p-d,w-f).normalize(),t[1].setComponents(a+i,u+l,p+d,w+f).normalize(),t[2].setComponents(a+s,u+c,p+m,w+_).normalize(),t[3].setComponents(a-s,u-c,p-m,w-_).normalize(),t[4].setComponents(a-r,u-h,p-g,w-y).normalize(),t[5].setComponents(a+r,u+h,p+g,w+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(rs.x=i.normal.x>0?e.max.x:e.min.x,rs.y=i.normal.y>0?e.max.y:e.min.y,rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ko(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function tu(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,m=h.updateRange;o.bindBuffer(u,c),m.count===-1?o.bufferSubData(u,0,d):(t?o.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):o.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:r,remove:a,update:l}}class Lr extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,m=[],g=[],p=[],f=[];for(let _=0;_<h;_++){const y=_*d-r;for(let w=0;w<c;w++){const b=w*u-s;g.push(b,-y,0),p.push(0,0,1),f.push(w/a),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const w=y+c*_,b=y+c*(_+1),S=y+1+c*(_+1),E=y+1+c*_;m.push(w,b,E),m.push(b,S,E)}this.setIndex(m),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(f,2))}static fromJSON(e){return new Lr(e.width,e.height,e.widthSegments,e.heightSegments)}}var nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,au=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lu="vec3 transformed = vec3( position );",cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Su=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ku=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vu=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Hu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$u=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,th=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ch=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ph=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,mh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Sh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Th=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Eh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ah=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ch=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ih=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Fh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wh=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Xh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Kh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$h=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ed=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,id=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ad=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ad=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ld=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:nu,alphamap_pars_fragment:iu,alphatest_fragment:su,alphatest_pars_fragment:ru,aomap_fragment:au,aomap_pars_fragment:ou,begin_vertex:lu,beginnormal_vertex:cu,bsdfs:uu,iridescence_fragment:hu,bumpmap_pars_fragment:du,clipping_planes_fragment:fu,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:_u,color_pars_fragment:xu,color_pars_vertex:vu,color_vertex:yu,common:Mu,cube_uv_reflection_fragment:Su,defaultnormal_vertex:bu,displacementmap_pars_vertex:wu,displacementmap_vertex:Tu,emissivemap_fragment:Eu,emissivemap_pars_fragment:Au,encodings_fragment:Cu,encodings_pars_fragment:Lu,envmap_fragment:Ru,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Du,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Wu,envmap_vertex:Nu,fog_vertex:Fu,fog_pars_vertex:Ou,fog_fragment:Uu,fog_pars_fragment:zu,gradientmap_pars_fragment:Bu,lightmap_fragment:ku,lightmap_pars_fragment:Gu,lights_lambert_vertex:Vu,lights_pars_begin:Hu,lights_toon_fragment:Xu,lights_toon_pars_fragment:qu,lights_phong_fragment:ju,lights_phong_pars_fragment:Yu,lights_physical_fragment:Ku,lights_physical_pars_fragment:Zu,lights_fragment_begin:$u,lights_fragment_maps:Ju,lights_fragment_end:Qu,logdepthbuf_fragment:eh,logdepthbuf_pars_fragment:th,logdepthbuf_pars_vertex:nh,logdepthbuf_vertex:ih,map_fragment:sh,map_pars_fragment:rh,map_particle_fragment:ah,map_particle_pars_fragment:oh,metalnessmap_fragment:lh,metalnessmap_pars_fragment:ch,morphcolor_vertex:uh,morphnormal_vertex:hh,morphtarget_pars_vertex:dh,morphtarget_vertex:fh,normal_fragment_begin:ph,normal_fragment_maps:mh,normal_pars_fragment:gh,normal_pars_vertex:_h,normal_vertex:xh,normalmap_pars_fragment:vh,clearcoat_normal_fragment_begin:yh,clearcoat_normal_fragment_maps:Mh,clearcoat_pars_fragment:Sh,iridescence_pars_fragment:bh,output_fragment:wh,packing:Th,premultiplied_alpha_fragment:Eh,project_vertex:Ah,dithering_fragment:Ch,dithering_pars_fragment:Lh,roughnessmap_fragment:Rh,roughnessmap_pars_fragment:Ph,shadowmap_pars_fragment:Dh,shadowmap_pars_vertex:Ih,shadowmap_vertex:Nh,shadowmask_pars_fragment:Fh,skinbase_vertex:Oh,skinning_pars_vertex:Uh,skinning_vertex:zh,skinnormal_vertex:Bh,specularmap_fragment:kh,specularmap_pars_fragment:Gh,tonemapping_fragment:Vh,tonemapping_pars_fragment:Hh,transmission_fragment:Wh,transmission_pars_fragment:Xh,uv_pars_fragment:qh,uv_pars_vertex:jh,uv_vertex:Yh,uv2_pars_fragment:Kh,uv2_pars_vertex:Zh,uv2_vertex:$h,worldpos_vertex:Jh,background_vert:Qh,background_frag:ed,cube_vert:td,cube_frag:nd,depth_vert:id,depth_frag:sd,distanceRGBA_vert:rd,distanceRGBA_frag:ad,equirect_vert:od,equirect_frag:ld,linedashed_vert:cd,linedashed_frag:ud,meshbasic_vert:hd,meshbasic_frag:dd,meshlambert_vert:fd,meshlambert_frag:pd,meshmatcap_vert:md,meshmatcap_frag:gd,meshnormal_vert:_d,meshnormal_frag:xd,meshphong_vert:vd,meshphong_frag:yd,meshphysical_vert:Md,meshphysical_frag:Sd,meshtoon_vert:bd,meshtoon_frag:wd,points_vert:Td,points_frag:Ed,shadow_vert:Ad,shadow_frag:Cd,sprite_vert:Ld,sprite_frag:Rd},ne={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wt},uv2Transform:{value:new wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}}},Ot={basic:{uniforms:nt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:nt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.fog,ne.lights,{emissive:{value:new pe(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:nt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:nt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:nt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new pe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:nt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:nt([ne.points,ne.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:nt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:nt([ne.common,ne.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:nt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:nt([ne.sprite,ne.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:nt([ne.envmap,{opacity:{value:1}}]),vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:nt([ne.common,ne.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:nt([ne.lights,ne.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Ot.physical={uniforms:nt([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function Pd(o,e,t,n,i,s){const r=new pe(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function m(p,f){let _=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=e.get(y));const w=o.xr,b=w.getSession&&w.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?g(r,a):y&&y.isColor&&(g(y,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===_s)?(c===void 0&&(c=new ct(new In(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:li(Ot.cube.uniforms),vertexShader:Ot.cube.vertexShader,fragmentShader:Ot.cube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(h!==y||u!==y.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ct(new Lr(2,2),new Rn({name:"BackgroundMaterial",uniforms:li(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==o.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=o.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,s)}return{getClearColor:function(){return r},setClearColor:function(p,f=1){r.set(p),a=f,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(r,a)},render:m}}function Dd(o,e,t,n){const i=o.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=f(null);let c=l,h=!1;function u(P,V,z,j,q){let O=!1;if(r){const H=p(j,z,V);c!==H&&(c=H,m(c.object)),O=_(P,j,z,q),O&&y(P,j,z,q)}else{const H=V.wireframe===!0;(c.geometry!==j.id||c.program!==z.id||c.wireframe!==H)&&(c.geometry=j.id,c.program=z.id,c.wireframe=H,O=!0)}q!==null&&t.update(q,34963),(O||h)&&(h=!1,x(P,V,z,j),q!==null&&o.bindBuffer(34963,t.get(q).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?o.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?o.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,V,z){const j=z.wireframe===!0;let q=a[P.id];q===void 0&&(q={},a[P.id]=q);let O=q[V.id];O===void 0&&(O={},q[V.id]=O);let H=O[j];return H===void 0&&(H=f(d()),O[j]=H),H}function f(P){const V=[],z=[],j=[];for(let q=0;q<i;q++)V[q]=0,z[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:z,attributeDivisors:j,object:P,attributes:{},index:null}}function _(P,V,z,j){const q=c.attributes,O=V.attributes;let H=0;const ee=z.getAttributes();for(const J in ee)if(ee[J].location>=0){const ue=q[J];let _e=O[J];if(_e===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;H++}return c.attributesNum!==H||c.index!==j}function y(P,V,z,j){const q={},O=V.attributes;let H=0;const ee=z.getAttributes();for(const J in ee)if(ee[J].location>=0){let ue=O[J];ue===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),q[J]=_e,H++}c.attributes=q,c.attributesNum=H,c.index=j}function w(){const P=c.newAttributes;for(let V=0,z=P.length;V<z;V++)P[V]=0}function b(P){S(P,0)}function S(P,V){const z=c.newAttributes,j=c.enabledAttributes,q=c.attributeDivisors;z[P]=1,j[P]===0&&(o.enableVertexAttribArray(P),j[P]=1),q[P]!==V&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),q[P]=V)}function E(){const P=c.newAttributes,V=c.enabledAttributes;for(let z=0,j=V.length;z<j;z++)V[z]!==P[z]&&(o.disableVertexAttribArray(z),V[z]=0)}function R(P,V,z,j,q,O){n.isWebGL2===!0&&(z===5124||z===5125)?o.vertexAttribIPointer(P,V,z,q,O):o.vertexAttribPointer(P,V,z,j,q,O)}function x(P,V,z,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const q=j.attributes,O=z.getAttributes(),H=V.defaultAttributeValues;for(const ee in O){const J=O[ee];if(J.location>=0){let $=q[ee];if($===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const ue=$.normalized,_e=$.itemSize,W=t.get($);if(W===void 0)continue;const Ue=W.buffer,ge=W.type,xe=W.bytesPerElement;if($.isInterleavedBufferAttribute){const le=$.data,ke=le.stride,we=$.offset;if(le.isInstancedInterleavedBuffer){for(let fe=0;fe<J.locationSize;fe++)S(J.location+fe,le.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let fe=0;fe<J.locationSize;fe++)b(J.location+fe);o.bindBuffer(34962,Ue);for(let fe=0;fe<J.locationSize;fe++)R(J.location+fe,_e/J.locationSize,ge,ue,ke*xe,(we+_e/J.locationSize*fe)*xe)}else{if($.isInstancedBufferAttribute){for(let le=0;le<J.locationSize;le++)S(J.location+le,$.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<J.locationSize;le++)b(J.location+le);o.bindBuffer(34962,Ue);for(let le=0;le<J.locationSize;le++)R(J.location+le,_e/J.locationSize,ge,ue,_e*xe,_e/J.locationSize*le*xe)}}else if(H!==void 0){const ue=H[ee];if(ue!==void 0)switch(ue.length){case 2:o.vertexAttrib2fv(J.location,ue);break;case 3:o.vertexAttrib3fv(J.location,ue);break;case 4:o.vertexAttrib4fv(J.location,ue);break;default:o.vertexAttrib1fv(J.location,ue)}}}}E()}function A(){K();for(const P in a){const V=a[P];for(const z in V){const j=V[z];for(const q in j)g(j[q].object),delete j[q];delete V[z]}delete a[P]}}function F(P){if(a[P.id]===void 0)return;const V=a[P.id];for(const z in V){const j=V[z];for(const q in j)g(j[q].object),delete j[q];delete V[z]}delete a[P.id]}function I(P){for(const V in a){const z=a[V];if(z[P.id]===void 0)continue;const j=z[P.id];for(const q in j)g(j[q].object),delete j[q];delete z[P.id]}}function K(){Y(),h=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:K,resetDefaultState:Y,dispose:A,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:b,disableUnusedAttributes:E}}function Id(o,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function a(c,h){o.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,m;if(i)d=o,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,h,u),t.update(h,s,u)}this.setMode=r,this.render=a,this.renderInstances=l}function Nd(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),f=o.getParameter(36347),_=o.getParameter(36348),y=o.getParameter(36349),w=d>0,b=r||e.has("OES_texture_float"),S=w&&b,E=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:E}}function Fd(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new gn,a=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,m){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,m,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,m){const g=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,_=o.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const y=s?0:n,w=y*4;let b=_.clippingState||null;l.value=b,b=h(g,d,w,m);for(let S=0;S!==w;++S)b[S]=t[S];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const p=u!==null?u.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const _=m+p*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<_)&&(f=new Float32Array(_));for(let w=0,b=m;w!==p;++w,b+=4)r.copy(u[w]).applyMatrix4(y,a),r.normal.toArray(f,b),f[b+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function Od(o){let e=new WeakMap;function t(r,a){return a===hr?r.mapping=ii:a===dr&&(r.mapping=si),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===hr||a===dr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Jc(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Rr extends jo{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qn=4,Ra=[.125,.215,.35,.446,.526,.582],vn=20,tr=new Rr,Pa=new pe;let nr=null;const _n=(1+Math.sqrt(5))/2,$n=1/_n,Da=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,_n,$n),new C(0,_n,-$n),new C($n,0,_n),new C(-$n,0,_n),new C(_n,$n,0),new C(-_n,$n,0)];class Ia{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){nr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nr),e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:Ri,format:Lt,encoding:Cn,depthBuffer:!1},i=Na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ud(s)),this._blurMaterial=zd(s,e,t)}return i}_compileMaterial(e){const t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,tr)}_sceneToCubeUV(e,t,n,i){const a=new it(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pa),h.toneMapping=$t,h.autoClear=!1;const m=new Zt({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new ct(new In,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Pa),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;as(i,y*w,_>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ii||e.mapping===si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;as(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,tr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Da[(i-1)%Da.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ct(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vn-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):vn;f>vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${vn}`);const _=[];let y=0;for(let R=0;R<vn;++R){const x=R/p,A=Math.exp(-x*x/2);_.push(A),R===0?y+=A:R<f&&(y+=2*A)}for(let R=0;R<_.length;R++)_[R]=_[R]/y;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const b=this._sizeLods[i],S=3*b*(i>w-Qn?i-w+Qn:0),E=4*(this._cubeSize-b);as(t,S,E,3*b,2*b),l.setRenderTarget(t),l.render(u,tr)}}function Ud(o){const e=[],t=[],n=[];let i=o;const s=o-Qn+1+Ra.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-Qn?l=Ra[r-o+Qn-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,p=3,f=2,_=1,y=new Float32Array(p*g*m),w=new Float32Array(f*g*m),b=new Float32Array(_*g*m);for(let E=0;E<m;E++){const R=E%3*2/3-1,x=E>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];y.set(A,p*g*E),w.set(d,f*g*E);const F=[E,E,E,E,E,E];b.set(F,_*g*E)}const S=new vt;S.setAttribute("position",new pt(y,p)),S.setAttribute("uv",new pt(w,f)),S.setAttribute("faceIndex",new pt(b,_)),e.push(S),i>Qn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Na(o,e,t){const n=new Ln(o,e,t);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function zd(o,e,t){const n=new Float32Array(vn),i=new C(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Fa(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Oa(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Pr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bd(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===hr||l===dr,h=l===ii||l===si;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ia(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Ia(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function kd(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gd(o,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let w=0,b=y.length;w<b;w+=3){const S=y[w+0],E=y[w+1],R=y[w+2];d.push(S,E,E,R,R,S)}}else{const y=g.array;p=g.version;for(let w=0,b=y.length/3-1;w<b;w+=3){const S=w+0,E=w+1,R=w+2;d.push(S,E,E,R,R,S)}}const f=new(ko(d)?qo:Xo)(d,1);f.version=p;const _=s.get(u);_&&e.remove(_),s.set(u,f)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Vd(o,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,m){o.drawElements(s,m,a,d*l),t.update(m,s,1)}function u(d,m,g){if(g===0)return;let p,f;if(i)p=o,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function Hd(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wd(o,e){return o[0]-e[0]}function Xd(o,e){return Math.abs(e[1])-Math.abs(o[1])}function ir(o,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),o.divideScalar(t)}function qd(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==f){let z=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var g=z;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let F=0;b===!0&&(F=1),S===!0&&(F=2),E===!0&&(F=3);let I=h.attributes.position.count*F,K=1;I>e.maxTextureSize&&(K=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const Y=new Float32Array(I*K*4*f),P=new Wo(Y,I,K,f);P.type=un,P.needsUpdate=!0;const V=F*4;for(let j=0;j<f;j++){const q=R[j],O=x[j],H=A[j],ee=I*K*4*j;for(let J=0;J<q.count;J++){const $=J*V;b===!0&&(r.fromBufferAttribute(q,J),q.normalized===!0&&ir(r,q),Y[ee+$+0]=r.x,Y[ee+$+1]=r.y,Y[ee+$+2]=r.z,Y[ee+$+3]=0),S===!0&&(r.fromBufferAttribute(O,J),O.normalized===!0&&ir(r,O),Y[ee+$+4]=r.x,Y[ee+$+5]=r.y,Y[ee+$+6]=r.z,Y[ee+$+7]=0),E===!0&&(r.fromBufferAttribute(H,J),H.normalized===!0&&ir(r,H),Y[ee+$+8]=r.x,Y[ee+$+9]=r.y,Y[ee+$+10]=r.z,Y[ee+$+11]=H.itemSize===4?r.w:1)}}_={count:f,texture:P,size:new Ae(I,K)},s.set(h,_),h.addEventListener("dispose",z)}let y=0;for(let b=0;b<m.length;b++)y+=m[b];const w=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(o,"morphTargetBaseInfluence",w),d.getUniforms().setValue(o,"morphTargetInfluences",m),d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=n[h.id];if(f===void 0||f.length!==p){f=[];for(let S=0;S<p;S++)f[S]=[S,0];n[h.id]=f}for(let S=0;S<p;S++){const E=f[S];E[0]=S,E[1]=m[S]}f.sort(Xd);for(let S=0;S<8;S++)S<p&&f[S][1]?(a[S][0]=f[S][0],a[S][1]=f[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Wd);const _=h.morphAttributes.position,y=h.morphAttributes.normal;let w=0;for(let S=0;S<8;S++){const E=a[S],R=E[0],x=E[1];R!==Number.MAX_SAFE_INTEGER&&x?(_&&h.getAttribute("morphTarget"+S)!==_[R]&&h.setAttribute("morphTarget"+S,_[R]),y&&h.getAttribute("morphNormal"+S)!==y[R]&&h.setAttribute("morphNormal"+S,y[R]),i[S]=x,w+=x):(_&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),y&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const b=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function jd(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Zo=new ut,$o=new Wo,Jo=new Oc,Qo=new Yo,Ua=[],za=[],Ba=new Float32Array(16),ka=new Float32Array(9),Ga=new Float32Array(4);function pi(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Ua[i];if(s===void 0&&(s=new Float32Array(i),Ua[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function ht(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function dt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function ys(o,e){let t=za[e];t===void 0&&(t=new Int32Array(e),za[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Yd(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Kd(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;o.uniform2fv(this.addr,e),dt(t,e)}}function Zd(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;o.uniform3fv(this.addr,e),dt(t,e)}}function $d(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;o.uniform4fv(this.addr,e),dt(t,e)}}function Jd(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Ga.set(n),o.uniformMatrix2fv(this.addr,!1,Ga),dt(t,n)}}function Qd(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;ka.set(n),o.uniformMatrix3fv(this.addr,!1,ka),dt(t,n)}}function ef(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Ba.set(n),o.uniformMatrix4fv(this.addr,!1,Ba),dt(t,n)}}function tf(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function nf(o,e){const t=this.cache;ht(t,e)||(o.uniform2iv(this.addr,e),dt(t,e))}function sf(o,e){const t=this.cache;ht(t,e)||(o.uniform3iv(this.addr,e),dt(t,e))}function rf(o,e){const t=this.cache;ht(t,e)||(o.uniform4iv(this.addr,e),dt(t,e))}function af(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function of(o,e){const t=this.cache;ht(t,e)||(o.uniform2uiv(this.addr,e),dt(t,e))}function lf(o,e){const t=this.cache;ht(t,e)||(o.uniform3uiv(this.addr,e),dt(t,e))}function cf(o,e){const t=this.cache;ht(t,e)||(o.uniform4uiv(this.addr,e),dt(t,e))}function uf(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Zo,i)}function hf(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jo,i)}function df(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qo,i)}function ff(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$o,i)}function pf(o){switch(o){case 5126:return Yd;case 35664:return Kd;case 35665:return Zd;case 35666:return $d;case 35674:return Jd;case 35675:return Qd;case 35676:return ef;case 5124:case 35670:return tf;case 35667:case 35671:return nf;case 35668:case 35672:return sf;case 35669:case 35673:return rf;case 5125:return af;case 36294:return of;case 36295:return lf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return hf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return ff}}function mf(o,e){o.uniform1fv(this.addr,e)}function gf(o,e){const t=pi(e,this.size,2);o.uniform2fv(this.addr,t)}function _f(o,e){const t=pi(e,this.size,3);o.uniform3fv(this.addr,t)}function xf(o,e){const t=pi(e,this.size,4);o.uniform4fv(this.addr,t)}function vf(o,e){const t=pi(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function yf(o,e){const t=pi(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Mf(o,e){const t=pi(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Sf(o,e){o.uniform1iv(this.addr,e)}function bf(o,e){o.uniform2iv(this.addr,e)}function wf(o,e){o.uniform3iv(this.addr,e)}function Tf(o,e){o.uniform4iv(this.addr,e)}function Ef(o,e){o.uniform1uiv(this.addr,e)}function Af(o,e){o.uniform2uiv(this.addr,e)}function Cf(o,e){o.uniform3uiv(this.addr,e)}function Lf(o,e){o.uniform4uiv(this.addr,e)}function Rf(o,e,t){const n=e.length,i=ys(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Zo,i[s])}function Pf(o,e,t){const n=e.length,i=ys(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Jo,i[s])}function Df(o,e,t){const n=e.length,i=ys(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Qo,i[s])}function If(o,e,t){const n=e.length,i=ys(t,n);o.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||$o,i[s])}function Nf(o){switch(o){case 5126:return mf;case 35664:return gf;case 35665:return _f;case 35666:return xf;case 35674:return vf;case 35675:return yf;case 35676:return Mf;case 5124:case 35670:return Sf;case 35667:case 35671:return bf;case 35668:case 35672:return wf;case 35669:case 35673:return Tf;case 5125:return Ef;case 36294:return Af;case 36295:return Cf;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return If}}class Ff{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=pf(t.type)}}class Of{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Nf(t.type)}}class Uf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function Va(o,e){o.seq.push(e),o.map[e.id]=e}function zf(o,e,t){const n=o.name,i=n.length;for(sr.lastIndex=0;;){const s=sr.exec(n),r=sr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Va(t,c===void 0?new Ff(a,o,e):new Of(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new Uf(a),Va(t,u)),t=u}}}class ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);zf(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Ha(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Bf=0;function kf(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function Gf(o){switch(o){case Cn:return["Linear","( value )"];case Fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Wa(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+kf(o.getShaderSource(e),r)}else return i}function Vf(o,e){const t=Gf(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Hf(o,e){let t;switch(e){case ql:t="Linear";break;case jl:t="Reinhard";break;case Yl:t="OptimizedCineon";break;case Kl:t="ACESFilmic";break;case Zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wf(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function Xf(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qf(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Ai(o){return o!==""}function Xa(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function xr(o){return o.replace(jf,Yf)}function Yf(o,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xr(t)}const Kf=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(o){return o.replace(Zf,el).replace(Kf,$f)}function $f(o,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),el(o,e,t,n)}function el(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ya(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jf(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Do?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Qf(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ii:case si:e="ENVMAP_TYPE_CUBE";break;case _s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ep(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case si:e="ENVMAP_MODE_REFRACTION";break}return e}function tp(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Tr:e="ENVMAP_BLENDING_MULTIPLY";break;case Wl:e="ENVMAP_BLENDING_MIX";break;case Xl:e="ENVMAP_BLENDING_ADD";break}return e}function np(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ip(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=Jf(t),c=Qf(t),h=ep(t),u=tp(t),d=np(t),m=t.isWebGL2?"":Wf(t),g=Xf(s),p=i.createProgram();let f,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Ai).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(Ai).join(`
`),_.length>0&&(_+=`
`)):(f=[Ya(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),_=[m,Ya(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$t?"#define TONE_MAPPING":"",t.toneMapping!==$t?Te.tonemapping_pars_fragment:"",t.toneMapping!==$t?Hf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,Vf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),r=xr(r),r=Xa(r,t),r=qa(r,t),a=xr(a),a=Xa(a,t),a=qa(a,t),r=ja(r),a=ja(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=y+f+r,b=y+_+a,S=Ha(i,35633,w),E=Ha(i,35632,b);if(i.attachShader(p,S),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),o.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),F=i.getShaderInfoLog(S).trim(),I=i.getShaderInfoLog(E).trim();let K=!0,Y=!0;if(i.getProgramParameter(p,35714)===!1){K=!1;const P=Wa(i,S,"vertex"),V=Wa(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+P+`
`+V)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(F===""||I==="")&&(Y=!1);Y&&(this.diagnostics={runnable:K,programLog:A,vertexShader:{log:F,prefix:f},fragmentShader:{log:I,prefix:_}})}i.deleteShader(S),i.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new ps(i,p)),R};let x;return this.getAttributes=function(){return x===void 0&&(x=qf(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Bf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=E,this}let sp=0;class rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new ap(e);t.set(e,n)}return t.get(e)}}class ap{constructor(e){this.id=sp++,this.code=e,this.usedTimes=0}}function op(o,e,t,n,i,s,r){const a=new Ar,l=new rp,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,A,F,I,K){const Y=I.fog,P=K.geometry,V=x.isMeshStandardMaterial?I.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),j=!!z&&z.mapping===_s?z.image.height:null,q=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const O=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,H=O!==void 0?O.length:0;let ee=0;P.morphAttributes.position!==void 0&&(ee=1),P.morphAttributes.normal!==void 0&&(ee=2),P.morphAttributes.color!==void 0&&(ee=3);let J,$,ue,_e;if(q){const ke=Ot[q];J=ke.vertexShader,$=ke.fragmentShader}else J=x.vertexShader,$=x.fragmentShader,l.update(x),ue=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const W=o.getRenderTarget(),Ue=x.alphaTest>0,ge=x.clearcoat>0,xe=x.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:x.type,vertexShader:J,fragmentShader:$,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:W===null?o.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Cn,map:!!x.map,matcap:!!x.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:j,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===gc,tangentSpaceNormalMap:x.normalMapType===xs,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Fe,clearcoat:ge,clearcoatMap:ge&&!!x.clearcoatMap,clearcoatRoughnessMap:ge&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!x.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!x.iridescenceMap,iridescenceThicknessMap:xe&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ei,alphaMap:!!x.alphaMap,alphaTest:Ue,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!P.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Y,useFog:x.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:$t,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===En,flipSided:x.side===Rt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)A.push(F),A.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(_(A,x),y(A,x),A.push(o.outputEncoding)),A.push(x.customProgramCacheKey),A.join()}function _(x,A){x.push(A.precision),x.push(A.outputEncoding),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.combine),x.push(A.vertexUvs),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function y(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),A.fog&&a.enable(33),x.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.morphTargets&&a.enable(4),A.morphNormals&&a.enable(5),A.morphColors&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),A.decodeVideoTexture&&a.enable(22),A.opaque&&a.enable(23),x.push(a.mask)}function w(x){const A=g[x.type];let F;if(A){const I=Ot[A];F=Yc.clone(I.uniforms)}else F=x.uniforms;return F}function b(x,A){let F;for(let I=0,K=c.length;I<K;I++){const Y=c[I];if(Y.cacheKey===A){F=Y,++F.usedTimes;break}}return F===void 0&&(F=new ip(o,A,x,s),c.push(F)),F}function S(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:b,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:R}}function lp(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function cp(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ka(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Za(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,m,g,p,f){let _=o[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:f},o[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=f),e++,_}function a(u,d,m,g,p,f){const _=r(u,d,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(u,d,m,g,p,f){const _=r(u,d,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(u,d){t.length>1&&t.sort(u||cp),n.length>1&&n.sort(d||Ka),i.length>1&&i.sort(d||Ka)}function h(){for(let u=e,d=o.length;u<d;u++){const m=o[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function up(){let o=new WeakMap;function e(n,i){let s;return o.has(n)===!1?(s=new Za,o.set(n,[s])):i>=o.get(n).length?(s=new Za,o.get(n).push(s)):s=o.get(n)[i],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function hp(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new pe};break;case"SpotLight":t={position:new C,direction:new C,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new C,halfWidth:new C,halfHeight:new C};break}return o[e.id]=t,t}}}function dp(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let fp=0;function pp(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function mp(o,e){const t=new hp,n=dp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,r=new Ce,a=new Ce;function l(h,u){let d=0,m=0,g=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,f=0,_=0,y=0,w=0,b=0,S=0,E=0;h.sort(pp);const R=u!==!0?Math.PI:1;for(let A=0,F=h.length;A<F;A++){const I=h[A],K=I.color,Y=I.intensity,P=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=K.r*Y*R,m+=K.g*Y*R,g+=K.b*Y*R;else if(I.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],Y);else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*R),I.castShadow){const j=I.shadow,q=n.get(I);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=I.shadow.matrix,b++}i.directional[p]=z,p++}else if(I.isSpotLight){const z=t.get(I);if(z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(K).multiplyScalar(Y*R),z.distance=P,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,I.castShadow){const j=I.shadow,q=n.get(I);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=V,i.spotShadowMatrix[_]=I.shadow.matrix,E++}i.spot[_]=z,_++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(K).multiplyScalar(Y),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=z,y++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*R),z.distance=I.distance,z.decay=I.decay,I.castShadow){const j=I.shadow,q=n.get(I);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,i.pointShadow[f]=q,i.pointShadowMap[f]=V,i.pointShadowMatrix[f]=I.shadow.matrix,S++}i.point[f]=z,f++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(Y*R),z.groundColor.copy(I.groundColor).multiplyScalar(Y*R),i.hemi[w]=z,w++}}y>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const x=i.hash;(x.directionalLength!==p||x.pointLength!==f||x.spotLength!==_||x.rectAreaLength!==y||x.hemiLength!==w||x.numDirectionalShadows!==b||x.numPointShadows!==S||x.numSpotShadows!==E)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=y,i.point.length=f,i.hemi.length=w,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotShadowMatrix.length=E,x.directionalLength=p,x.pointLength=f,x.spotLength=_,x.rectAreaLength=y,x.hemiLength=w,x.numDirectionalShadows=b,x.numPointShadows=S,x.numSpotShadows=E,i.version=fp++)}function c(h,u){let d=0,m=0,g=0,p=0,f=0;const _=u.matrixWorldInverse;for(let y=0,w=h.length;y<w;y++){const b=h[y];if(b.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),d++}else if(b.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),a.identity(),r.copy(b.matrixWorld),r.premultiply(_),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const S=i.hemi[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:i}}function $a(o,e){const t=new mp(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function gp(o,e){let t=new WeakMap;function n(s,r=0){let a;return t.has(s)===!1?(a=new $a(o,e),t.set(s,[a])):r>=t.get(s).length?(a=new $a(o,e),t.get(s).push(a)):a=t.get(s)[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class _p extends Dt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xp extends Dt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mp(o,e,t){let n=new Cr;const i=new Ae,s=new Ae,r=new ze,a=new _p({depthPacking:mc}),l=new xp,c={},h=t.maxTextureSize,u={0:Rt,1:ni,2:En},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:vp,fragmentShader:yp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new vt;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ct(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do,this.render=function(b,S,E){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const R=o.getRenderTarget(),x=o.getActiveCubeFace(),A=o.getActiveMipmapLevel(),F=o.state;F.setBlending(hn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let I=0,K=b.length;I<K;I++){const Y=b[I],P=Y.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const V=P.getFrameExtents();if(i.multiply(V),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,P.mapSize.y=s.y)),P.map===null){const j=this.type!==Ei?{minFilter:et,magFilter:et}:{};P.map=new Ln(i.x,i.y,j),P.map.texture.name=Y.name+".shadowMap",P.camera.updateProjectionMatrix()}o.setRenderTarget(P.map),o.clear();const z=P.getViewportCount();for(let j=0;j<z;j++){const q=P.getViewport(j);r.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),F.viewport(r),P.updateMatrices(Y,j),n=P.getFrustum(),w(S,E,P.camera,Y,this.type)}P.isPointLightShadow!==!0&&this.type===Ei&&_(P,E),P.needsUpdate=!1}f.needsUpdate=!1,o.setRenderTarget(R,x,A)};function _(b,S){const E=e.update(p);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ln(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(S,null,E,d,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(S,null,E,m,p,null)}function y(b,S,E,R,x,A){let F=null;const I=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0?F=I:F=E.isPointLight===!0?l:a,o.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const K=F.uuid,Y=S.uuid;let P=c[K];P===void 0&&(P={},c[K]=P);let V=P[Y];V===void 0&&(V=F.clone(),P[Y]=V),F=V}return F.visible=S.visible,F.wireframe=S.wireframe,A===Ei?F.side=S.shadowSide!==null?S.shadowSide:S.side:F.side=S.shadowSide!==null?S.shadowSide:u[S.side],F.alphaMap=S.alphaMap,F.alphaTest=S.alphaTest,F.clipShadows=S.clipShadows,F.clippingPlanes=S.clippingPlanes,F.clipIntersection=S.clipIntersection,F.displacementMap=S.displacementMap,F.displacementScale=S.displacementScale,F.displacementBias=S.displacementBias,F.wireframeLinewidth=S.wireframeLinewidth,F.linewidth=S.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(E.matrixWorld),F.nearDistance=R,F.farDistance=x),F}function w(b,S,E,R,x){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ei)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const I=e.update(b),K=b.material;if(Array.isArray(K)){const Y=I.groups;for(let P=0,V=Y.length;P<V;P++){const z=Y[P],j=K[z.materialIndex];if(j&&j.visible){const q=y(b,j,R,E.near,E.far,x);o.renderBufferDirect(E,null,I,q,b,z)}}}else if(K.visible){const Y=y(b,K,R,E.near,E.far,x);o.renderBufferDirect(E,null,I,Y,b,null)}}const F=b.children;for(let I=0,K=F.length;I<K;I++)w(F[I],S,E,R,x)}}function Sp(o,e,t){const n=t.isWebGL2;function i(){let L=!1;const ae=new ze;let k=null;const re=new ze(0,0,0,0);return{setMask:function(ie){k!==ie&&!L&&(o.colorMask(ie,ie,ie,ie),k=ie)},setLocked:function(ie){L=ie},setClear:function(ie,Re,Ze,qe,Jt){Jt===!0&&(ie*=qe,Re*=qe,Ze*=qe),ae.set(ie,Re,Ze,qe),re.equals(ae)===!1&&(o.clearColor(ie,Re,Ze,qe),re.copy(ae))},reset:function(){L=!1,k=null,re.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,k=null,re=null;return{setTest:function(ie){ie?Ue(2929):ge(2929)},setMask:function(ie){ae!==ie&&!L&&(o.depthMask(ie),ae=ie)},setFunc:function(ie){if(k!==ie){if(ie)switch(ie){case Ul:o.depthFunc(512);break;case zl:o.depthFunc(519);break;case Bl:o.depthFunc(513);break;case ur:o.depthFunc(515);break;case kl:o.depthFunc(514);break;case Gl:o.depthFunc(518);break;case Vl:o.depthFunc(516);break;case Hl:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);k=ie}},setLocked:function(ie){L=ie},setClear:function(ie){re!==ie&&(o.clearDepth(ie),re=ie)},reset:function(){L=!1,ae=null,k=null,re=null}}}function r(){let L=!1,ae=null,k=null,re=null,ie=null,Re=null,Ze=null,qe=null,Jt=null;return{setTest:function(Ve){L||(Ve?Ue(2960):ge(2960))},setMask:function(Ve){ae!==Ve&&!L&&(o.stencilMask(Ve),ae=Ve)},setFunc:function(Ve,Bt,yt){(k!==Ve||re!==Bt||ie!==yt)&&(o.stencilFunc(Ve,Bt,yt),k=Ve,re=Bt,ie=yt)},setOp:function(Ve,Bt,yt){(Re!==Ve||Ze!==Bt||qe!==yt)&&(o.stencilOp(Ve,Bt,yt),Re=Ve,Ze=Bt,qe=yt)},setLocked:function(Ve){L=Ve},setClear:function(Ve){Jt!==Ve&&(o.clearStencil(Ve),Jt=Ve)},reset:function(){L=!1,ae=null,k=null,re=null,ie=null,Re=null,Ze=null,qe=null,Jt=null}}}const a=new i,l=new s,c=new r,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,_=!1,y=null,w=null,b=null,S=null,E=null,R=null,x=null,A=!1,F=null,I=null,K=null,Y=null,P=null;const V=o.getParameter(35661);let z=!1,j=0;const q=o.getParameter(7938);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=j>=2);let O=null,H={};const ee=o.getParameter(3088),J=o.getParameter(2978),$=new ze().fromArray(ee),ue=new ze().fromArray(J);function _e(L,ae,k){const re=new Uint8Array(4),ie=o.createTexture();o.bindTexture(L,ie),o.texParameteri(L,10241,9728),o.texParameteri(L,10240,9728);for(let Re=0;Re<k;Re++)o.texImage2D(ae+Re,0,6408,1,1,0,6408,5121,re);return ie}const W={};W[3553]=_e(3553,3553,1),W[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(2929),l.setFunc(ur),rt(!1),It(Gr),Ue(2884),Je(hn);function Ue(L){d[L]!==!0&&(o.enable(L),d[L]=!0)}function ge(L){d[L]!==!1&&(o.disable(L),d[L]=!1)}function xe(L,ae){return m[L]!==ae?(o.bindFramebuffer(L,ae),m[L]=ae,n&&(L===36009&&(m[36160]=ae),L===36160&&(m[36009]=ae)),!0):!1}function le(L,ae){let k=p,re=!1;if(L)if(k=g.get(ae),k===void 0&&(k=[],g.set(ae,k)),L.isWebGLMultipleRenderTargets){const ie=L.texture;if(k.length!==ie.length||k[0]!==36064){for(let Re=0,Ze=ie.length;Re<Ze;Re++)k[Re]=36064+Re;k.length=ie.length,re=!0}}else k[0]!==36064&&(k[0]=36064,re=!0);else k[0]!==1029&&(k[0]=1029,re=!0);re&&(t.isWebGL2?o.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function ke(L){return f!==L?(o.useProgram(L),f=L,!0):!1}const we={[Jn]:32774,[El]:32778,[Al]:32779};if(n)we[Xr]=32775,we[qr]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(we[Xr]=L.MIN_EXT,we[qr]=L.MAX_EXT)}const fe={[Cl]:0,[Ll]:1,[Rl]:768,[Io]:770,[Ol]:776,[Nl]:774,[Dl]:772,[Pl]:769,[No]:771,[Fl]:775,[Il]:773};function Je(L,ae,k,re,ie,Re,Ze,qe){if(L===hn){_===!0&&(ge(3042),_=!1);return}if(_===!1&&(Ue(3042),_=!0),L!==Tl){if(L!==y||qe!==A){if((w!==Jn||E!==Jn)&&(o.blendEquation(32774),w=Jn,E=Jn),qe)switch(L){case ei:o.blendFuncSeparate(1,771,1,771);break;case Vr:o.blendFunc(1,1);break;case Hr:o.blendFuncSeparate(0,769,0,1);break;case Wr:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ei:o.blendFuncSeparate(770,771,1,771);break;case Vr:o.blendFunc(770,1);break;case Hr:o.blendFuncSeparate(0,769,0,1);break;case Wr:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,S=null,R=null,x=null,y=L,A=qe}return}ie=ie||ae,Re=Re||k,Ze=Ze||re,(ae!==w||ie!==E)&&(o.blendEquationSeparate(we[ae],we[ie]),w=ae,E=ie),(k!==b||re!==S||Re!==R||Ze!==x)&&(o.blendFuncSeparate(fe[k],fe[re],fe[Re],fe[Ze]),b=k,S=re,R=Re,x=Ze),y=L,A=null}function mt(L,ae){L.side===En?ge(2884):Ue(2884);let k=L.side===Rt;ae&&(k=!k),rt(k),L.blending===ei&&L.transparent===!1?Je(hn):Je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const re=L.stencilWrite;c.setTest(re),re&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ue(32926):ge(32926)}function rt(L){F!==L&&(L?o.frontFace(2304):o.frontFace(2305),F=L)}function It(L){L!==Ml?(Ue(2884),L!==I&&(L===Gr?o.cullFace(1029):L===Sl?o.cullFace(1028):o.cullFace(1032))):ge(2884),I=L}function Qe(L){L!==K&&(z&&o.lineWidth(L),K=L)}function Be(L,ae,k){L?(Ue(32823),(Y!==ae||P!==k)&&(o.polygonOffset(ae,k),Y=ae,P=k)):ge(32823)}function zt(L){L?Ue(3089):ge(3089)}function Nt(L){L===void 0&&(L=33984+V-1),O!==L&&(o.activeTexture(L),O=L)}function T(L,ae){O===null&&Nt();let k=H[O];k===void 0&&(k={type:void 0,texture:void 0},H[O]=k),(k.type!==L||k.texture!==ae)&&(o.bindTexture(L,ae||W[L]),k.type=L,k.texture=ae)}function v(){const L=H[O];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function G(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){$.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),$.copy(L))}function ce(L){ue.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function Me(L,ae){let k=u.get(ae);k===void 0&&(k=new WeakMap,u.set(ae,k));let re=k.get(L);re===void 0&&(re=o.getUniformBlockIndex(ae,L.name),k.set(L,re))}function De(L,ae){const re=u.get(ae).get(L);h.get(L)!==re&&(o.uniformBlockBinding(ae,re,L.__bindingPointIndex),h.set(L,re))}function Xe(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},O=null,H={},m={},g=new WeakMap,p=[],f=null,_=!1,y=null,w=null,b=null,S=null,E=null,R=null,x=null,A=!1,F=null,I=null,K=null,Y=null,P=null,$.set(0,0,o.canvas.width,o.canvas.height),ue.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:ge,bindFramebuffer:xe,drawBuffers:le,useProgram:ke,setBlending:Je,setMaterial:mt,setFlipSided:rt,setCullFace:It,setLineWidth:Qe,setPolygonOffset:Be,setScissorTest:zt,activeTexture:Nt,bindTexture:T,unbindTexture:v,compressedTexImage2D:G,texImage2D:de,texImage3D:oe,updateUBOMapping:Me,uniformBlockBinding:De,texStorage2D:ve,texStorage3D:B,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:se,scissor:he,viewport:ce,reset:Xe}}function bp(o,e,t,n,i,s,r){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,v){return _?new OffscreenCanvas(T,v):Ii("canvas")}function w(T,v,G,Q){let te=1;if((T.width>Q||T.height>Q)&&(te=Q/Math.max(T.width,T.height)),te<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const se=v?gs:Math.floor,ve=se(te*T.width),B=se(te*T.height);p===void 0&&(p=y(ve,B));const de=G?y(ve,B):p;return de.width=ve,de.height=B,de.getContext("2d").drawImage(T,0,0,ve,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ve+"x"+B+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return _r(T.width)&&_r(T.height)}function S(T){return a?!1:T.wrapS!==bt||T.wrapT!==bt||T.minFilter!==et&&T.minFilter!==ft}function E(T,v){return T.generateMipmaps&&v&&T.minFilter!==et&&T.minFilter!==ft}function R(T){o.generateMipmap(T)}function x(T,v,G,Q,te=!1){if(a===!1)return v;if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=v;return v===6403&&(G===5126&&(se=33326),G===5131&&(se=33325),G===5121&&(se=33321)),v===33319&&(G===5126&&(se=33328),G===5131&&(se=33327),G===5121&&(se=33323)),v===6408&&(G===5126&&(se=34836),G===5131&&(se=34842),G===5121&&(se=Q===Fe&&te===!1?35907:32856),G===32819&&(se=32854),G===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function A(T,v,G){return E(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==et&&T.minFilter!==ft?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function F(T){return T===et||T===fr||T===pr?9728:9729}function I(T){const v=T.target;v.removeEventListener("dispose",I),Y(v),v.isVideoTexture&&g.delete(v)}function K(T){const v=T.target;v.removeEventListener("dispose",K),V(v)}function Y(T){const v=n.get(T);if(v.__webglInit===void 0)return;const G=T.source,Q=f.get(G);if(Q){const te=Q[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(T),Object.keys(Q).length===0&&f.delete(G)}n.remove(T)}function P(T){const v=n.get(T);o.deleteTexture(v.__webglTexture);const G=T.source,Q=f.get(G);delete Q[v.__cacheKey],r.memory.textures--}function V(T){const v=T.texture,G=n.get(T),Q=n.get(v);if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),r.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)o.deleteFramebuffer(G.__webglFramebuffer[te]),G.__webglDepthbuffer&&o.deleteRenderbuffer(G.__webglDepthbuffer[te]);else{if(o.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&o.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&o.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let te=0;te<G.__webglColorRenderbuffer.length;te++)G.__webglColorRenderbuffer[te]&&o.deleteRenderbuffer(G.__webglColorRenderbuffer[te]);G.__webglDepthRenderbuffer&&o.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let te=0,se=v.length;te<se;te++){const ve=n.get(v[te]);ve.__webglTexture&&(o.deleteTexture(ve.__webglTexture),r.memory.textures--),n.remove(v[te])}n.remove(v),n.remove(T)}let z=0;function j(){z=0}function q(){const T=z;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),z+=1,T}function O(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.encoding),v.join()}function H(T,v){const G=n.get(T);if(T.isVideoTexture&&zt(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(G,T,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,G.__webglTexture)}function ee(T,v){const G=n.get(T);if(T.version>0&&G.__version!==T.version){ge(G,T,v);return}t.activeTexture(33984+v),t.bindTexture(35866,G.__webglTexture)}function J(T,v){const G=n.get(T);if(T.version>0&&G.__version!==T.version){ge(G,T,v);return}t.activeTexture(33984+v),t.bindTexture(32879,G.__webglTexture)}function $(T,v){const G=n.get(T);if(T.version>0&&G.__version!==T.version){xe(G,T,v);return}t.activeTexture(33984+v),t.bindTexture(34067,G.__webglTexture)}const ue={[ri]:10497,[bt]:33071,[ms]:33648},_e={[et]:9728,[fr]:9984,[pr]:9986,[ft]:9729,[Oo]:9985,[ui]:9987};function W(T,v,G){if(G?(o.texParameteri(T,10242,ue[v.wrapS]),o.texParameteri(T,10243,ue[v.wrapT]),(T===32879||T===35866)&&o.texParameteri(T,32882,ue[v.wrapR]),o.texParameteri(T,10240,_e[v.magFilter]),o.texParameteri(T,10241,_e[v.minFilter])):(o.texParameteri(T,10242,33071),o.texParameteri(T,10243,33071),(T===32879||T===35866)&&o.texParameteri(T,32882,33071),(v.wrapS!==bt||v.wrapT!==bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(T,10240,F(v.magFilter)),o.texParameteri(T,10241,F(v.minFilter)),v.minFilter!==et&&v.minFilter!==ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.type===un&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Ri&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(o.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Ue(T,v){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",I));const Q=v.source;let te=f.get(Q);te===void 0&&(te={},f.set(Q,te));const se=O(v);if(se!==T.__cacheKey){te[se]===void 0&&(te[se]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,G=!0),te[se].usedTimes++;const ve=te[T.__cacheKey];ve!==void 0&&(te[T.__cacheKey].usedTimes--,ve.usedTimes===0&&P(v)),T.__cacheKey=se,T.__webglTexture=te[se].texture}return G}function ge(T,v,G){let Q=3553;v.isDataArrayTexture&&(Q=35866),v.isData3DTexture&&(Q=32879);const te=Ue(T,v),se=v.source;if(t.activeTexture(33984+G),t.bindTexture(Q,T.__webglTexture),se.version!==se.__currentVersion||te===!0){o.pixelStorei(37440,v.flipY),o.pixelStorei(37441,v.premultiplyAlpha),o.pixelStorei(3317,v.unpackAlignment),o.pixelStorei(37443,0);const ve=S(v)&&b(v.image)===!1;let B=w(v.image,ve,!1,h);B=Nt(v,B);const de=b(B)||a,oe=s.convert(v.format,v.encoding);let he=s.convert(v.type),ce=x(v.internalFormat,oe,he,v.encoding,v.isVideoTexture);W(Q,v,de);let Me;const De=v.mipmaps,Xe=a&&v.isVideoTexture!==!0,L=se.__currentVersion===void 0||te===!0,ae=A(v,B,de);if(v.isDepthTexture)ce=6402,a?v.type===un?ce=36012:v.type===yn?ce=33190:v.type===ti?ce=35056:ce=33189:v.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===bn&&ce===6402&&v.type!==Uo&&v.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=yn,he=s.convert(v.type)),v.format===ai&&ce===6402&&(ce=34041,v.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ti,he=s.convert(v.type))),L&&(Xe?t.texStorage2D(3553,1,ce,B.width,B.height):t.texImage2D(3553,0,ce,B.width,B.height,0,oe,he,null));else if(v.isDataTexture)if(De.length>0&&de){Xe&&L&&t.texStorage2D(3553,ae,ce,De[0].width,De[0].height);for(let k=0,re=De.length;k<re;k++)Me=De[k],Xe?t.texSubImage2D(3553,k,0,0,Me.width,Me.height,oe,he,Me.data):t.texImage2D(3553,k,ce,Me.width,Me.height,0,oe,he,Me.data);v.generateMipmaps=!1}else Xe?(L&&t.texStorage2D(3553,ae,ce,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,oe,he,B.data)):t.texImage2D(3553,0,ce,B.width,B.height,0,oe,he,B.data);else if(v.isCompressedTexture){Xe&&L&&t.texStorage2D(3553,ae,ce,De[0].width,De[0].height);for(let k=0,re=De.length;k<re;k++)Me=De[k],v.format!==Lt?oe!==null?Xe?t.compressedTexSubImage2D(3553,k,0,0,Me.width,Me.height,oe,Me.data):t.compressedTexImage2D(3553,k,ce,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,k,0,0,Me.width,Me.height,oe,he,Me.data):t.texImage2D(3553,k,ce,Me.width,Me.height,0,oe,he,Me.data)}else if(v.isDataArrayTexture)Xe?(L&&t.texStorage3D(35866,ae,ce,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,oe,he,B.data)):t.texImage3D(35866,0,ce,B.width,B.height,B.depth,0,oe,he,B.data);else if(v.isData3DTexture)Xe?(L&&t.texStorage3D(32879,ae,ce,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,oe,he,B.data)):t.texImage3D(32879,0,ce,B.width,B.height,B.depth,0,oe,he,B.data);else if(v.isFramebufferTexture){if(L)if(Xe)t.texStorage2D(3553,ae,ce,B.width,B.height);else{let k=B.width,re=B.height;for(let ie=0;ie<ae;ie++)t.texImage2D(3553,ie,ce,k,re,0,oe,he,null),k>>=1,re>>=1}}else if(De.length>0&&de){Xe&&L&&t.texStorage2D(3553,ae,ce,De[0].width,De[0].height);for(let k=0,re=De.length;k<re;k++)Me=De[k],Xe?t.texSubImage2D(3553,k,0,0,oe,he,Me):t.texImage2D(3553,k,ce,oe,he,Me);v.generateMipmaps=!1}else Xe?(L&&t.texStorage2D(3553,ae,ce,B.width,B.height),t.texSubImage2D(3553,0,0,0,oe,he,B)):t.texImage2D(3553,0,ce,oe,he,B);E(v,de)&&R(Q),se.__currentVersion=se.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function xe(T,v,G){if(v.image.length!==6)return;const Q=Ue(T,v),te=v.source;if(t.activeTexture(33984+G),t.bindTexture(34067,T.__webglTexture),te.version!==te.__currentVersion||Q===!0){o.pixelStorei(37440,v.flipY),o.pixelStorei(37441,v.premultiplyAlpha),o.pixelStorei(3317,v.unpackAlignment),o.pixelStorei(37443,0);const se=v.isCompressedTexture||v.image[0].isCompressedTexture,ve=v.image[0]&&v.image[0].isDataTexture,B=[];for(let k=0;k<6;k++)!se&&!ve?B[k]=w(v.image[k],!1,!0,c):B[k]=ve?v.image[k].image:v.image[k],B[k]=Nt(v,B[k]);const de=B[0],oe=b(de)||a,he=s.convert(v.format,v.encoding),ce=s.convert(v.type),Me=x(v.internalFormat,he,ce,v.encoding),De=a&&v.isVideoTexture!==!0,Xe=te.__currentVersion===void 0||Q===!0;let L=A(v,de,oe);W(34067,v,oe);let ae;if(se){De&&Xe&&t.texStorage2D(34067,L,Me,de.width,de.height);for(let k=0;k<6;k++){ae=B[k].mipmaps;for(let re=0;re<ae.length;re++){const ie=ae[re];v.format!==Lt?he!==null?De?t.compressedTexSubImage2D(34069+k,re,0,0,ie.width,ie.height,he,ie.data):t.compressedTexImage2D(34069+k,re,Me,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+k,re,0,0,ie.width,ie.height,he,ce,ie.data):t.texImage2D(34069+k,re,Me,ie.width,ie.height,0,he,ce,ie.data)}}}else{ae=v.mipmaps,De&&Xe&&(ae.length>0&&L++,t.texStorage2D(34067,L,Me,B[0].width,B[0].height));for(let k=0;k<6;k++)if(ve){De?t.texSubImage2D(34069+k,0,0,0,B[k].width,B[k].height,he,ce,B[k].data):t.texImage2D(34069+k,0,Me,B[k].width,B[k].height,0,he,ce,B[k].data);for(let re=0;re<ae.length;re++){const Re=ae[re].image[k].image;De?t.texSubImage2D(34069+k,re+1,0,0,Re.width,Re.height,he,ce,Re.data):t.texImage2D(34069+k,re+1,Me,Re.width,Re.height,0,he,ce,Re.data)}}else{De?t.texSubImage2D(34069+k,0,0,0,he,ce,B[k]):t.texImage2D(34069+k,0,Me,he,ce,B[k]);for(let re=0;re<ae.length;re++){const ie=ae[re];De?t.texSubImage2D(34069+k,re+1,0,0,he,ce,ie.image[k]):t.texImage2D(34069+k,re+1,Me,he,ce,ie.image[k])}}}E(v,oe)&&R(34067),te.__currentVersion=te.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function le(T,v,G,Q,te){const se=s.convert(G.format,G.encoding),ve=s.convert(G.type),B=x(G.internalFormat,se,ve,G.encoding);n.get(v).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,B,v.width,v.height,v.depth,0,se,ve,null):t.texImage2D(te,0,B,v.width,v.height,0,se,ve,null)),t.bindFramebuffer(36160,T),Be(v)?d.framebufferTexture2DMultisampleEXT(36160,Q,te,n.get(G).__webglTexture,0,Qe(v)):o.framebufferTexture2D(36160,Q,te,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(T,v,G){if(o.bindRenderbuffer(36161,T),v.depthBuffer&&!v.stencilBuffer){let Q=33189;if(G||Be(v)){const te=v.depthTexture;te&&te.isDepthTexture&&(te.type===un?Q=36012:te.type===yn&&(Q=33190));const se=Qe(v);Be(v)?d.renderbufferStorageMultisampleEXT(36161,se,Q,v.width,v.height):o.renderbufferStorageMultisample(36161,se,Q,v.width,v.height)}else o.renderbufferStorage(36161,Q,v.width,v.height);o.framebufferRenderbuffer(36160,36096,36161,T)}else if(v.depthBuffer&&v.stencilBuffer){const Q=Qe(v);G&&Be(v)===!1?o.renderbufferStorageMultisample(36161,Q,35056,v.width,v.height):Be(v)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,v.width,v.height):o.renderbufferStorage(36161,34041,v.width,v.height),o.framebufferRenderbuffer(36160,33306,36161,T)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let te=0;te<Q.length;te++){const se=Q[te],ve=s.convert(se.format,se.encoding),B=s.convert(se.type),de=x(se.internalFormat,ve,B,se.encoding),oe=Qe(v);G&&Be(v)===!1?o.renderbufferStorageMultisample(36161,oe,de,v.width,v.height):Be(v)?d.renderbufferStorageMultisampleEXT(36161,oe,de,v.width,v.height):o.renderbufferStorage(36161,de,v.width,v.height)}}o.bindRenderbuffer(36161,null)}function we(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,te=Qe(v);if(v.depthTexture.format===bn)Be(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,te):o.framebufferTexture2D(36160,36096,3553,Q,0);else if(v.depthTexture.format===ai)Be(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,te):o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function fe(T){const v=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");we(v.__webglFramebuffer,T)}else if(G){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=o.createRenderbuffer(),ke(v.__webglDepthbuffer[Q],T,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=o.createRenderbuffer(),ke(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function Je(T,v,G){const Q=n.get(T);v!==void 0&&le(Q.__webglFramebuffer,T,T.texture,36064,3553),G!==void 0&&fe(T)}function mt(T){const v=T.texture,G=n.get(T),Q=n.get(v);T.addEventListener("dispose",K),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=v.version,r.memory.textures++);const te=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,ve=b(T)||a;if(te){G.__webglFramebuffer=[];for(let B=0;B<6;B++)G.__webglFramebuffer[B]=o.createFramebuffer()}else{if(G.__webglFramebuffer=o.createFramebuffer(),se)if(i.drawBuffers){const B=T.texture;for(let de=0,oe=B.length;de<oe;de++){const he=n.get(B[de]);he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Be(T)===!1){const B=se?v:[v];G.__webglMultisampledFramebuffer=o.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let de=0;de<B.length;de++){const oe=B[de];G.__webglColorRenderbuffer[de]=o.createRenderbuffer(),o.bindRenderbuffer(36161,G.__webglColorRenderbuffer[de]);const he=s.convert(oe.format,oe.encoding),ce=s.convert(oe.type),Me=x(oe.internalFormat,he,ce,oe.encoding),De=Qe(T);o.renderbufferStorageMultisample(36161,De,Me,T.width,T.height),o.framebufferRenderbuffer(36160,36064+de,36161,G.__webglColorRenderbuffer[de])}o.bindRenderbuffer(36161,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,Q.__webglTexture),W(34067,v,ve);for(let B=0;B<6;B++)le(G.__webglFramebuffer[B],T,v,36064,34069+B);E(v,ve)&&R(34067),t.unbindTexture()}else if(se){const B=T.texture;for(let de=0,oe=B.length;de<oe;de++){const he=B[de],ce=n.get(he);t.bindTexture(3553,ce.__webglTexture),W(3553,he,ve),le(G.__webglFramebuffer,T,he,36064+de,3553),E(he,ve)&&R(3553)}t.unbindTexture()}else{let B=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?B=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(B,Q.__webglTexture),W(B,v,ve),le(G.__webglFramebuffer,T,v,36064,B),E(v,ve)&&R(B),t.unbindTexture()}T.depthBuffer&&fe(T)}function rt(T){const v=b(T)||a,G=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,te=G.length;Q<te;Q++){const se=G[Q];if(E(se,v)){const ve=T.isWebGLCubeRenderTarget?34067:3553,B=n.get(se).__webglTexture;t.bindTexture(ve,B),R(ve),t.unbindTexture()}}}function It(T){if(a&&T.samples>0&&Be(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],G=T.width,Q=T.height;let te=16384;const se=[],ve=T.stencilBuffer?33306:36096,B=n.get(T),de=T.isWebGLMultipleRenderTargets===!0;if(de)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,B.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,B.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,B.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){se.push(36064+oe),T.depthBuffer&&se.push(ve);const he=B.__ignoreDepthValues!==void 0?B.__ignoreDepthValues:!1;if(he===!1&&(T.depthBuffer&&(te|=256),T.stencilBuffer&&(te|=1024)),de&&o.framebufferRenderbuffer(36008,36064,36161,B.__webglColorRenderbuffer[oe]),he===!0&&(o.invalidateFramebuffer(36008,[ve]),o.invalidateFramebuffer(36009,[ve])),de){const ce=n.get(v[oe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ce,0)}o.blitFramebuffer(0,0,G,Q,0,0,G,Q,te,9728),m&&o.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),de)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,B.__webglColorRenderbuffer[oe]);const he=n.get(v[oe]).__webglTexture;t.bindFramebuffer(36160,B.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,he,0)}t.bindFramebuffer(36009,B.__webglMultisampledFramebuffer)}}function Qe(T){return Math.min(u,T.samples)}function Be(T){const v=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function zt(T){const v=r.render.frame;g.get(T)!==v&&(g.set(T,v),T.update())}function Nt(T,v){const G=T.encoding,Q=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===gr||G!==Cn&&(G===Fe?a===!1?e.has("EXT_sRGB")===!0&&Q===Lt?(T.format=gr,T.minFilter=ft,T.generateMipmaps=!1):v=Vo.sRGBToLinear(v):(Q!==Lt||te!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),v}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.setTexture2D=H,this.setTexture2DArray=ee,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=Je,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Be}function wp(o,e,t){const n=t.isWebGL2;function i(s,r=null){let a;if(s===An)return 5121;if(s===ec)return 32819;if(s===tc)return 32820;if(s===$l)return 5120;if(s===Jl)return 5122;if(s===Uo)return 5123;if(s===Ql)return 5124;if(s===yn)return 5125;if(s===un)return 5126;if(s===Ri)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===nc)return 6406;if(s===Lt)return 6408;if(s===sc)return 6409;if(s===rc)return 6410;if(s===bn)return 6402;if(s===ai)return 34041;if(s===ac)return 6403;if(s===ic)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===gr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===oc)return 36244;if(s===lc)return 33319;if(s===cc)return 33320;if(s===uc)return 36249;if(s===Cs||s===Ls||s===Rs||s===Ps)if(r===Fe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ls)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jr||s===Yr||s===Kr||s===Zr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$r||s===Jr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$r)return r===Fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jr)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qr||s===ea||s===ta||s===na||s===ia||s===sa||s===ra||s===aa||s===oa||s===la||s===ca||s===ua||s===ha||s===da)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Qr)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ea)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ta)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===na)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ia)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sa)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ra)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===aa)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===oa)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===la)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ca)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ua)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ha)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===da)return r===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===fa)return r===Fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ti?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class Tp extends it{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sn extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ep={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const y=new Sn;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[p.jointName]=y,c.add(y)}const _=c.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ep)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class Ap extends ut{constructor(e,t,n,i,s,r,a,l,c,h){if(h=h!==void 0?h:bn,h!==bn&&h!==ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bn&&(n=yn),n===void 0&&h===ai&&(n=ti),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:et,this.minFilter=l!==void 0?l:et,this.flipY=!1,this.generateMipmaps=!1}}class Cp extends hi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,m=null;const g=t.getContextAttributes();let p=null,f=null;const _=[],y=[],w=new it;w.layers.enable(1),w.viewport=new ze;const b=new it;b.layers.enable(2),b.viewport=new ze;const S=[w,b],E=new Tp;E.layers.enable(1),E.layers.enable(2);let R=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let H=_[O];return H===void 0&&(H=new rr,_[O]=H),H.getTargetRaySpace()},this.getControllerGrip=function(O){let H=_[O];return H===void 0&&(H=new rr,_[O]=H),H.getGripSpace()},this.getHand=function(O){let H=_[O];return H===void 0&&(H=new rr,_[O]=H),H.getHandSpace()};function A(O){const H=y.indexOf(O.inputSource);if(H===-1)return;const ee=_[H];ee!==void 0&&ee.dispatchEvent({type:O.type,data:O.inputSource})}function F(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",I);for(let O=0;O<_.length;O++){const H=y[O];H!==null&&(y[O]=null,_[O].disconnect(H))}R=null,x=null,e.setRenderTarget(p),d=null,u=null,h=null,i=null,f=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",F),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:d}),f=new Ln(d.framebufferWidth,d.framebufferHeight,{format:Lt,type:An,encoding:e.outputEncoding})}else{let H=null,ee=null,J=null;g.depth&&(J=g.stencil?35056:33190,H=g.stencil?ai:bn,ee=g.stencil?ti:yn);const $={colorFormat:32856,depthFormat:J,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer($),i.updateRenderState({layers:[u]}),f=new Ln(u.textureWidth,u.textureHeight,{format:Lt,type:An,depthTexture:new Ap(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ue=e.properties.get(f);ue.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(O){for(let H=0;H<O.removed.length;H++){const ee=O.removed[H],J=y.indexOf(ee);J>=0&&(y[J]=null,_[J].dispatchEvent({type:"disconnected",data:ee}))}for(let H=0;H<O.added.length;H++){const ee=O.added[H];let J=y.indexOf(ee);if(J===-1){for(let ue=0;ue<_.length;ue++)if(ue>=y.length){y.push(ee),J=ue;break}else if(y[ue]===null){y[ue]=ee,J=ue;break}if(J===-1)break}const $=_[J];$&&$.dispatchEvent({type:"connected",data:ee})}}const K=new C,Y=new C;function P(O,H,ee){K.setFromMatrixPosition(H.matrixWorld),Y.setFromMatrixPosition(ee.matrixWorld);const J=K.distanceTo(Y),$=H.projectionMatrix.elements,ue=ee.projectionMatrix.elements,_e=$[14]/($[10]-1),W=$[14]/($[10]+1),Ue=($[9]+1)/$[5],ge=($[9]-1)/$[5],xe=($[8]-1)/$[0],le=(ue[8]+1)/ue[0],ke=_e*xe,we=_e*le,fe=J/(-xe+le),Je=fe*-xe;H.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Je),O.translateZ(fe),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const mt=_e+fe,rt=W+fe,It=ke-Je,Qe=we+(J-Je),Be=Ue*W/rt*mt,zt=ge*W/rt*mt;O.projectionMatrix.makePerspective(It,Qe,Be,zt,mt,rt)}function V(O,H){H===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(H.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;E.near=b.near=w.near=O.near,E.far=b.far=w.far=O.far,(R!==E.near||x!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,x=E.far);const H=O.parent,ee=E.cameras;V(E,H);for(let $=0;$<ee.length;$++)V(ee[$],H);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),O.position.copy(E.position),O.quaternion.copy(E.quaternion),O.scale.copy(E.scale),O.matrix.copy(E.matrix),O.matrixWorld.copy(E.matrixWorld);const J=O.children;for(let $=0,ue=J.length;$<ue;$++)J[$].updateMatrixWorld(!0);ee.length===2?P(E,w,b):E.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(O){u!==null&&(u.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let z=null;function j(O,H){if(c=H.getViewerPose(l||r),m=H,c!==null){const ee=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let J=!1;ee.length!==E.cameras.length&&(E.cameras.length=0,J=!0);for(let $=0;$<ee.length;$++){const ue=ee[$];let _e=null;if(d!==null)_e=d.getViewport(ue);else{const Ue=h.getViewSubImage(u,ue);_e=Ue.viewport,$===0&&(e.setRenderTargetTextures(f,Ue.colorTexture,u.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(f))}let W=S[$];W===void 0&&(W=new it,W.layers.enable($),W.viewport=new ze,S[$]=W),W.matrix.fromArray(ue.transform.matrix),W.projectionMatrix.fromArray(ue.projectionMatrix),W.viewport.set(_e.x,_e.y,_e.width,_e.height),$===0&&E.matrix.copy(W.matrix),J===!0&&E.cameras.push(W)}}for(let ee=0;ee<_.length;ee++){const J=y[ee],$=_[ee];J!==null&&$!==void 0&&$.update(J,H,l||r)}z&&z(O,H),m=null}const q=new Ko;q.setAnimationLoop(j),this.setAnimationLoop=function(O){z=O},this.dispose=function(){}}}function Lp(o,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,y,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,w)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&r(p,f)):f.isPointsMaterial?a(p,f,_,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Rt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Rt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const b=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.iridescenceMap?y=f.iridescenceMap:f.iridescenceThicknessMap?y=f.iridescenceThicknessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let w;f.aoMap?w=f.aoMap:f.lightMap&&(w=f.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function r(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,_,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=y*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w;f.map?w=f.map:f.alphaMap&&(w=f.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Rt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Rp(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(y,w){const b=w.program;n.uniformBlockBinding(y,b)}function c(y,w){let b=i[y.id];b===void 0&&(g(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",f));const S=w.program;n.updateUBOMapping(y,S);const E=e.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function h(y){const w=u();y.__bindingPointIndex=w;const b=o.createBuffer(),S=y.__size,E=y.usage;return o.bindBuffer(35345,b),o.bufferData(35345,S,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,w,b),b}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const w=i[y.id],b=y.uniforms,S=y.__cache;o.bindBuffer(35345,w);for(let E=0,R=b.length;E<R;E++){const x=b[E];if(m(x,E,S)===!0){const A=x.value,F=x.__offset;typeof A=="number"?(x.__data[0]=A,o.bufferSubData(35345,F,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):A.toArray(x.__data),o.bufferSubData(35345,F,x.__data))}}o.bindBuffer(35345,null)}function m(y,w,b){const S=y.value;if(b[w]===void 0)return typeof S=="number"?b[w]=S:b[w]=S.clone(),!0;if(typeof S=="number"){if(b[w]!==S)return b[w]=S,!0}else{const E=b[w];if(E.equals(S)===!1)return E.copy(S),!0}return!1}function g(y){const w=y.uniforms;let b=0;const S=16;let E=0;for(let R=0,x=w.length;R<x;R++){const A=w[R],F=p(A);if(A.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,R>0){E=b%S;const I=S-E;E!==0&&I-F.boundary<0&&(b+=S-E,A.__offset=b)}b+=F.storage}return E=b%S,E>0&&(b+=S-E),y.__size=b,y.__cache={},this}function p(y){const w=y.value,b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function f(y){const w=y.target;w.removeEventListener("dispose",f);const b=r.indexOf(w.__bindingPointIndex);r.splice(b,1),o.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const y in i)o.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Pp(){const o=Ii("canvas");return o.style.display="block",o}function tl(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Pp(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,r=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Cn,this.physicallyCorrectLights=!1,this.toneMapping=$t,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,_=0,y=0,w=null,b=-1,S=null;const E=new ze,R=new ze;let x=null,A=e.width,F=e.height,I=1,K=null,Y=null;const P=new ze(0,0,A,F),V=new ze(0,0,A,F);let z=!1;const j=new Cr;let q=!1,O=!1,H=null;const ee=new Ce,J=new Ae,$=new C,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return w===null?I:1}let W=t;function Ue(M,D){for(let U=0;U<M.length;U++){const N=M[U],X=e.getContext(N,D);if(X!==null)return X}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wr}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),W===null){const D=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&D.shift(),W=Ue(D,M),W===null)throw Ue(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ge,xe,le,ke,we,fe,Je,mt,rt,It,Qe,Be,zt,Nt,T,v,G,Q,te,se,ve,B,de,oe;function he(){ge=new kd(W),xe=new Nd(W,ge,o),ge.init(xe),B=new wp(W,ge,xe),le=new Sp(W,ge,xe),ke=new Hd,we=new lp,fe=new bp(W,ge,le,we,xe,B,ke),Je=new Od(p),mt=new Bd(p),rt=new tu(W,xe),de=new Dd(W,ge,rt,xe),It=new Gd(W,rt,ke,de),Qe=new jd(W,It,rt,ke),te=new qd(W,xe,fe),v=new Fd(we),Be=new op(p,Je,mt,ge,xe,de,v),zt=new Lp(p,we),Nt=new up,T=new gp(ge,xe),Q=new Pd(p,Je,le,Qe,h,r),G=new Mp(p,Qe,xe),oe=new Rp(W,ke,xe,le),se=new Id(W,ge,ke,xe),ve=new Vd(W,ge,ke,xe),ke.programs=Be.programs,p.capabilities=xe,p.extensions=ge,p.properties=we,p.renderLists=Nt,p.shadowMap=G,p.state=le,p.info=ke}he();const ce=new Cp(p,W);this.xr=ce,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const M=ge.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ge.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(M){M!==void 0&&(I=M,this.setSize(A,F,!1))},this.getSize=function(M){return M.set(A,F)},this.setSize=function(M,D,U){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=M,F=D,e.width=Math.floor(M*I),e.height=Math.floor(D*I),U!==!1&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(A*I,F*I).floor()},this.setDrawingBufferSize=function(M,D,U){A=M,F=D,I=U,e.width=Math.floor(M*U),e.height=Math.floor(D*U),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(P)},this.setViewport=function(M,D,U,N){M.isVector4?P.set(M.x,M.y,M.z,M.w):P.set(M,D,U,N),le.viewport(E.copy(P).multiplyScalar(I).floor())},this.getScissor=function(M){return M.copy(V)},this.setScissor=function(M,D,U,N){M.isVector4?V.set(M.x,M.y,M.z,M.w):V.set(M,D,U,N),le.scissor(R.copy(V).multiplyScalar(I).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(M){le.setScissorTest(z=M)},this.setOpaqueSort=function(M){K=M},this.setTransparentSort=function(M){Y=M},this.getClearColor=function(M){return M.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(M=!0,D=!0,U=!0){let N=0;M&&(N|=16384),D&&(N|=256),U&&(N|=1024),W.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),Nt.dispose(),T.dispose(),we.dispose(),Je.dispose(),mt.dispose(),Qe.dispose(),de.dispose(),oe.dispose(),Be.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Re),ce.removeEventListener("sessionend",Ze),H&&(H.dispose(),H=null),qe.stop()};function Me(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const M=ke.autoReset,D=G.enabled,U=G.autoUpdate,N=G.needsUpdate,X=G.type;he(),ke.autoReset=M,G.enabled=D,G.autoUpdate=U,G.needsUpdate=N,G.type=X}function Xe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function L(M){const D=M.target;D.removeEventListener("dispose",L),ae(D)}function ae(M){k(M),we.remove(M)}function k(M){const D=we.get(M).programs;D!==void 0&&(D.forEach(function(U){Be.releaseProgram(U)}),M.isShaderMaterial&&Be.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,U,N,X,me){D===null&&(D=ue);const ye=X.isMesh&&X.matrixWorld.determinant()<0,be=gl(M,D,U,N,X);le.setMaterial(N,ye);let Se=U.index;const Ne=U.attributes.position;if(Se===null){if(Ne===void 0||Ne.count===0)return}else if(Se.count===0)return;let Le=1;N.wireframe===!0&&(Se=It.getWireframeAttribute(U),Le=2),de.setup(X,N,be,U,Se);let Pe,He=se;Se!==null&&(Pe=rt.get(Se),He=ve,He.setIndex(Pe));const dn=Se!==null?Se.count:Ne.count,Fn=U.drawRange.start*Le,On=U.drawRange.count*Le,Ft=me!==null?me.start*Le:0,Ie=me!==null?me.count*Le:1/0,Un=Math.max(Fn,Ft),je=Math.min(dn,Fn+On,Ft+Ie)-1,Mt=Math.max(0,je-Un+1);if(Mt!==0){if(X.isMesh)N.wireframe===!0?(le.setLineWidth(N.wireframeLinewidth*_e()),He.setMode(1)):He.setMode(4);else if(X.isLine){let Qt=N.linewidth;Qt===void 0&&(Qt=1),le.setLineWidth(Qt*_e()),X.isLineSegments?He.setMode(1):X.isLineLoop?He.setMode(2):He.setMode(3)}else X.isPoints?He.setMode(0):X.isSprite&&He.setMode(4);if(X.isInstancedMesh)He.renderInstances(Un,Mt,X.count);else if(U.isInstancedBufferGeometry){const Qt=Math.min(U.instanceCount,U._maxInstanceCount);He.renderInstances(Un,Mt,Qt)}else He.render(Un,Mt)}},this.compile=function(M,D){d=T.get(M),d.init(),g.push(d),M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(p.physicallyCorrectLights),M.traverse(function(U){const N=U.material;if(N)if(Array.isArray(N))for(let X=0;X<N.length;X++){const me=N[X];ws(me,M,U)}else ws(N,M,U)}),g.pop(),d=null};let re=null;function ie(M){re&&re(M)}function Re(){qe.stop()}function Ze(){qe.start()}const qe=new Ko;qe.setAnimationLoop(ie),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(M){re=M,ce.setAnimationLoop(M),M===null?qe.stop():qe.start()},ce.addEventListener("sessionstart",Re),ce.addEventListener("sessionend",Ze),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(D),D=ce.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,D,w),d=T.get(M,g.length),d.init(),g.push(d),ee.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),j.setFromProjectionMatrix(ee),O=this.localClippingEnabled,q=v.init(this.clippingPlanes,O,D),u=Nt.get(M,m.length),u.init(),m.push(u),Jt(M,D,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(K,Y),q===!0&&v.beginShadows();const U=d.state.shadowsArray;if(G.render(U,M,D),q===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(u,M),d.setupLights(p.physicallyCorrectLights),D.isArrayCamera){const N=D.cameras;for(let X=0,me=N.length;X<me;X++){const ye=N[X];Ve(u,M,ye,ye.viewport)}}else Ve(u,M,D);w!==null&&(fe.updateMultisampleRenderTarget(w),fe.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(p,M,D),de.resetDefaultState(),b=-1,S=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function Jt(M,D,U,N){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){N&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ee);const ye=Qe.update(M),be=M.material;be.visible&&u.push(M,ye,be,U,$.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==ke.render.frame&&(M.skeleton.update(),M.skeleton.frame=ke.render.frame),!M.frustumCulled||j.intersectsObject(M))){N&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ee);const ye=Qe.update(M),be=M.material;if(Array.isArray(be)){const Se=ye.groups;for(let Ne=0,Le=Se.length;Ne<Le;Ne++){const Pe=Se[Ne],He=be[Pe.materialIndex];He&&He.visible&&u.push(M,ye,He,U,$.z,Pe)}}else be.visible&&u.push(M,ye,be,U,$.z,null)}}const me=M.children;for(let ye=0,be=me.length;ye<be;ye++)Jt(me[ye],D,U,N)}function Ve(M,D,U,N){const X=M.opaque,me=M.transmissive,ye=M.transparent;d.setupLightsView(U),me.length>0&&Bt(X,D,U),N&&le.viewport(E.copy(N)),X.length>0&&yt(X,D,U),me.length>0&&yt(me,D,U),ye.length>0&&yt(ye,D,U),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Bt(M,D,U){const N=xe.isWebGL2;H===null&&(H=new Ln(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Ri:An,minFilter:ui,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(J),N?H.setSize(J.x,J.y):H.setSize(gs(J.x),gs(J.y));const X=p.getRenderTarget();p.setRenderTarget(H),p.clear();const me=p.toneMapping;p.toneMapping=$t,yt(M,D,U),p.toneMapping=me,fe.updateMultisampleRenderTarget(H),fe.updateRenderTargetMipmap(H),p.setRenderTarget(X)}function yt(M,D,U){const N=D.isScene===!0?D.overrideMaterial:null;for(let X=0,me=M.length;X<me;X++){const ye=M[X],be=ye.object,Se=ye.geometry,Ne=N===null?ye.material:N,Le=ye.group;be.layers.test(U.layers)&&ml(be,D,U,Se,Ne,Le)}}function ml(M,D,U,N,X,me){M.onBeforeRender(p,D,U,N,X,me),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(p,D,U,N,M,me),X.transparent===!0&&X.side===En?(X.side=Rt,X.needsUpdate=!0,p.renderBufferDirect(U,D,N,X,M,me),X.side=ni,X.needsUpdate=!0,p.renderBufferDirect(U,D,N,X,M,me),X.side=En):p.renderBufferDirect(U,D,N,X,M,me),M.onAfterRender(p,D,U,N,X,me)}function ws(M,D,U){D.isScene!==!0&&(D=ue);const N=we.get(M),X=d.state.lights,me=d.state.shadowsArray,ye=X.state.version,be=Be.getParameters(M,X.state,me,D,U),Se=Be.getProgramCacheKey(be);let Ne=N.programs;N.environment=M.isMeshStandardMaterial?D.environment:null,N.fog=D.fog,N.envMap=(M.isMeshStandardMaterial?mt:Je).get(M.envMap||N.environment),Ne===void 0&&(M.addEventListener("dispose",L),Ne=new Map,N.programs=Ne);let Le=Ne.get(Se);if(Le!==void 0){if(N.currentProgram===Le&&N.lightsStateVersion===ye)return Br(M,be),Le}else be.uniforms=Be.getUniforms(M),M.onBuild(U,be,p),M.onBeforeCompile(be,p),Le=Be.acquireProgram(be,Se),Ne.set(Se,Le),N.uniforms=be.uniforms;const Pe=N.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=v.uniform),Br(M,be),N.needsLights=xl(M),N.lightsStateVersion=ye,N.needsLights&&(Pe.ambientLightColor.value=X.state.ambient,Pe.lightProbe.value=X.state.probe,Pe.directionalLights.value=X.state.directional,Pe.directionalLightShadows.value=X.state.directionalShadow,Pe.spotLights.value=X.state.spot,Pe.spotLightShadows.value=X.state.spotShadow,Pe.rectAreaLights.value=X.state.rectArea,Pe.ltc_1.value=X.state.rectAreaLTC1,Pe.ltc_2.value=X.state.rectAreaLTC2,Pe.pointLights.value=X.state.point,Pe.pointLightShadows.value=X.state.pointShadow,Pe.hemisphereLights.value=X.state.hemi,Pe.directionalShadowMap.value=X.state.directionalShadowMap,Pe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pe.spotShadowMap.value=X.state.spotShadowMap,Pe.spotShadowMatrix.value=X.state.spotShadowMatrix,Pe.pointShadowMap.value=X.state.pointShadowMap,Pe.pointShadowMatrix.value=X.state.pointShadowMatrix);const He=Le.getUniforms(),dn=ps.seqWithValue(He.seq,Pe);return N.currentProgram=Le,N.uniformsList=dn,Le}function Br(M,D){const U=we.get(M);U.outputEncoding=D.outputEncoding,U.instancing=D.instancing,U.skinning=D.skinning,U.morphTargets=D.morphTargets,U.morphNormals=D.morphNormals,U.morphColors=D.morphColors,U.morphTargetsCount=D.morphTargetsCount,U.numClippingPlanes=D.numClippingPlanes,U.numIntersection=D.numClipIntersection,U.vertexAlphas=D.vertexAlphas,U.vertexTangents=D.vertexTangents,U.toneMapping=D.toneMapping}function gl(M,D,U,N,X){D.isScene!==!0&&(D=ue),fe.resetTextureUnits();const me=D.fog,ye=N.isMeshStandardMaterial?D.environment:null,be=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Cn,Se=(N.isMeshStandardMaterial?mt:Je).get(N.envMap||ye),Ne=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Le=!!N.normalMap&&!!U.attributes.tangent,Pe=!!U.morphAttributes.position,He=!!U.morphAttributes.normal,dn=!!U.morphAttributes.color,Fn=N.toneMapped?p.toneMapping:$t,On=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ft=On!==void 0?On.length:0,Ie=we.get(N),Un=d.state.lights;if(q===!0&&(O===!0||M!==S)){const gt=M===S&&N.id===b;v.setState(N,M,gt)}let je=!1;N.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Un.state.version||Ie.outputEncoding!==be||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Se||N.fog===!0&&Ie.fog!==me||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==v.numPlanes||Ie.numIntersection!==v.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==Le||Ie.morphTargets!==Pe||Ie.morphNormals!==He||Ie.morphColors!==dn||Ie.toneMapping!==Fn||xe.isWebGL2===!0&&Ie.morphTargetsCount!==Ft)&&(je=!0):(je=!0,Ie.__version=N.version);let Mt=Ie.currentProgram;je===!0&&(Mt=ws(N,D,X));let Qt=!1,_i=!1,Ts=!1;const at=Mt.getUniforms(),xi=Ie.uniforms;if(le.useProgram(Mt.program)&&(Qt=!0,_i=!0,Ts=!0),N.id!==b&&(b=N.id,_i=!0),Qt||S!==M){if(at.setValue(W,"projectionMatrix",M.projectionMatrix),xe.logarithmicDepthBuffer&&at.setValue(W,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),S!==M&&(S=M,_i=!0,Ts=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const gt=at.map.cameraPosition;gt!==void 0&&gt.setValue(W,$.setFromMatrixPosition(M.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&at.setValue(W,"isOrthographic",M.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||X.isSkinnedMesh)&&at.setValue(W,"viewMatrix",M.matrixWorldInverse)}if(X.isSkinnedMesh){at.setOptional(W,X,"bindMatrix"),at.setOptional(W,X,"bindMatrixInverse");const gt=X.skeleton;gt&&(xe.floatVertexTextures?(gt.boneTexture===null&&gt.computeBoneTexture(),at.setValue(W,"boneTexture",gt.boneTexture,fe),at.setValue(W,"boneTextureSize",gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Es=U.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&xe.isWebGL2===!0)&&te.update(X,U,N,Mt),(_i||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,at.setValue(W,"receiveShadow",X.receiveShadow)),_i&&(at.setValue(W,"toneMappingExposure",p.toneMappingExposure),Ie.needsLights&&_l(xi,Ts),me&&N.fog===!0&&zt.refreshFogUniforms(xi,me),zt.refreshMaterialUniforms(xi,N,I,F,H),ps.upload(W,Ie.uniformsList,xi,fe)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ps.upload(W,Ie.uniformsList,xi,fe),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&at.setValue(W,"center",X.center),at.setValue(W,"modelViewMatrix",X.modelViewMatrix),at.setValue(W,"normalMatrix",X.normalMatrix),at.setValue(W,"modelMatrix",X.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const gt=N.uniformsGroups;for(let As=0,vl=gt.length;As<vl;As++)if(xe.isWebGL2){const kr=gt[As];oe.update(kr,Mt),oe.bind(kr,Mt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mt}function _l(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function xl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,D,U){we.get(M.texture).__webglTexture=D,we.get(M.depthTexture).__webglTexture=U;const N=we.get(M);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const U=we.get(M);U.__webglFramebuffer=D,U.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,U=0){w=M,_=D,y=U;let N=!0;if(M){const Se=we.get(M);Se.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),N=!1):Se.__webglFramebuffer===void 0?fe.setupRenderTarget(M):Se.__hasExternalTextures&&fe.rebindTextures(M,we.get(M.texture).__webglTexture,we.get(M.depthTexture).__webglTexture)}let X=null,me=!1,ye=!1;if(M){const Se=M.texture;(Se.isData3DTexture||Se.isDataArrayTexture)&&(ye=!0);const Ne=we.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(X=Ne[D],me=!0):xe.isWebGL2&&M.samples>0&&fe.useMultisampledRTT(M)===!1?X=we.get(M).__webglMultisampledFramebuffer:X=Ne,E.copy(M.viewport),R.copy(M.scissor),x=M.scissorTest}else E.copy(P).multiplyScalar(I).floor(),R.copy(V).multiplyScalar(I).floor(),x=z;if(le.bindFramebuffer(36160,X)&&xe.drawBuffers&&N&&le.drawBuffers(M,X),le.viewport(E),le.scissor(R),le.setScissorTest(x),me){const Se=we.get(M.texture);W.framebufferTexture2D(36160,36064,34069+D,Se.__webglTexture,U)}else if(ye){const Se=we.get(M.texture),Ne=D||0;W.framebufferTextureLayer(36160,36064,Se.__webglTexture,U||0,Ne)}b=-1},this.readRenderTargetPixels=function(M,D,U,N,X,me,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){le.bindFramebuffer(36160,be);try{const Se=M.texture,Ne=Se.format,Le=Se.type;if(Ne!==Lt&&B.convert(Ne)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Le===Ri&&(ge.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Le!==An&&B.convert(Le)!==W.getParameter(35738)&&!(Le===un&&(xe.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-N&&U>=0&&U<=M.height-X&&W.readPixels(D,U,N,X,B.convert(Ne),B.convert(Le),me)}finally{const Se=w!==null?we.get(w).__webglFramebuffer:null;le.bindFramebuffer(36160,Se)}}},this.copyFramebufferToTexture=function(M,D,U=0){const N=Math.pow(2,-U),X=Math.floor(D.image.width*N),me=Math.floor(D.image.height*N);fe.setTexture2D(D,0),W.copyTexSubImage2D(3553,U,0,0,M.x,M.y,X,me),le.unbindTexture()},this.copyTextureToTexture=function(M,D,U,N=0){const X=D.image.width,me=D.image.height,ye=B.convert(U.format),be=B.convert(U.type);fe.setTexture2D(U,0),W.pixelStorei(37440,U.flipY),W.pixelStorei(37441,U.premultiplyAlpha),W.pixelStorei(3317,U.unpackAlignment),D.isDataTexture?W.texSubImage2D(3553,N,M.x,M.y,X,me,ye,be,D.image.data):D.isCompressedTexture?W.compressedTexSubImage2D(3553,N,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,ye,D.mipmaps[0].data):W.texSubImage2D(3553,N,M.x,M.y,ye,be,D.image),N===0&&U.generateMipmaps&&W.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(M,D,U,N,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=M.max.x-M.min.x+1,ye=M.max.y-M.min.y+1,be=M.max.z-M.min.z+1,Se=B.convert(N.format),Ne=B.convert(N.type);let Le;if(N.isData3DTexture)fe.setTexture3D(N,0),Le=32879;else if(N.isDataArrayTexture)fe.setTexture2DArray(N,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,N.flipY),W.pixelStorei(37441,N.premultiplyAlpha),W.pixelStorei(3317,N.unpackAlignment);const Pe=W.getParameter(3314),He=W.getParameter(32878),dn=W.getParameter(3316),Fn=W.getParameter(3315),On=W.getParameter(32877),Ft=U.isCompressedTexture?U.mipmaps[0]:U.image;W.pixelStorei(3314,Ft.width),W.pixelStorei(32878,Ft.height),W.pixelStorei(3316,M.min.x),W.pixelStorei(3315,M.min.y),W.pixelStorei(32877,M.min.z),U.isDataTexture||U.isData3DTexture?W.texSubImage3D(Le,X,D.x,D.y,D.z,me,ye,be,Se,Ne,Ft.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Le,X,D.x,D.y,D.z,me,ye,be,Se,Ft.data)):W.texSubImage3D(Le,X,D.x,D.y,D.z,me,ye,be,Se,Ne,Ft),W.pixelStorei(3314,Pe),W.pixelStorei(32878,He),W.pixelStorei(3316,dn),W.pixelStorei(3315,Fn),W.pixelStorei(32877,On),X===0&&N.generateMipmaps&&W.generateMipmap(Le),le.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?fe.setTextureCube(M,0):M.isData3DTexture?fe.setTexture3D(M,0):M.isDataArrayTexture?fe.setTexture2DArray(M,0):fe.setTexture2D(M,0),le.unbindTexture()},this.resetState=function(){_=0,y=0,w=null,le.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Dp extends tl{}Dp.prototype.isWebGL1Renderer=!0;class Ip extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Np{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Pt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ot=new C;class Dr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ja=new C,Qa=new ze,eo=new ze,Fp=new C,to=new Ce;class Op extends ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Qa.fromBufferAttribute(i.attributes.skinIndex,e),eo.fromBufferAttribute(i.attributes.skinWeight,e),Ja.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=eo.getComponent(s);if(r!==0){const a=Qa.getComponent(s);to.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Fp.copy(Ja).applyMatrix4(to),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nl extends Ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Up extends ut{constructor(e=null,t=1,n=1,i,s,r,a,l,c=et,h=et,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const no=new Ce,zp=new Ce;class Ir{constructor(e=[],t=[]){this.uuid=Pt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:zp;no.multiplyMatrices(a,t[s]),no.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ir(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Bo(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Up(t,e,e,Lt,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new nl),this.bones.push(r),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class io extends pt{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new Ce,ro=new Ce,os=[],Si=new ct;class Bp extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new io(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Si.geometry=this.geometry,Si.material=this.material,Si.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,so),ro.multiplyMatrices(n,so),Si.matrixWorld=ro,Si.raycast(e,os);for(let r=0,a=os.length;r<a;r++){const l=os[r];l.instanceId=s,l.object=this,t.push(l)}os.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new io(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends Dt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ao=new C,oo=new C,lo=new Ce,ar=new vs,ls=new fi;class Ms extends Ge{constructor(e=new vt,t=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ao.fromBufferAttribute(t,i-1),oo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ao.distanceTo(oo);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=s,e.ray.intersectsSphere(ls)===!1)return;lo.copy(i).invert(),ar.copy(e.ray).applyMatrix4(lo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,d=new C,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let w=_,b=y-1;w<b;w+=m){const S=g.getX(w),E=g.getX(w+1);if(c.fromBufferAttribute(f,S),h.fromBufferAttribute(f,E),ar.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),y=Math.min(f.count,r.start+r.count);for(let w=_,b=y-1;w<b;w+=m){if(c.fromBufferAttribute(f,w),h.fromBufferAttribute(f,w+1),ar.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const co=new C,uo=new C;class kp extends Ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)co.fromBufferAttribute(t,i),uo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+co.distanceTo(uo);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gp extends Ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class il extends Dt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ho=new Ce,vr=new vs,cs=new fi,us=new C;class Vp extends Ge{constructor(e=new vt,t=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(i),cs.radius+=s,e.ray.intersectsSphere(cs)===!1)return;ho.copy(i).invert(),vr.copy(e.ray).applyMatrix4(ho);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let g=d,p=m;g<p;g++){const f=c.getX(g);us.fromBufferAttribute(u,f),fo(us,f,l,i,e,t,this)}}else{const d=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let g=d,p=m;g<p;g++)us.fromBufferAttribute(u,g),fo(us,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fo(o,e,t,n,i,s,r){const a=vr.distanceSqToPoint(o);if(a<t){const l=new C;vr.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}class Fr extends vt{constructor(e=1,t=1,n=1,i=8,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],m=[];let g=0;const p=[],f=n/2;let _=0;y(),r===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(m,2));function y(){const b=new C,S=new C;let E=0;const R=(t-e)/n;for(let x=0;x<=s;x++){const A=[],F=x/s,I=F*(t-e)+e;for(let K=0;K<=i;K++){const Y=K/i,P=Y*l+a,V=Math.sin(P),z=Math.cos(P);S.x=I*V,S.y=-F*n+f,S.z=I*z,u.push(S.x,S.y,S.z),b.set(V,R,z).normalize(),d.push(b.x,b.y,b.z),m.push(Y,1-F),A.push(g++)}p.push(A)}for(let x=0;x<i;x++)for(let A=0;A<s;A++){const F=p[A][x],I=p[A+1][x],K=p[A+1][x+1],Y=p[A][x+1];h.push(F,I,Y),h.push(I,K,Y),E+=6}c.addGroup(_,E,0),_+=E}function w(b){const S=g,E=new Ae,R=new C;let x=0;const A=b===!0?e:t,F=b===!0?1:-1;for(let K=1;K<=i;K++)u.push(0,f*F,0),d.push(0,F,0),m.push(.5,.5),g++;const I=g;for(let K=0;K<=i;K++){const P=K/i*l+a,V=Math.cos(P),z=Math.sin(P);R.x=A*z,R.y=f*F,R.z=A*V,u.push(R.x,R.y,R.z),d.push(0,F,0),E.x=V*.5+.5,E.y=z*.5*F+.5,m.push(E.x,E.y),g++}for(let K=0;K<i;K++){const Y=S+K,P=I+K;b===!0?h.push(P,P+1,Y):h.push(P+1,P,Y),x+=3}c.addGroup(_,x,b===!0?1:2),_+=x}}static fromJSON(e){return new Fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ss extends vt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new C,d=new C,m=[],g=[],p=[],f=[];for(let _=0;_<=n;_++){const y=[],w=_/n;let b=0;_==0&&r==0?b=.5/t:_==n&&l==Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){const E=S/t;u.x=-e*Math.cos(i+E*s)*Math.sin(r+w*a),u.y=e*Math.cos(r+w*a),u.z=e*Math.sin(i+E*s)*Math.sin(r+w*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),p.push(d.x,d.y,d.z),f.push(E+b,1-w),y.push(c++)}h.push(y)}for(let _=0;_<n;_++)for(let y=0;y<t;y++){const w=h[_][y+1],b=h[_][y],S=h[_+1][y],E=h[_+1][y+1];(_!==0||r>0)&&m.push(w,b,E),(_!==n-1||l<Math.PI)&&m.push(b,S,E)}this.setIndex(m),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(f,2))}static fromJSON(e){return new Ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zi extends Dt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends zi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Hp extends Dt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xs,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ln(o,e,t){return sl(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function hs(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function sl(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Wp(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function po(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function rl(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class Bi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Xp extends Bi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pa,endingEnd:pa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case ma:s=e,a=2*t-n;break;case ga:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ma:r=e,l=2*n-t;break;case ga:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),p=g*g,f=p*g,_=-d*f+2*d*p-d*g,y=(1+d)*f+(-1.5-2*d)*p+(-.5+d)*g+1,w=(-1-m)*f+(1.5+m)*p+.5*g,b=m*f-m*p;for(let S=0;S!==a;++S)s[S]=_*r[h+S]+y*r[c+S]+w*r[l+S]+b*r[u+S];return s}}class qp extends Bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class jp extends Bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ut{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hs(t,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hs(e.times,Array),values:hs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pi:t=this.InterpolantFactoryMethodDiscrete;break;case oi:t=this.InterpolantFactoryMethodLinear;break;case Ds:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pi;case this.InterpolantFactoryMethodLinear:return oi;case this.InterpolantFactoryMethodSmooth:return Ds}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=ln(n,s,r),this.values=ln(this.values,s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&sl(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ln(this.times),t=ln(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ds,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){const p=t[u+g];if(p!==t[d+g]||p!==t[m+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*n,d=r*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=ln(e,0,r),this.values=ln(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=ln(this.times,0),t=ln(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ut.prototype.TimeBufferType=Float32Array;Ut.prototype.ValueBufferType=Float32Array;Ut.prototype.DefaultInterpolation=oi;class mi extends Ut{}mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Pi;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;class al extends Ut{}al.prototype.ValueTypeName="color";class Ni extends Ut{}Ni.prototype.ValueTypeName="number";class Yp extends Bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Dn.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Pn extends Ut{InterpolantFactoryMethodLinear(e){return new Yp(this.times,this.values,this.getValueSize(),e)}}Pn.prototype.ValueTypeName="quaternion";Pn.prototype.DefaultInterpolation=oi;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;class gi extends Ut{}gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Pi;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Fi extends Ut{}Fi.prototype.ValueTypeName="vector";class Kp{constructor(e,t=-1,n,i=dc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push($p(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Ut.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Wp(l);l=po(l,1,h),c=po(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Ni(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,m,g,p){if(m.length!==0){const f=[],_=[];rl(m,f,_,g),f.length!==0&&p.push(new u(d,f,_))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)m[d[g].morphTargets[p]]=-1;for(const p in m){const f=[],_=[];for(let y=0;y!==d[g].morphTargets.length;++y){const w=d[g];f.push(w.time),_.push(w.morphTarget===p?1:0)}i.push(new Ni(".morphTargetInfluence["+p+"]",f,_))}l=m.length*r}else{const m=".bones["+t[u].name+"]";n(Fi,m+".position",d,"pos",i),n(Pn,m+".quaternion",d,"rot",i),n(Fi,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Zp(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ni;case"vector":case"vector2":case"vector3":case"vector4":return Fi;case"color":return al;case"quaternion":return Pn;case"bool":case"boolean":return mi;case"string":return gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function $p(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zp(o.type);if(o.times===void 0){const t=[],n=[];rl(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const ci={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Jp{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Qp=new Jp;class ki{constructor(e){this.manager=e!==void 0?e:Qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Xt={};class em extends Error{constructor(e,t){super(e),this.response=t}}class ol extends ki{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ci.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xt[e]!==void 0){Xt[e].push({onLoad:t,onProgress:n,onError:i});return}Xt[e]=[],Xt[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Xt[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0;let p=0;const f=new ReadableStream({start(_){y();function y(){u.read().then(({done:w,value:b})=>{if(w)_.close();else{p+=b.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let E=0,R=h.length;E<R;E++){const x=h[E];x.onProgress&&x.onProgress(S)}_.enqueue(b),y()}})}}});return new Response(f)}else throw new em(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ci.add(e,c);const h=Xt[e];delete Xt[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Xt[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xt[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class tm extends ki{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ci.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=Ii("img");function l(){h(),ci.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class nm extends ki{constructor(e){super(e)}load(e,t,n,i){const s=new ut,r=new tm(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class bs extends Ge{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const mo=new Ce,go=new C,_o=new C;class Or{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;go.setFromMatrixPosition(e.matrixWorld),t.position.copy(go),_o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_o),t.updateMatrixWorld(),mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class im extends Or{constructor(){super(new it(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Di*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sm extends bs{constructor(e,t,n=0,i=Math.PI/3,s=0,r=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.shadow=new im}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xo=new Ce,bi=new C,or=new C;class rm extends Or{constructor(){super(new it(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bi.setFromMatrixPosition(e.matrixWorld),n.position.copy(bi),or.copy(n.position),or.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(or),n.updateMatrixWorld(),i.makeTranslation(-bi.x,-bi.y,-bi.z),xo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo)}}class ll extends bs{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class am extends Or{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class om extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.shadow=new am}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lm extends bs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tn{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cm extends ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ci.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ci.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Ur="\\[\\]\\.:\\/",um=new RegExp("["+Ur+"]","g"),zr="[^"+Ur+"]",hm="[^"+Ur.replace("\\.","")+"]",dm=/((?:WC+[\/:])*)/.source.replace("WC",zr),fm=/(WCOD+)?/.source.replace("WCOD",hm),pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zr),mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zr),gm=new RegExp("^"+dm+fm+pm+mm+"$"),_m=["material","materials","bones"];class xm{constructor(e,t,n){const i=n||Oe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Oe{constructor(e,t,n){this.path=t,this.parsedPath=n||Oe.parseTrackName(t),this.node=Oe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Oe.Composite(e,t,n):new Oe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(um,"")}static parseTrackName(e){const t=gm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);_m.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Oe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Oe.Composite=xm;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vm{constructor(e,t,n=0,i=1/0){this.ray=new vs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yr(e,this,n,t),n.sort(vo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)yr(e[i],this,n,t);return n.sort(vo),n}}function vo(o,e){return o.distance-e.distance}function yr(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)yr(i[s],e,t,!0)}}const yo=new C;let ds,lr;class ym extends Ge{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,i=16776960,s=n*.2,r=s*.2){super(),this.type="ArrowHelper",ds===void 0&&(ds=new vt,ds.setAttribute("position",new st([0,0,0,0,1,0],3)),lr=new Fr(0,.5,1,5,1),lr.translate(0,-.5,0)),this.position.copy(t),this.line=new Ms(ds,new Nr({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ct(lr,new Zt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,r)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{yo.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(yo,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wr);class cl extends ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tm(t)}),this.register(function(t){return new Dm(t)}),this.register(function(t){return new Im(t)}),this.register(function(t){return new Am(t)}),this.register(function(t){return new Cm(t)}),this.register(function(t){return new Lm(t)}),this.register(function(t){return new Rm(t)}),this.register(function(t){return new wm(t)}),this.register(function(t){return new Pm(t)}),this.register(function(t){return new Em(t)}),this.register(function(t){return new Sm(t)}),this.register(function(t){return new Nm(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Tn.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ol(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={};if(typeof e=="string")s=e;else if(Tn.decodeText(new Uint8Array(e,0,4))===ul){try{r[Ee.KHR_BINARY_GLTF]=new Fm(e)}catch(u){i&&i(u);return}s=r[Ee.KHR_BINARY_GLTF].content}else s=Tn.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ym(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,r[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case Ee.KHR_MATERIALS_UNLIT:r[u]=new bm;break;case Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[u]=new zm;break;case Ee.KHR_DRACO_MESH_COMPRESSION:r[u]=new Om(l,this.dracoLoader);break;case Ee.KHR_TEXTURE_TRANSFORM:r[u]=new Um;break;case Ee.KHR_MESH_QUANTIZATION:r[u]=new Bm;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Mm(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Ee={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Sm{constructor(e){this.parser=e,this.name=Ee.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new pe(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new om(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ll(h),c.distance=u;break;case"spot":c=new sm(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class bm{constructor(){this.name=Ee.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(e,t,n){const i=[];e.color=new pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Fe))}return Promise.all(i)}}class wm{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Tm{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(a,a)}return Promise.all(s)}}class Em{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Am{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Fe)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Cm{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Lm{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new pe(a[0],a[1],a[2]),Promise.all(s)}}class Rm{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Pm{constructor(e){this.parser=e,this.name=Ee.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new pe(a[0],a[1],a[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Fe)),Promise.all(s)}}class Dm{constructor(e){this.parser=e,this.name=Ee.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Im{constructor(e){this.parser=e,this.name=Ee.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Nm{constructor(e){this.name=Ee.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,r.ready]).then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new ArrayBuffer(h*u),m=new Uint8Array(a[0],l,c);return r.decodeGltfBuffer(new Uint8Array(d),h,u,m,i.mode,i.filter),d})}else return null}}const ul="glTF",wi=12,Mo={JSON:1313821514,BIN:5130562};class Fm{constructor(e){this.name=Ee.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,wi);if(this.header={magic:Tn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ul)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-wi,i=new DataView(e,wi);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===Mo.JSON){const l=new Uint8Array(e,wi+s,r);this.content=Tn.decodeText(l)}else if(a===Mo.BIN){const l=wi+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Om{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ee.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const h in r){const u=Sr[h]||h.toLowerCase();a[u]=r[h]}for(const h in e.attributes){const u=Sr[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],m=Oi[d.componentType];c[u]=m,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const m in d.attributes){const g=d.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}u(d)},a,c)})})}}class Um{constructor(){this.name=Ee.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Mr extends zi{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new pe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class zm{constructor(){this.name=Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Mr}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new pe(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const r=i.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture,Fe)),e.emissive=new pe(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new pe(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const r=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",r)),s.push(n.assignTexture(e,"specularMap",r,Fe))}return Promise.all(s)}createMaterial(e){const t=new Mr(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=xs,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class Bm{constructor(){this.name=Ee.KHR_MESH_QUANTIZATION}}class hl extends Bi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,m=d*u,g=e*c,p=g-c,f=-2*m+3*d,_=m-d,y=1-f,w=_-d+u;for(let b=0;b!==a;b++){const S=r[p+b+a],E=r[p+b+l]*h,R=r[g+b+a],x=r[g+b]*h;s[b]=y*S+w*E+f*R+_*x}return s}}const km=new Dn;class Gm extends hl{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return km.fromArray(s).normalize().toArray(s),s}}const qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Oi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},So={9728:et,9729:ft,9984:fr,9985:Oo,9986:pr,9987:ui},bo={33071:bt,33648:ms,10497:ri},wo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sr={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vm={CUBICSPLINE:void 0,LINEAR:oi,STEP:Pi},cr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hm(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new zi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),o.DefaultMaterial}function Ti(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xn(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Wm(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Xm(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qm(o){const e=o.extensions&&o.extensions[Ee.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+To(e.attributes):t=o.indices+":"+To(o.attributes)+":"+o.mode,t}function To(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function br(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jm(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Ym{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Mm,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new nm(this.options.manager):this.textureLoader=new cm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ol(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};Ti(s,a,i),xn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,h]of r.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ee.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Tn.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=wo[i.type],c=Oi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,f;if(m&&m!==u){const _=Math.floor(d/m),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let w=t.cache.get(y);w||(p=new c(a,_*m,i.count*m/h),w=new Np(p,m/h),t.cache.add(y,w)),f=new Dr(w,l,d%m/h,g)}else a===null?p=new c(i.count*l):p=new c(a,d,i.count*l),f=new pt(p,l,g);if(i.sparse!==void 0){const _=wo.SCALAR,y=Oi[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,S=new y(r[1],w,i.sparse.count*_),E=new c(r[2],b,i.sparse.count*l);a!==null&&(f=new pt(f.array.slice(),f.itemSize,f.normalized));for(let R=0,x=S.length;R<x;R++){const A=S[R];if(f.setX(A,E[R*l]),l>=2&&f.setY(A,E[R*l+1]),l>=3&&f.setZ(A,E[R*l+2]),l>=4&&f.setW(A,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,r.name&&(h.name=r.name);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=So[d.magFilter]||ft,h.minFilter=So[d.minFilter]||ui,h.wrapS=bo[d.wrapS]||ri,h.wrapT=bo[d.wrapT]||ri,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){const f=new ut(p);f.needsUpdate=!0,d(f)}),t.load(Tn.resolveURL(u,s.path),g,void 0,m)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=r.mimeType||jm(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ee.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ee.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[Ee.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new il,Dt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Nr,Dt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return zi}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else if(l[Ee.KHR_MATERIALS_UNLIT]){const u=i[Ee.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Fe)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=En);const h=s.alphaMode||cr.OPAQUE;if(h===cr.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===cr.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Zt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ae(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&r!==Zt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Zt&&(a.emissive=new pe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==Zt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Fe)),Promise.all(c).then(function(){let u;return r===Mr?u=i[Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):u=new r(a),s.name&&(u.name=s.name),xn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ti(i,u,s),u})}createUniqueName(e){const t=Oe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ee.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Eo(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=qm(c),u=i[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[Ee.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Eo(new vt,c,t),i[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?Hm(this.cache):this.getDependency("material",r[l].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let m=0,g=h.length;m<g;m++){const p=h[m],f=r[m];let _;const y=c[m];if(f.mode===qt.TRIANGLES||f.mode===qt.TRIANGLE_STRIP||f.mode===qt.TRIANGLE_FAN||f.mode===void 0)_=s.isSkinnedMesh===!0?new Op(p,y):new ct(p,y),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),f.mode===qt.TRIANGLE_STRIP?_.geometry=Ao(_.geometry,fc):f.mode===qt.TRIANGLE_FAN&&(_.geometry=Ao(_.geometry,zo));else if(f.mode===qt.LINES)_=new kp(p,y);else if(f.mode===qt.LINE_STRIP)_=new Ms(p,y);else if(f.mode===qt.LINE_LOOP)_=new Gp(p,y);else if(f.mode===qt.POINTS)_=new Vp(p,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&Xm(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),xn(_,s),f.extensions&&Ti(i,_,f),t.assignFinalMaterial(_),u.push(_)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return u[0];const d=new Sn;t.associations.set(d,{meshes:e});for(let m=0,g=u.length;m<g;m++)d.add(u[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new it(Nc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Rr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],d=n.samplers[u.sampler],m=u.target,g=m.node!==void 0?m.node:m.id,p=n.parameters!==void 0?n.parameters[d.input]:d.input,f=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",f)),a.push(d),l.push(m)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],m=c[3],g=c[4],p=[];for(let _=0,y=h.length;_<y;_++){const w=h[_],b=u[_],S=d[_],E=m[_],R=g[_];if(w===void 0)continue;w.updateMatrix();let x;switch(cn[R.path]){case cn.weights:x=Ni;break;case cn.rotation:x=Pn;break;case cn.position:case cn.scale:default:x=Fi;break}const A=w.name?w.name:w.uuid,F=E.interpolation!==void 0?Vm[E.interpolation]:oi,I=[];cn[R.path]===cn.weights?w.traverse(function(Y){Y.morphTargetInfluences&&I.push(Y.name?Y.name:Y.uuid)}):I.push(A);let K=S.array;if(S.normalized){const Y=br(K.constructor),P=new Float32Array(K.length);for(let V=0,z=K.length;V<z;V++)P[V]=K[V]*Y;K=P}for(let Y=0,P=I.length;Y<P;Y++){const V=new x(I[Y]+"."+cn[R.path],b.array,K,F);E.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(j){const q=this instanceof Pn?Gm:hl;return new q(this.times,this.values,this.getValueSize()/3,j)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(V)}}const f=n.name?n.name:"animation_"+e;return new Kp(f,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new nl:a.length>1?l=new Sn:a.length===1?l=a[0]:l=new Ge,l!==a[0])for(let c=0,h=a.length;c<h;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=r),xn(l,s),s.extensions&&Ti(n,l,s),s.matrix!==void 0){const c=new Ce;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,r=new Sn;i.name&&(r.name=s.createUniqueName(i.name)),xn(r,i),i.extensions&&Ti(n,r,i);const a=i.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(dl(a[c],r,t,s));return Promise.all(l).then(function(){const c=h=>{const u=new Map;for(const[d,m]of s.associations)(d instanceof Dt||d instanceof ut)&&u.set(d,m);return h.traverse(d=>{const m=s.associations.get(d);m!=null&&u.set(d,m)}),u};return s.associations=c(r),r})}}function dl(o,e,t,n){const i=t.nodes[o];return n.getDependency("node",o).then(function(s){if(i.skin===void 0)return s;let r;return n.getDependency("skin",i.skin).then(function(a){r=a;const l=[];for(let c=0,h=r.joints.length;c<h;c++)l.push(n.getDependency("node",r.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=a.length;u<d;u++){const m=a[u];if(m){c.push(m);const g=new Ce;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,u*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[u])}l.bind(new Ir(c,h),l.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const h=a[l];r.push(dl(h,s,t,n))}}return Promise.all(r)})}function Km(o,e,t){const n=e.attributes,i=new di;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=br(Oi[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const p=br(Oi[d.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new fi;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function Eo(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=Sr[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return xn(o,e),Km(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Wm(o,e.targets,t):o})}function Ao(o,e){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===zo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s}const We={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function fl(o){const e=await fetch(o);if(e.ok)return e.json();throw new Error(e.statusText)}async function Zm(o){if(!o)throw new Error("No basePath supplied");return await fl(`${o}/profilesList.json`)}async function $m(o,e,t=null,n=!0){if(!o)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const i=await Zm(e);let s;if(o.profiles.some(l=>{const c=i[l];return c&&(s={profileId:l,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}),!!s}),!s){if(!t)throw new Error("No matching profile name found");const l=i[t];if(!l)throw new Error(`No matching profile name found and default profile "${t}" missing.`);s={profileId:t,profilePath:`${e}/${l.path}`,deprecated:!!l.deprecated}}const r=await fl(s.profilePath);let a;if(n){let l;if(o.handedness==="any"?l=r.layouts[Object.keys(r.layouts)[0]]:l=r.layouts[o.handedness],!l)throw new Error(`No matching handedness, ${o.handedness}, in profile ${s.profileId}`);l.assetPath&&(a=s.profilePath.replace("profile.json",l.assetPath))}return{profile:r,assetPath:a}}const Jm={xAxis:0,yAxis:0,button:0,state:We.ComponentState.DEFAULT};function Qm(o=0,e=0){let t=o,n=e;if(Math.sqrt(o*o+e*e)>1){const r=Math.atan2(e,o);t=Math.cos(r),n=Math.sin(r)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:n*.5+.5}}class eg{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===We.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(Jm)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:i}){const{normalizedXAxis:s,normalizedYAxis:r}=Qm(e,t);switch(this.componentProperty){case We.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?s:.5;break;case We.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?r:.5;break;case We.ComponentProperty.BUTTON:this.value=this.states.includes(i)?n:0;break;case We.ComponentProperty.STATE:this.valueNodeProperty===We.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class tg{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(n=>{const i=new eg(t.visualResponses[n]);this.visualResponses[n]=i}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:We.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=We.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=We.ComponentState.PRESSED:(t.touched||this.values.button>We.ButtonTouchThreshold)&&(this.values.state=We.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===We.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>We.AxisTouchThreshold&&(this.values.state=We.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===We.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>We.AxisTouchThreshold&&(this.values.state=We.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class ng{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(i=>{const s=this.layoutDescription.components[i];this.components[i]=new tg(i,s)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const ig="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",sg="generic-trigger";class rg extends Ge{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(n=>{const{valueNode:i,minNode:s,maxNode:r,value:a,valueNodeProperty:l}=n;!i||(l===We.VisualResponseProperty.VISIBILITY?i.visible=a:l===We.VisualResponseProperty.TRANSFORM&&(i.quaternion.slerpQuaternions(s.quaternion,r.quaternion,a),i.position.lerpVectors(s.position,r.position,a)))})}))}}function ag(o,e){Object.values(o.components).forEach(t=>{const{type:n,touchPointNodeName:i,visualResponses:s}=t;if(n===We.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(i),t.touchPointNode){const r=new Ss(.001),a=new Zt({color:255}),l=new ct(r,a);t.touchPointNode.add(l)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(s).forEach(r=>{const{valueNodeName:a,minNodeName:l,maxNodeName:c,valueNodeProperty:h}=r;if(h===We.VisualResponseProperty.TRANSFORM){if(r.minNode=e.getObjectByName(l),r.maxNode=e.getObjectByName(c),!r.minNode){console.warn(`Could not find ${l} in the model`);return}if(!r.maxNode){console.warn(`Could not find ${c} in the model`);return}}r.valueNode=e.getObjectByName(a),r.valueNode||console.warn(`Could not find ${a} in the model`)})})}function Co(o,e){ag(o.motionController,e),o.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=o.envMap,t.material.needsUpdate=!0)}),o.add(e)}class og{constructor(e=null){this.gltfLoader=e,this.path=ig,this._assetCache={},this.gltfLoader||(this.gltfLoader=new cl)}createControllerModel(e){const t=new rg;let n=null;return e.addEventListener("connected",i=>{const s=i.data;s.targetRayMode!=="tracked-pointer"||!s.gamepad||$m(s,this.path,sg).then(({profile:r,assetPath:a})=>{t.motionController=new ng(s,r,a);const l=this._assetCache[t.motionController.assetUrl];if(l)n=l.scene.clone(),Co(t,n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,c=>{this._assetCache[t.motionController.assetUrl]=c,n=c.scene.clone(),Co(t,n)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(r=>{console.warn(r)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(n),n=null}),t}}const Lo=new Ce,Ro=new C;class Po{constructor(e,t,n,i,s){this.controller=t,this.handModel=e,this.envMap=null;let r;!s||!s.primitive||s.primitive==="sphere"?r=new Ss(1,10,10):s.primitive==="box"&&(r=new In(1,1,1));const a=new zi;this.handMesh=new Bp(r,a,30),this.handMesh.instanceMatrix.setUsage(xc),this.handMesh.castShadow=!0,this.handMesh.receiveShadow=!0,this.handModel.add(this.handMesh),this.joints=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]}updateMesh(){const t=this.controller.joints;let n=0;for(let i=0;i<this.joints.length;i++){const s=t[this.joints[i]];s.visible&&(Ro.setScalar(s.jointRadius||.008),Lo.compose(s.position,s.quaternion,Ro),this.handMesh.setMatrixAt(i,Lo),n++)}this.handMesh.count=n,this.handMesh.instanceMatrix.needsUpdate=!0}}const lg="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";class cg{constructor(e,t,n,i){this.controller=t,this.handModel=e,this.bones=[];const s=new cl;s.setPath(n||lg),s.load(`${i}.glb`,r=>{const a=r.scene.children[0];this.handModel.add(a);const l=a.getObjectByProperty("type","SkinnedMesh");l.frustumCulled=!1,l.castShadow=!0,l.receiveShadow=!0,["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"].forEach(h=>{const u=a.getObjectByName(h);u!==void 0?u.jointName=h:console.warn(`Couldn't find ${h} in ${i} hand mesh`),this.bones.push(u)})})}updateMesh(){const e=this.controller.joints;for(let t=0;t<this.bones.length;t++){const n=this.bones[t];if(n){const i=e[n.jointName];if(i.visible){const s=i.position;n.position.copy(s),n.quaternion.copy(i.quaternion)}}}}}class ug extends Ge{constructor(e){super(),this.controller=e,this.motionController=null,this.envMap=null,this.mesh=null}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&this.motionController.updateMesh()}}class hg{constructor(){this.path=null}setPath(e){return this.path=e,this}createHandModel(e,t){const n=new ug(e);return e.addEventListener("connected",i=>{const s=i.data;s.hand&&!n.motionController&&(n.xrInputSource=s,t===void 0||t==="spheres"?n.motionController=new Po(n,e,this.path,s.handedness,{primitive:"sphere"}):t==="boxes"?n.motionController=new Po(n,e,this.path,s.handedness,{primitive:"box"}):t==="mesh"&&(n.motionController=new cg(n,e,this.path,s.handedness))),e.visible=!0}),e.addEventListener("disconnected",()=>{e.visible=!1}),n}}function dg(){}let Z=new dg;Z.init=function(o){console.log("|||| Init WebXR"),this.XRtype=o,this.container=document.querySelector(".js-xr-container"),this.camera,this.gl,this.scene,this.controls,this.renderer,this.referenceSpace,this.hitTestSource,this.viewerPosition=new C,this.session,this.currentSession=null,this.controller,this.overlay=document.querySelector(".js-ar-overlay"),this.closeXRbtn=document.querySelector(".js-close-webxr"),this.scene=new Ip,this.camera=new it(45,window.innerHeight/window.innerWidth,1,200);const e=new In(.5,.5,.5),t=new Hp({color:"#41591D",flatShading:!0});this.cube=new ct(e,t),this.cube.position.set(0,1,-1),this.scene.add(this.cube);var n=new ll("#fff",1,10,2);n.position.set(2,2,0),n.lookAt(this.cube.matrixWorld),this.scene.add(n),this.scene.add(new lm("#fff",.25)),this.renderer=new tl({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(document.body.clientWidth,document.body.clientHeight),this.renderer.xr.enabled=!0,this.container.appendChild(this.renderer.domElement),this.XRtype=="ar"?this.session={requiredFeatures:["local-floor","hit-test"]}:this.XRtype=="vr"&&(this.session={optionalFeatures:["local-floor","bounded-floor","hand-tracking","hit-test"]}),this.session.domOverlay===void 0&&this.XRtype=="ar"&&(this.session.optionalFeatures===void 0&&(this.session.optionalFeatures=[]),this.session.optionalFeatures.push("dom-overlay"),this.session.domOverlay={root:this.overlay}),this.closeXRbtn.addEventListener("click",i=>{this.currentSession.end()})};Z.startXRSession=function(){this.currentSession===null&&navigator.xr.requestSession("immersive-"+Z.XRtype,this.session).then(Z.onSessionStarted)};Z.onSessionStarted=async function(o){console.log("|||| "+Z.XRtype.toUpperCase()+" session started"),Z.animate(),o.addEventListener("end",Z.onSessionEnded),await Z.renderer.xr.setSession(o),Z.currentSession=o,Z.camera=new it,Z.camera.matrixAutoUpdate=!1,Z.referenceSpace=await Z.currentSession.requestReferenceSpace("local-floor").catch(e=>{console.error(e)}),Z.viewerSpace=await Z.currentSession.requestReferenceSpace("viewer").catch(e=>{console.error(e)}),Z.XRtype=="ar"&&(Z.hitTestSource=await Z.currentSession.requestHitTestSource({space:Z.viewerSpace}).catch(e=>{console.error(e)})),document.querySelector("body").classList.add("has-xr"),Z.XRtype=="ar"&&document.querySelector("body").classList.add("has-ar"),Z.initControllers()};Z.onSessionEnded=async function(){Z.currentSession.removeEventListener("end",Z.onSessionEnded),Z.currentSession=null,document.querySelector("body").classList.remove("has-xr","has-ar","has-vr")};Z.animate=function(){Z.renderer.setAnimationLoop(Z.render)};Z.render=function(o,e){if(Z.camera.getWorldPosition(Z.viewerPosition),Z.cube&&(Z.cube.rotation.x+=.01,Z.cube.rotation.y-=.01,Z.cube.rotation.z+=.01),Z.renderer.xr.isPresenting){const t=e.getViewerPose(Z.referenceSpace);if(t){const n=t.views[0];Z.XRtype=="ar"&&(Z.camera.matrix.fromArray(n.transform.matrix),Z.camera.projectionMatrix.fromArray(n.projectionMatrix),Z.camera.updateMatrixWorld(!0),e.getHitTestResults(Z.hitTestSource).length>0),Z.renderer.render(Z.scene,Z.camera)}}};Z.initControllers=function(){console.log(Z.currentSession),Z.controller1=Z.renderer.xr.getController(0),Z.controller1.addEventListener("select",fg),Z.scene.add(Z.controller1),Z.controller2=Z.renderer.xr.getController(1),Z.scene.add(Z.controller2);const o=new og,e=new hg().setPath("./models/fbx/");Z.controllerGrip1=Z.renderer.xr.getControllerGrip(0),Z.controllerGrip1.add(o.createControllerModel(Z.controllerGrip1)),Z.scene.add(Z.controllerGrip1),Z.hand1=Z.renderer.xr.getHand(0),Z.hand1.addEventListener("pinchstart",pg),Z.hand1.addEventListener("pinchend",mg),Z.hand1.add(e.createHandModel(Z.hand1)),Z.scene.add(Z.hand1),Z.controllerGrip2=Z.renderer.xr.getControllerGrip(1),Z.controllerGrip2.add(o.createControllerModel(Z.controllerGrip2)),Z.scene.add(Z.controllerGrip2),Z.hand2=Z.renderer.xr.getHand(1),Z.hand2.addEventListener("pinchstart",gg),Z.hand2.addEventListener("pinchend",_g),Z.hand2.add(e.createHandModel(Z.hand2)),Z.scene.add(Z.hand2)};function fg(o){if(console.log("onSelect()"),Z.XRtype=="ar"){const e=new C(1,2,0);Z.camera.getWorldDirection(e);const t=new vm;t.setFromCamera(Z.viewerPosition,Z.camera),t.set(Z.viewerPosition,e),Z.scene.add(new ym(t.ray.direction,t.ray.origin,100,Math.random()*16777215));const n=t.intersectObjects(Z.scene.children);for(let i=0;i<n.length;i++)n[i].object.material.color.set(Math.random()*16777215)}}function pg(o){console.log("onPinchStartLeft()")}function mg(o){console.log("onPinchEndLeft()")}function gg(o){console.log("onPinchStartRight()")}function _g(o){console.log("onPinchEndRight()")}const pl="ar";Yt.init(pl,Z);navigator.xr&&Z.init(pl,Yt);
