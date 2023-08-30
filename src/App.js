
import './App.css';
import { useEffect, useState } from 'react';
import { FaArrowAltCircleDown, FaArrowDown, FaArrowLeft, FaArrowUp, FaBars, FaCamera, FaCameraRetro, FaChevronDown, FaChevronUp, FaCross, FaCube, FaExpand, FaExpandAlt, FaFacebook, FaFilter, FaGripVertical, FaPlus, FaRedo, FaRegShareSquare, FaRemoveFormat, FaSearch, FaShare, FaShareAlt, FaTicketAlt, FaTimes, FaTrash, FaWhatsapp } from 'react-icons/fa'
import { BsFilter, BsGrid, BsList, BsSearch, BsX } from "react-icons/bs";
import img1 from './images/tryimage1.jpg'
import img2 from './images/tryimage2.jpg'

import img3 from './images/tryimage3.jpg'
import img4 from './images/tryimage4.jpg'
import wall1 from './images/wallpaper1.jpg'
import wall2 from './images/wallpaper2.jpg'
import wall3 from './images/wallpaper3.jpg'
import { RxCross2 } from 'react-icons/rx';
import logo from './images/excellogo.png'
import facebook from './images/facebookicon.jpg'
import whatsapp from './images/whatsappicon.jpg'
import arnxtlogo from './images/arnxtreg.png'


import { Rating } from 'react-simple-star-rating'





function App() {


  const [image,setImage] = useState()
  const [checkarray, setCheckArray ] = useState([])
  const [viewall, setViewAll ] = useState(false)
  const [ratingValue, setRatingValue] = useState(0)
  const [displaydiv, setDisplayDiv] = useState(false)
  const [sidenavopen, setSideNavOpen] = useState(false)
  const [imagefile,setImageFile] = useState('')

  const handlemodalopen =()=>{
    document.getElementById("modalContainer").style.bottom = "0"
  }
  const handlemodalclose = ()=>{
    document.getElementById("modalContainer").style.bottom = "-100%"
   

  }
  useEffect(()=>{
    setTimeout(() => {
      document.getElementById("modalContainer").style.bottom = "0"
      document.querySelector('.loadingbox').style.display = 'none'
    }, 2000);
  },[])

  const handleimageclick = (val)=>{
    document.querySelector('.loadercontainer').style.display = 'block'
   

    setTimeout(() => {
    document.querySelector('.modalinsidecontent').style.display = 'none'
    document.querySelector('.datashowcontainer').style.display = 'flex'
    document.querySelector('.loadercontainer').style.display = 'none'
    

      
    }, 2000);
    setImage(val)
    setDisplayDiv(true)
  }
  const handlechangeroomclick = ()=>{
    setImage('')
    setDisplayDiv(false)
    document.querySelector('.modalinsidecontent').style.display = 'flex'
    
    document.querySelector('.datashowcontainer').style.display = 'none'
   
   

    document.querySelector('.viewallcontainer').classList.toggle('viewmain')
    document.querySelector('.viewallmobile').classList.toggle('viewmobile')

    
   
  }


  

  const handlesearchclick =()=>{
   
   document.querySelector('.inputsearch').classList.toggle('show')
   document.querySelector('.searchbar').style.display= 'none'
   
   
    
  }
  const handlesearchclose= ()=>{
    document.querySelector('.inputsearch').classList.toggle('show')
    document.querySelector('.searchbar').style.display= 'block'
  }
  const handlesearchclickmain =()=>{
   
    document.querySelector('.inputsearchmain').style.display = 'flex'
    document.querySelector('.searchbarmain').style.display = 'none'
   
    
  }

  const handlesearchclosemain= ()=>{
    document.querySelector('.inputsearchmain').style.display = 'none'
    document.querySelector('.searchbarmain').style.display = 'block'
  }
  const handlefilterclick =()=>{
   
    document.querySelector('.modalscan').style.display= 'block'
  }
  const handleclosemodal= ()=>{
    document.querySelector('.modalscan').style.display= 'none'
  }



  const [accActive, setAccActive] = useState()

  let accordionData = [{
      title: "Color",
      accordionContent: "Color"
  },
  {
      title: "Design style",
      accordionContent: "Design"
  },
  {
      title: "Collection",
      accordionContent: "Collection"
  },

  ]

  const checkboxes = document.querySelectorAll('.checkbox-input')
 
  const handleActive = (e,index) => {



   

      if(accActive === index){
        console.log('close')
   
     setViewAll(false)
    
      }
      if(accActive !== index){
       
    
      }
      if (accActive === index) {
          setAccActive()
             
      }
      else {
          setAccActive(index)
       
      }
     
  }


  const itemarray = [
    "Item1", "Item2", "Item3","Item4","Item5", "Item6", "Item7","Item8"
  ]

 let newitemarray = []
 if(viewall){
    newitemarray = [...itemarray]
 }
 else{
  newitemarray =  itemarray.slice(0,4)
 }

  
const handlecheckclick =( val,len)=>{
   if(document.getElementById(`checkinput_${len}`).checked){
     setCheckArray([...checkarray, val])   
   }else{
     let newarr=    checkarray.filter(item=>(
         item != val
      ))
      setCheckArray(newarr)
   }
}

const handleviewall =()=>{
    setViewAll(true)
    document.getElementById('view-all-button').style.display = 'none'
}

const handleclearfilter = ()=>{
  setCheckArray ([])
}
  let filtercount = checkarray && checkarray.length

  const handleremovechecked = (val)=>{
    setCheckArray((oldArray)=>oldArray.filter((item)=>
    item != val
      ))
  }
 const handleRating =()=>{

 }
 const handleReset=()=>{

 }
 const openButton = document.getElementById('openSidebar');
 const sidebar = document.getElementById('sidebar');
 

const handelsidebaropen =()=>{
 
     
  }
document.addEventListener('click', (event) => {

  
   if(event.target.classList[0] === 'hamburger-button'){
    document.querySelector('.sidebar').style.display = 'flex'
    document.getElementById('sidebar').style.width = '250px'
  
   }else{
    document.querySelector('.sidebar').style.display = 'none'
    document.getElementById('sidebar').style.width = '0px'
   }
 
});


const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const slider = document.querySelector('.slider');
let currentIndex = 0;

function showSlide(index) {
 slides &&  slides.forEach((slide, i) => {

    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  const slideWidth =  slides[0].clientWidth;
   slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  
}

prevButton && prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
 
});

nextButton && nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});


