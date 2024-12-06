import React from 'react';
import './index.css';

const Home = () => {
    return (
    <section>
        <h1 className="title">Welcome to DnD Cards</h1>
        <article className="block">
            <h2>Sign up</h2>
            <p className="text">Make sure to sign up to save your assets and be able to re-use them at a later point in time.</p>
        </article>
        <article className="block">
            <h2>Purpose</h2>
            <p className="text">The purpose of this app is to create cards for Dungeon & Dragons.</p>
            <p className="text">You can use them through the app or print them as actual cards.</p>
        </article>
    </section>
    );
};

export default Home;