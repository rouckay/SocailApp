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

const FeedComp = () => {
    const feeds = Array.from({ length: 10 }, feed)

    return (
        <>
            {feeds.map((alfeed) => (
                <div className="feed" >
                    <div className="head">
                        <div className="user">
                            <div className="profile-photo">
                                <img src={alfeed.avatar} />
                            </div>
                            <div className="ingo">
                                <h3>{alfeed.userName}</h3>
                                <small>{alfeed.place}, {alfeed.postDate} MINUTES AGO</small>
                            </div>
                        </div>
                        <span className="edit">
                            <i className="uil uil-ellipsis-h" />
                        </span>
                    </div>
                    <div className="photo">
                        <img src={alfeed.image} />
                    </div>
                    <div className="action-buttons">
                        <div className="interaction-buttons">
                            <span>
                                <i className="uil uil-heart" />
                            </span>
                            <span>
                                <i className="uil uil-comment-dots" />
                            </span>
                            <span>
                                <i className="uil uil-share-alt" />
                            </span>
                        </div>
                        <div className="bookmark">
                            <span>
                                <i className="uil uil-bookmark-full" />
                            </span>
                        </div>
                    </div>
                    <div className="liked-by">
                        <span>
                            <img src={alfeed.avatar} />
                        </span>
                        <span>
                            <img src={alfeed.avatar} />
                        </span>
                        <span>
                            <img src={alfeed.avatar} />
                        </span>
                        <p>
                            Liked by <b>{alfeed.userName}</b> and <b>2,323 others</b>
                        </p>
                    </div>
                    <div className="caption">
                        <p>
                            <b>{alfeed.userName}</b> Lorem ipsum dolor sit quisquam eius.{" "}
                            <span className="harsh-tag">#lifestyle</span>
                        </p>
                    </div>
                    <div className="comments text-muted">View all 277 comments</div>
                </div>
            ))}
        </>
    )
}
export default FeedComp;