import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import { Navbar, NavbarBrand } from "shards-react";
import styled from "styled-components";

export function Layout({ children }) {
    return (
        <>
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="#">LAMINED</NavbarBrand>
            </Navbar>
            <div>{children}</div>
        </>
    )
}

export function AccountLayout({ children }) {
    return (
        <>
            <Background></Background>
            <Content>{children}</Content>
        </>
    )
}

const Background = styled.div`
    width:50vw;
    height: 100vh;
    display: inline-block;
    background: red;
`

const Content = styled.div`
    width:30vw;
    height: 100vh;
    display: inline-block;
    background: blue;
`

export default { AccountLayout, Layout }