import '../../styles/Layout.module.css'
import Demo from '../../pages';

const Layout = ({children}) => {
    return (
        <div className="page-container">
            <Demo/>
            {children}
        </div>
    );
};

export default Layout;