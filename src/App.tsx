import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import HomeButtonWrapper from "./components/HomeButtonWrapper";
import Toolbar from "./components/RespondingToEvents/Toolbar";
import Counter from "./components/StateAsSnapshot/Counter";
import Form from "./components/StateAsSnapshot/Form";
import Gallery from "./components/States/Gallery";
import Form2 from "./components/ReactingToInputWithState/Form";
import Page from "./components/PassingDataDeeplyWithContext/Page";
import ProfilePage from "./components/PassingDataDeeplyWithContext/ProfilePage";

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export type Product = {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
};

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="filter-table">filter-table</Link>
                            </li>
                            <li>
                                <Link to="responding-events">
                                    responding-events
                                </Link>
                            </li>
                            <li>
                                <Link to="states">states</Link>
                            </li>
                            <li>
                                <Link to="states-as-snapshot">
                                    states-as-snapshot
                                </Link>
                            </li>
                            <li>
                                <Link to="reacting-to-input-with-state">
                                    reacting-to-input-with-state
                                </Link>
                            </li>
                            <li>
                                <Link to="passing-data-deeply-with-context">
                                    passing-data-deeply-with-context
                                </Link>
                            </li>
                        </ul>
                    }
                />
                <Route
                    path="filter-table"
                    element={
                        <HomeButtonWrapper>
                            <FilterableProductTable products={PRODUCTS} />
                        </HomeButtonWrapper>
                    }
                />
                <Route
                    path="responding-events"
                    element={
                        <HomeButtonWrapper>
                            <Toolbar />
                        </HomeButtonWrapper>
                    }
                />
                <Route
                    path="states"
                    element={
                        <HomeButtonWrapper>
                            <Gallery />
                        </HomeButtonWrapper>
                    }
                />
                <Route
                    path="states-as-snapshot"
                    element={
                        <HomeButtonWrapper>
                            <Counter />
                            <Form />
                        </HomeButtonWrapper>
                    }
                />
                <Route
                    path="reacting-to-input-with-state"
                    element={
                        <HomeButtonWrapper>
                            <Form2 />
                            <Form2 />
                            <Form2 />
                        </HomeButtonWrapper>
                    }
                />
                <Route
                    path="passing-data-deeply-with-context"
                    element={
                        <HomeButtonWrapper>
                            <Page />
                            <ProfilePage />
                        </HomeButtonWrapper>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
