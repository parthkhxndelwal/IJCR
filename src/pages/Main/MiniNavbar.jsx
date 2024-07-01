import React, { useState } from 'react';
import Home from './subPages/Home';
import EditorialTeam from './subPages/EditorialTeam';
import ArticlesAndIssues from './subPages/ArticlesAndIssues';
import Publish from './subPages/Publish';
import GuideForAuthors from './subPages/GuideForAuthors';

export default function MiniNavbar() {
    const [query, setQuery] = useState('');
    const [subPage, chooseSubPage]=useState('Home')
    const renderSubPage = () => {
        switch(subPage) {
            case 'Home':
                return <Home />;
            case 'Editorial Team':
                return <EditorialTeam />;
            case 'Articles and Issues':
                return <ArticlesAndIssues />;
            case 'Publish':
                return <Publish />;
            case 'Guide for Authors':
                return <GuideForAuthors />;
            default:
                return <Home />;
        }
    };
    return (
        <>
            <div className="MiniNavbar">
                <button className="MiniNavButton" onClick={()=>chooseSubPage('Home')}>
                    Home
                </button>
                <button className="MiniNavButton" onClick={()=>chooseSubPage('Editorial Team')}>
                    Editorial Team ↗
                </button>
                <button className='MiniNavButton' onClick={()=>chooseSubPage('Articles and Issues')}>
                    Articles & Issues
                </button>
                <button className='MiniNavButton' onClick={()=>chooseSubPage('Publish')}>
                    Publish
                </button>
                <button className='MiniNavButton' onClick={()=>{window.open('https://ijcres.in/call_for_paper/Call-for-Paper-IJCR.pdf#zoom=25', '_blank')}}>
                    Submit your Article ↗
                </button>
                <button className='MiniNavButton' onClick={()=>chooseSubPage('Guide for Authors')} >
                    Guide for Authors
                </button>
                <input className='searchInput' placeholder={'Search'} type="text" value={query} onChange={(e)=> setQuery(e.target.value)}/>
                
            </div>
            {renderSubPage()}

        </>
    )
}

