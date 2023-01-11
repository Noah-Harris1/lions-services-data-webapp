import React from 'react'
import QRCode from 'react-qr-code'

import "./Detail.scss"

import { Button } from '../Common/Button/Button'
import { Link } from 'react-router-dom'
import { getSQL, postSQL } from '../../api_client'
import { useEffect, useState } from 'react'
import { Order } from './Order.ts'

export const Detail = () => {

	const [message1, setMessage1] = useState('1');
	const [message2, setMessage2] = useState('Default');
	const [message3, setMessage3] = useState('5');
	const [message4, setMessage4] = useState('Hello world');
	const [message5, setMessage5] = useState('Toronto');
	
	const [database, setDatabase] = useState('null');

	const qrValue = new Order(message1, message2, message3, message4, message5)

	useEffect(()=>{
		getSQL().then((e) => {
			console.log(e.data)
			setDatabase(e.data)
		})
	},[])

	const buttonText = "back"

	return (
		<div className='detailCont'>
			<Link to={"/"}>
				<Button
					text = { buttonText }
				/>
			</Link>
			<h1>{JSON.stringify(qrValue)}</h1>
			
			<QRCode value = {JSON.stringify(new Order(message1, message2, message3, message4, message5))}/>
			<br/>

			<input type="text" placeholder='Id' id="message1" onChange={(e) => setMessage1(e.target.value)} value={message1}/>
			<input type="text" placeholder='Title' id="message2" onChange={(e) => setMessage2(e.target.value)} value={message2}/>
			<input type="text" placeholder='Quantity' id="message3" onChange={(e) => setMessage3(e.target.value)} value={message3}/>
			<input type="text" placeholder='Message' id="message4" onChange={(e) => setMessage4(e.target.value)} value={message4}/>
			<input type="text" placeholder='City' id="message5" onChange={(e) => setMessage5(e.target.value)} value={message5}/>
			<br/>
			<p>{JSON.stringify(database)}</p>
		</div>
	)
}

