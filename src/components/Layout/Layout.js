import {
    Container
} from '@material-ui/core';
import Head from "next/head"
import Styles from './Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <Container maxWidth="sm">
                { children }
            </Container>
        </>
    );
}

export default Layout;
