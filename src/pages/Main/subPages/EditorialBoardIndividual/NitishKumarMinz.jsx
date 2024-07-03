import React from 'react';
import nitishImage from '/src/assets/nitish.jpeg';

export default function NitishKumarMinz({ chooseSubPage }) {
    return (
         <>
         {/* <button id='backToPrevPage' onClick={() => chooseSubPage('Editorial Team')}>Back to Editorial Team</button> */}
            <div className="NitishContainer nameHeading">
                <h1>Nitish Kumar Minz</h1>
            </div>
            <div className="NitishContainer content">
                <div id="about">
                    <h2>About Nitish Kumar Minz</h2>
                    <div id="nitishaboutcontainer">
                        <p>
                            Nitish Kumar Minz is a dedicated and hardworking individual with a passion for entrepreneurship, innovation, and education. He has a strong background in commerce and has demonstrated his commitment to these fields through various research projects, internships, and roles such as a Human Resource Manager. Nitish is known for his competency, loyalty, and ability to work effectively both independently and as part of a team. His diverse experiences in organizing events, conducting research, and contributing to startup ecosystems showcase his versatility and drive for personal and professional growth. Nitish Kumar Minz is a lifelong learner who takes his work seriously and strives for excellence in all endeavors.
                        </p>
                        <img src={nitishImage} id='nitishImage' alt="" />
                    </div>
                </div>

                <div id="NitishExperience">
                    <h2>Professional Experience</h2>
                    <p>Nitish Kumar Minz has experience as a Student Intern at K.R. Mangalam Entrepreneurship and Incubation Centre, where he organized events, conducted research on startup ecosystems, and managed the Institution's Innovation Council. <br /><br />In his role as a Human Resource Manager at Hobics Solutions Pvt. Ltd., Nitish excelled in recruitment, onboarding new interns, and developing HR strategies to support the startup's growth. <br /><br />As a Research Analyst at Medowsgreen, he analyzed data, prepared reports for decision-making, and collaborated with teams to generate actionable business insights.<br /><br />Nitish's professional background showcases his adaptability, strong work ethic, and dedication to making meaningful contributions in entrepreneurship, human resources, and research analysis.</p>
                </div>

                <div id="NitishEducation">
                    <h2>Education</h2>
                    <p>Nitish Kumar Minz pursued his Bachelor of Commerce at K.R. Mangalam University in Gurugram, where he is currently enrolled. Prior to this, he completed his Grade 12th in Commerce at R.P.S International School in Gurugram, securing the 2nd rank with an impressive percentage of 92.2%. Before that, he achieved a remarkable percentage of 91.4% in Grade 10th ICSE at Lt. Atul Katarya Memorial School in Gurugram. Nitish's educational journey reflects his consistent academic excellence and dedication to his studies. His background in commerce, coupled with his practical experiences and internships, has equipped him with a strong foundation in business and entrepreneurship. Nitish's academic achievements and hands-on experiences demonstrate his commitment to continuous learning and growth in the field of commerce and related disciplines.</p>
                </div>
                
            </div>
        </>
    );
}
