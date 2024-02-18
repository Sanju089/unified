import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section2.css'
import Reveal from '../Reveal/Reveal';

const Section2 = () => {
  return (
    <section className='section2'>
<Row className='marginDefault'>
	<Reveal x={0}>
	<span className='section2heading'>INVEST IN <span className='goldenClr'>DUBAI</span></span>
	</Reveal>
</Row>

	<Reveal x={0} y={0} initialX={-100} initialY={0} >
<Row className='marginDefault'>
	<span className='section2paragraph'>We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our team has the expertise to provide all of our investors with the education, guidance and support required to maximize profits both from a short and long-term perspective through their entire investment journey.

</span>
</Row>
</Reveal>

<Reveal x={0} y={0} initialX={0} initialY={300}>
<Row className='marginDefault'>
	
	<div className='cardbox'>
		<div className='card1'>
			<div className='card1box'>
			<span className='card1_text1'>High Fixed Returns
</span>
<span className='card_text2'>Build your wealth with a personalised, diversified portfolio with expert advice. </span>
</div>
		</div>

		<div className='card1'>
			<div className='card1box'>
			<span className='card1_text1'>Outperforming Market
</span>
<span className='card_text2'>
Earn returns that are greater than the market average with minimal risk and a broader risk profile, we've proudly been beating the market since 2016 for our clients.	 </span>
</div>
		</div>

		<div className='card1'>
			<div className='card1box'>
			<span className='card1_text1'>Get Funded
</span>
<span className='card_text2'>
Operating under a model of profit sharing, we make money when our investors make money and our success depends on your success.
	</span>
</div>
		</div>
	</div>
</Row>
</Reveal>

<div className="line_animation">
			<div className="line_area"></div>
			<div className="line_area"></div>
			<div className="line_area"></div>
			<div className="line_area"></div>
			<div className="line_area"></div>
			<div className="line_area"></div>
			<div className="line_area"></div>
			<div className="line_area"></div>
		</div>
    </section>
  )
}

export default Section2