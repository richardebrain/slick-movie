
import React, { ReactComponentElement, ReactElement } from 'react'
import Header from './Header'
type Props = {
    children: ReactElement
}

const Layout: React.FC<Props> = ({ children }) => (
    <div className=' font-DmSans '>
        <Header />
        {children}
    </div>
)


export default Layout