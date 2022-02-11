import React, { useState } from 'react';
import img1 from '../images/portfolio/1.jpg';


const Data = [
	{
		id: 1,
		image: "portfolio/1.jpg",
		category: "web"
	},
	{
		id: 2,
		image: "portfolio/2.jpg",
		category: "photo"
	},
	{
		id: 3,
		image: "portfolio/3.jpg",
		category: "web"
	},
	{
		id: 4,
		image: "portfolio/4.jpg",
		category: "wordpress"
	},
	{
		id: 5,
		image: "portfolio/5.jpg",
		category: "photo"
	},
	{
		id: 6,
		image: "portfolio/6.jpg",
		category: "wordpress"
	},
]


export default function Portfolio() {
	const [items,setItems] = useState(Data);
	const filterItem = (categItem)=>{
		const updatedItem = Data.filter((curElem)=>{
			return curElem.category === categItem;
		});
		setItems(updatedItem);
	}
  return (
	<section>
		<h2>Portfolio</h2>
		<div className='portfolioSection'>
			<div className='filterBtn'>
				<button className='btn' onClick={()=>setItems(Data)}>All</button>
				<button className='btn' onClick={()=>filterItem('web')}>Web Design</button>
				<button className='btn' onClick={()=>filterItem('photo')}>Photography</button>
				<button className='btn' onClick={()=>filterItem('wordpress')}>Wordpress</button>
			</div>
			<div className='imgContainer'>
				<div className='container'>
					{
						items.map((elem)=>{
							const{id,image}=elem;
							return(
								<div className='card' key={id}>
									<img src={image} alt='img portfolio'/>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	</section>
  );
};	
