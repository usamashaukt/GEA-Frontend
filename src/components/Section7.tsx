import "./Section7.css";

type Props = {};

const Section7 = (props: Props) => {
  return (
    <div>
      <div className="container margin-20 news-date">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-xs-12 news_events_row">
            <section id="news_events">
              <h3 className="news-heading mar-t15 d-flex align-items-center">
                <img
                  src="../assets/images/sec7/news.svg"
                  className="blue-color mx-1"
                  alt=""
                />
                News
              </h3>
              <div id="home-news-events">
                <div className="blue-box p-4">
                  {/* <!--<div className="visible-xs">
                <div className="text-right">
                  <a href="/pakistan/news/" className="btn btn-round">View all</a>
                </div>
              </div>--> */}
                  <div className="clearfix"></div>
                  <div className="scroller ">
                    <a href="/pakistan/news/four-uk-business-schools-feature-top-15-global-business-school-ranking/">
                      <div className="data mb-2">
                        <h5 className="news-date">9 Mar</h5>
                        <span className="text-3xl font-bold">
                          Four UK Business Schools feature in top 15 of global
                          business school ranking
                        </span>
                      </div>
                    </a>
                    <a href="/pakistan/news/university-st-andrews-ranks-1st-2023-guardian-university-guide-league-table/">
                      <div className="data mb-2">
                        <h5 className="news-date">25 Sep</h5>
                        <span>
                          University of St Andrews ranks 1st in 2023 Guardian
                          University Guide league table
                        </span>
                      </div>
                    </a>
                    <a href="/pakistan/news/her-majesty-queen-elizabeth-ii-passing/">
                      <div className="data mb-2">
                        <h5 className="news-date">9 Sep</h5>
                        <span>
                          The passing of Her Majesty Queen Elizabeth II
                        </span>
                      </div>
                    </a>
                  </div>
                  <p className="text-center btn-view hidden-xs">
                    <a href="/pakistan/news/" className="btn btn-lightblue">
                      View All
                    </a>{" "}
                  </p>
                </div>
                <p
                  className="text-center btn-view visible-xs"
                  style={{ display: "none" }}
                >
                  <a href="/pakistan/news/" className="btn btn-lightblue">
                    View All
                  </a>{" "}
                </p>
              </div>
            </section>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12 news_events_row">
            <section id="news_events">
              <h3 className="news-heading d-flex align-items-center justify-content-start">
                <img
                  src="../assets/images/sec7/calender.svg"
                  className="blue-color mx-1"
                  alt=""
                />
                Events
              </h3>
              <div id="events">
                <div className="blue-box p-4">
                  {/* <!--<div className="visible-xs">
                <div className="text-right">
                  <a href="/pakistan/events/" className="btn btn-round">View all</a>
                </div>
              </div>--> */}
                  <div className="clearfix"></div>
                  <div className="scroller">
                    <a href="/pakistan/events/si-uk-peshawar-september-2024-intake-special-summer-camp-may-august/">
                      <div className="data mb-2">
                        <h5 className="news-date">8 May</h5>
                        <span>
                          SI-UK Peshawar - September 2024 Intake Special Summer
                          Camp, May-August
                        </span>
                      </div>
                    </a>
                    <a href="/pakistan/events/si-uk-multan-september-2024-intake-special-summer-camp-june-august-2024/">
                      <div className="data mb-2">
                        <h5 className="news-date">13 Jun</h5>
                        <span>
                          SI-UK Multan - September 2024 Intake Special Summer
                          Camp, June-August 2024
                        </span>
                      </div>
                    </a>
                    <a href="/pakistan/events/september-2024-intake-june-august-2024/">
                      <div className="data mb-2">
                        <h5 className="news-date">14 Jun</h5>
                        <span>September 2024 Intake,</span>
                      </div>
                    </a>
                  </div>
                  <p className="text-center btn-view hidden-xs">
                    <a href="/pakistan/events/" className="btn btn-darkblue">
                      View All
                    </a>{" "}
                  </p>
                </div>
                <p
                  className="text-center btn-view visible-xs"
                  style={{ display: "none" }}
                >
                  <a href="/pakistan/events/" className="btn btn-darkblue">
                    View All
                  </a>{" "}
                </p>
              </div>
            </section>
          </div>
          {/* <!-- <div className="col-lg-4 col-sm-4 col-xs-12 mb-5">
          <h3 className="news-heading"><i className="fa fa-book" aria-hidden="true" style="color:#c61d20"></i> Study Guide </h3>
          <div className="red-box p-4">
          <!--<div className="visible-xs">
              <div className="text-right">
                <a href="/pakistan/news/" className="btn btn-round">View all</a>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="scroller">
  
                    <div className="data mb-2">
                                 <h5 className = "news-date">17 June 2024</h5>
                                 <a href="/pakistan/study-guide/mistakes-international-students-should-avoid-when-applying-for-a-new-job/" >Mistakes International Students Should Avoid When Applying for a New Job</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">9 May 2024</h5>
                                 <a href="/pakistan/study-guide/pakistan-students-how-to-settle-into-uk-life/" >Pakistan Students: How To Settle Into UK Life</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">11 April 2024</h5>
                                 <a href="/pakistan/study-guide/veterinary-medicine-studies-uk/" >Study Veterinary Medicine in the UK</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">1 April 2024</h5>
                                 <a href="/pakistan/study-guide/best-universities-uk-oil-gas-petroleum-engineering/" >The Best Universities in the UK for Oil, Gas & Petroleum Engineering</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">15 March 2024</h5>
                                 <a href="/pakistan/study-guide/best-fashion-schools-uk/" >The Best Fashion Schools in the UK</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">14 March 2024</h5>
                                 <a href="/pakistan/study-guide/top-five-uk-universities-forensic-science/" >Top Five UK Universities for Forensic Science</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">14 March 2024</h5>
                                 <a href="/pakistan/study-guide/top-five-universities-uk-study-nursing/" >Top Five Universities in the UK to Study Nursing</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">13 March 2024</h5>
                                 <a href="/pakistan/study-guide/studying-cyber-security-degree-uk/" >Studying a Cyber Security Degree in the UK</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">13 March 2024</h5>
                                 <a href="/pakistan/study-guide/top-uk-universities-luxury-brand-management/" >Top UK universities for Luxury Brand Management</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">13 March 2024</h5>
                                 <a href="/pakistan/study-guide/best-law-schools-uk/" >The Best Law Schools in the UK</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">6 March 2024</h5>
                                 <a href="/pakistan/study-guide/best-universities-wales/" >The best universities in Wales</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">26 April 2022</h5>
                                 <a href="/pakistan/study-guide/studying-at-university-dundee-student-testimonial/" >What is it like to study at the University of Dundee? A student testimonial</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">12 March 2022</h5>
                                 <a href="/pakistan/study-guide/international-student-guide-pearson-pte-academic/" >International Student Guide to Pearson PTE Academic</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">13 July 2021</h5>
                                 <a href="/pakistan/study-guide/learning-your-way-university-law/" >Learning Your Way at the University of Law</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">15 January 2021</h5>
                                 <a href="/pakistan/study-guide/fighting-covid-19-university-portsmouth/" >Fighting COVID-19 with the University of Portsmouth</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">20 July 2020</h5>
                                 <a href="/pakistan/study-guide/why-study-university-bradford/" >Study at the University of Bradford</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">15 October 2019</h5>
                                 <a href="/pakistan/study-guide/two-year-post-study-work-visa-facts-international-students/" >Two-year Post-Study Work Visa Facts for International Students</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">2 October 2019</h5>
                                 <a href="/pakistan/study-guide/why-was-stirling-named-university-year-sport/" >Why was Stirling named ‘University of the Year’ for Sport?</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">16 September 2019</h5>
                                 <a href="/pakistan/study-guide/top-five-uk-universities-global-rankings/" >The Top Five UK Universities in the THE Global Rankings</a>
                               </div><div className="data mb-2">
                                 <h5 className = "news-date">11 September 2019</h5>
                                 <a href="/pakistan/study-guide/arriving-uk-international-student/" >Arriving in the UK as an International Student</a>
                               </div>
                <!-- <div className="data mb-2">
                  <h5 className="news-date">17 Sep</h5>
                  <span>Coming soon</span>
  
                </div> 
            </div>
            <p className="text-center mb-1 hidden-xs">
              <a href="/pakistan/study-guide/" className="btn btn-darkblue">View More</a>
            </p>
          </div>
          <p className="text-center mb-1 visible-xs">
            <a href="/pakistan/study-guide/" className="btn btn-darkblue">View More</a>
          </p>
        </div> --> */}
        </div>
      </div>
    </div>
  );
};

export default Section7;
