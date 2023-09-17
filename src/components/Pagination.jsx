import React from 'react'

export default function Pagination({jobsPerPage,totalJobs,paginate}) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil((totalJobs/jobsPerPage)); i++) {
        pageNumbers.push(i);
    };
  return (
    <div>
      <ul className="pagination">
        {
            pageNumbers.map(number =>(
                <li className="paga-item"key={number}>
                    <button className='page-link' onClick={()=>{paginate(number)}}>
                        {number}
                    </button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}
