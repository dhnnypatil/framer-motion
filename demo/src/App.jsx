import { useState } from 'react'
import './App.css'
import BasicSetup from './components/01_basic_setup'
import Gestures from './components/02_gestures'
import AnimationControls from './components/03_animation_controls'
import ViewBasedAnimations from './components/04_viewbased_animations'

function App(){
  return(
    <>
      {/* <BasicSetup /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      <ViewBasedAnimations />
    </>
  )
}

export default App
