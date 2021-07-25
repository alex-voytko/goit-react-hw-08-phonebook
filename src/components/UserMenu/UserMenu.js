import React from 'react';

const UserMenu = ({ avatar, name, onLogout }) => (
    <>
        <div style="">
            <img src={avatar} alt="" width="32" style="" />
            <span style="">Welcome, {name}</span>
            <button type="button" onClick={onLogout}>
                Logout
            </button>
        </div>
    </>
);

export default UserMenu;
