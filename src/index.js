import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                author = "Tom" 
                timeAgo = "Today at 4:45PM" 
                userContent = "Nice blog post" 
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author = "Sam" 
                timeAgo = "Today at 2:00AM" 
                userContent = "I don't understand."
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author = "Gus" 
                timeAgo = "Yesterday at 5:00PM" 
                userContent = "Great Info; Thanks for sharing"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author = "Roy" 
                timeAgo = "Yesterday at 1:30PM" 
                userContent = "Thumbs up!"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    )      
};

ReactDOM.render(<App />, document.querySelector('#root'));

// div className = "comment" represents one single comment by itself.