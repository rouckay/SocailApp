import { faker } from "@faker-js/faker";
const createRandomUser = () => ({
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    story: faker.image.url(),
    password: faker.internet.password(),
    birthdate: faker.date.past().toISOString().split('T')[0], // Convert to yyyy-mm-dd format
    registeredAt: faker.date.past().toISOString().split('T')[0], // Convert to yyyy-mm-dd format
});

const UsersComponent = () => {
    const users = Array.from({ length: 5 }, createRandomUser);

    return (
        <>
            {users.map((user, index) => (
                <div className="story" style={{ background: `url(${user.story})` }} >

                    <div className="profile-photo">
                        <img src={faker.image.url()} />
                    </div>
                    <p className="name">{faker.internet.userName()}</p>
                </div>
            ))}
        </>
    );
};

export default UsersComponent;