import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import Toolbar from "./components/RespondingToEvents/Toolbar";
import Counter from "./components/StateAsSnapshot/Counter";
import Form from "./components/StateAsSnapshot/Form";
import Gallery from "./components/States/Gallery";
import Form2 from "./components/ReactingToInputWithState/Form";
import Page from "./components/PassingDataDeeplyWithContext/Page";
import ProfilePage from "./components/PassingDataDeeplyWithContext/ProfilePage";
import TaskApp from "./components/ScalingUpWithReducerAndContext/TaskApp";
import Video from "./components/SynchronizingWithEffects/VideoPlayer";
import { NavBar } from "./components/NavBar";

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
                <Route element={<NavBar />}>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route
                        path="filter-table"
                        element={<FilterableProductTable products={PRODUCTS} />}
                    />
                    <Route path="responding-events" element={<Toolbar />} />
                    <Route path="states" element={<Gallery />} />
                    <Route
                        path="states-as-snapshot"
                        element={
                            <>
                                <Counter />
                                <Form />
                            </>
                        }
                    />
                    <Route
                        path="reacting-to-input-with-state"
                        element={
                            <>
                                <Form2 />
                                <Form2 />
                                <Form2 />
                            </>
                        }
                    />
                    <Route
                        path="passing-data-deeply-with-context"
                        element={
                            <>
                                <Page />
                                <ProfilePage />
                            </>
                        }
                    />
                    <Route
                        path="scaling-up-with-reducer-and-context"
                        element={<TaskApp />}
                    />
                    <Route
                        path="synchronizing-with-effects"
                        element={<Video />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
