import React from "react";
import author from "../Myself.PNG"

const AboutMe = () => {
    return (
        <div>
            <div className="container py-5">
                <div class="row">
                    <div class="col-lg-6 col-xm-12">
                        <div class="photo-wrap mb-5">
                            <img className = "profile-img" src={author} alt="author"/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xm-12">
                        <h1 className = "about-heading">About Me</h1>
                        <p>
                        I am a Senior at Indiana University Bloomington majoring in Computer Science and Math. 
                        I have developed a passion for technology and mathematics and am hoping to find a job in 
                        the industry after completing my education here. I have held multiple different job positions
                        and, on top of this, have overcome many large obstacles in life and have done my best to learn 
                        from my failures and hardships to develop as a person. I have an ability to perform under pressure 
                        and stress that can not be paralleled, and I am willing to work well beyond expectations. My life
                        is founded on an ability to be comfortable with being uncomfortable, and my dream is to work in 
                        the tech and math industry and I look forward to learning more about them. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
