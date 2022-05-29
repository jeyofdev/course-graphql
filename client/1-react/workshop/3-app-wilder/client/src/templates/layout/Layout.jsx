import React from 'react';
import * as styled from './Layout.styled';
import { LayoutType } from '../../types';

const Layout = ({ children }: LayoutType) => {
    return (
        <styled.Main>
            <styled.Header>
                <styled.Container>
                    <h1>Users Book</h1>
                </styled.Container>
            </styled.Header>

            <styled.Container>{children}</styled.Container>

            <styled.Footer>
                <styled.Container>
                    <p>&copy; 2020 jeyofdev</p>
                </styled.Container>
            </styled.Footer>
        </styled.Main>
    );
};

export default Layout;
