import * as THREE from 'three';
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory.js';

function WebXR() { };

let XR = new WebXR();

XR.init = function(XRtype) {
    console.log('|||| Init WebXR');
    this.XRtype = XRtype;
    this.container = document.querySelector('.js-xr-container');
    this.camera;
    this.gl;
    this.scene;
    this.controls;
    this.renderer;
    this.referenceSpace;
    this.hitTestSource;
    this.viewerPosition = new THREE.Vector3();
    this.session;
    this.currentSession = null;
    this.controller;
    this.overlay = document.querySelector('.js-ar-overlay');
    this.closeXRbtn = document.querySelector('.js-close-webxr');

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerHeight / window.innerWidth, 1, 200);

    const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
    const material = new THREE.MeshPhongMaterial({
        color: '#41591D',
        flatShading: true,
      });
    this.cube = new THREE.Mesh( geometry, material );
    this.cube.position.set(0, 1, -1);
    this.scene.add( this.cube );

    var light = new THREE.PointLight( '#fff', 1, 10, 2 );
    light.position.set(2, 2, 0);
    light.lookAt(this.cube.matrixWorld);
    this.scene.add(light);

    this.scene.add( new THREE.AmbientLight( '#fff', 0.25 ) );

    this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(document.body.clientWidth, document.body.clientHeight);
    this.renderer.xr.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    if(this.XRtype == 'ar') {
        this.session = {
            requiredFeatures: ['local-floor', 'hit-test']
        };
    } else if (this.XRtype == 'vr') {
        this.session = {
            optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking', 'hit-test' ]
        };
    }

    if (this.session.domOverlay === undefined && this.XRtype == 'ar') {

        if ( this.session.optionalFeatures === undefined) {
            this.session.optionalFeatures = [];
        }

        this.session.optionalFeatures.push('dom-overlay');
        this.session.domOverlay = {
            root: this.overlay
        };

    }

    this.closeXRbtn.addEventListener('click', e => {
        this.currentSession.end();
    });
}

XR.startXRSession = function() {
    if (this.currentSession === null) {
        navigator.xr.requestSession('immersive-' + XR.XRtype, this.session).then(XR.onSessionStarted);
    }
}

XR.onSessionStarted = async function(session) {
    console.log('|||| ' + XR.XRtype.toUpperCase() + ' session started');
    XR.animate();
    session.addEventListener('end', XR.onSessionEnded);

    await XR.renderer.xr.setSession(session);
    XR.currentSession = session;

    XR.camera = new THREE.PerspectiveCamera();
    XR.camera.matrixAutoUpdate = false;

    // A 'local' reference space has a native origin that is located
    // near the viewer's position at the time the session was created.
    XR.referenceSpace = await XR.currentSession.requestReferenceSpace("local-floor").catch(e => {
        console.error(e)
    });

    // Create another XRReferenceSpace that has the viewer as the origin.
    XR.viewerSpace = await XR.currentSession.requestReferenceSpace('viewer').catch(e => {
        console.error(e)
    });

    if(XR.XRtype == 'ar') {
        // Perform hit testing using the viewer as origin.
        XR.hitTestSource = await XR.currentSession.requestHitTestSource({
            space: XR.viewerSpace
        }).catch(e => {
            console.error(e)
        });
    }

    document.querySelector('body').classList.add('has-xr');
    
    if(XR.XRtype == 'ar') {
        document.querySelector('body').classList.add('has-ar');
    }

    XR.initControllers();

}

XR.onSessionEnded = async function() {
    XR.currentSession.removeEventListener('end', XR.onSessionEnded);
    XR.currentSession = null;

    document.querySelector('body').classList.remove('has-xr', 'has-ar', 'has-vr');
}

XR.animate = function() {
    XR.renderer.setAnimationLoop(XR.render);
}

