import { Link } from 'react-router-dom';

import '../styles/activity.css';
import activities from '../../assets/ActivitiesList';


function Activity( {activityNumber} ) {
    return (
        <div className="activity-container">
            <div className={`activity ${activityNumber % 2 === 1 ? 'odd-activity' : ""}`}>
                <div className="activity-content">
                    <div className="activity-description">
                        <h1 className="activity-title">{activities[activityNumber]["name"]}</h1>
                        <p className="activity-subtitle">
                            {activities[activityNumber]["description"]}
                        </p>
                    </div>
                    <div className="activity-links-container">
                        <div className="activity-link-item">
                            <Link to={activities[activityNumber]["linkTo"]} className="activity-link">Learn more...</Link>
                        </div>
                    </div>
                </div>
                <div className="activity-icon-container">
                    <svg className="activity-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d={activities[activityNumber]["iconPath"]}/>
                    </svg>
                </div>
            </div>
        </div>
    )
}


export default Activity;