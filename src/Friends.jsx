import React from 'react';
import { use } from 'react';
import Friend from './Friend';

const Friends = ({friendsPromise}) => {
    // console.log(friendsPromise);

    const friends = use(friendsPromise);
    // console.log(friends);

    return (
        <div className='card'>
            <h3>Friends: {friends?.length}</h3>
            {
                friends.map(friend => <Friend key={friend?.id} friend={friend} />)
            }
        </div>
    );
};

export default Friends;