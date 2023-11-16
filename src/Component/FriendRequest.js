import { faker } from '@faker-js/faker';
import React from 'react';

class FriendRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return <>
            <div className="friend-requests">
                <h4>Requests</h4>
                {/*--- REQUEST 1---*/}
                <FriendsReq />

            </div>
        </>
    }
}
export default FriendRequest;

const reqObj = () => ({
    avatar: faker.image.avatar(),
    User: faker.internet.userName(),
    mutualFriend: faker.internet.ipv4()
})
const FriendsReq = () => {
    const Allreq = Array.from({ length: 3 }, reqObj);

    return (
        <>
            {Allreq.map((resp) => (<div className="request">
                <div className="info">
                    <div className="profile-photo">
                        <img src={resp.avatar} />
                    </div>
                    <div>
                        <h5>{resp.User}</h5>
                        <p className="text-muted">{resp.mutualFriend} mutual friends</p>
                    </div>
                </div>
                <div className="action">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn">Decline</button>
                </div>
            </div>))}
        </>
    )
}