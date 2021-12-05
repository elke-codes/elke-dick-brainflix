import React from 'react';
import Avatar from '../Avatar/Avatar';
// import Button from './Button/Button';
import Button from '../Button/Button';
import "./CommentForm.scss";


const CommentForm = (props) => {
  return (

    <form action="" className="Form">
            
              <Avatar />
              <div className="Form__input">
                  <label className="Form__input-title" htmlFor="comment">JOIN THE CONVERSATION</label>
                  <input
                    type="text"
                    name="comment"
                    placeholder="Add a new comment"
                    id="comment"
                    className="Form__input-field"/>
                  <Button buttonText="COMMENT"/>
              </div>
            
    </form>
 


  );
};

export default CommentForm;
