import React from 'react';
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/33/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_es-MX_PVD5921._CB415896413_.jpg" alt=""/>

                <div className="home__row">
                    <Product 
                        id="123456"
                        title={"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"} 
                        price={29.99}
                        image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScpS9dtMChvpksbeqyLbv_CJ0dZuOPK81mmpFhfAly1vEzYBSt"
                        rating={4}/>
                    <Product
                        id="454678"
                        title='Computer Microphone MAONO AU-903 Podcast USB Condenser Mic with Switchable Polar Patterns & Mute Button,Zero-Latency Monitoring,Plug and Play for Recording,YouTube,Podcast,Gaming,Skype,Video' 
                        price={124.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51hqotgAmzL._AC_SL1000_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="65497"
                        title='2021 AutoFocus 1080P Webcam with Microphone and Privacy Cover, NexiGo Business Streaming USB Web Camera' 
                        price={54.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/719pO3I%2BoxL._AC_SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="78998"
                        title='Elgato Key Light, Professional Studio LED Panel With 2800 Lumens, Color Adjustable, App-Enabled, for Mac/Windows/iPhone/Android, Metal Desk Mount Copy' 
                        price={199.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51N4UbsWdlL._AC_SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="456787"
                        title='Elgato Stream Deck - Live Content Creation Controller with 15 Customizable LCD Keys, Adjustable Stand, for Windows 10 and macOS 10.13 or Late' 
                        price={149.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/710R9YpV9nL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="668768"
                        title='LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)' 
                        price={549.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
