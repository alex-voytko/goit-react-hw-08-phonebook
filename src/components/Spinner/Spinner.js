import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="spinner-container">
            <Loader
                type="Puff"
                color="#a34a0e"
                height={50}
                width={50}
                timeout={3000}
            />
        </div>
    );
};
export default Spinner;
