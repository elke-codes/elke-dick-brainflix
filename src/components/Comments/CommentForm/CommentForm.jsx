import React from 'react';
import Avatar from '../../Avatar/Avatar';
import "./CommentForm.scss";


const CommentForm = () => {
  return (
    <form action="" className="Form">
      <Avatar />
      {/* <div class="Avatar avatar-form">
              <div class="avatar__placeholder">
                <img
                  src="./assets/images/Mohan-muruge.jpg"
                  alt="close-up from a man with an excellent moustache, looking sternly to the left, on a purple background"
                  class="avatar__image"
                />
              </div>
            </div> */}
            {/* <div class="Form__field-container"> */}

              <div className="Form__input">

                <label className="Form__input-title"htmlfor="comment">JOIN THE CONVERSATION</label>

                <input
                  type="text"
                  name="comment"
                  placeholder="Add a new comment"
                  id="comment"
                  className="Form__input-field"/>
              </div>
          {/* </div> */}
    </form>
  );
};

export default CommentForm;


{/* <form class="comments__form">
            <!-- <div class="comments__form-identity"> -->
            <!-- avatar -->
            <div class="avatar avatar-form">
              <div class="avatar__placeholder">
                <img
                  src="./assets/images/Mohan-muruge.jpg"
                  alt="close-up from a man with an excellent moustache, looking sternly to the left, on a purple background"
                  class="avatar__image"
                />
              </div>
            </div>
            <div class="comments__field-container">
              <div class="comments__form-name">
                <!-- name label -->
                <label for="name">NAME</label>
                <!-- name input -->
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  class="comments__form-field"
                />
              </div>
              <!-- </div> -->
              <div class="comments__form-comment">
                <!-- comment label -->
                <label for="comment">COMMENT</label>
                <!-- comment input -->
                <input
                  type="text"
                  name="comment"
                  placeholder="Add a new comment"
                  id="comment"
                  class="comments__form-field"
                />
              </div>

              <button type="submit" class="button">COMMENT</button>
            </div>
          </form>
        <!-- </div> -->
        </div>

        <!-- for visualisation only, create with dom manipulation -->
        <div class="comment__container"></div> */}