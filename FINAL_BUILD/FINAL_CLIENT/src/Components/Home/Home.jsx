import React from 'react'

import './Home.scss'

import { Button } from '../Common/Button/Button'
import { Link } from 'react-router-dom'
import { QrReader } from 'react-qr-reader'
import { getSQL, postSQL } from '../../api_client'
import { useState, useEffect } from 'react';

export const Home = () => {

	var [data, setData] = useState('No result');
	var audio = new Audio('../src/Assets/beep.mp3');

	const sendToServer = (data) => {
		postSQL(data, 'Test').then((r) => {
			console.log(r)
		}).catch((e) => {
			console.log(e)});
			console.log('postError')
	}

	return (
		<div className='homeCont'>
			<Link to={'/Detail'}>
				<Button
					text = 'detail'
				/>
			</Link>
			<QrReader onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
					audio.play();
					if (result != undefined) {
						sendToServer(JSON.parse(result?.text));
					}
                }    
            }}
            videoStyle = {{height: '30%'}}
            constraints = {{ facingMode: 'environment'}}
            /> 
			<h1>{data}</h1>
		
		</div>
	)
}
