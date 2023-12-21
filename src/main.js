import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Main = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const shouldShowContentSmallScreen = screenWidth < 767
    const shouldShowContentMediumScreen = screenWidth >= 768 && screenWidth < 1200
    const shouldShowContentLargeScreen = screenWidth >= 1200

    return (
        <div className='main'>
            {
                shouldShowContentSmallScreen &&
                <div className='main-container-mobo'>
                    <div className="part-1-mobo">
                        <img
                            src="/icons/main.jpg"
                            alt=""
                            height='210px'
                            width='auto'
                            style={{ borderRadius: '0.9rem 0.9rem 0rem 0rem' }}
                        />
                    </div>

                    <div className="part-2-mobo">
                        <div>

                            <span>Safe Driver</span>

                            <div className="icons-mobo">
                                <img
                                    className='border-mobo'
                                    src="/icons/mask.jpg"
                                    alt=""
                                />
                                <img
                                    className='border-mobo'
                                    src="/icons/money.jpg"
                                    alt=""
                                />
                                <img
                                    className='border-mobo'
                                    src="/icons/pay.jpg"
                                    alt=""
                                />
                                <img
                                    className='border-mobo'
                                    src="/icons/verified.jpg"
                                    alt=""
                                />
                            </div>

                        </div>

                        <div className='logo-mobo'>
                            <img
                                src="/icons/logo.jpg"
                                alt=""
                                height='50px'
                                width='150px'
                            />
                        </div>

                    </div>

                    <div className="part-3-mobo">
                        <div className='p3-mobo'>
                            <h1>
                                AED 80
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src="/icons/road.jpg"
                                    alt=""
                                    height='20px'
                                    width='25px'
                                    style={{ marginRight: '8px' }}
                                />
                                One-way
                            </div>
                        </div>
                        <div className='p3-mobo'>
                            <h1>
                                AED 150
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src="/icons/road.jpg"
                                    alt=""
                                    height='20px'
                                    width='25px'
                                    style={{ marginRight: '8px' }}
                                />
                                Two-way
                            </div>
                        </div>
                    </div>

                    <div className="part-4-mobo">
                        <div className='tick-container-mobo'>
                            <div>
                                <img
                                    src="/icons/tick.jpg"
                                    alt=""
                                    height='12px'
                                    width='15px'
                                    style={{ marginRight: '1rem' }}
                                />
                                Avoid spending on taxi fares
                            </div>

                            <div>
                                <img
                                    src="/icons/tick.jpg"
                                    alt=""
                                    height='12px'
                                    width='15px'
                                    style={{ marginRight: '1rem' }}
                                />
                                Available 24x7
                            </div>

                            <div>
                                <img
                                    src="/icons/tick.jpg"
                                    alt=""
                                    height='12px'
                                    width='15px'
                                    style={{ marginRight: '1rem' }}
                                />
                                Advance Booking Recommended
                            </div>

                        </div>
                    </div>

                    <div className="part-5-mobo">
                        <div className='iconmobo call-mobo'>
                            <FaPhoneAlt style={{ height: '1.5rem', width: '1.5rem' }} />
                        </div>

                        <div className='iconmobo wp-mobo'>
                            <FaWhatsapp style={{ height: '1.5rem', width: '1.5rem' }} />
                        </div>  

                        <div className='iconmobo tele-mobo'>
                            <FaTelegramPlane style={{ height: '1.5rem', width: '1.5rem' }} />
                        </div>
                    </div>

                </div>
            }
            {
                shouldShowContentMediumScreen &&
                <div className='main-container'>
                    <div className="part-1">
                        <img
                            src="/icons/main.jpg"
                            alt=""
                            height='310px'
                            width='240vw'
                            style={{ borderRadius: '0.9rem 0rem 0rem 0.9rem' }}
                        />
                    </div>

                    <div className="part-2">

                        <div className="sub-1">

                            <h2>Safe Driver</h2>

                            <div className="icons">
                                <img
                                    className='border'
                                    src="/icons/mask.jpg"
                                    alt=""
                                />
                                <img
                                    className='border'
                                    src="/icons/money.jpg"
                                    alt=""
                                />
                                <img
                                    className='border'
                                    src="/icons/pay.jpg"
                                    alt=""
                                />
                                <img
                                    className='border'
                                    src="/icons/verified.jpg"
                                    alt=""
                                />
                            </div>

                        </div>

                        <div className="sub-2">

                            <div>
                                <img
                                    src="/icons/logo.jpg"
                                    alt=""
                                    height='50px'
                                    width='150px'
                                />
                            </div>

                            <div className='tick-container'>
                                <div>
                                    <img
                                        src="/icons/tick.jpg"
                                        alt=""
                                        height='12px'
                                        width='15px'
                                        style={{ marginRight: '1rem' }}
                                    />
                                    Avoid spending on taxi fares
                                </div>

                                <div>
                                    <img
                                        src="/icons/tick.jpg"
                                        alt=""
                                        height='12px'
                                        width='15px'
                                        style={{ marginRight: '1rem' }}
                                    />
                                    Available 24x7
                                </div>

                                <div>
                                    <img
                                        src="/icons/tick.jpg"
                                        alt=""
                                        height='12px'
                                        width='15px'
                                        style={{ marginRight: '1rem' }}
                                    />
                                    Advance Booking Recommended
                                </div>

                            </div>
                        </div>

                        <div className="sub-3">

                            <div className='call icon'>
                                <FaPhoneAlt style={{ height: '1.5rem', width: '1.5rem' }} />
                            </div>

                            <div className='wp icon'>
                                <FaWhatsapp style={{ height: '1.5rem', width: '1.5rem' }} />
                            </div>

                            <div className='tele icon'>
                                <FaTelegramPlane style={{ height: '1.5rem', width: '1.5rem' }} />
                            </div>

                        </div>

                    </div>

                    <div className="part-3">
                        <div >
                            <h1>
                                AED 80
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src="/icons/road.jpg"
                                    alt=""
                                    height='20px'
                                    width='25px'
                                    style={{ marginRight: '8px' }}
                                />
                                One-way
                            </div>
                        </div>
                        <div>
                            <h1>
                                AED 150
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src="/icons/road.jpg"
                                    alt=""
                                    height='20px'
                                    width='25px'
                                    style={{ marginRight: '8px' }}
                                />
                                Two-way
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                shouldShowContentLargeScreen &&
                <div className='main-container'>

                    <div className="part-1">
                        <img
                            src="/icons/main.jpg"
                            alt=""
                            height='400px'
                            width='400px'
                            style={{ borderRadius: '0.9rem 0rem 0rem 0.9rem' }}
                        />
                    </div>

                    <div className="part-2">

                        <div className="sub-1">

                            <h1>Safe Driver</h1>

                            <div className="icons">
                                <img
                                    className='border'
                                    src="/icons/mask.jpg"
                                    alt=""
                                />
                                <img
                                    className='border'
                                    src="/icons/money.jpg"
                                    alt=""
                                />
                                <img
                                    className='border'
                                    src="/icons/pay.jpg"
                                    alt=""
                                />
                                <img
                                    className='border'
                                    src="/icons/verified.jpg"
                                    alt=""
                                />
                            </div>

                        </div>

                        <div className="sub-2">

                            <div>
                                <img
                                    src="/icons/logo.jpg"
                                    alt=""
                                    height='70px'
                                    width='210px'
                                />
                            </div>

                            <div className='tick-container'>
                                <div>
                                    <img
                                        src="/icons/tick.jpg"
                                        alt=""
                                        height='12px'
                                        width='15px'
                                        style={{ marginRight: '1rem' }}
                                    />
                                    Avoid spending on taxi fares
                                </div>

                                <div>
                                    <img
                                        src="/icons/tick.jpg"
                                        alt=""
                                        height='12px'
                                        width='15px'
                                        style={{ marginRight: '1rem' }}
                                    />
                                    Available 24x7
                                </div>

                                <div>
                                    <img
                                        src="/icons/tick.jpg"
                                        alt=""
                                        height='12px'
                                        width='15px'
                                        style={{ marginRight: '1rem' }}
                                    />
                                    Advance Booking Recommended
                                </div>

                            </div>
                        </div>

                        <div className="sub-3">

                            <div className='call icon'>
                                <FaPhoneAlt style={{ height: '2rem', width: '2rem' }} />
                            </div>

                            <div className='wp icon'>
                                <FaWhatsapp style={{ height: '2rem', width: '2rem' }} />
                            </div>

                            <div className='tele icon'>
                                <FaTelegramPlane style={{ height: '2rem', width: '2rem' }} />
                            </div>

                        </div>

                    </div>

                    <div className="part-3">
                        <div >
                            <h1>
                                AED 80
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src="/icons/road.jpg"
                                    alt=""
                                    height='20px'
                                    width='25px'
                                    style={{ marginRight: '8px' }}
                                />
                                One-way
                            </div>
                        </div>
                        <div>
                            <h1>
                                AED 150
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src="/icons/road.jpg"
                                    alt=""
                                    height='20px'
                                    width='25px'
                                    style={{ marginRight: '8px' }}
                                />
                                Two-way
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Main;