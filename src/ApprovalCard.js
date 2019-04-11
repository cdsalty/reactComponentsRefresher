import React from 'react';

const ApprovalCard = (props) => {
  // console.log(props);
  console.log(props.children); //This shows us the react component itself so we know we can call on it below.
    return (
      <div className = "ui card">
        <div className = "content">{props.children}</div>
        <div className = "extra content">
          <div className = "ui two buttons">
            <div className = "ui basic green button">Approve</div>
            <div className = "ui basic red button">Reject</div>
          </div>
        </div>
      </div>
    );
};

export default ApprovalCard;


/*
replaced...
<div className = "content">Are you sure?</div>
with:
<div className = "content">{props.children}</div>
because we found this in our console.log on the functional component, itself.
*/