import Activity from './Activity';

import activities from '../activities-list';

function Summary() {          

    return (
        <div>
            {activities.map((activity, index) => (
                <Activity key={index} activityNumber={index} className={index % 2 === 1 ? 'odd-activity' : ""} />
            ))}
        </div>
    )
}

export default Summary;
