import React from 'react';
import ClientsBrand from '../../Components/HomeItems/ClientsBrand/ClientsBrand';
import ClientsFeedback from '../../Components/HomeItems/ClientsFeedback/ClientsFeedback';
import Footer from '../../Components/HomeItems/Footer/Footer';
import Header from '../../Components/HomeItems/Header/Header/Header';
import Services from '../../Components/HomeItems/Services/Services';
import Works from '../../Components/HomeItems/Works/Works';

const Home = () => {
    return (
        <>
            <Header />
            <ClientsBrand />
            <Services />
            <Works />
            <ClientsFeedback />
            <Footer />
        </>
    );
};

export default Home;