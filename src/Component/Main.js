import React from 'react';
import Nav from './Nav';
import MiddleBody from './MiddleBody';
import Messages from './Messages';
import FriendRequest from './FriendRequest';
import Notifications from './Notifications';
import { faker } from '@faker-js/faker';
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "index.js";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return (<>
            <Nav />
            {/*----------------------- MAIN ------------------------*/}
            <main>
                <div className="container">
                    {/*======================== LEFT ==========================*/}
                    <div className="left">
                        <a className="profile">
                            <div className="profile-photo">
                                <img src={faker.image.avatar()} />
                            </div>
                            <div className="handle">
                                <h4>{faker.internet.userName}</h4>
                                <p className="text-muted">@{faker.internet.userName()}</p>
                            </div>
                        </a>
                        {/* close button */}
                        <span id="close-btn">
                            <i className="uil uil-multiply" />
                        </span>
                        {/*------------------ SIDEBAR -----------------------*/}
                        <div className="sidebar">
                            <a className="menu-item active">
                                <span>
                                    <i className="uil uil-home" />
                                </span>
                                <h3>Home</h3>
                            </a>
                            <a className="menu-item">
                                <span>
                                    <i className="uil uil-compass" />
                                </span>
                                <h3>Explore</h3>
                            </a>
                            <a className="menu-item" id="notifications">
                                <span>
                                    <i className="uil uil-bell">
                                        <small className="notification-count">9+</small>
                                    </i>
                                </span>
                                <h3>Notifications</h3>
                                {/*------------------ NOTIFICATION POPUP --------------*/}
                                <div className="notifications-popup">

                                    <Notification />
                                </div>
                                {/*------------------ END NOTIFICATION POPUP --------------*/}
                            </a>
                            <a className="menu-item" id="messages-notification">
                                <span>
                                    <i className="uil uil-envelope-alt">
                                        <small className="notification-count">6</small>
                                    </i>
                                </span>
                                <h3>Messagse</h3>
                            </a>
                            <a className="menu-item">
                                <span>
                                    <i className="uil uil-bookmark" />
                                </span>
                                <h3>Bookmarks</h3>
                            </a>
                            <a className="menu-item">
                                <span>
                                    <i className="uil uil-chart-line" />
                                </span>
                                <h3>Analytics</h3>
                            </a>
                            <a className="menu-item" id="theme">
                                <span>
                                    <i className="uil uil-palette" />
                                </span>
                                <h3>Theme</h3>
                            </a>
                            <a className="menu-item">
                                <span>
                                    <i className="uil uil-setting" />
                                </span>
                                <h3>Settings</h3>
                            </a>
                        </div>
                        {/*----------------- END OF SIDEBAR ------------------*/}
                        <label htmlFor="create-post" className="btn btn-primary">
                            Create Post
                        </label>
                    </div>
                    {/*----------------- END OF LEFT ------------------*/}
                    {/*======================== MIDDLE ==========================*/}
                    <MiddleBody />
                    {/*======================== END OF MIDDLE ==========================*/}
                    {/*======================== RIGHT ==========================*/}
                    <div className="right">
                        <Messages />
                        {/*---------- END OF MESSAGES ------------*/}
                        {/*---------- FRIEND REQUESTS ------------*/}
                        <FriendRequest />
                    </div>
                </div>
                {/*====================== END OF RIGHT ==========================*/}
            </main>
            {/*================================================ THEME CUSTOMIZATION =============================================*/}
            <div className="customize-theme">
                <div className="card">
                    <h2>Customize your view</h2>
                    <p className="text-muted">
                        Manage your font size, color, and background.
                    </p>
                    {/*---------- FONT SIZES -----------*/}
                    <div className="font-size">
                        <h4>Font Size</h4>
                        <div>
                            <h6>Aa</h6>
                            <div className="choose-size">
                                <span className="font-size-1" />
                                <span className="font-size-2" />
                                <span className="font-size-3" />
                                <span className="font-size-4" />
                                <span className="font-size-5" />
                            </div>
                            <h3>Aa</h3>
                        </div>
                    </div>
                    {/*---------- PRIMARY COLORS -----------*/}
                    <div className="color">
                        <h4>Color</h4>
                        <div className="choose-color">
                            <span className="color-1 active" />
                            <span className="color-2" />
                            <span className="color-3" />
                            <span className="color-4" />
                            <span className="color-5" />
                        </div>
                    </div>
                    {/*-------- BACKGROUND COLORS ----------*/}
                    <div className="background">
                        <h4>Background</h4>
                        <div className="choose-bg">
                            <div className="bg-1 active">
                                <span />
                                <h5 htmlFor="bg-1">Light</h5>
                            </div>
                            <div className="bg-2">
                                <span />
                                <h5>Dim</h5>
                            </div>
                            <div className="bg-3">
                                <span />
                                <h5 htmlFor="bg-3">Lights Out</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}
export default Main;

const notif = () => ({
    avatar: faker.image.avatar(),
    User: faker.internet.userName(),
    time: faker.internet.port(),
    text: faker.internet.domainName() + faker.internet.displayName(),
});

const Notification = () => {
    const allNotif = Array.from({ length: 6 }, notif);
    return (
        <>
            {allNotif.map((notif) => (
                <div>
                    <div className="profile-photo">
                        <img src={notif.avatar} />
                    </div>
                    <div className="notification-body">
                        <b>{notif.User}</b> {notif.text}
                        <small className="text-muted">{notif.time} DAYS AGO</small>
                    </div>
                </div>
            ))}
        </>
    )
}