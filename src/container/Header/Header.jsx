import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'
import { motion } from "framer-motion";

import { AppWrap } from '../../wrapper'

import { images } from "../../constants";

import './Header.scss';
import './script';
import './style.css';

function Header() {
    const mountRef = useRef(null);

    useEffect(() => {

        const textureLoader = new THREE.TextureLoader();
        const normalTexture = textureLoader.load('textures/NormalMap.png')
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize( window.innerWidth, window.innerHeight );
        mountRef.current.appendChild( renderer.domElement );

        const geometry = new THREE.SphereBufferGeometry(0.7, 64, 64)
        const material = new THREE.MeshStandardMaterial()
        material.metalness = 0.7
        material.roughness = 0.2
        material.normalMap = normalTexture;

        material.color = new THREE.Color(0x2929292)

        const sphere = new THREE.Mesh(geometry,material)
        scene.add(sphere)

        // Lights

        const pointLight = new THREE.PointLight(0xffffff, 0.1)
        pointLight.position.x = 2
        pointLight.position.y = 3
        pointLight.position.z = 4
        scene.add(pointLight)

// Light 2

        const pointLight2 = new THREE.PointLight(0xbbee00, 2)
        pointLight2.position.set(-1.86, 1, -1.65)
        pointLight2.intensity = 10
        scene.add(pointLight2)

        // Light 3

        const pointLight3 = new THREE.PointLight(0xbbee00, 2)
        pointLight3.position.set(0.69, -3, -1.98)
        pointLight3.intensity = 6.8
        scene.add(pointLight3)
    }, []);

    return (
        <div ref={mountRef}>
            <h1>oleksii.dev</h1>
        </div>
    );
}

export default AppWrap(Header,'home' );
