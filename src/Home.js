import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_OneMicStandS2LaunchSG/f9fd01f2-5ac9-41b9-aa02-4217c2450d57._UR3000,600_SX1500_FMwebp_.jpeg" alt="" />
            
            <div className="home_row">  
                <Product id={123} rating={3} title="laptop extra cable" price={29.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
                <Product rating={4} id={12333} title="One Plus" price={999.99} image="https://m.media-amazon.com/images/I/71AWhiptouS._AC_SY200_.jpg"/>
                
            </div>
            <div className="home_row">
              <Product rating={2} id={12332} title="UseLess Mop" price={9.99} image="https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg"/>
              <Product rating={4} id={12334} title="Watch winzz" price={59.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"/>
              <Product rating={3} id={12335} title="Mr.Loyal" price={99.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"/>
            </div>
            <div className="home_row">
               <Product rating={3} id={12336} title="Toys for Kids" price={149.99} image="https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg"/>
            </div>
        </div>
        </div>
    )
}

export default Home
