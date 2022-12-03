import React from 'react';

const Button = ({ children }) => {
    return (

        <button className="btn capitalize btn-primary bg-gradient-to-r from-secondary to-primary text-white">
            {children}
        </button>

    );
};

export default Button;