import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {NavLink,useNavigate} from "react-router-dom"
import "./banner.css"
import aa1 from "./bb1.png"
import aa2 from "./bb2.png"
import aa3 from "./bb3.png"
export default function Banner() {
    const history = useNavigate("");
    const data = [
        aa1,aa2,aa3
        
    ];
    const oops=(i)=>{
        if (i===0) {
            history("/view/products");
        }
        else if (i===1) {
            history("/view/laptop");
        }
        else{
            history("/view/Smart");
        }
    }

    return (
        <Carousel className='carasousel'
        autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}>
            
            {data.map((imag, i) => (
                <img key={i} src={imag} alt={`image-${i}`} onClick={()=>oops(i)} className='banner_img' />
            ))}
        </Carousel>
    );
}