if(displaydiv){
   document.querySelector('.viewallmobile').classList.add('viewmobile')
   document.querySelector('.viewallcontainer').classList.add('viewmain')

}

const handlechangeproductmobile = ()=>{
 document.querySelector('.imageslider').style.display = 'none'
 document.querySelector('.slider-container').style.display = 'block'
 document.querySelector('.filtermobilecontainer').style.display = 'flex'
 document.querySelector('.changeroomsidebutton').style.display = 'none'

}
const handleclosefiltermobile = ()=>{
  document.querySelector('.imageslider').style.display = 'flex'
  document.querySelector('.slider-container').style.display = 'none'
  document.querySelector('.filtermobilecontainer').style.display = 'none'
 document.querySelector('.changeroomsidebutton').style.display = 'flex'

}


const fileToBase64 = (file, cb) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    cb(null, reader.result)
  }
  reader.onerror = function (error) {
    cb(error, null)
  }
}



const imagefilechange=(e)=>{
 
   
  let val= document.getElementById('b1').value;
  let indx = val.lastIndexOf(".") + 1;
  let filetype = val.substr(indx, val.length).toLowerCase();
  
  if(filetype === "jpg"  || filetype === "png" || filetype === "jpeg" )
  {

  
  
 
  
 let files = Array.from(e.target.files) 
 files.forEach(file => {
  fileToBase64(file, (err, result) => {
   
    if (result) {
      setImage(result)
      setDisplayDiv(true)
      document.querySelector('.loadercontainer').style.display = 'block'
   

    setTimeout(() => {
    document.querySelector('.modalinsidecontent').style.display = 'none'
    document.querySelector('.datashowcontainer').style.display = 'flex'
    document.querySelector('.loadercontainer').style.display = 'none'
    

      
    }, 2000);
   
   

    }
  })
 
  const reader = new FileReader();

  reader.onload = () => {
      if (reader.readyState === 2) {
        
          }
     
     
  }
  
  reader.readAsDataURL(file)
  
})


  }

  else{
    window.alert('Only jpeg,png,jpg files accepted')
  }



}

