import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui.container.comments d-block">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src="" alt="avatar" />
                </a>
                <div className = "content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 2:06PM</span>
                    </div>
                    <div className="text">
                        Nice blog post!
                    </div>
                </div>
            </div>
        </div>
    )
        
};

ReactDOM.render(<App />, document.querySelector('#root'));

// div className = "comment" represents one single comment by itself.