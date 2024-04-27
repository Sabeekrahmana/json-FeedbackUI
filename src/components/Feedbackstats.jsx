import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

const Feedbackstats = () => {

  const {feedback} = useContext(FeedbackContext)

//  Calculate the Average---->
const average = feedback.reduce((acc,cur) => {
    return acc + cur.rating;
},0) / feedback.length


 const  averages = average.toFixed(1).replace(/[.,]0$/,'');

  return (  
    <>
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(averages) ? 0 : averages}</h4>
    </div>
    </>
  )
}

Feedbackstats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default Feedbackstats;