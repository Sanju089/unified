import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blogpic from '../../assets/blogpic/Image\ Placeholder.png'
import blogpic2 from '../../assets/blogpic/Image Placeholder (1).png'
import blogpic3 from '../../assets/blogpic/Image Placeholder (2).png'
import './Blog.css'
import Reveal from '../Reveal/Reveal';

const Blog = () => {
  return (
    <div className='blog_section'>
        <div className='blog_container'>
<Row className='marginDefault'>
<Reveal x={0} y={0} initialX={-100} initialY={0}>
 
	<span className='section2heading'>OUR<span className='goldenClr'>  BLOGS</span></span>
    </Reveal>
</Row>

<Reveal x={0} y={0} initialX={-200} initialY={0}>
<Row className='marginDefault'>

	<span className='section2paragraph'>
        We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our team has the expertise to provide all of our investors with the education, guidance and support required to maximize profits both from a short and long-term perspective through their entire investment journey.

</span>
</Row>
</Reveal>

<Row className='marginDefault'>
<div className='blog_content'>
    <img src={blogpic} alt="blogpic"/>


    <div className='blog_card'>
    <Reveal x={0} y={0} initialX={-100} initialY={0} >
        <div className='blog_card_head'>
        <span className='development'>DEVELOPMENT</span>
<span className='dates'>11 March 2023</span>
        </div>
        <span className='blog_card_title'>Best Website to research for your  next project</span>
        <span className='blog_card_descr'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs </span>
        <span className='read_more'>Read More...</span>
</Reveal>
    </div>

</div>
<div className='blog_content3'>
    <img src={blogpic2} alt="blogpic2" />
    <div className='blog_content2_card'>
    <div className='blog_content2card'>
    <Reveal x={0} y={0} initialX={-200} initialY={0} >

        <div className='blog_content2_head'>
        <span className='development_content2'>DEVELOPMENT</span>
<span className='dates_content2'>11 March 2023</span>
        </div>
        <span className='blog_card_titlecontent2'>Best Website to research for your  next project</span>
        <span className='blog_card_descrcontent2'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs </span>
        <span className='read_morecontent2'>Read More...</span>
</Reveal>
    </div>
    </div>
</div>
<div className='blog_content2'>
   
    <div className='blog_content2_card'>
    <div className='blog_content2card'>
    <Reveal x={0} y={0} initialX={-300} initialY={0} >

        <div className='blog_content2_head'>
        <span className='development_content2'>DEVELOPMENT</span>
<span className='dates_content2'>11 March 2023</span>
        </div>
        <span className='blog_card_titlecontent2'>Best Website to research for your  next project</span>
        <span className='blog_card_descrcontent2'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs </span>
        <span className='read_morecontent2'>Read More...</span>
        </Reveal>
    </div>
    </div>
    <img src={blogpic3} alt="blogpic3" />
</div>
</Row>

<div className='explorebtn'>
    <button className='explorebtn1'>Explore More</button>
</div>
</div>
    </div>
  )
}

export default Blog