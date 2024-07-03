import data from "../../data/index.json";
export default function MySkills(){
    return(
        <section className= "skills_section" id= "mySkills">
           <div className="portfolio_container">
           
           <h2 className="hero-section-title">My Skills</h2>
           </div>

           <div className="skills_section_container">
           {data?.skills?.map((item,index) => (

                <div key={index} className="skills_section_card">
                    <div className="skills_section_img">
                        <img src={item.src} alt="Product_Chain"/>
                    </div>
                    <div className="skills_section_card_content">
                        <h2 className="skills_section_title">
                            {item.title}
                        </h2>
                    </div>   
                    <p className="skills_section_description">
                        {item.description}
                    </p>         
                </div>

           ))}
           </div>
        </section>
    )
}