const handlesearchmobileclick = ()=>{
  document.querySelector('.mobilemaindiv').style.display = 'none'
  document.querySelector('.searchdivmobile').style.display = 'block'

}
const handlesearchdivclose = ()=>{
  document.querySelector('.mobilemaindiv').style.display = 'block'
  document.querySelector('.searchdivmobile').style.display = 'none'
}

const handlegridclick = ()=>{
  document.querySelector('.searchiconbardiv').classList.toggle('gridviewactive')
  document.querySelector('.searchicongriddiv').classList.remove('gridviewactive')

}
const handlegridchangeclick = ()=>{
  document.querySelector('.searchicongriddiv').classList.toggle('gridviewactive')
  document.querySelector('.searchiconbardiv').classList.remove('gridviewactive')


}

const handledropdownchange =(e)=>{
   
  if(e.target.value === 'removeproduct'){
    setImage('')
    setDisplayDiv(false)
    document.querySelector('.modalinsidecontent').style.display = 'flex'
    
    document.querySelector('.datashowcontainer').style.display = 'none'
   
   

    document.querySelector('.viewallcontainer').classList.toggle('viewmain')
    document.querySelector('.viewallmobile').classList.toggle('viewmobile')
  }
}
document.getElementById("dropdown") && document.getElementById("dropdown").addEventListener("change", function(event) {
  event.preventDefault(); 
  if(event.target.value === 'removeproduct'){
    this.selectedIndex = 0
    setImage('')
    setDisplayDiv(false)
    document.querySelector('.modalinsidecontent').style.display = 'flex'
    
    document.querySelector('.datashowcontainer').style.display = 'none'
   
   

    document.querySelector('.viewallcontainer').classList.toggle('viewmain')
    document.querySelector('.viewallmobile').classList.toggle('viewmobile')
  }else{
    this.selectedIndex = 0
  }
  
});

const scrollimage = document.getElementById("imagecontainermain");
let scale = 1;

scrollimage  && scrollimage.addEventListener("wheel", (event) => {
    event.preventDefault();
    const delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
    scale -= delta * 0.1; 
     console.log(scale)
     
     if(scale < 1){
       scale = 1
     }else{
      scrollimage.style.transform = `scale(${scale})`;
     }
   
});
const scrollimagemobile = document.getElementById("mobilemaindisplay");
let scalemobile = 1;

