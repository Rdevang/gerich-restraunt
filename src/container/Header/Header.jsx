import React from 'react';
import images from '../../constants/images'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="section__padding app__header app__wrapper" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To fine dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat
        Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet
        Tellus
      </p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img"><img src={images.welcome} alt="" /></div>
  </div>
);

export default Header;
