import * as THREE from "./threejs/build/three.module.js";
import {OrbitControls} from "./threejs/examples/jsm/controls/OrbitControls.js";

var camera, scene, renderer, controls;

const init = () => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(8, 8, 8);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xdfdfdf);
    document.body.appendChild(camera, renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
};

const render = () => {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

window.onload = () => {
    init();
    render();
};

window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect(window.innerWidth/ window.innerHeight);
    camera.updateProjectionMatrix();
};