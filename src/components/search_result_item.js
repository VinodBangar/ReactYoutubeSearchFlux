import React from 'react';

const SearchResultItem = ({item:item})=>{
    
    const styles= {
        margin:'20px 0px',
        padding:'10px'
    }
    
    return (
        <a href={"https://www.youtube.com/watch?v="+item.id.videoId} target="_blank">
            <div className="video-list media panel panel-default" style={styles}>
                <div className="media-left">
                    <img className="media-object" src={item.snippet.thumbnails.default.url} />
                </div>    
                <div className="media-body">
                    <div className="media-heading">
                        {item.snippet.title }
                    </div>
                </div>
            </div>
        </a>
    );
};

export default SearchResultItem;