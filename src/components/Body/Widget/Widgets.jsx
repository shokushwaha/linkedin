import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget_article">
            <div className="widgets_articleleft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widget_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("ChatGPT", "Tops news -4k readers")}
            {newsArticle("Serenity", "Tops news -2k readers")}
            {newsArticle("Bitcoin hits new high", "Tops news - 1k readers")}
            {newsArticle("Mass Layoffs", "Tops news - 500 readers")}
        </div>
    )
}

export default Widgets
