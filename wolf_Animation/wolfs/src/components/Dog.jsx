import React from 'react'
import {Canvas} from '@react-three/fiber'

const Dog = () => {
  return (
  <Canvas>
    <mesh>
        <meshBasicMaterial color ={0x00}/>
    </mesh>
    </Canvas>
  )
}

export default Dog