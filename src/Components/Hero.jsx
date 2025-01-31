import React from 'react'
import Main from './Main'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Final from './Final'


const Hero = () => {
  return (
    <div className="bg-orangy flex flex-col">
        <Main />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Final />
    </div>
  )
}

export default Hero