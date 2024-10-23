import React from 'react';

const Home = ({ history }) => {
    const gotoMessage = () => {
        location.href = '/message?title=Care&description=Care for the needy';
        //history.push('/message?title=Care&description=Care for the needy');
    };

    return (
        <div>
            <h1>You are welcome to the world of PURE SSR</h1>
            <button onClick={gotoMessage}>Go to Message</button>
        </div>
    );
};

export default Home;