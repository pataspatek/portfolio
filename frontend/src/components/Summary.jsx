import Activity from './Activity';

import '../styles/summary.css';

import activities from '../../assets/ActivitiesList';

function Summary() {          

    return (
        <div className="summary-container">
            {activities.map((activity, index) => (
                <Activity key={index} activityNumber={index} activity={activity}/>
            ))}
        </div>
    )
}

export default Summary;
