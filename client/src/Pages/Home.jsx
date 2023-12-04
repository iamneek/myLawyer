import Nav from '../Components/Nav'
import '../Styles/Home.scss'
import HomeHeroPic from '../Components/HomeHeroPic'
const Home = () => {
  return (
    <div className='Home'>
        <section className="hero_section">
          <h1 className='hero_title'>Easy Attorney Service<br /><span className='hero_gradient'>Anywhere. Anytime.</span></h1>
          <p className='hero_para1'>Connect to different attorneys respective to your legal problems.</p>
          <form className="input_cta">
            <input type="email" placeholder='Your email' className='cta_input' autoFocus required/>
            <button className='input_cta_button'>Get free consultation</button>
          </form>
          <p className='hero_para2'><span className='asterisk'>*</span> Get your free consultation today. No credit card required.</p>
          <HomeHeroPic />
        </section>
    </div>
  )
}

export default Home