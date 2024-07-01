import React from 'react'

export default function ArticleCard() {
    const src='https://picsum.photos/1200/800'
    const tagline='Research about a random topic...'
    const description='This research was conducted about...'
    return (
        <div className="articleCard" href='#'>
            <img src={src} alt={description} />
            <h4>{tagline}</h4>
            <p>{description}</p>
            <a href="#">View PDF</a>
        </div>
    )
    
}
