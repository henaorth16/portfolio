import certification from "../assets/certification.png";
import { Fade } from "react-awesome-reveal";
const Certifications = () => {
  return (
    <Fade  delay={4.5}>
    <div className="text-3xl text-center mt-28 text-white">
      <h1>Certifications</h1>
      <div className="certification flex justify-center items-center mt-16">
        <img src={certification} alt="" />
      </div>
      <p className=" flex text-center justify-center mt-32 ">one from &nbsp; <span className="text-[#ffc72e]">techin</span> &nbsp; and <span className="text-[#ffc72e]">&nbsp; one from EAII</span></p>
    </div>
    </Fade>
  );
};

export default Certifications;
