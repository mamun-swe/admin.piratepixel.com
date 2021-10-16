import React, { useState } from 'react'
import './style.scss'
import { Switch, Route } from 'react-router-dom'
import { routes } from '../../routes/Index'

import Navbar from '../../components/navbar/Index'
import Drawer from '../../components/drawer/Index'

// --- 404 ---
import FourOFour from '../404/Index'

const Index = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="master">
            <Navbar menu={true} drawer={() => setOpen(true)} />
            <Drawer routes={routes} show={open} onHide={() => setOpen(false)} />

            <div className="main">
                <Switch>

                    {routes && routes.map((item, i) =>
                        item.name && item.path ?
                            <Route
                                key={i}
                                exact={item.exact}
                                path={item.path}
                                component={item.component}
                            />
                            : item.child && item.child.length ? item.child.map((child, j) =>
                                <Route
                                    key={j}
                                    exact={child.exact}
                                    path={child.path}
                                    component={child.component}
                                />
                            ) : null)
                    }

                    <Route path="*" component={FourOFour} />

                </Switch>
            </div>
        </div>
    )
}

export default Index;