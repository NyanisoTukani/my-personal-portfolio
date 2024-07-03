import resume from './TUKANI CV.pdf'
export default function HeroSection(){
    return (
       <section id="heroSelection" className="hero-selection">
       <div className="hero-section-content-box">
       <div className="hero-section-content">
       <p className="section-title">Hey, I am Nyaniso Tukani</p>
       <h1 className="hero-section-title">
       <span className="hero-section-title-color">
       Software <br/> Developer</span>{" "}
      
       </h1>
       <p className="hero-section-description">
       Final year Diploma in Multimedia Computing student with a strong focus on software development and multimedia
       design. Proficient in creating dynamic software solutions and engaging multimedia content. Dedicated to integrating technical
       expertise with creative design skills for innovative project development.
       </p>
       <div>
       <button className="btn btn-resume">
       <a className='resume' href = {resume} download = 'resume'>Resume</a>
       </button>
       </div>
       </div>
       </div>
       <div className="hero-section-image">
       <img src="./img/nyanisoHead.png" alt="Hero Selection"></img>
       </div>
       </section>
    )
}