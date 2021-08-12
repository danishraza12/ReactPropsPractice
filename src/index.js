import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard approve="Approve" reject="Reject">
                <CommentDetail
                    author="Danish"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard approve="Approve" reject="Reject">
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    content="Interesting content!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard approve="Approve" reject="Reject">
                <CommentDetail
                    author="Sam"
                    timeAgo="Yesterday at 3:00PM"
                    content="Great blog!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard approve="Approve All" reject="Reject All">
                <h4>Alert!</h4>
                <div>
                    Are you sure you want to Approve/Reject all?
                </div>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)