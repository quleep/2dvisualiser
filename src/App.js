
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { FaArrowAltCircleDown, FaArrowDown, FaArrowLeft, FaArrowUp, FaArrowsAltV, FaBars, FaCamera, FaCameraRetro, FaCheckDouble, FaChevronDown, FaChevronUp, FaCross, FaCube, FaExpand, FaExpandAlt, FaFacebook, FaFilter, FaGripVertical, FaPlus, FaRedo, FaRegShareSquare, FaRemoveFormat, FaSearch, FaShare, FaShareAlt, FaTicketAlt, FaTimes, FaTrash, FaWhatsapp } from 'react-icons/fa'
import { BsFilter, BsGrid, BsList, BsSearch, BsX } from "react-icons/bs";
import img1 from './images/demoimage1.jpg'
import img2 from './images/demoimage2.jpg'
import { Helmet } from "react-helmet";


import img3 from './images/demoimage3.jpg'
import img4 from './images/demoimage4.jpg'
import wall1 from './images/wallpaper1.jpg'
import wall2 from './images/wallpaper2.jpg'
import wall3 from './images/wallpaper3.jpg'
import wallnew1 from './images/AS389772.jpg'
import wallnew2 from './images/WA_2608-1 (1).jpg'
import wallnew3 from './images/WA_2608-1.jpg'
import wallnew4 from './images/AS389772.jpg'
import wallnew5 from './images/AS389063.jpg'
import wallnew6 from './images/AS389762.jpg'
import squareimg from './images/squareone.jpg'
import squareimgtwo from './images/squaretwo.jpg'
import squareimgthree from './images/squarethree.jpg'
import squareimgfour from './images/squarefour.jpg'


import { RxCross2 } from 'react-icons/rx';
import logo from './images/excellogo.png'
import facebook from './images/facebookicon.jpg'
import whatsapp from './images/whatsappicon.jpg'
import arnxtlogo from './images/arnxtreg .png'


import { Rating } from 'react-simple-star-rating'
import ReactPlayer from 'react-player';
import vid  from './images/VID-20230830-WA0292 (1).gif'
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import Errorpage from './Errorpage';
import Walls from './Walls';
import Floors from './Floors';
import Paints from './Paints';
import Test from './Test';


function App() {

  return (

 
   <div>
    <Router>
    <Route path="/error" exact component={Errorpage} />
    <Route path="/walls" exact component={Walls} />
    <Route path="/floors" exact component={Floors} />
    <Route path="/paints" exact component={Paints} />
    <Route path="/test" exact component={Test} />


    </Router>
    <Helmet>
    <title>Visualiser | ArNXT </title>
            <meta
              name="description"
              content="India’s first Augmented reality market place where the company’s stand-out feature is its DIY(Do-It-Yourself) features."
            />
            <meta
              name="keywords"
              content=" Augmented Reality, Augmented Reality in India, Augmented Reality Technology, Augmented reality product, Augmented reality app, Augmented reality apps, Augmented reality product for business, Augmented reality products for business, Augmented reality product for businesses, Augmented reality products for businesses, Augmented reality apps for android, Augmented reality app for android, Augmented reality apps for ios, Augmented reality app for ios, Augmented reality market place, Metaverse, metaverse technologies, ar technology, AR Technology, AR Technology in India, augmented realty app in India, Augmented Reality Technology App, Augmented Reality Technology App in India, augmented reality, metaverse technologies, metaverse technology, experiential commerce platform, Virtual Realty, Virtual Technology, Festive Metaverse Universe
           "
            />
    </Helmet>
 
   </div>
  );
}

export default App;
