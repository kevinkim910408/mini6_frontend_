import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styled from 'styled-components';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button>
		<FaArrowCircleUp onClick={scrollToTop}
		style={{display: visible ? 'inline' : 'none'}} />
	</Button>
);
}

export default ScrollButton;

const Button = styled.div`
	position: fixed;
	width: 100%;
	bottom: 10%;
	left:0;
	font-size: 5rem;
	margin-left: 100rem;
	z-index: 1;
	cursor: pointer;
	color: var(--blue);
	&:hover{
		color: var(--Button-blue)
	}
`
