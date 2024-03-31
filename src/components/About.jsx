import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import audiovisuals from '../assets/audiovisuals.png'
import programming from '../assets/programming.png'
import tools from '../assets/tools.png'
const About = () => {
  return (
   
    <div className="text-white mx-20">
        <Fade delay={4} cascade damping={0.5}><h1 className="text-4xl mb-8">who i am</h1> </Fade>
        <Slide direction="right">
            <p>as i mentioned before i am just somebody who tries to discover different skills and knowledges<br />here are some lists of ma skills</p>
        </Slide>
        <Slide direction="up">
        <div className="text-xl skills grid text-center justify-center items-center mt-20">
            <h1>audio visual tools</h1><br />
            <img className="h-20" src={audiovisuals} alt="" />
            <h1>programming langs</h1><br />
            <img className="h-20" src={programming} alt="" />
            <h1>hardware and software tools</h1><br />
            <img className="h-20 ml-24" src={tools} alt="" />
        </div>
        </Slide>
    </div>
  )
}

export default About