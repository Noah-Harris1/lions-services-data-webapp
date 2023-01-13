import React from 'react'

import { useEffect, useState } from 'react'
import { getSQL } from '../../../Utilities/api_client';


export default function NewTable() {

    const getHeadings = (data) => {
        return Object.keys(data[0]);
      }

    function testGetSQL() {

        const [database, setDatabase] = useState([{ "id": "1", "title": "Default", "quantity": "5", "message": "Hello world", "city": "Toronto" }]);

        useEffect(() => {
            getSQL('Test').then((e) => {
                setDatabase(e.data)
            })
                .catch((err) => {
                    console.log(err.message)
                })
        }, [])

        return (database)
    }

    var database = testGetSQL()
    var theadData = getHeadings(database)
    var tbodyData = database
    
    return (

        <table>
            <thead>
                <tr>
                    {theadData.map(heading => {
                        return <th key={heading}>{heading}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((row, index) => {
                    return <tr key={index}>
                        {theadData.map((key, index) => {
                            return <td key={row[key]}>{row[key]}</td>
                        })}
                    </tr>;
                })}
            </tbody>
        </table>
    )
}