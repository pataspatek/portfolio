import { Link } from 'react-router-dom';

import '../styles/activity.css';

function Activity( {activityNumber, activity} ) {
    return (
        <div className="activity-container">
            <div className={`activity ${activityNumber % 2 === 1 ? 'odd-activity' : ""}`}>
                <div className="activity-content">
                    <div className="activity-description">
                        <h1 className="activity-title">{activity.name}</h1>
                        <p className="activity-subtitle">
                            {activity.description}
                        </p>
                    </div>
                    <div className="activity-links-container">
                        <div className="activity-link-item">
                            <Link to={activity.linkTo} className="activity-link">Learn more...</Link>
                        </div>
                    </div>
                </div>
                <div className="activity-icon-container">
                    <svg className="activity-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d={activity.iconPath}/>
                    </svg>
                </div>
            </div>
        </div>
    )
}


export default Activity;