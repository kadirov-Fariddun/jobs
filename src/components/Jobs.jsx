import React, { useEffect, useState } from 'react';
// components
import TitleSection from './TitleSection';
import jobsData from '../jobsData.js';
import Pagination from './Pagination';

import { NavLink } from 'react-router-dom';

console.log(jobsData);

export default function Jobs() {
  const [filter,setFilter] = useState([]);
  const [filterBool,setFilterBool] = useState(false);

  
  const [keyword,setKeyword] = useState('');
  // pagination 
  const [currentPage,setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const lastJobsIndex = currentPage * jobsPerPage;
  const firstJobsIndex = lastJobsIndex - jobsPerPage;
  const currentJobs = filterBool?filter.slice(firstJobsIndex,lastJobsIndex):jobsData.slice(firstJobsIndex,lastJobsIndex)
  const nextPage = () => setCurrentPage(prev => prev +1);
  const prevPage = () => setCurrentPage(prev => prev -1);
  const paginate = pageNumber =>{
    setCurrentPage(pageNumber)
  }
  // array effect
  useEffect(()=>{
    let items = [];
    jobsData.forEach(item=>{
      if(item.title.trim().toLowerCase().includes(keyword.toLowerCase())){
        items.push(item);
        setFilter(items);
      }else{return setFilter([])};
    });
  },[keyword]);
  // переключатель для выбора категории
  const categorySwitch = () =>{
    const jobsFilterCategory = document.querySelectorAll('.jobs-filter-category');
    for (let i = 0; i < jobsFilterCategory.length; i++) {
      jobsFilterCategory[i].onclick = () => {
        for (let j = 0; j < jobsFilterCategory.length; j++) {
          jobsFilterCategory[j].classList.remove('active-category');
        }
        jobsFilterCategory[i].classList.add('active-category');
      }
    }
  };
  categorySwitch();
  const [filterShow,setFilterShow] = useState('');
 
  return (
    <>
    <div className="jobs">
        <TitleSection
        key={1}
        title='Our Jobs'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio cras at aliquam id. Et maecenas.'
        home={false}
        brands={false}
         />
         <div className="jobs-search">
          <div className="container">
            <form action="#" className='jobs-search-form'>
              <input type="text" placeholder='Job Tittle, Keyword, Company' className='keyword' onInput={(e)=>{setKeyword(e.target.value)}}/>
              <input type="text" placeholder='Location' className='location'/>
              <input type="text" placeholder='Salary' className='salary' />
              <button className='jobs-search-form-btn' type='button' onClick={()=>{
                keyword === '' ?setFilterBool(false):
                  setFilterBool(true);
                }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
              Search
              </button>
            </form>
          </div>
         </div>
         <div className="container">
         <div className="jobs-filter-btn">
          Filter
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={()=>{
              filterShow === '' ?setFilterShow('jobs-filter-active'):setFilterShow('');
              }}>
              <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/>
            </svg>
            </div>
        <div className="jobs-flex">
          <div className={`jobs-filter ${filterShow}`}>
            <button className="jobs-filter-close-btn" onClick={()=>{setFilterShow('')}}>&times;</button>
            <div className="jobs-filter-categories">
              <div className="jobs-filter-title">Categories</div>
              <button className="jobs-filter-category active-category">All</button>
              <button className="jobs-filter-category">Hotel</button>
              <button className="jobs-filter-category">Restaurants</button>
              <button className="jobs-filter-category">Beauty Salons</button>
              <button className="jobs-filter-category">Trade Centers</button>
              <button className="jobs-filter-category">Real Estate</button>
              <button className="jobs-filter-category">Sports Coaches</button>
              <button className="jobs-filter-category">Babysitting</button>
              <button className="jobs-filter-category">Cleaning</button>
              <button className="jobs-filter-category">Other</button>
            </div>
            <div className="jobs-filter-types">
              <div className="jobs-filter-title">Job Types</div>
              <form action="#">
                <label>
                <div>
                <input  type="radio" name="job-type" value='all'/>
                <span className="radio-check"></span>
                </div>
                <span>All</span>
                </label>
                <label>
                <div>
                <input type="radio" name="job-type" value='Internship'/>
                <span className="radio-check"></span>
                </div>
                <span>Internship</span>
                </label>
                <label>
                <div>
                <input type="radio" name="job-type" value='Part-time' />
                <span className="radio-check"></span>
                </div>
                <span>Part-time</span>
                </label>
                
                <label>
                <div>
                <input type="radio" name="job-type" value='Urgent'/>
                <span className="radio-check"></span>
                </div>
                <span>Urgent</span>
                </label>
              </form>
            </div>
            <div className="jobs-filter-date">
              <div className="jobs-filter-title">Posted Date</div>
              <form action="#">
                <label>
                  <div>
                <input type="radio" name="job-date" value='all'/>
                <span className="radio-check"></span>
                </div>
                <span>All</span>
                </label>
                <label>
                  <div>
                <input type="radio" name="job-date" value='Last Hour'/>
                <span className="radio-check"></span>
                </div>
                <span>Last Hour</span>
                </label>
                <label>
                  <div>
                <input type="radio" name="job-date" value='Last 24 Hours'/>
                <span className="radio-check"></span>
                </div>
                <span>Last 24 Hours</span>
                </label>
                <label>
                  <div>
                <input type="radio" name="job-date" value='Last Week'/>
                <span className="radio-check"></span>
                </div>
                <span>Last Week</span>
                </label>
                <label>
                  <div>
                <input type="radio" name="job-date" value='Last Month'/>
                <span className="radio-check"></span>
                </div>
                <span>Last Month</span>
                </label>
                
              </form>
            </div>
            <div className="jobs-filter-experience">
              <div className="jobs-filter-title">Experience Level</div>
              <form action="#">
                <label>
                  <div>
                <input type="radio" name="job-date" value='all'/>
                <span className="radio-check"></span>
                </div>
                <span>All</span>
                </label>
                <label>
                  <div>
                <input type="radio" name="job-date" value='No Experience'/>
                <span className="radio-check"></span>
                </div>
                <span>No Experience</span>
                </label>
                <label>
                  <div>
                <input type="radio" name="job-date" value='1 Year Experience'/>
                <span className="radio-check"></span>
                </div>
                <span>1 Year Experience</span>
                </label>
                <label>
                  <div>
                  <input type="radio" name="job-date" value='2 Years Experience'/>
                  <span className="radio-check"></span>
                  </div>
                  <span>2 Years Experience</span>
                </label>
                
                <label>
                  <div>
                <input type="radio" name="job-date" value='3 Years Experience'/>
                <span className="radio-check"></span>
                </div>
                <span>3 Years Experience</span>
                </label>
                
                <label>
                  <div>
                  <input type="radio" name="job-date" value='More'/>
                  <span className="radio-check"></span>
                  </div>
                  <span>More</span>
                </label>
              </form>
            </div>
            </div>
          <div className="jobs-cards">
            <div className="jobs-cards-titles">
              <span>Showing {filterBool ? lastJobsIndex>10 ?lastJobsIndex-6:'':lastJobsIndex >22?lastJobsIndex-8:lastJobsIndex} - {filterBool?filter.length:jobsData.length} results</span>
              <span>Post Your Job Here</span>
              </div>
            {
              currentJobs.map((item,index)=>{
                return(
                  <>
                  <div className="job-card" key={item.id}>
                <NavLink to={'/job-'+item.id}>
                  <div className="job-card-titles">
                    <div className="job-card-title">
                      {item.title}
                    </div>
                    <div className="job-card-date">{item.postedDate}</div>
                  </div>
                  <div className="job-card-bottom">
                    <div className="job-card-adres">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>
                    {item.adres}
                    </div>
                    <div className="job-card-category">
                      {item.category}
                    </div>
                    <div className="job-card-type">
                      {item.jobType}
                    </div>
                    <div className="job-card-salary">
                    Estimated Salary: <span>{item.salary}</span>
                    </div>
                  </div>
                </NavLink>
                </div>
                </>
                )
              })
            }
            <div className="jobs-pagination">
            {currentPage>1?
            <button className="prev-page" onClick={()=>prevPage()}>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2135 9.28616L2.21956 0.295238C1.82492 -0.0984125 1.18552 -0.0984125 0.789881 0.295238C0.395235 0.688888 0.395235 1.32828 0.789881 1.72193L9.0704 9.99946L0.790878 18.277C0.396231 18.6706 0.396231 19.31 0.790878 19.7047C1.18552 20.0983 1.82591 20.0983 2.22056 19.7047L11.2145 10.7138C11.6031 10.3242 11.6031 9.67474 11.2135 9.28616Z" fill="#1D263A"/>
</svg>
            </button>:''
            }
            <Pagination 
            jobsPerPage={jobsPerPage}
            totalJobs={filterBool?filter.length:jobsData.length}
            paginate={paginate}
            />
            {(filterBool? currentPage < 2:currentPage < 3 )?
            <button className="next-page" onClick={()=>nextPage()}>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2135 9.28616L2.21956 0.295238C1.82492 -0.0984125 1.18552 -0.0984125 0.789881 0.295238C0.395235 0.688888 0.395235 1.32828 0.789881 1.72193L9.0704 9.99946L0.790878 18.277C0.396231 18.6706 0.396231 19.31 0.790878 19.7047C1.18552 20.0983 1.82591 20.0983 2.22056 19.7047L11.2145 10.7138C11.6031 10.3242 11.6031 9.67474 11.2135 9.28616Z" fill="#1D263A"/>
</svg>
            </button>:''
}
</div>
          </div>
         </div>
        </div>
    </div>
    </>
  )
}
