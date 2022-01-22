import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList.js';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
      {id: 'cg1', text: 'Finish the course'},
      {id: 'cg2', text: 'Learn all about the course'},
      {id: 'cg3', text: 'Help other students'}
  ]);

const addNewGoalHandler = (newGoal) => {
  //setCourseGoals(courseGoals.concat(NewGoal));
  setCourseGoals((prevCourseGoals) => {
    return prevCourseGoals.concat(newGoal);
  });
}

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
