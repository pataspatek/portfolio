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
                            <Link to="/about" className="activity-link">Learn more...</Link>
                        </div>
                    </div>
                </div>
                <div className="activity-img-container">
                    <img className="activity-img" src="../../assets/activity-img.jpg" alt="activity-picture" />
                </div>
            </div>
        </div>
    )
}


export default Activity;