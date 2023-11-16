import React from 'react';
import UsersComponent from './Story';
import FeedComp from './Feed';
const { faker } = require('@faker-js/faker');

class MiddleBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                userId: faker.string.uuid(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
                password: faker.internet.password(),
                birthdate: faker.date.birthdate(),
                registeredAt: faker.date.past()
            }
        }
    }
    render() {
        return <>
            <div className="middle">
                {/*----------------- STORIES ------------------*/}
                <div className="stories">
                    <UsersComponent />
                </div>
                {/*----------------- END OF STORIES ------------------*/}
                <form className="create-post">
                    <div className="profile-photo">
                        <img src="images/profile-1.jpg" />
                    </div>
                    <input
                        type="text"
                        placeholder="What's on your mind, Diana?"
                        id="create-post"
                    />
                    <input
                        type="submit"
                        defaultValue="Post"
                        className="btn btn-primary"
                    />
                </form>
                {/*----------------- FEEDS -------------------*/}
                <div className="feeds">
                    {/*----------------- FEED 1 -------------------*/}
                    <FeedComp />
                    {/*-------------- END OF FEED ---------------*/}
                </div>
                {/*----------------------------- END OF FEEDS ----------------------------------*/}
            </div>
        </>
    }
}
export default MiddleBody;



