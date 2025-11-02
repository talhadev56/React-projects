import React from 'react'
import { motion } from "motion/react"

const App = () => {
  return (
    <div>
      <motion.div 
      drag
      dragConstraints={{
        left:0,
        top:0,
        right:1000,
      }}
      dragDirectionLock="true"
       className='box'
       >
 
      </motion.div>
    </div>
  )
}

export default App