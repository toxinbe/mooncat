// app.js
import React from "react";
import ReactDOM from "react-dom/client"; // Sử dụng ReactDOM.createRoot cho React 18+
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Nhập BrowserRouter
import CustomLayout from "./components/CustomLayout.jsx"; // Nhập component từ file .jsx

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <CustomLayout>trang chủ</CustomLayout>
                            </>
                        }
                    />
                    <Route
                        path="/ahihi"
                        element={
                            <>
                                <CustomLayout>ahihi</CustomLayout>
                            </>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

// Sử dụng ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
