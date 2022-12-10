import React from 'react';
import Cards from './Cards';
import Banner from './Banner';
import Categories from './Categories';
import Groups from './Groups';
import Location from './Location';
import TopNavbar from './TopNavbar';

const Home1 = () => {
    const show = false;
    return (
        <div>
            <div className='d-none d-md-block'><TopNavbar></TopNavbar></div>
            <Banner></Banner>
            <div className='mx-1 px-0 mt-2 mx-md-5 px-md-5 mt-md-4'>
                <Categories></Categories><hr className='d-none d-md-block'/>
                <div className='d-flex'>
                    <div className='col-12 col-md-9'>
                        <Cards></Cards>
                        <Cards></Cards>
                        <Cards></Cards>
                        <Cards></Cards>
                    </div>
                    <div className='d-none d-md-block col-3 ms-5'>
                        <Location></Location>
                        {show && <Groups></Groups>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home1;