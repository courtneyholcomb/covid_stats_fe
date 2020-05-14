import React, { useState } from 'react';
import '../App.css';

function QueryForm() {
    const [query, setQuery] = useState(null);
    const [queryResult, setQueryResult] = useState(null);
    
    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const data = query
    
        fetch('http://localhost:5000/get_query_results', {
            method: 'POST',
            body: data,
        })
            .then(response => response.text()) 
            .then((data) => {
                setQueryResult(data);
            }
        );
    }

    function renderTableData() {
        let jsonResult = JSON.parse(queryResult)

        return jsonResult.map((row, index) => {
           let col = Object.keys(row)
           return (
              <tr key={row.id}>
                 {col.map((val, index) => {
                    return <td key={index}>{row[col[index]]}</td>
                 })}
              </tr>
           )
        })
     }

    function renderTableHeader() {
        let jsonResult = JSON.parse(queryResult)
        let header = Object.keys(jsonResult[0])

        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    if (queryResult) {
        return (
            <div className="QueryForm">
                <h3>Query COVID-19 data below:</h3>
                <form onSubmit={handleSubmit}>
                    <textarea onChange={handleChange}></textarea>
                    <br/>
                    <button>Run Query</button>
                </form>
                <br/>
                <div className="results">
                    <table className="table">
                        <thead>
                            <tr>{renderTableHeader()}</tr>
                        </thead>
                        <tbody>{renderTableData()}</tbody>
                    </table>
                </div>
            </div>
        );
    } else {
        return (
            <div className="QueryForm">
                <h3>Query COVID-19 data below:</h3>
                <form onSubmit={handleSubmit}>
                    <textarea onChange={handleChange}></textarea>
                    <br/>
                    <button>Run Query</button>
                </form>
            </div>
        );
    }
}

export default QueryForm;
