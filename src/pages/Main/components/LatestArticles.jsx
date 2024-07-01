import React from 'react'
import { useState } from 'react';
import ArticleCard from './ArticleCard';
export default function LatestArticles() {
    const [displayBy, setDisplayBy] = useState('Latest');
    // change it accordingly to 'Latest, Citation, Downloads, Popularity'
    //Pending
    return (
        <div className="articles">
            <h1>Articles</h1>
            <div className="NavDisplayBy">
                <button className='displayByButton' onClick={()=>setDisplayBy('Latest')} style={displayBy=='Latest'?{border:'1px solid #006769', fontWeight:'bold'}:{borderBottom:'none', transform:'scale(0.8)'}}>
                    Latest Published
                </button>
                <button className='displayByButton' onClick={()=>setDisplayBy('Citation')} style={displayBy=='Citation'?{border:'1px solid #006769', fontWeight:'bold'}:{borderBottom:'none', transform:'scale(0.8)'}}>
                    Top Cited
                </button>
                <button className='displayByButton' onClick={()=>setDisplayBy('Downloads')} style={displayBy=='Downloads'?{border:'1px solid #006769', fontWeight:'bold'}:{borderBottom:'none', transform:'scale(0.8)'}}>
                    Most Downloaded
                </button>
                <button className='displayByButton' onClick={()=>setDisplayBy('Popularity')} style={displayBy=='Popularity'?{border:'1px solid #006769', fontWeight:'bold'}:{borderBottom:'none', transform:'scale(0.8)'}}>
                    Most Popular
                </button>
            </div>
            <div className="articleContainer">
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </div>

        </div>
    )
}
