import React from 'react';
import './index.css';

const Home = () => {
    return (
    <section>
        <h1 className="title">Welcome to DnD Cards</h1>
        <article className="block">
            <p className="text">The purpose of this application is to create cards for Dungeon & Dragons.</p>
            <p className="text">You can use them through the application or print them as actual cards.</p>
            <p className="text">All the info is stored locally, so no syncing happens between mobile and desktop.</p>
        </article>
    </section>
    );
};

export default Home;