XR.render = function(time, frame) {
    // console.log(renderer);

    XR.camera.getWorldPosition(XR.viewerPosition);
    
    if (XR.cube) {
        XR.cube.rotation.x += 0.01;
        XR.cube.rotation.y -= 0.01;
        XR.cube.rotation.z += 0.01
    }
    if (XR.renderer.xr.isPresenting) {
        const pose = frame.getViewerPose(XR.referenceSpace);
        if (pose) {
            // In mobile XR, we only have one view.
            const view = pose.views[0];

            if(XR.XRtype == 'ar') {
                // Use the view's transform matrix and projection matrix to configure the THREE.camera.
                XR.camera.matrix.fromArray(view.transform.matrix);
                XR.camera.projectionMatrix.fromArray(view.projectionMatrix);
                XR.camera.updateMatrixWorld(true);

                const hitTestResults = frame.getHitTestResults(XR.hitTestSource);

                if (hitTestResults.length > 0) {
                    
                } else {

                }
            }

            // Render the scene with THREE.WebGLRenderer.
            XR.renderer.render(XR.scene, XR.camera);
        }
    }
}

XR.initControllers = function() {

    console.log(XR.currentSession);

    // controllers
    XR.controller1 = XR.renderer.xr.getController( 0 );
    XR.controller1.addEventListener('select', onSelect);
    XR.scene.add( XR.controller1 );

    XR.controller2 = XR.renderer.xr.getController( 1 );
    XR.scene.add( XR.controller2 );

    const controllerModelFactory = new XRControllerModelFactory();
    const handModelFactory = new XRHandModelFactory().setPath( "./models/fbx/" );

    // Hand 1
    XR.controllerGrip1 = XR.renderer.xr.getControllerGrip( 0 );
    XR.controllerGrip1.add( controllerModelFactory.createControllerModel( XR.controllerGrip1 ) );
    XR.scene.add( XR.controllerGrip1 );

    XR.hand1 = XR.renderer.xr.getHand( 0 );
    XR.hand1.addEventListener( 'pinchstart', onPinchStartLeft );
    XR.hand1.addEventListener( 'pinchend', onPinchEndLeft );
    XR.hand1.add( handModelFactory.createHandModel( XR.hand1 ) );

    XR.scene.add( XR.hand1 );

    // Hand 2
    XR.controllerGrip2 = XR.renderer.xr.getControllerGrip( 1 );
    XR.controllerGrip2.add( controllerModelFactory.createControllerModel( XR.controllerGrip2 ) );
    XR.scene.add( XR.controllerGrip2 );

    XR.hand2 = XR.renderer.xr.getHand( 1 );
    XR.hand2.addEventListener( 'pinchstart', onPinchStartRight );
    XR.hand2.addEventListener( 'pinchend', onPinchEndRight );
    XR.hand2.add( handModelFactory.createHandModel( XR.hand2 ) );
    XR.scene.add( XR.hand2 );

}

function onSelect(e) {
    console.log('onSelect()');

    if(XR.XRtype == 'ar') {
        // Some rasting for AR
        const dir = new THREE.Vector3( 1, 2, 0 );
        XR.camera.getWorldDirection(dir)
        const raycaster = new THREE.Raycaster();

        // Setup racaster
        raycaster.setFromCamera( XR.viewerPosition,  XR.camera );
        // Update it to use the proper direction
        raycaster.set(XR.viewerPosition, dir);

        // Add an arrow helper to show the raycaster
        XR.scene.add(new THREE.ArrowHelper( raycaster.ray.direction, raycaster.ray.origin, 100, Math.random() * 0xffffff ));

        // calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects( XR.scene.children );

        for ( let i = 0; i < intersects.length; i ++ ) {

            intersects[ i ].object.material.color.set( Math.random() * 0xffffff );

        }
    }
}

function onPinchStartLeft( event ) {
    console.log('onPinchStartLeft()');
}

function onPinchEndLeft( event ) {
    console.log('onPinchEndLeft()');
}

function onPinchStartRight( event ) {
    console.log('onPinchStartRight()');
}

function onPinchEndRight( event ) {
    console.log('onPinchEndRight()');
}

export { XR };