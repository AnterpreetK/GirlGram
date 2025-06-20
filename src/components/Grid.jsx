import { workoutProgram as training_plan } from '../utils/index.js'
import WorkoutCard from './WorkoutCard.jsx'

/* Grid contains the grid for the 30 days worth of workouts and also has the logic
related to it's interactivity -> like user can save, click on a different 
workout and progress through them and all that good stuff */

export default function Grid(){
    const isLocked = true
    const selectedWorkout = 0

    return (
        <div className="training-grid-plan">
            {Object.keys(training_plan).map((workout, workoutIndex) => {
                const type = workoutIndex % 3 === 0 ? 'Push' : workoutIndex % 3 === 1 ? 'Pull' : 'Legs'

                const trainingPlan = training_plan[workoutIndex]  
                
                if(workoutIndex === selectedWorkout) {
                    return (
                        <WorkoutCard key={workoutIndex} />
                    )
                }

                return(
                    <button className={'card plan-card ' + (isLocked ? 'inactive' : '')} key={workoutIndex}>
                        <div className='plan-card-header'>
                            <p>Day {((workoutIndex / 8) <= 1) ? '0' + (workoutIndex + 1) : workoutIndex + 1} </p>
                        </div>

                        {isLocked ? (
                            // if locked
                            <i className='fa-solid fa-lock'></i>
                        ) : (
                            // else this is push
                            workoutIndex % 3 === 0 ? (
                                <i className='fa-solid fa-dumbbell'></i>
                            ) : (
                                // else if pull
                                workoutIndex % 3 === 1 ? (
                                    <i className='fa-solid fa-weight-hanging'></i>
                                ) : (
                                    // else legs
                                    <i className='fa-solid fa-bolt'></i>
                                )
                            )
                        )}
                        <div className='plan-card-header'>
                            <h4><b>{type}</b></h4>
                        </div>
                    </button>
                )
            })}
        </div>
        // we'll render modal and workout cards here
    )
}