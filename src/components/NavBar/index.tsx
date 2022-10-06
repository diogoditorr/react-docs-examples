import React from "react";
import { Link, Outlet } from "react-router-dom";

export function NavBar() {
    return (
        <>
            <nav
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1rem",
                }}
            >
                <Link to="/">Home</Link>
                <Link to="filter-table">filter-table</Link>
                <Link to="responding-events">responding-events</Link>
                <Link to="states">states</Link>
                <Link to="states-as-snapshot">states-as-snapshot</Link>
                <Link to="reacting-to-input-with-state">
                    reacting-to-input-with-state
                </Link>
                <Link to="passing-data-deeply-with-context">
                    passing-data-deeply-with-context
                </Link>
                <Link to="scaling-up-with-reducer-and-context">
                    scaling-up-with-reducer-and-context
                </Link>
                <Link to="synchronizing-with-effects">
                    synchronizing-with-effects
                </Link>
            </nav>
            <Outlet />
        </>
    );
}
