import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArticlesAndIssues from './subPages/ArticlesAndIssues';
import EditorialTeam from './subPages/EditorialTeam';
import GuideForAuthors from './subPages/GuideForAuthors';
import Home from './subPages/Home';
import Publish from './subPages/Publish';
import LoadingBar from 'react-top-loading-bar';
import NitishKumarMinz from './subPages/EditorialBoardIndividual/NitishKumarMinz';

export default function MainPage({ initialSubPage }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [subPage, chooseSubPage] = useState(initialSubPage || 'Home');
  const loadingBarRef = useRef(null);

  useEffect(() => {
    loadingBarRef.current.staticStart();
    setTimeout(() => {
      loadingBarRef.current.complete();
    }, 1);
  }, []);

  useEffect(() => {
    loadingBarRef.current.staticStart();
    setTimeout(() => {
      loadingBarRef.current.complete();
    }, 1);
  }, [subPage]);

  const [query, setQuery] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/editorialteam':
        chooseSubPage('Editorial Team');
        break;
      case '/articlesandissues':
        chooseSubPage('Articles and Issues');
        break;
      case '/publish':
        chooseSubPage('Publish');
        break;
      case '/guideforauthors':
        chooseSubPage('Guide for Authors');
        break;
      case '/editorialteam/nitishkumarminz':
        chooseSubPage('Nitish Kumar Minz');
        break;
      default:
        chooseSubPage('Home');
    }
  }, [location.pathname]);

  const renderSubPage = () => {
    switch (subPage) {
      case 'Home':
        return <Home />;
      case 'Editorial Team':
        return <EditorialTeam chooseSubPage={chooseSubPage} subPage={subPage} />;
      case 'Articles and Issues':
        return <ArticlesAndIssues />;
      case 'Publish':
        return <Publish />;
      case 'Guide for Authors':
        return <GuideForAuthors />;
      case 'Nitish Kumar Minz':
        return <NitishKumarMinz chooseSubPage={chooseSubPage} />;
      default:
        return <Home />;
    }
  };

  const handleNavigation = (path, subPageName) => {
    navigate(path);
    chooseSubPage(subPageName);
  };

  return (
    <>
      <div className="Navbar">
        <img draggable={false} src="/IJCR.png" alt="IJCR_Logo" className="IJCRNavLogo" />
        <div className="NavSideSection">
          <ul>
            <li><a href="#">Journals & Books</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Sign in</a></li>
          </ul>
        </div>
      </div>
      <div className="Hero">
        <div className="HeroSection1">
          <img src="/COVER.jpg" alt="Hero_Cover_Image" className="coverImage" />
        </div>
        <div className="HeroSection2">
          <h1>International Journal of Convergent Research</h1>
          <a className="openAccess" href="#">Open Access</a>
        </div>
        <div className="HeroSection3">
          <p>ISSN: 0000-0000</p>
        </div>
      </div>
      <div className="MiniNavbar">
        <button
          className="MiniNavButton"
          onClick={() => handleNavigation('/', 'Home')}
          style={{
            backgroundColor: subPage === 'Home' ? '#058181' : 'transparent',
            color: subPage === 'Home' ? 'white' : 'black',
            padding: subPage === 'Home' ? '0.5rem 1.5rem' : '0.5rem 1rem',
            textAlign: 'center'
          }}
        >
          Home
        </button>
        <button
          className="MiniNavButton"
          onClick={() => handleNavigation('/editorialteam', 'Editorial Team')}
          style={{
            backgroundColor: subPage === 'Editorial Team' ? '#058181' : 'transparent',
            color: subPage === 'Editorial Team' ? 'white' : 'black',
            padding: subPage === 'Editorial Team' ? '0.5rem 1.5rem' : '0.5rem 1rem',
            textAlign: 'center'
          }}
        >
          Editorial Team ↗
        </button>
        <button
          className="MiniNavButton"
          onClick={() => handleNavigation('/articlesandissues', 'Articles and Issues')}
          style={{
            backgroundColor: subPage === 'Articles and Issues' ? '#058181' : 'transparent',
            color: subPage === 'Articles and Issues' ? 'white' : 'black',
            padding: subPage === 'Articles and Issues' ? '0.5rem 1.5rem' : '0.5rem 1rem',
            textAlign: 'center'
          }}
        >
          Articles & Issues
        </button>
        <button
          className="MiniNavButton"
          onClick={() => handleNavigation('/publish', 'Publish')}
          style={{
            backgroundColor: subPage === 'Publish' ? '#058181' : 'transparent',
            color: subPage === 'Publish' ? 'white' : 'black',
            padding: subPage === 'Publish' ? '0.5rem 1.5rem' : '0.5rem 1rem',
            textAlign: 'center'
          }}
        >
          Publish
        </button>
        <button
          className="MiniNavButton"
          onClick={() => { window.open('https://ijcres.in/call_for_paper/Call-for-Paper-IJCR.pdf#zoom=25', '_blank') }}
          style={{
            backgroundColor: 'transparent',
            color: 'black'
          }}
        >
          Submit your Article ↗
        </button>
        <button
          className="MiniNavButton"
          onClick={() => handleNavigation('/guideforauthors', 'Guide for Authors')}
          style={{
            backgroundColor: subPage === 'Guide for Authors' ? '#058181' : 'transparent',
            color: subPage === 'Guide for Authors' ? 'white' : 'black',
            padding: subPage === 'Guide for Authors' ? '0.5rem 1.5rem' : '0.5rem 1rem',
            textAlign: 'center'
          }}
        >
          Guide for Authors
        </button>
        <input className="searchInput" placeholder={'Search'} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <LoadingBar
        color="#058181"
        height={5}
        ref={loadingBarRef}
        style={{
          display: 'flex',
          position: 'absolute', // Position at the bottom
          top: 'unset' // Unset the top position
        }}
      />
      <div className="subPage">{renderSubPage()}</div>
      <div className="footer">
        <div className="footer1">
          <div className="importantLinks">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="socialLinks">
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
  );
}
