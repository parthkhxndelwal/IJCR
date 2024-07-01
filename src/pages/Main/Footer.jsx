import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer1">
                    <div className="importantLinks">
                        {/* <h2>Info</h2> */}
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="socialLinks">
                        {/* <h2>Social Links</h2> */}
                        <a href="https://www.facebook.com/profile.php?id=61561593244235&mibextid=LQQJ4d">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="https://www.linkedin.com/company/international-journal-of-convergent-research-ijcr/">LinkedIn</a>
                        <a href="https://www.instagram.com/ijconvergent_research">Instagram</a>
                    </div>
                </div>
                <div className="footer2">
                    <p>© 2024 International Journal of Convergent Research</p>
                </div>
            </div>
        </>
    )
}
