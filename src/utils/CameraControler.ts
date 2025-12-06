// CameraController.tsx
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const CameraController = () => {
    const { camera } = useThree();
    const scroll = useScroll();

    const targetPosition = useRef(new THREE.Vector3(-5, 5, 10));
    const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
    const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

    useFrame(() => {
        const offset = scroll.offset;

        if (offset < 0.17) {
            targetPosition.current.set(-5, 5, 10);
            targetLookAt.current.set(0, 0, 0);
        }
        else if (offset >= 0.17 && offset < 0.45) {
            targetPosition.current.set(-7, 5, 8);
            targetLookAt.current.set(-4, 1, 0);
        }
        else if (offset > 0.45 && offset < 0.8) {
            targetPosition.current.set(-9, 5, 10);
            targetLookAt.current.set(0, 1, 5);
        }
        else if (offset >= 0.8) {
            targetPosition.current.set(-15, 5, 10);
            targetLookAt.current.set(-10, 1, 0);
        }

        camera.position.lerp(targetPosition.current, 0.1);

        currentLookAt.current.lerp(targetLookAt.current, 0.05);
        camera.lookAt(currentLookAt.current);
    });
    return null;
};

export default CameraController;