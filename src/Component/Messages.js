import { faker } from '@faker-js/faker';
import React from 'react';

class Messages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return <>
            <div className="messages">
                <div className="heading">
                    <h4>Messages</h4>
                    <i className="uil uil-edit" />
                </div>
                {/*---------- SEARCH BAR ------------*/}
                <div className="search-bar">
                    <i className="uil uil-search" />
                    <input
                        type="search"
                        placeholder="Search messages"
                        id="message-search"
                    />
                </div>
                {/*---------- MESSAGES CATEGORY ------------*/}
                <div className="category">
                    <h6 className="active">Primary</h6>
                    <h6>General</h6>
                    <h6 className="message-requests">Requests(7)</h6>
                </div>
                {/*---------- MESSAGE ------------*/}
                {/*--- MESSAGE ---*/}
                <Message />
                {/*--- MESSAGE ---*/}
            </div>
        </>
    }
}
export default Messages;

const mess = () => ({
    avatar: faker.image.avatar(),
    User: faker.internet.userName(),
    test: faker.internet.displayName(),
    time: faker.internet.domainName()
})

const Message = () => {
    const allMsg = Array.from({ length: 6 }, mess);
    return (
        <>
            {allMsg.map((msg) => (
                <div className="message">
                    <div className="profile-photo">
                        <img src={msg.avatar} />
                    </div>
                    <div className="message-body">
                        <h5>{msg.User}</h5>
                        <p className="text-muted">{msg.test}</p>
                    </div>
                </div>
            ))}
        </>
    )
}