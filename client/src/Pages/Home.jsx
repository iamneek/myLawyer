import Nav from '../Components/Nav'
import '../Styles/Home.scss'
import HomeHeroPic from '../Components/HomeHeroPic'
import Marquee from "react-fast-marquee";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCnn, SiFox, SiOpenai } from "react-icons/si";
import { BsMeta } from "react-icons/bs";


const Home = () => {
  return (
    <div className='Home'>
        <section className="hero_section">
          <h1 className='hero_title'>Easy Attorney Service<br /><span className='hero_gradient'>Anytime. Anywhere.</span></h1>
          <p className='hero_para1'>Connect to different attorneys respective to your legal problems.</p>
          <form className="input_cta">
            <input type="email" placeholder='Your email' className='cta_input' required/>
            <button className='input_cta_button'>Get free consultation</button>
          </form>
          <p className='hero_para2'><span className='asterisk'>*</span> Get your free consultation today. No credit card required.</p>

          {/* --- Hero Demo Video Start --- */}
          <HomeHeroPic /> 
          {/* --- Hero Demo Video End --- */}
        </section>
        <section className="marquee_as_seen_outer">
          <div className="marquee_as_seen">
            <span className='as_seen_on_heading'>AS SEEN ON</span>
            <Marquee pauseOnHover gradient gradientColor={'#12141c'} autoFill={true}>
              <div className='image_wrapper'><FaGoogle size={80} color='#a6a6a6'/></div>
              <div className='image_wrapper'><FaXTwitter size={80} color='#a6a6a6'/></div>
              <div className='image_wrapper'><SiCnn size={150} color='#a6a6a6'/></div>
              <div className='image_wrapper'><SiFox size={150} color='#a6a6a6'/></div>
              <div className='image_wrapper'><BsMeta size={100} color='#a6a6a6'/></div>
              <div className='image_wrapper'><FaMicrosoft size={80} color='#a6a6a6'/></div>
              <div className='image_wrapper'><SiOpenai size={80} color='#a6a6a6'/></div>
            </Marquee>
          </div>
        </section>

    </div>
  )
}

export default Home