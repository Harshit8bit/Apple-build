// 14 & 16 -> presentation controls
import { PresentationControls } from "@react-three/drei";
import { use, useEffect, useRef } from "react"
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const  OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) =>{
    if(!group) return;

    group.traverse((child) =>{
        if(child.isMesh){
            child.material.transparent = true;
            gsap.to(child.material, {opacity, duration: ANIMATION_DURATION})
        }
    })

}

const MoveGroup = (group , x) => {
    if(!group) return;

    gsap.to(group.position, { x, duration : ANIMATION_DURATION})
}


const ModelSwitcher = ({scale, isMobile }) => {

    const smallMacbookRef = useRef();
    const largeMackbookRef = useRef();

    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    useGSAP(() =>{
        if(showLargeMacbook){
            MoveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            MoveGroup(largeMackbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(largeMackbookRef.current , 1);
        }else{
            MoveGroup(smallMacbookRef.current, 0);
            MoveGroup(largeMackbookRef.current, -OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMackbookRef.current , 0);
        }
        

    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1,
        polar: [ -Math.PI , Math.PI],
        azimuth: [-Infinity , Infinity],
        config: {mass:1 , tension:0 , friction:26}

    }

    return(
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMackbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls> 
        </> 
    )
}

export default ModelSwitcher