import React from 'react';
import Demo from '../../pages';

const Layout = ({children}) => {
    return (
        <div>
            <Demo/>
            {children}
        </div>
    );
};

export default Layout;