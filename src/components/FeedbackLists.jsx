import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
// import  PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackLists = ({ handleDelete }) => {
  
  const { feedback,isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p className="nolists">No FeedBack Yet</p>;
  }

  return isLoading ?(
    <Spinner />
    ):
    (
  //  Animation----->
  <AnimatePresence>
    <div className="feedback-list">
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
          />
        </motion.div>
      ))}
    </div>
  </AnimatePresence>
)


  // without Animation----->

  // return (
  //   <div className='feedback-list'>
  //           {feedback.map((item) =>(
  //        <FeedbackItem key={item.id}
  //         item={item}
  //         handleDelete = {handleDelete} />
  //         ))}
  //   </div>
  // );
};

// FeedbackLists.propTypes = {
//   feedback : PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   )
// }

export default FeedbackLists;
