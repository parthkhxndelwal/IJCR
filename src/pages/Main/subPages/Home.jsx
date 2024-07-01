import React, { useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import LatestArticles from '../components/LatestArticles'
export default function Home() {
    const loadingBarRef = useRef(null);
    useEffect(() => {
        loadingBarRef.current.staticStart();
        setTimeout(() => {
          loadingBarRef.current.complete();
        }, 500);
      }, []);
    return (
        <>
            <LoadingBar color='#058181' height={3} ref={loadingBarRef} />
            <div className="Home">
                <div className="AboutTheJournal">
                    <h1>About the journal</h1>
                    <p>The International Journal of Convergent Research (IJCR) is a multidisciplinary, peer-reviewed journal dedicated to advancing the frontiers of research through the integration of diverse fields of study. IJCR aims to foster innovation and collaboration by publishing high-quality research that bridges the gaps between traditional disciplines, promoting convergent approaches to address complex global challenges. With a commitment to excellence, IJCR provides a platform for researchers, scholars, and practitioners to share their findings, insights, and advancements in a wide array of subjects.</p>
                </div>
                <div className="aimAndScope">
                    <h1>Aim and Scope</h1>
                    <p>The International Journal of Convergent Research (IJCR) seeks to promote interdisciplinary collaboration and innovation by publishing research that integrates methodologies, theories, and practices from multiple disciplines. Our goal is to advance knowledge and provide solutions to multifaceted issues that require a convergent research approach. We strive to be a leading platform for groundbreaking studies that transcend traditional academic boundaries and contribute to the betterment of society.</p>
                    <p className='bulletItem'><span className="bold">Science and Technology:</span> Integrative studies that combine insights from physics, chemistry, biology, engineering, and computer science to develop novel technologies and scientific understanding not just limited to advanced. Researches from basic to advanced research are also invited.</p>
                    <p className='bulletItem'><span className="bold">Health and Medicine:</span> Research that merges fields such as biotechnology, medicine, and public health to address human related issues and improve healthcare outcomes.</p>
                    <p className='bulletItem'><span className="bold">Environmental Studies:</span> Collaborative research that unites ecology, environmental science, urban planning, and policy studies to address environmental challenges and promote sustainability.</p>
                    <p className='bulletItem'><span className="bold">Business, Management and Commerce:</span> Studies that integrate principles from business, economics, information systems, and organisational behaviour to enhance business practices and organisational effectiveness.</p>
                    <p className='bulletItem'><span className="bold">Education and Learning:</span> Research that converges educational theories, cognitive science, instructional technology, and curriculum development to improve teaching and learning processes.</p>
                    <p className='bulletItem'><span className="bold">Arts and Design:</span> Creative work that combines artistic practices, design principles, technology, and cultural studies to foster innovation in the arts and design industries.</p>
                    <p className='bulletItem'><span className="bold">Law:</span> Research that integrates legal studies with other disciplines such as technology, ethics, sociology, and environmental studies to explore the evolving landscape of legal issues and promote a comprehensive understanding of law in a global context.</p>
                    <p><strong>IJCR</strong> welcomes original research articles, review papers, case studies, technical reports and perspectives that reflect the convergent nature of contemporary research. By facilitating the exchange of knowledge across disciplines, IJCR aims to contribute to a holistic understanding of complex issues and support the development of integrated solutions.</p>
                </div>
                <div className="stats">
                    <div className="stat">
                        <h2>30 Days</h2>
                        <p>Review Time</p>
                    </div>
                    <div className="stat">
                        <h2>10 Days</h2>
                        <p>Submission to Acceptance</p>
                    </div>
                    <div className="stat">
                        <h2>15 Days</h2>
                        <p>Acceptance to Publication</p>
                    </div>
                    <div className="stat">
                        <a href="#" className="statButton">View All Insights</a>
                    </div>
                </div>
                <div className="editor">
                    <div className="editorInChief">
                        <h1> Editor in Chief </h1>
                        <h4><a href="#">Dr. Monika Yadav</a></h4>
                    </div>
                    <div className="divider"></div>
                    <div className="assosciateDirector">
                        <h1> Associate Editors </h1>
                        <h4> <a href="#">Dr. Anshika Prakash</a> </h4>
                        <h4> <a href="#">Dr. Ajhar Hussain</a></h4>
                    </div>
                    
                </div>
                <LatestArticles/>
            </div>

        </>
    )
}
