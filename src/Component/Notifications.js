import React from 'react';
import { faker } from '@faker-js/faker';

const feed = () => ({
    postId: faker.string.uuid(),
    userName: faker.internet.userName(),
    avatar: faker.image.avatar(),
    image: faker.image.url(),
    postDate: faker.internet.emoji(),
    place: faker.location.country()
});

const Notifications = () => {
    const feeds = Array.from({ length: 10 }, feed)

    return (
        <>
            {feeds.map((alfeed) => (
                <>
                    <div>
                        <div className="profile-photo">
                            <img src="images/profile-2.jpg" />
                        </div>
                        <div className="notification-body">
                            <b>Keke Benjamin</b> accepted your friend request
                            <small className="text-muted">2 DAYS AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src="images/profile-3.jpg" />
                        </div>
                        <div className="notification-body">
                            <b>John Doe</b> commented on your post
                            <small className="text-muted">1 HOUR AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src="images/profile-4.jpg" />
                        </div>
                        <div className="notification-body">
                            <b>Mary Oppong</b> and <b>283 others </b> liked your post
                            <small className="text-muted">4 MINUTES AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src="images/profile-5.jpg" />
                        </div>
                        <div className="notification-body">
                            <b>Doris Y. Lartey</b> commented on a post you are tagged in
                            <small className="text-muted">2 DAYS AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src="images/profile-6.jpg" />
                        </div>
                        <div className="notification-body">
                            <b>Donald Trump</b> commented on a post you are tagged in
                            <small className="text-muted">1 HOUR AGO</small>
                        </div>
                    </div>
                    <div>
                        <div className="profile-photo">
                            <img src="images/profile-7.jpg" />
                        </div>
                        <div className="notification-body">
                            <b>jane Doe</b> commented on your post
                            <small className="text-muted">1 HOUR AGO</small>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}
export default Notifications;