scrollimagemobile  && scrollimagemobile.addEventListener("wheel", (event) => {
    event.preventDefault();
    const delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
    scalemobile -= delta * 0.1; 

    console.log(scalemobile)
     if(scalemobile < 1){
      scalemobile =1
      scrollimagemobile.style.transform = `scale(${scalemobile})`;
     }else{
      scrollimagemobile.style.transform = `scale(${scalemobile})`;
     }
   
});

  return (

 
   <div>
 
 <div className='loadingbox'>
      
  <div className='loadingboxinside'>
    <div className='loadingimagediv'>
      <img src= {logo}/>
      
    </div>
     <div className='loadingtextloader'>
      <p>Loading...</p>
     </div>
     <div class="containerbox">
        <div class="loading-container">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>
        </div>
    <div className='poweredbottomdiv'>
      <p>Powered by  ARnxt</p>
    </div>
    
   

  </div>
      </div>
  <div id="modalContainer" class="modal-container">
    <div id="modalContent" class="modal-content">
    <div className='loadercontainer'>
    <div className='loaderdiv'>
      <span class="loader"> </span>
      <p  className='loadingtext'>Loading..</p>
        </div>  
    </div>
    <div class="modalscan">		
	      	<div class="modal-wrapscan">

            <div className='filterheadingdiv'>
              <div className='filterheading'>
                <h1>Filters  </h1>

              </div>
              <div className='filterclosediv' onClick={handleclosemodal}>
              <FaTimes className='modalclosebutton'/>

              </div>

            </div>
            <div className='filteritemscroll'>
                          
            <div className='tagscontainer'  style={checkarray.length === 0 ? {display:'none'}: {display:'flex'}}>
                                         {
                                              checkarray && checkarray.map((tag, index) => {
                                                   return (
                                                       <div className="tags" key={index}>
                                                           <span>{tag}</span>
                                                           <div className="crossIcon"
                                                                >
                                                               <RxCross2  onClick={()=>handleremovechecked(tag)} />
                                                           </div>
                       
                                                       </div>
                                                   )
                                               })
                                             }
                       
                       
                                           </div>
       
            <div className='accordionContainer'>
          
            {
                accordionData.map((acc, index) => {
                    return (
                        <div className="accordion"
                           >
                            <div className='accordionHeading'  onClick={(e) => handleActive(e,index)}>

                               
                                <h3>{acc.title}</h3>
                                <span className="addIcon"
                                    style={{
                                        transform: `${accActive === index ? 'rotate(180deg)' :
                                            'rotate(0deg)'}`
                                    }}>
                                    <FaChevronDown size={25} />
                                </span>
                            </div>
                            {
                                accActive === index ? <div className="accordionContent">
                                    {acc.accordionContent === "Color" ? 
                                    <div>
                                      <div class="list-container">
                                        {
                                          newitemarray && newitemarray.map((item,i)=>(
                                            <div class="list-item">
                                            <label class="checkbox">
                                             <p>{item}</p> 
                                                  <input type="checkbox"   checked = {
                                                    checkarray.includes(item) 
                                                  }
                                                 
                                                  className='checkbox-input' value={item} onClick={()=>handlecheckclick(item, i)} id= {`checkinput_${i}`}/>
                                                  </label>
                                              
                                                 </div>
                                               
                                          ))
                                        }
        
</div>

<button id="view-all-button" onClick={handleviewall}>View All <FaArrowDown /></button>
                                    </div>
                                    
                                    
                                    :''}
                                </div> : null
                            }
                        </div>
                    )
                })
            }
        </div>
        
            </div>
            <div className='filterbuttons'>
              <div className='filterbuttonsinside'>
                <button onClick={handleclearfilter}>Clear</button>
                <button onClick={handleclosemodal} className='donebutton'>Done</button>
               </div>

            </div>
                		
	      	</div>			          		
      	</div>	
    
    <div className='viewallmobile'>
      <div className='searchdivmobile'>
      <div className='filterdatadiv'>
      <div className='searchclosebuttonmobile'  onClick={handlesearchdivclose}>
            <FaTimes/>
            </div>
          <div className='filterdatainside'>
          
           
            <h2>Products</h2>
            <div className='searchtabcontainer'>
                <div className='searchbarmain'>
                  <div className='searchicondivmain' onClick={handlesearchclickmain} >
                  <BsSearch className='searchicon'/>
                  </div>
                
                </div>
                <div className='filterbar'> 
                <div className='filtertextdiv' onClick={handlefilterclick}>
               <p>Filter </p> <BsFilter className='searchicon'/>{checkarray && checkarray.length > 0 ? filtercount : ''}
                </div>
                 
                </div>

                <div className='gridchange'>
                  <div className='gridviewinside'> 
                  <BsList className='searchiconbarmain'  />
                  <BsGrid className='searchicongridmain'  />

                  </div>
                </div>

            </div>
            <div className='inputsearchmain'>
              <BsSearch className='newicons'/>
              <input placeholder='search...' />
              <BsX className='newicons' onClick={handlesearchclosemain}  />
            </div>
            <div className='searchitemscontainer'>
              <div>
                <div className='itemdetailscontainer'>
                  <div className='wallpaperimage'>
                  <img  src= {wall1}/>
                </div>
                <div className='wallpaperdetails'>
                

                  <div className='wallpaperdetailsinside'>
                    <p>newallpapers</p>
                    <p className='categoryname'>newrovement</p>
                    <p >368956</p>
                    <div className='dimensions'>
                    <p className='productid'>size: 36*25</p>
                    <p>link</p>
                    </div>
                  
                  </div>

                </div>
                </div>
             
                
              </div>
              <div>
              <div className='itemdetailscontainer'>
                  <div className='wallpaperimage'>
                  <img  src= {wall2}/>
                </div>
                <div className='wallpaperdetails'>
                

                  <div className='wallpaperdetailsinside'>
                    <p>newallpapers</p>
                    <p className='categoryname'>newrovement</p>
                    <p >368956</p>
                    <div className='dimensions'>
                    <p className='productid'>size: 36*25</p>
                    <p>link</p>
                    </div>
                    



                  </div>

                </div>
                </div>
              </div>
              <div>
              <div className='itemdetailscontainer'>
                  <div className='wallpaperimage'>
                  <img  src= {wall3}/>
                </div>
                <div className='wallpaperdetails'>
                

                  <div className='wallpaperdetailsinside'>
                    <p>newallpapers</p>
                    <p className='categoryname'>newrovement</p>
                    <p >368956</p>
                    <div className='dimensions'>
                    <p className='productid'>size: 36*25</p>
                    <p>link</p>
                    </div>
                    



                  </div>

                </div>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
       


            </div>
          </div>

        </div>
      </div>
      <div className='mobilemaindiv'>
      <div className='navbarmobile'>
     <div className='closedivmobile'>
     <div class="closecontainer"  >
    <button class="hamburger-button" id="openSidebar" onClick={handlemodalclose} ><FaTimes/></button>
    <div class="" id="">
      </div>
  
  </div>
     </div>
     <div className='topbuttoncontainer'>
      <button className='productdetailsbutton' >VIEW DETAILS</button>
       <select id= 'dropdown'  > 
          <option style={{display:'none'}}  >PRODUCT DETAILS</option>
         <option value={'compare'}> 
          Compare </option>
        <option value={'removeproduct'} >Remove product</option>
        <option value={'rotatesurface'}>Rotate surface</option>

       </select>
       
  

     </div>

     <div className='hamburgerbutton'>
     <div class="container"  >
    <button class="hamburger-button" id="openSidebar" onClick={handelsidebaropen} >☰</button>
    <div class="sidebar" id="sidebar">

    <div className='sitedetailscontainer'>
          <div className='sitedetailsinside'>
          <div className='branddetailscontainer'> 
            <div className='brandinside'>
            <div className='brandimagediv'>
              <img src= {logo}/>
            </div>
            <div className='brandproductdiv'>
              <div  className='currentproduct'>
              <p>You are viewing:</p>
              <h3>Current product 125486</h3>
              </div>
            
            </div>
            <div className='brandproductbutton'>
              <div className='productpagebutton'>
                <button>Go to productpage <FaRegShareSquare className='producticon'/></button>

              </div>

            </div>
            </div>

          </div>
          <div className='companydetailscontainer'>
            <div className='companyitems'>
            <div>
              <div className='sharediv'>
               <p>Save and share</p>
              </div>
            </div>
            <div>
              <div className='iconsdiv'>
                <div className='iconone'>
                 <FaShareAlt/>
                </div>
                <div className='icontwo'>
                      <FaFacebook/>
                     </div>
                  <div className='iconthree'>
                    <FaWhatsapp/>
                </div>

              </div>
            </div>
            <div>
              <div className='starvaluediv'>
                <p>Rate your experience</p>
              <Rating onClick={handleRating} initialValue={ratingValue} />
              </div>
        
            </div>
            <div>
              <div className='poweredbydiv'>
               <p>Powered by</p>
               <div className='poweredbyimg'>
                <img src={arnxtlogo}/>
              
               </div>
            
              </div>
            </div>
            </div>
           

          </div>
          </div>

        </div>
    </div>
  
  </div>
     </div>
    </div>
    <div className='mobilemaindisplay' id= 'mobilemaindisplay'>

    <img src= {image}/>
    </div>
    <div className='imageslider'> 
     <button className='changeproductbutton'  onClick={handlechangeproductmobile}>Change product <FaChevronUp className='upicon'/></button>
   

    </div>
    <div className='changeroomsidebutton' onClick={handlechangeroomclick}>
        <FaCameraRetro/>

      </div>
    <div className='filtermobilecontainer'>
    <div className='filtermobileproductname'>
        <p>Photo wallpaper D1145</p>
    </div>
    <div className='filtercontainermobile'>
     <div>
      <div className='mobilecontainersearchfilter'  onClick={handlesearchmobileclick}>
      <FaSearch/>
      </div>
      
     </div>
     <div>
     <div className='mobilecontainermainfilter' onClick={handlefilterclick}>
      <FaFilter/>
      </div>
     </div>
     <div>
     <div className='mobilecontainermainfilter'>
      <FaExpandAlt/>
      </div>
     </div>
     <div>
      <div className='mobilefiltercontainerclose' onClick={handleclosefiltermobile}>
      <FaChevronDown/>
      </div>
     
     </div>

    </div>
</div>
    <div class="slider-container">
    
    <div class="slider">
      <img class="slide active" src={wall1} alt="Image 1"/>
      <img class="slide" src={wall2} alt="Image 2"/>
      <img class="slide" src={wall3} alt="Image 3"/>
      <img class="slide " src={wall1} alt="Image 1"/>
      <img class="slide" src={wall2} alt="Image 2"/>
      <img class="slide " src={wall1} alt="Image 1"/>
      <img class="slide" src={wall2} alt="Image 2"/>
      <img class="slide" src={wall3} alt="Image 3"/>
      <img class="slide " src={wall1} alt="Image 1"/>
      <img class="slide" src={wall2} alt="Image 2"/>
      <img class="slide " src={wall1} alt="Image 1"/>
      <img class="slide" src={wall2} alt="Image 2"/>
     
 
    </div>
    <button class="prev" id="prevButton">&#10094;</button>
    <button class="next" id="nextButton">&#10095;</button>
  </div>

      </div>
   
   

  </div>
    <div className='viewallcontainer'>


      <div className='datashowcontainer'>
      
        <div className='displaynav'>
          <div className='closevisualiser' onClick={handlemodalclose}> 
           <FaTimes className='searchicons'/>
          </div>
          <div className='navitems'>
            <p> <FaPlus className='navicons'/> COMPARE</p>
          </div >
          <div className='navitems'>
            <p> <FaTrash className='navicons'/> REMOVE PRODUCT</p>
          </div>
          <div className='navitems'>
            <p> <FaRedo  className='navicons'/> ROTATE SURACE</p>
          </div>
          <div className='navitems'  onClick={handlechangeroomclick}>
            <p> <FaCamera className='navicons'/> CHANGE ROOM</p>
          </div>

        </div>
        <div className='filterdatadiv'>
          <div className='filterdatainside'>
            <h2>Products</h2>
            <div className='searchtabcontainer'>
                <div className='searchbar'>
                  <div className='searchicondiv' onClick={handlesearchclick} >
                  <BsSearch className='searchicon'/>
                  </div>
                
                </div>
                <div className='filterbar'> 
                <div className='filtertextdiv' onClick={handlefilterclick}>
               <p>Filter </p> <BsFilter className='searchicon'/>{checkarray && checkarray.length > 0 ?filtercount : ''}
                </div>
                 
                </div>

                <div className='gridchange'>
                  <div className='gridviewinside'> 
                  <div className='searchiconbardiv'>
                  <BsList className='searchiconbar' onClick={handlegridclick}/>
                  </div>
                  <div className='searchicongriddiv' onClick={handlegridchangeclick}>
                  <BsGrid className='searchicongrid' />
                  </div>
                

                  </div>
                </div>

            </div>
            <div className='inputsearch'>
              <BsSearch className='newicons'/>
              <input placeholder='search...' />
              <BsX className='newicons' onClick={handlesearchclose}  />
            </div>
            <div className='searchitemscontainer'>
              <div>
                <div className='itemdetailscontainer'>
                  <div className='wallpaperimage'>
                  <img  src= {wall1}/>
                </div>
                <div className='wallpaperdetails'>
                

                  <div className='wallpaperdetailsinside'>
                    <p>newallpapers</p>
                    <p className='categoryname'>newrovement</p>
                    <p >368956</p>
                    <div className='dimensions'>
                    <p className='productid'>size: 36*25</p>
                    <p>link</p>
                    </div>
                    



                  </div>

                </div>
                </div>
             
                
              </div>
              <div>
              <div className='itemdetailscontainer'>
                  <div className='wallpaperimage'>
                  <img  src= {wall2}/>
                </div>
                <div className='wallpaperdetails'>
                

                  <div className='wallpaperdetailsinside'>
                    <p>newallpapers</p>
                    <p className='categoryname'>newrovement</p>
                    <p >368956</p>
                    <div className='dimensions'>
                    <p className='productid'>size: 36*25</p>
                    <p>link</p>
                    </div>
                    



                  </div>

                </div>
                </div>
              </div>
              <div>
              <div className='itemdetailscontainer'>
                  <div className='wallpaperimage'>
                  <img  src= {wall3}/>
                </div>
                <div className='wallpaperdetails'>
                

                  <div className='wallpaperdetailsinside'>
                    <p>newallpapers</p>
                    <p className='categoryname'>newrovement</p>
                    <p >368956</p>
                    <div className='dimensions'>
                    <p className='productid'>size: 36*25</p>
                    <p>link</p>
                    </div>
                    



                  </div>

                </div>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
       


            </div>
          </div>

        </div>
        <div className='imagecontainermain' id='imagecontainermain'>
          <img src= {image}/>

        </div>
        <div className='sitedetailscontainer'>
          <div className='sitedetailsinside'>
          <div className='branddetailscontainer'> 
            <div className='brandinside'>
            <div className='brandimagediv'>
              <img src= {logo}/>
            </div>
            <div className='brandproductdiv'>
              <div  className='currentproduct'>
              <p>You are viewing:</p>
              <h3>Current product 125486</h3>
              </div>
            
            </div>
            <div className='brandproductbutton'>
              <div className='productpagebutton'>
                <button>Go to productpage <FaRegShareSquare className='producticon'/></button>

              </div>

            </div>
            </div>

          </div>
          <div className='companydetailscontainer'>
            <div className='companyitems'>
            <div>
              <div className='sharediv'>
               <p>Save and share</p>
              </div>
            </div>
            <div>
              <div className='iconsdiv'>
                <div className='iconone'>
                 <FaShareAlt/>
                </div>
                <div className='icontwo'>
                      <FaFacebook/>
                     </div>
                  <div className='iconthree'>
                    <FaWhatsapp/>
                </div>

              </div>
            </div>
            <div>
              <div className='starvaluediv'>
                <p>Rate your experience</p>
              <Rating onClick={handleRating} initialValue={ratingValue} />
              </div>
        
            </div>
            <div>
              <div className='poweredbydiv'>
               <p>Powered by</p>
               <div className='poweredbyimg'>
                <img src={arnxtlogo}/>
              
               </div>
            
              </div>
            </div>
            </div>
           

          </div>
          </div>

        </div>

      </div>
    
        <div  className='modalinsidecontent'>
          <div className='modaltopcontainer'>
          <div  className='headingcontainer'>
            <span  onClick={handlemodalclose}>
            <FaTimes/>
            </span>
       
        <h1> See Roven wallpapers in your room</h1>
          </div>
          <div className='uploaddivcontainer'>
          <div className='uploadbuttoncontainer'>
            <h4> <FaCamera className='icons'/> Upload a picture of your room</h4>
            <h4> <FaCube className='icons'/> Try our products in your room</h4>
            <div className=''>
            <div class="upload-btn-wrapper">
               <button class="btn"> <FaCameraRetro className='uploadcam'/>Upload Image</button>
                 <input type="file" onChange={imagefilechange}  id='b1' name="myfile"    />
              
                 </div>
          
            </div>
             
          </div>
          <div className='uploaddivgif'>

          </div>

          </div>

          </div>
     
     
          <div className='tryimagecontainer'> 
          <h2>Don't have a picture? Try our demo rooms instead </h2> 
            <div className='imagecontainer'>
                <div  onClick={()=>handleimageclick(img1)}>
                  <img src={img1} />
                   <p>Waiting Area</p>
                </div>
                <div onClick={()=>handleimageclick(img2)}>
                <img src={img2} />
                <p>Living Room</p>
                </div>
                <div onClick={()=>handleimageclick(img3)}>
                <img src={img3} />
                <p>Bedroom</p>
                </div>
                <div onClick={()=>handleimageclick(img4)}>
                <img src={img4} />
                <p>Kitchen</p>
                </div>

            </div>
          </div>
     
     
        </div>
        </div>
    </div>
  </div>


 
   



   </div>
  );
}

export default App;
