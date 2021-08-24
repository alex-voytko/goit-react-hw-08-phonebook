import React from 'react';
import { authSelectors, authOperations } from '../../redux/auth';
import { connect } from 'react-redux';
import defaultAvatar from '../../images/default-user-avatar.png';

const UserMenu = ({ avatar, name, onLogout }) => (
    <>
        <div>
            <div className="avatar-container">
                <img src={avatar} alt="" width="32" className="avatar-img" />
            </div>
            <span>{name}, welcome!</span>
            <button type="button" onClick={onLogout} className="logout-button">
                Logout
            </button>
        </div>
    </>
);

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
