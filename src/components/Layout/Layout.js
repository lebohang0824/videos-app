import Styles from './Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={Styles.container}>
            { children }
        </div>
    );
}

export default Layout;
