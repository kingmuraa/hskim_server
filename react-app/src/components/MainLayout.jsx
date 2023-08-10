import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Kakaomap from "./Kakaomap";


const MainLayout = ({ children }) => {
    return <div>
        <Header />
        {children}
        <Kakaomap />
        <Footer />
    </div>;
    
};

export default MainLayout;