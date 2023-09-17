import React from 'react'

export default function Job(props) {
  return (
    <>
      <div className="job">
        <div className="container">
            <div className="job-flex">
                <div className="job-info">
                    <div className="job-category">{props.category}</div>
                    <div className="job-title">{props.title}</div>
                    <div className="job-text">{props.text}</div>
                    <div className="job-responsibilities">
                        <div className="job-responsibilities-title">Job Responsibilities.</div>
                        <ul className="job-responsibilities-list">
                            {props.responsibilities.map(item=>(
                                <li><span></span> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="job-skills">
                        <div className="job-skills-title">Required Skills</div>
                        <ul className="job-skills-list">
                            {props.requiredSkills.map(item=>(
                                <li><span></span> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="job-about-company">
                        <div className="job-about-company-title">
                        Abour Company
                        </div>
                        <div className="job-about-company-info">
                            {props.aboutCompany}
                        </div>
                    </div>
                </div>
                <div className="job-contact">
                    <div className="job-contact-info">
                    <div className="job-contact-title">Company Detail</div>
                        <div className="job-contact-info-title">Company Name</div>
                        <div className="job-contact-info-text">SanSation Restaurant</div>
                        <div className="job-contact-info-title">Location</div>
                        <div className="job-contact-info-text">{props.adres}</div>
                        <div className="job-contact-info-title">Email</div>
                        <div className="job-contact-info-text">{props.email}</div>
                        <div className="job-contact-info-title">Contact Number</div>
                        <div className="job-contact-info-text">{props.phone}</div>
                        <div className="job-contact-info-title">Salary</div>
                        <div className="job-contact-info-text">{props.salary}</div>
                        <button className="job-aplly-btn">Apply Job</button>
                    </div>
                    <div className="job-map">
                    <div >
                        <a href="https://yandex.uz/maps/105810/samarqand-province/?utm_medium=mapframe&utm_source=maps">Самаркандская область</a>
                        <a href="https://yandex.uz/maps/105810/samarqand-province/?ll=67.087165%2C39.693032&utm_medium=mapframe&utm_source=maps&z=14">Самаркандская область — Яндекс Карты</a>
                        <iframe src="https://yandex.uz/map-widget/v1/?ll=67.087165%2C39.693032&z=14" width="300" height="300" frameborder="1" allowfullscreen="true"></iframe>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
