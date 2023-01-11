import React from 'react'

import { useEffect, useState } from 'react'
import { getSQL } from '../../../Util/API';

 export function TestTable(){

  const [database, setDatabase] = useState('null');
  console.log(typeof(database))

  useEffect(()=>{
		getSQL().then((e) => {
			console.log(e.data)
			setDatabase(e.data)
		})
	},[])

  const DisplayData=database.map(
      (info)=>{
          return(
              <tr>
                  <td>{info.Id}</td>
                  <td>{info.Title}</td>
                  <td>{info.Quantity}</td>
                  <td>{info.Message}</td>
                  <td>{info.City}</td>
              </tr>
          )
      }
  )

    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Messagee</th>
                    <th>City</th>
                    </tr>
                </thead>
                <tbody>
                  
                    
                    {DisplayData}
                    
                </tbody>
            </table>
              
        </div>
    )
  }

