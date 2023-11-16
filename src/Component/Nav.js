import { faker } from '@faker-js/faker';
import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <>
                <nav>
                    <div className="container">
                        <h2 className="log">Rouckay</h2>
                        <div className="search-bar">
                            <i className="uil uil-search" />
                            <input
                                type="search"
                                placeholder="Search for creators, inspirations, and projects"
                            />
                        </div>
                        <div className="create">
                            <label className="btn btn-primary" htmlFor="create-post">
                                Create
                            </label>
                            <div className="profile-photo">
                                <img src={faker.image.avatar()} />
                            </div>
                            {/* menu button to show sidebar */}
                            <button id="menu-btn">
                                <i className="uil uil-bars" />
                            </button>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Nav;