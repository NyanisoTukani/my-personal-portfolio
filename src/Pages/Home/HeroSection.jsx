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
       I am an aspiring software developer with a passion for technology and innovation. 
       My skills include web and mobile development, UI/UX design, and multimedia computing. 
       I thrive on solving complex problems and creating user-friendly digital solutions. 
       I'm eager to grow and contribute to impactful projects.
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