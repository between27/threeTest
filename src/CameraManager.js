import * as THREE from "three";
import {SceneManager} from "./SceneManager.js";
import {add} from "three/nodes";
import scene from "three/addons/offscreen/scene";

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const FOV = 90;
const SCREEN_ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT;
const NEAR = 1;
const FAR = 1000;

const camera = new THREE.PerspectiveCamera(FOV, SCREEN_ASPECT, NEAR, FAR);

add(camera);

camera.lookAt(scene.position);