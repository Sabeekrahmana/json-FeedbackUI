import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { v4 as  uuidv4} from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setISLoading] = useState(true)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch Feedback------>
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback`);
    const data = await response.json();
    setFeedback(data);
    setISLoading(false)
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch(`/feedback` , {
      method : 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })

    newFeedback.id = uuidv4();
    const data = await response.json()  
    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you want to delete this ?")) {
      await fetch(`/feedback/${id}`, {method: 'DELETE'})
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    if (window.confirm("Are you want to Edit this ?"))
      setFeedbackEdit({
        item,
        edit: true,
      });
  };

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`,{
      method : 'PUT',
      headers: {
          'Content-type' : 'application/json'
      },
      body: JSON.stringify(updItem)
    })


    const data = await response.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
