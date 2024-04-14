import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PersonalizedJobListings.scss";
import { GetJobListingByKeyword } from "../../../actions/user";
import PersonalizedJobListingscards from "./PersonalizedJobListingscards";

// const obj = [
//   {
//     job_id: "IByGWEskHGzGpbCLAAAAAA==",
//     employer_name: "Leidos",
//     employer_logo: "https://www.leidos.com/themes/custom/leidos/logo.png",
//     employer_website: "http://www.leidos.com",
//     employer_company_type: "Engineering Services",
//     job_publisher: "Leidos Careers",
//     job_employment_type: "FULLTIME",
//     job_title: "Front End Developer",
//     job_apply_link:
//       "https://careers.leidos.com/jobs/14216699-front-end-developer",
//     job_apply_is_direct: false,
//     job_apply_quality_score: 0.8126,
//     apply_options: [
//       {
//         publisher: "Leidos Careers",
//         apply_link:
//           "https://careers.leidos.com/jobs/14216699-front-end-developer",
//         is_direct: false,
//       },
//       {
//         publisher: "ZipRecruiter",
//         apply_link:
//           "https://www.ziprecruiter.com/c/Leidos/Job/Front-End-Developer/-in-Alexandria,VA?jid=a9d835728bee850b",
//         is_direct: false,
//       },
//       {
//         publisher: "LinkedIn",
//         apply_link:
//           "https://www.linkedin.com/jobs/view/front-end-developer-at-leidos-3887897269",
//         is_direct: false,
//       },
//       {
//         publisher: "Talent.com",
//         apply_link: "https://www.talent.com/view?id=25d8711f3dd5",
//         is_direct: false,
//       },
//       {
//         publisher: "KGET Jobs",
//         apply_link:
//           "https://jobs.kget.com/jobs/front-end-developer-alexandria-virginia/1287584427-2/",
//         is_direct: false,
//       },
//       {
//         publisher: "MilwaukeeJobs.com",
//         apply_link:
//           "https://www.milwaukeejobs.com/job/detail/78985374/Front-End-Developer?keywords=Server",
//         is_direct: false,
//       },
//       {
//         publisher: "Diversity Jobs",
//         apply_link:
//           "https://diversityjobs.com/career/7731536/Front-End-Developer-Virginia-Alexandria",
//         is_direct: false,
//       },
//       {
//         publisher: "LocalJobs.com",
//         apply_link:
//           "https://www.localjobs.com/job/alexandria-va-front-end-developer-0",
//         is_direct: false,
//       },
//     ],
//     job_description:
//       "Description\n\nLeidos is seeking a Mid to Senior Level Front-End Developer to join our team to support the Department of Justice (DOJ) Executive Office of Immigration Review (EOIR). We're looking for a candidate with strong consulting skills and hands-on experience developing solutions; especially someone with experience in designing, configuring, and deploying cloud solutions; passionate about technology and problem-solving. The Front-End Developer will collaborate with a mix of technical experts and architects, business/product owners, business analysts, technical writers, testers, and scrum masters in an Agile-Scrum environment.\n\nThis position will require that you be onsite 3 days per week in the DC area.\n\nResponsibilities:\n• The Front-End Developer will be part of a scrum team, working with team members and the client to properly define use cases and develop solutions meetings customer requirements.\n• Develop responsive applications based on the business requirements.\n• Ensure the technical feasibility of UI/UX designs\n• Optimize application for maximum speed and scalability\n• Build reusable code and libraries for future use\n• Work as part of a team to ensure the scope of the sprint is complete.\n\nRequired Qualifications:\n• Bachelor's degree in Computer Science, Engineering, or related field with 4+ years of experience. Additional experience may be considered in lieu of a degree.\n• Proven experience as a Front End Developer or similar role\n• Proficient understanding of web markup, including HTML5, CSS3\n• Strong proficiency in JavaScript and modern JavaScript frameworks (e.g., React, Angular, Vue.js)\n• Experience with responsive design techniques and frameworks (e.g., Bootstrap)\n• Experience with server-side languages (e.g., Node.js, Python, PHP)\n• Experience with web accessibility standards (e.g., WCAG)\n• Familiarity with testing frameworks (e.g., Jest, Mocha)\n• Familiarity with version control systems (e.g., Git)\n• Ability to work effectively in a fast-paced environment and meet deadlines\n• Experience with Azure DevOps, Scaled Agile Framework, & Scrum\n• Client Interaction experience\n• Strong Problem-Solving abilities\n• Ability to communicate effectively with customers verbally and in writing.\n• Must be a US Citizen\n• Ability to obtain and maintain a Public Trust security clearance.\n• Candidate selected will be subject to a Government Public Trust security investigation and must meet eligibility requirements for access to the customer’s information.\n\nTarget salary range for this position is $100,000 - $110,000.\n\nOriginal Posting Date:\n2024-04-05\n\nWhile subject to change based on business needs, Leidos reasonably anticipates that this job requisition will remain open for at least 3 days with an anticipated close date of no earlier than 3 days after the original posting date as listed above.\n\nPay Range:\nPay Range $81,250.00 - $146,875.00\n\nThe Leidos pay range for this job level is a general guideline only and not a guarantee of compensation or salary. Additional factors considered in extending an offer include (but are not limited to) responsibilities of the job, education, experience, knowledge, skills, and abilities, as well as internal equity, alignment with market data, applicable bargaining agreement (if any), or other law.",
//     job_is_remote: false,
//     job_posted_at_timestamp: 1712333466,
//     job_posted_at_datetime_utc: "2024-04-05T16:11:06.000Z",
//     job_city: "Alexandria",
//     job_state: "VA",
//     job_country: "US",
//     job_latitude: 38.804836,
//     job_longitude: -77.04692,
//     job_benefits: null,
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=front-end+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=front-end+developer&htidocid=IByGWEskHGzGpbCLAAAAAA%3D%3D",
//     job_offer_expiration_datetime_utc: null,
//     job_offer_expiration_timestamp: null,
//     job_required_experience: {
//       no_experience_required: false,
//       required_experience_in_months: 48,
//       experience_mentioned: true,
//       experience_preferred: false,
//     },
//     job_required_skills: null,
//     job_required_education: {
//       postgraduate_degree: false,
//       professional_certification: false,
//       high_school: false,
//       associates_degree: false,
//       bachelors_degree: false,
//       degree_mentioned: true,
//       degree_preferred: true,
//       professional_certification_mentioned: false,
//     },
//     job_experience_in_place_of_education: false,
//     job_min_salary: null,
//     job_max_salary: null,
//     job_salary_currency: null,
//     job_salary_period: null,
//     job_highlights: {
//       Qualifications: [
//         "Bachelor's degree in Computer Science, Engineering, or related field with 4+ years of experience",
//         "Additional experience may be considered in lieu of a degree",
//         "Proven experience as a Front End Developer or similar role",
//         "Proficient understanding of web markup, including HTML5, CSS3",
//         "Strong proficiency in JavaScript and modern JavaScript frameworks (e.g., React, Angular, Vue.js)",
//         "Experience with responsive design techniques and frameworks (e.g., Bootstrap)",
//         "Experience with server-side languages (e.g., Node.js, Python, PHP)",
//         "Experience with web accessibility standards (e.g., WCAG)",
//         "Familiarity with testing frameworks (e.g., Jest, Mocha)",
//         "Familiarity with version control systems (e.g., Git)",
//         "Ability to work effectively in a fast-paced environment and meet deadlines",
//         "Experience with Azure DevOps, Scaled Agile Framework, & Scrum",
//         "Client Interaction experience",
//         "Strong Problem-Solving abilities",
//         "Ability to communicate effectively with customers verbally and in writing",
//         "Must be a US Citizen",
//         "Ability to obtain and maintain a Public Trust security clearance",
//         "Candidate selected will be subject to a Government Public Trust security investigation and must meet eligibility requirements for access to the customer’s information",
//       ],
//       Responsibilities: [
//         "The Front-End Developer will collaborate with a mix of technical experts and architects, business/product owners, business analysts, technical writers, testers, and scrum masters in an Agile-Scrum environment",
//         "This position will require that you be onsite 3 days per week in the DC area",
//         "The Front-End Developer will be part of a scrum team, working with team members and the client to properly define use cases and develop solutions meetings customer requirements",
//         "Develop responsive applications based on the business requirements",
//         "Ensure the technical feasibility of UI/UX designs",
//         "Optimize application for maximum speed and scalability",
//         "Build reusable code and libraries for future use",
//         "Work as part of a team to ensure the scope of the sprint is complete",
//       ],
//       Benefits: [
//         "Target salary range for this position is $100,000 - $110,000",
//         "Pay Range $81,250.00 - $146,875.00",
//         "The Leidos pay range for this job level is a general guideline only and not a guarantee of compensation or salary",
//       ],
//     },
//     job_job_title: null,
//     job_posting_language: "en",
//     job_onet_soc: "15113400",
//     job_onet_job_zone: "3",
//     job_naics_code: "541512",
//     job_naics_name: "Computer Systems Design Services",
//   },
//   {
//     job_id: "VoqgQH2UpZ9VHAXDAAAAAA==",
//     employer_name: "Zortech Solutions",
//     employer_logo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnxe1Z3WFkr3ZY4CY163i9jkgsBWucqcNtqr2&s=0",
//     employer_website: null,
//     employer_company_type: null,
//     job_publisher: "LinkedIn",
//     job_employment_type: "FULLTIME",
//     job_title: "Front-End Developer",
//     job_apply_link:
//       "https://www.linkedin.com/jobs/view/front-end-developer-at-zortech-solutions-3888464464",
//     job_apply_is_direct: false,
//     job_apply_quality_score: 0.5671,
//     apply_options: [
//       {
//         publisher: "LinkedIn",
//         apply_link:
//           "https://www.linkedin.com/jobs/view/front-end-developer-at-zortech-solutions-3888464464",
//         is_direct: false,
//       },
//     ],
//     job_description:
//       "Title: Front-End Developer (Full-Time/W2/C2C)\n\nLocation: Pittsburgh, PA Lake Mary, FL, NYC/Jersey city,NJ\n\nExp. Level (Junior /Mid-Level/Senior)\n\nClient: Altimetrik/ BNYM\n\nFunction as developer/ engineer to ensure portfolio and client commitments are met. Expertise in CSS and Java Script required.",
//     job_is_remote: false,
//     job_posted_at_timestamp: 1712657705,
//     job_posted_at_datetime_utc: "2024-04-09T10:15:05.000Z",
//     job_city: "Pittsburgh",
//     job_state: "PA",
//     job_country: "US",
//     job_latitude: 40.440624,
//     job_longitude: -79.99589,
//     job_benefits: null,
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=front-end+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=front-end+developer&htidocid=VoqgQH2UpZ9VHAXDAAAAAA%3D%3D",
//     job_offer_expiration_datetime_utc: "2024-05-09T10:13:56.000Z",
//     job_offer_expiration_timestamp: 1715249636,
//     job_required_experience: {
//       no_experience_required: false,
//       required_experience_in_months: null,
//       experience_mentioned: false,
//       experience_preferred: false,
//     },
//     job_required_skills: null,
//     job_required_education: {
//       postgraduate_degree: false,
//       professional_certification: false,
//       high_school: false,
//       associates_degree: false,
//       bachelors_degree: true,
//       degree_mentioned: false,
//       degree_preferred: false,
//       professional_certification_mentioned: false,
//     },
//     job_experience_in_place_of_education: false,
//     job_min_salary: null,
//     job_max_salary: null,
//     job_salary_currency: null,
//     job_salary_period: null,
//     job_highlights: {
//       Qualifications: ["Expertise in CSS and Java Script required"],
//       Responsibilities: [
//         "Function as developer/ engineer to ensure portfolio and client commitments are met",
//       ],
//     },
//     job_job_title: null,
//     job_posting_language: "en",
//     job_onet_soc: "15113400",
//     job_onet_job_zone: "3",
//   },
//   {
//     job_id: "En0iXN0_8WHbS2WvAAAAAA==",
//     employer_name: "Federal Reserve Bank of Chicago",
//     employer_logo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2M8AiHCGp6ResNEwbCl8iN3HSImzw3waIzo5Q&s=0",
//     employer_website: "http://www.chicagofed.org",
//     employer_company_type: "Finance",
//     job_publisher: "Built In Chicago",
//     job_employment_type: "FULLTIME",
//     job_title: "Front End Developer",
//     job_apply_link:
//       "https://www.builtinchicago.org/job/front-end-developer/246504",
//     job_apply_is_direct: false,
//     job_apply_quality_score: 0.697,
//     apply_options: [
//       {
//         publisher: "Built In Chicago",
//         apply_link:
//           "https://www.builtinchicago.org/job/front-end-developer/246504",
//         is_direct: false,
//       },
//       {
//         publisher: "LinkedIn",
//         apply_link:
//           "https://www.linkedin.com/jobs/view/front-end-developer-at-federal-reserve-bank-of-chicago-3881016400",
//         is_direct: false,
//       },
//       {
//         publisher: "Indeed",
//         apply_link: "https://www.indeed.com/viewjob?jk=bca0dd6dfbd0cf06",
//         is_direct: false,
//       },
//       {
//         publisher: "Hispanic Alliance For Career Enhancement",
//         apply_link:
//           "https://jobs.haceonline.org/job/front-end-developer/72997992/",
//         is_direct: false,
//       },
//       {
//         publisher: "ZipRecruiter",
//         apply_link:
//           "https://www.ziprecruiter.com/c/Federal-Reserve-Bank-(FRB)/Job/Front-End-Developer/-in-Chicago,IL?jid=79a25ac941929040",
//         is_direct: false,
//       },
//       {
//         publisher: "Chicago Jobs",
//         apply_link:
//           "https://jobs.chicagobusiness.com/job/front-end-developer/72997992/",
//         is_direct: false,
//       },
//       {
//         publisher: "Glassdoor",
//         apply_link:
//           "https://www.glassdoor.com/job-listing/front-end-developer-federal-reserve-bank-of-chicago-JV_IC1128808_KO0,19_KE20,51.htm?jl=1009220298825",
//         is_direct: false,
//       },
//       {
//         publisher: "Monster",
//         apply_link:
//           "https://www.monster.com/job-openings/front-end-developer-chicago-il--c8c9359a-44bc-4965-a991-d30a5748e3d5",
//         is_direct: false,
//       },
//     ],
//     job_description:
//       "Company\nFederal Reserve Bank of Chicago\nAs Front-End Developer you will develop and validate user experience solutions for department, Bank, and District platforms including websites, web applications and museum exhibits.\nThe level of work is considered intermediate, and you must be able to work under minimal supervision.\nThis position does not have any direct reports. You will report to the Web Services Team Lead.\n#LI-Hybrid\nYour Responsibilities:\n• Build and maintain applications and components using browser-based JavaScript without external dependencies, as well as applications and components in TypeScript and React.\n• Develop responsive UIs, UI components, and data visualizations.\n• Integrate back-end services with public facing applications and websites using front end code.\n• Apply basic understanding of usability and user experience design to develop and execute creative interactive designs for the Banks' online, mobile and museum platforms.\n• Maintain software code in accordance with established organization standards and development guidelines.\n• Meet with customers and project teams to collect requirements, scope projects, and contribute to creative and technical concepts.\n• Employ best practices in the conducting and interpreting of usability tests focused on user experience and effectiveness against project goals.\n• Help to identify areas for UX/Design improvements and assists with managing those projects to implement enhancements to completion including updating software.\n• Document design and interaction standards and work with staff and vendors to enforce their application.\n• Collaborate with team members to provide first-level support for department customers in District technology including web content management systems, event management systems, campaign management systems, and telecommunication/video conferencing systems.\n• Continuously enhance production skills to keep pace with technology and trends.\n\nYour Qualifications:\n• Bachelor's degree in human interface design, computer science or related field plus courses relevant to web technology, or user experience.\n• 3-5 years of direct experience\n• Expertise with user interaction design across diverse platforms\n• Proficiency with HTML, CSS, JavaScript, and other web-oriented technologies\n• Familiarity with web content management systems, web accessibility standards and style guides\n• Strong writing, communication, and customer service skills\n• Ability to work on multiple, deadline-driven projects in a collaborative environment\n• Familiarity with Agile methodology\n\nWhat we offer:\n• Comprehensive benefits package, including medical, dental, vision, prescription drug coverage, 401k savings plan, retirement plan, paid time off, and transit benefit.\n• A continuous learning environment with opportunities to gain new skills and grow your career.\n• A wide range of Diversity, Equity, and Inclusion community groups as well as active employee resource groups and mentorship programs.\n• Onsite gym and subsidized cafeteria.\n\nAdditional Requirements:\n• This role is a hybrid work model in Chicago.\n• Applicants must be currently authorized to work in the United States without the need for visa sponsorship now or in the future.\n• As a condition of employment, Federal Reserve Bank of Chicago employees must comply with the Bank's ethics rules, which generally prohibit employees, their spouses/domestic partners, and minor children from owning securities, such as stock, of banks or savings associations or their affiliates, such as bank holding companies and savings and loan holding companies. If you or your spouse/domestic partner or minor child own such securities, and would not be willing or able to divest them if you accepted an offer of Bank employment, you should raise this issue with the recruiter for this posting, who can provide you contact information for our ethics official if necessary.\n\nWe are committed to equal employment opportunity regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, marital status, disability, gender, gender identity or expression, or veteran status. employment, you should raise this issue with the recruiter for this posting, who can provide you contact information for our ethics official if necessary.\nFull Time / Part Time\nFull time\nRegular / Temporary\nRegular\nJob Exempt (Yes / No)\nYes\nJob Category\nInformation Technology\nWork Shift\nFirst (United States of America)\nThe Federal Reserve Banks believe that diversity and inclusion among our employees is critical to our success as an organization, and we seek to recruit, develop and retain the most talented people from a diverse candidate pool. The Federal Reserve Banks are committed to equal employment opportunity for employees and job applicants in compliance with applicable law and to an environment where employees are valued for their differences.\nPrivacy Notice",
//     job_is_remote: false,
//     job_posted_at_timestamp: 1712186460,
//     job_posted_at_datetime_utc: "2024-04-03T23:21:00.000Z",
//     job_city: "Chicago",
//     job_state: "IL",
//     job_country: "US",
//     job_latitude: 41.878113,
//     job_longitude: -87.6298,
//     job_benefits: [
//       "dental_coverage",
//       "paid_time_off",
//       "retirement_savings",
//       "health_insurance",
//     ],
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=front-end+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=front-end+developer&htidocid=En0iXN0_8WHbS2WvAAAAAA%3D%3D",
//     job_offer_expiration_datetime_utc: "2024-05-03T00:00:00.000Z",
//     job_offer_expiration_timestamp: 1714694400,
//     job_required_experience: {
//       no_experience_required: false,
//       required_experience_in_months: 36,
//       experience_mentioned: true,
//       experience_preferred: false,
//     },
//     job_required_skills: null,
//     job_required_education: {
//       postgraduate_degree: false,
//       professional_certification: false,
//       high_school: false,
//       associates_degree: false,
//       bachelors_degree: true,
//       degree_mentioned: true,
//       degree_preferred: true,
//       professional_certification_mentioned: false,
//     },
//     job_experience_in_place_of_education: false,
//     job_min_salary: null,
//     job_max_salary: null,
//     job_salary_currency: null,
//     job_salary_period: null,
//     job_highlights: {
//       Qualifications: [
//         "Bachelor's degree in human interface design, computer science or related field plus courses relevant to web technology, or user experience",
//         "3-5 years of direct experience",
//         "Expertise with user interaction design across diverse platforms",
//         "Proficiency with HTML, CSS, JavaScript, and other web-oriented technologies",
//         "Familiarity with web content management systems, web accessibility standards and style guides",
//         "Strong writing, communication, and customer service skills",
//         "Ability to work on multiple, deadline-driven projects in a collaborative environment",
//         "Familiarity with Agile methodology",
//         "This role is a hybrid work model in Chicago",
//         "Applicants must be currently authorized to work in the United States without the need for visa sponsorship now or in the future",
//         "As a condition of employment, Federal Reserve Bank of Chicago employees must comply with the Bank's ethics rules, which generally prohibit employees, their spouses/domestic partners, and minor children from owning securities, such as stock, of banks or savings associations or their affiliates, such as bank holding companies and savings and loan holding companies",
//       ],
//       Responsibilities: [
//         "As Front-End Developer you will develop and validate user experience solutions for department, Bank, and District platforms including websites, web applications and museum exhibits",
//         "Build and maintain applications and components using browser-based JavaScript without external dependencies, as well as applications and components in TypeScript and React",
//         "Develop responsive UIs, UI components, and data visualizations",
//         "Integrate back-end services with public facing applications and websites using front end code",
//         "Apply basic understanding of usability and user experience design to develop and execute creative interactive designs for the Banks' online, mobile and museum platforms",
//         "Maintain software code in accordance with established organization standards and development guidelines",
//         "Meet with customers and project teams to collect requirements, scope projects, and contribute to creative and technical concepts",
//         "Employ best practices in the conducting and interpreting of usability tests focused on user experience and effectiveness against project goals",
//         "Help to identify areas for UX/Design improvements and assists with managing those projects to implement enhancements to completion including updating software",
//         "Document design and interaction standards and work with staff and vendors to enforce their application",
//         "Collaborate with team members to provide first-level support for department customers in District technology including web content management systems, event management systems, campaign management systems, and telecommunication/video conferencing systems",
//         "Continuously enhance production skills to keep pace with technology and trends",
//       ],
//       Benefits: [
//         "Comprehensive benefits package, including medical, dental, vision, prescription drug coverage, 401k savings plan, retirement plan, paid time off, and transit benefit",
//         "A continuous learning environment with opportunities to gain new skills and grow your career",
//         "A wide range of Diversity, Equity, and Inclusion community groups as well as active employee resource groups and mentorship programs",
//         "Onsite gym and subsidized cafeteria",
//         "Full time",
//       ],
//     },
//     job_job_title: null,
//     job_posting_language: "en",
//     job_onet_soc: "15113400",
//     job_onet_job_zone: "3",
//     job_naics_code: "522110",
//     job_naics_name: "Commercial Banking",
//   },
//   {
//     job_id: "cM9d_3FvHMwm0jszAAAAAA==",
//     employer_name: "RedRover",
//     employer_logo: null,
//     employer_website: null,
//     employer_company_type: null,
//     job_publisher: "ZipRecruiter",
//     job_employment_type: "FULLTIME",
//     job_title: "Front End Developer, JR",
//     job_apply_link:
//       "https://www.ziprecruiter.com/c/RedRover/Job/Front-End-Developer,-JR/-in-Memphis,TN?jid=428ca52585250581",
//     job_apply_is_direct: true,
//     job_apply_quality_score: 0.6033,
//     apply_options: [
//       {
//         publisher: "ZipRecruiter",
//         apply_link:
//           "https://www.ziprecruiter.com/c/RedRover/Job/Front-End-Developer,-JR/-in-Memphis,TN?jid=428ca52585250581",
//         is_direct: true,
//       },
//     ],
//     job_description:
//       "Salary:\n\nRedRover Sales and Marketing Strategy is seeking an junior Front End Developer to join our pack! (Remote/Virtual Role and in-office welcome)\n\nRedRover Sales & Marketing Strategy, an internationally award-winning, metrics-driven, Memphis-based agency (the only agency in the market offering a results-guarantee), is hiring a high-performing front-end web developer with ~2 years of experience in front-end development in an advertising agency or a marketing firm.\n• Do you have the ability to use client input to create functional, creative, and user-friendly digital experiences?\n• Do you desire to be a decision-maker in website strategies?\n• Are you observant and able to remain focused on tasks for long periods of time?\n• Can you strike a balance between functional and aesthetic design?\n• Do you value continued education and the pursuit of advanced certifications?\n\n…if you answered yes to these questions, this may be the opportunity for you!\n\nPotential candidates should be proficient in web development and experienced in graphic design. Candidates should be ready to submit a portfolio of their work and source code for review by RedRover’s interview panel.\n\nDaily Activities Include:\n• Develop features to enhance the users’ experience\n• Striking a balance between functional and aesthetic design.\n• Build reusable code for future use\n• Make sure web pages are optimized for best speed and scalability\n• Employ a diverse selection of markup languages to design web pages\n• Keep the brand consistent throughout the whole design\n• Working with clients to develop the overall strategy, look and design of a website\n• Writing website code with programming languages such as HTML, PHP and Javascript\n• Producing, maintaining and modifying websites and user interfaces\n• Incorporating applications, graphics, audio and video clips into client websites\n• Creating tools that enhance the user’s website experience\n• Ensuring websites are accessible across many platforms, including laptops and smartphones\n• Routinely testing websites for ease of use, speed and other quality factors\n• Fixing any website issues or bugs that arise\n• Communicate to team and management on project status, timelines and results; and\n• Work closely with other team members to meet client goals.\n• Test and debug websites\n\nRequired Knowledge, Skills, and Abilities:\n• Proficiency in Java, HTML, CSS, JavaScript, SQL and modern front end technologies like Angular or React\n• Experience in cross-platform and responsive website design\n• Experience implementing modern frontend best practices and advising on new technology adoption\n• Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign, etc.)\n• Solid understanding of UX and UI practices for websites\n• Must-Have: A thorough understanding of web design and SEO optimization\n• Ability to work in a fast-paced, flexible environment\n• Problem-solving skills\n• Analytical and detail-oriented\n• Communication and organization skills\n• Each of RedRover’s core values: courageous, agents of change, an incurable need for results, self-disciplined/accountable and believe in the team win before the self-win (and the win matters!)\n\nThe selected candidate will demonstrate the highest levels of self and team accountability, receptivity to change, a strong work ethic, a desire to join a fast-paced culture and a passion for joining a high-performance, entrepreneurial company.\n\nRedRover offers competitive compensation as well as an innovative benefits package including healthcare, dental and vision benefits; generous paid time off that escalates with tenure; vacation expense reimbursement; pet insurance; daycare expense reimbursement; fitness/wellness benefits; paid maternity/paternity leave including with newly adopted children; retirement contributions after a period of tenure; and flexible hours.\n\nAbout Culture Index™\n\nAfter you apply for this position, you will receive a thank-you email along with a link to a short survey. It's essential that you complete this workplace preference survey, as your application cannot be reviewed until it's complete. Great news, though, as it only takes 8-10 minutes to complete.\n\nLearn About RedRover's Culture\n\nTo learn more about our unique best-in-breed culture, click here.",
//     job_is_remote: true,
//     job_posted_at_timestamp: 1712622218,
//     job_posted_at_datetime_utc: "2024-04-09T00:23:38.000Z",
//     job_city: "Memphis",
//     job_state: "TN",
//     job_country: "US",
//     job_latitude: 35.149536,
//     job_longitude: -90.04898,
//     job_benefits: [
//       "paid_time_off",
//       "health_insurance",
//       "dental_coverage",
//       "retirement_savings",
//     ],
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=front-end+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=front-end+developer&htidocid=cM9d_3FvHMwm0jszAAAAAA%3D%3D",
//     job_offer_expiration_datetime_utc: "2024-05-09T00:00:00.000Z",
//     job_offer_expiration_timestamp: 1715212800,
//     job_required_experience: {
//       no_experience_required: false,
//       required_experience_in_months: 24,
//       experience_mentioned: true,
//       experience_preferred: false,
//     },
//     job_required_skills: null,
//     job_required_education: {
//       postgraduate_degree: false,
//       professional_certification: false,
//       high_school: false,
//       associates_degree: false,
//       bachelors_degree: false,
//       degree_mentioned: false,
//       degree_preferred: false,
//       professional_certification_mentioned: true,
//     },
//     job_experience_in_place_of_education: false,
//     job_min_salary: null,
//     job_max_salary: null,
//     job_salary_currency: null,
//     job_salary_period: null,
//     job_highlights: {
//       Qualifications: [
//         "Do you have the ability to use client input to create functional, creative, and user-friendly digital experiences?",
//         "Potential candidates should be proficient in web development and experienced in graphic design",
//         "Candidates should be ready to submit a portfolio of their work and source code for review by RedRover’s interview panel",
//         "Proficiency in Java, HTML, CSS, JavaScript, SQL and modern front end technologies like Angular or React",
//         "Experience in cross-platform and responsive website design",
//         "Experience implementing modern frontend best practices and advising on new technology adoption",
//         "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign, etc.)",
//         "Solid understanding of UX and UI practices for websites",
//         "Must-Have: A thorough understanding of web design and SEO optimization",
//         "Ability to work in a fast-paced, flexible environment",
//         "Problem-solving skills",
//         "Analytical and detail-oriented",
//         "Communication and organization skills",
//         "Each of RedRover’s core values: courageous, agents of change, an incurable need for results, self-disciplined/accountable and believe in the team win before the self-win (and the win matters!)",
//       ],
//       Responsibilities: [
//         "Develop features to enhance the users’ experience",
//         "Striking a balance between functional and aesthetic design",
//         "Build reusable code for future use",
//         "Make sure web pages are optimized for best speed and scalability",
//         "Employ a diverse selection of markup languages to design web pages",
//         "Keep the brand consistent throughout the whole design",
//         "Working with clients to develop the overall strategy, look and design of a website",
//         "Writing website code with programming languages such as HTML, PHP and Javascript",
//         "Producing, maintaining and modifying websites and user interfaces",
//         "Incorporating applications, graphics, audio and video clips into client websites",
//         "Creating tools that enhance the user’s website experience",
//         "Ensuring websites are accessible across many platforms, including laptops and smartphones",
//         "Routinely testing websites for ease of use, speed and other quality factors",
//         "Fixing any website issues or bugs that arise",
//         "Communicate to team and management on project status, timelines and results; and",
//         "Work closely with other team members to meet client goals",
//         "Test and debug websites",
//       ],
//       Benefits: [
//         "RedRover offers competitive compensation as well as an innovative benefits package including healthcare, dental and vision benefits; generous paid time off that escalates with tenure; vacation expense reimbursement; pet insurance; daycare expense reimbursement; fitness/wellness benefits; paid maternity/paternity leave including with newly adopted children; retirement contributions after a period of tenure; and flexible hours",
//       ],
//     },
//     job_job_title: null,
//     job_posting_language: "en",
//     job_onet_soc: "15113400",
//     job_onet_job_zone: "3",
//     job_occupational_categories: ["15-1134.00: Web Developers"],
//   },
//   {
//     job_id: "dyJPWQNKVaSp5cSwAAAAAA==",
//     employer_name: "Arch Systems",
//     employer_logo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rC2CaJ7cAMpNkGsjsfMsp9GLovGKuTg_ksDj&s=0",
//     employer_website: "http://www.archsystemsinc.com",
//     employer_company_type: null,
//     job_publisher: "WayUp",
//     job_employment_type: "FULLTIME",
//     job_title: "DrupalFront End Developer",
//     job_apply_link: "https://www.wayup.com/i-j-Arch-Systems-752808411991966/",
//     job_apply_is_direct: false,
//     job_apply_quality_score: 0.5535,
//     apply_options: [
//       {
//         publisher: "WayUp",
//         apply_link: "https://www.wayup.com/i-j-Arch-Systems-752808411991966/",
//         is_direct: false,
//       },
//     ],
//     job_description:
//       "Job Description\n\nJob Description\n\nRole: Drupal/Front End Developer\n\nCompany: Arch Systems\n\nProject: NIH\n\nLocation: 100% Remote\n\nJob Description:\n\nWe are seeking a skilled and experienced individual to join our team as a Drupal/Front End Developer. In this role, you will be responsible for designing, developing, and maintaining Drupal-based websites and web applications, with a focus on front-end development and user experience.\n\nKey Responsibilities:\n\n1. Drupal Development:\n\n- Design, develop, and maintain Drupal websites and web applications, ensuring high performance, security, and scalability.\n\n- Customize Drupal themes and templates to achieve desired user interface designs and functionality.\n\n- Integrate third-party modules and plugins as needed to enhance website features and capabilities.\n\n2. Front-End Development:\n\n- Implement responsive and user-friendly front-end interfaces using HTML, CSS, and JavaScript frameworks (e.g., jQuery, React, Angular).\n\n- Optimize websites and applications for cross-browser compatibility, performance, and accessibility.\n\n- Collaborate with designers and back-end developers to ensure seamless integration of front-end and back-end components.\n\n3. Content Management:\n\n- Manage and organize content within the Drupal content management system (CMS), including creating, editing, and publishing content.\n\n- Configure and customize content types, fields, and taxonomies to meet project requirements.\n\n4. Quality Assurance:\n\n- Conduct thorough testing and debugging of Drupal websites and applications to identify and resolve issues.\n\n- Ensure adherence to coding standards, best practices, and accessibility guidelines throughout the development process.\n\n5. Documentation and Training:\n\n- Document technical specifications, development processes, and system architecture as needed.\n\n- Provide training and support to content editors and administrators on Drupal CMS functionality and best practices.\n\nSkills and Qualifications:\n\n- Bachelor's degree in Computer Science, Web Development, or related field.\n\n- Proven experience in Drupal development, with proficiency in Drupal 8/9\n\n- Strong front-end development skills, including HTML5, CSS3, JavaScript, and responsive design techniques.\n\n- Experience with front-end frameworks/libraries such as Bootstrap, Foundation, or Materialize.\n\n- Familiarity with version control systems (e.g., Git) and development workflows.\n\n- Knowledge of PHP programming language and familiarity with MySQL or other relational databases.\n\n- Understanding of web performance optimization techniques and SEO best practices.\n\n- Excellent problem-solving skills and attention to detail.\n\n- Effective communication and collaboration abilities in a team environment.\n\nCompany Description\n\nHIGH Growth, small business. Check us out at https://archsystemsinc.com/\n\nArch Systems LLC is committed to diversity in its workforce and is proud to be an equal opportunity employer. Arch Systems LLC considers qualified applicants without regard to race, color, religion, creed, gender, national origin, age, disability, veteran status, marital status, pregnancy, sex, gender expression or identity, sexual orientation, or any other legally protected class. Arch Systems LLC is an Affirmative Action and Equal Opportunity Employer.\n\nCompany Description\n\nHIGH Growth, small business. Check us out at https://archsystemsinc.com/\n\nArch Systems LLC is committed to diversity in its workforce and is proud to be an equal opportunity employer. Arch Systems LLC considers qualified applicants without regard to race, color, religion, creed, gender, national origin, age, disability, veteran status, marital status, pregnancy, sex, gender expression or identity, sexual orientation, or any other legally protected class. Arch Systems LLC is an Affirmative Action and Equal Opportunity Employer.",
//     job_is_remote: false,
//     job_posted_at_timestamp: 1712623644,
//     job_posted_at_datetime_utc: "2024-04-09T00:47:24.000Z",
//     job_city: "Baltimore",
//     job_state: "MD",
//     job_country: "US",
//     job_latitude: 39.290386,
//     job_longitude: -76.61219,
//     job_benefits: null,
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=front-end+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=front-end+developer&htidocid=dyJPWQNKVaSp5cSwAAAAAA%3D%3D",
//     job_offer_expiration_datetime_utc: null,
//     job_offer_expiration_timestamp: null,
//     job_required_experience: {
//       no_experience_required: false,
//       required_experience_in_months: null,
//       experience_mentioned: true,
//       experience_preferred: false,
//     },
//     job_required_skills: null,
//     job_required_education: {
//       postgraduate_degree: false,
//       professional_certification: false,
//       high_school: false,
//       associates_degree: false,
//       bachelors_degree: false,
//       degree_mentioned: true,
//       degree_preferred: true,
//       professional_certification_mentioned: false,
//     },
//     job_experience_in_place_of_education: false,
//     job_min_salary: null,
//     job_max_salary: null,
//     job_salary_currency: null,
//     job_salary_period: null,
//     job_highlights: {
//       Qualifications: [
//         "Bachelor's degree in Computer Science, Web Development, or related field",
//         "Proven experience in Drupal development, with proficiency in Drupal 8/9",
//         "Strong front-end development skills, including HTML5, CSS3, JavaScript, and responsive design techniques",
//         "Experience with front-end frameworks/libraries such as Bootstrap, Foundation, or Materialize",
//         "Familiarity with version control systems (e.g., Git) and development workflows",
//         "Knowledge of PHP programming language and familiarity with MySQL or other relational databases",
//         "Understanding of web performance optimization techniques and SEO best practices",
//         "Excellent problem-solving skills and attention to detail",
//         "Effective communication and collaboration abilities in a team environment",
//       ],
//       Responsibilities: [
//         "In this role, you will be responsible for designing, developing, and maintaining Drupal-based websites and web applications, with a focus on front-end development and user experience",
//         "Design, develop, and maintain Drupal websites and web applications, ensuring high performance, security, and scalability",
//         "Customize Drupal themes and templates to achieve desired user interface designs and functionality",
//         "Integrate third-party modules and plugins as needed to enhance website features and capabilities",
//         "Implement responsive and user-friendly front-end interfaces using HTML, CSS, and JavaScript frameworks (e.g., jQuery, React, Angular)",
//         "Optimize websites and applications for cross-browser compatibility, performance, and accessibility",
//         "Collaborate with designers and back-end developers to ensure seamless integration of front-end and back-end components",
//         "Manage and organize content within the Drupal content management system (CMS), including creating, editing, and publishing content",
//         "Configure and customize content types, fields, and taxonomies to meet project requirements",
//         "Quality Assurance:",
//         "Conduct thorough testing and debugging of Drupal websites and applications to identify and resolve issues",
//         "Ensure adherence to coding standards, best practices, and accessibility guidelines throughout the development process",
//         "Documentation and Training:",
//         "Document technical specifications, development processes, and system architecture as needed",
//         "Provide training and support to content editors and administrators on Drupal CMS functionality and best practices",
//       ],
//     },
//     job_job_title: null,
//     job_posting_language: "en",
//     job_onet_soc: "15113400",
//     job_onet_job_zone: "3",
//   },
//   {
//     job_id: "pt_6wiinZaxzSlaEAAAAAA==",
//     employer_name: "Vanguard",
//     employer_logo:
//       "https://static.wikia.nocookie.net/logopedia/images/d/d4/The_Vanguard_Group_Logo.svg.png/revision/latest?cb=20180908090838",
//     employer_website: "http://www.vanguard.com",
//     employer_company_type: "Finance",
//     job_publisher: "Vanguard Careers",
//     job_employment_type: "FULLTIME",
//     job_title: "Front-End Engineer",
//     job_apply_link:
//       "https://www.vanguardjobs.com/job/20194777/front-end-engineer-charlotte-nc/",
//     job_apply_is_direct: false,
//     job_apply_quality_score: 0.797,
//     apply_options: [
//       {
//         publisher: "Vanguard Careers",
//         apply_link:
//           "https://www.vanguardjobs.com/job/20194777/front-end-engineer-charlotte-nc/",
//         is_direct: false,
//       },
//       {
//         publisher: "Built In",
//         apply_link: "https://builtin.com/job/front-end-engineer/2439511",
//         is_direct: false,
//       },
//       {
//         publisher: "Indeed",
//         apply_link: "https://www.indeed.com/viewjob?jk=b78ee6f13a6e2341",
//         is_direct: false,
//       },
//       {
//         publisher: "Dice",
//         apply_link:
//           "https://www.dice.com/job-detail/dd2cd214-a610-4594-b9fa-2eb125d1fef3",
//         is_direct: false,
//       },
//       {
//         publisher: "ZipRecruiter",
//         apply_link:
//           "https://www.ziprecruiter.com/c/Vanguard-Group/Job/Front-End-Engineer/-in-Charlotte,NC?jid=d8e9937463c72365",
//         is_direct: false,
//       },
//       {
//         publisher: "Glassdoor",
//         apply_link:
//           "https://www.glassdoor.com/job-listing/front-end-engineer-vanguard-JV_IC1138644_KO0,18_KE19,27.htm?jl=1009223344638",
//         is_direct: false,
//       },
//       {
//         publisher: "The Muse",
//         apply_link: "https://www.themuse.com/jobs/vanguard/frontend-engineer",
//         is_direct: false,
//       },
//       {
//         publisher: "CareerBuilder",
//         apply_link: "https://www.careerbuilder.com/job/J3Q625657LBV6SRYNM8",
//         is_direct: false,
//       },
//     ],
//     job_description:
//       "Create the products that are changing an industry\n\nJoin Vanguard as a Frontend Engineer and be a part of creating the next generation of the user experience for our investors. Work with the latest technology including but not limited to, Angular, Vue.js, Javascript, HTML and CSS . Be a part of a dynamic team that's not afraid to pivot, work hard, have fun and make a measurable impact on the success of our clients!\n\nWe never stop working to make investing simpler and more successful for our clients. By promoting new ways of building software, you’ll optimize products and keep our client experience improving at pace. Your work as a Senior Front-end developer will not only give you true ownership of your products as you capitalize on a Lean Agile approach. It will impact the way the world invests.\n\nIn this role you will\n• Work on a cross-functional product team where your deep understanding of design layout and behavior will be called upon to translate advanced designs into accessible, semantic markup and responsive web pages.\n• Collaborate with product owners, UX designers, data analysts, scrum masters, and developers to develop a world-class user experience. Recommend and effectively explain improvements in functionality, and UX elements that enable users to achieve their goals. Be an expert in building working relationships across divisions.\n• Research, advocate and implement industry standard coding methodologies to improve workflows through the selection of evolving technologies and tools that your team will use to build expert-level user experiences.\n• Develop and continually improve client-side and server-side architecture for web applications. Maintain reusable component libraries for design patterns. Incorporate content management system into the application architecture.\n\nIf you are passionate for test driven development and thrive solving problems, then come join a team that will enable you leverage your expertise while fueling your thirst for growth as a technologist.\n\nWhat it takes:\n• Extensive experience with HTML5, CSS3 and JavaScript, TypeScript\n• Modern frontend experience in one or more of the following: Angular, React, Adobe Experience Manager, Adobe Target, Adobe Launch highly desirable\n• Advanced knowledge of the UI/UX design practices and concepts to create highly interactive interfaces\n• Working knowledge of backend technologies (Node.JS, Java)\n• Experience with or thirst to quickly learn AWS (ECS Fargate, S3, DynamoDB, EMR, EC2, Storage Gateway, IAM, Streams)\n• Experience using CI/CD pipeline tools like Bamboo, Jenkins\n• Functional knowledge of Python, Scala and Java\n• Undergraduate degree or equivalent combination of training and experience\n• At least five years of industry/field-specific experience, including substantial hands-on involvement in front-end development\n\nVanguard is not offering visa sponsorship for this position.\n\nThis is a hybrid role (3 days onsite)\n\nSpecial Factors\n\nSponsorship\nVanguard is not offering visa sponsorship for this position.\n\nAbout Vanguard\n\nWe are Vanguard. Together, we’re changing the way the world invests.\n\nFor us, investing doesn’t just end in value. It starts with values. Because when you invest with courage, when you invest with clarity, and when you invest with care, you can get so much more in return. We invest with purpose – and that’s how we’ve become a global market leader. Here, we grow by doing the right thing for the people we serve. And so can you.\n\nWe want to make success accessible to everyone. This is our opportunity. Let’s make it count.\n\nInclusion Statement\n\nVanguard’s continued commitment to diversity and inclusion is firmly rooted in our culture. Every decision we make to best serve our clients, crew (internally employees are referred to as crew), and communities is guided by one simple statement: “Do the right thing.”\n\nWe believe that a critical aspect of doing the right thing requires building diverse, inclusive, and highly effective teams of individuals who are as unique as the clients they serve. We empower our crew to contribute their distinct strengths to achieving Vanguard’s core purpose through our values.\n\nWhen all crew members feel valued and included, our ability to collaborate and innovate is amplified, and we are united in delivering on Vanguard's core purpose.\n\nOur core purpose: To take a stand for all investors, to treat them fairly, and to give them the best chance for investment success.\n\nHow We Work\n\nVanguard has implemented a hybrid working model for the majority of our crew members, designed to capture the benefits of enhanced flexibility while enabling in-person learning, collaboration, and connection. We believe our mission-driven and highly collaborative culture is a critical enabler to support long-term client outcomes and enrich the employee experience.",
//     job_is_remote: false,
//     job_posted_at_timestamp: 1712188800,
//     job_posted_at_datetime_utc: "2024-04-04T00:00:00.000Z",
//     job_city: "Charlotte",
//     job_state: "NC",
//     job_country: "US",
//     job_latitude: 35.227085,
//     job_longitude: -80.843124,
//     job_benefits: null,
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=front-end+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=front-end+developer&htidocid=pt_6wiinZaxzSlaEAAAAAA%3D%3D",
//     job_offer_expiration_datetime_utc: null,
//     job_offer_expiration_timestamp: null,
//     job_required_experience: {
//       no_experience_required: false,
//       required_experience_in_months: 60,
//       experience_mentioned: true,
//       experience_preferred: false,
//     },
//     job_required_skills: null,
//     job_required_education: {
//       postgraduate_degree: false,
//       professional_certification: false,
//       high_school: false,
//       associates_degree: false,
//       bachelors_degree: false,
//       degree_mentioned: true,
//       degree_preferred: false,
//       professional_certification_mentioned: false,
//     },
//     job_experience_in_place_of_education: false,
//     job_min_salary: null,
//     job_max_salary: null,
//     job_salary_currency: null,
//     job_salary_period: null,
//     job_highlights: {
//       Qualifications: [
//         "Extensive experience with HTML5, CSS3 and JavaScript, TypeScript",
//         "Advanced knowledge of the UI/UX design practices and concepts to create highly interactive interfaces",
//         "Working knowledge of backend technologies (Node.JS, Java)",
//         "Experience with or thirst to quickly learn AWS (ECS Fargate, S3, DynamoDB, EMR, EC2, Storage Gateway, IAM, Streams)",
//         "Experience using CI/CD pipeline tools like Bamboo, Jenkins",
//         "Functional knowledge of Python, Scala and Java",
//         "Undergraduate degree or equivalent combination of training and experience",
//         "At least five years of industry/field-specific experience, including substantial hands-on involvement in front-end development",
//       ],
//       Responsibilities: [
//         "Join Vanguard as a Frontend Engineer and be a part of creating the next generation of the user experience for our investors",
//         "Be a part of a dynamic team that's not afraid to pivot, work hard, have fun and make a measurable impact on the success of our clients!",
//         "Your work as a Senior Front-end developer will not only give you true ownership of your products as you capitalize on a Lean Agile approach",
//         "Work on a cross-functional product team where your deep understanding of design layout and behavior will be called upon to translate advanced designs into accessible, semantic markup and responsive web pages",
//         "Collaborate with product owners, UX designers, data analysts, scrum masters, and developers to develop a world-class user experience",
//         "Be an expert in building working relationships across divisions",
//         "Research, advocate and implement industry standard coding methodologies to improve workflows through the selection of evolving technologies and tools that your team will use to build expert-level user experiences",
//         "Develop and continually improve client-side and server-side architecture for web applications",
//         "Maintain reusable component libraries for design patterns",
//         "Incorporate content management system into the application architecture",
//       ],
//       Benefits: ["Vanguard is not offering visa sponsorship for this position"],
//     },
//     job_job_title: "Front-end engineer",
//     job_posting_language: "en",
//     job_onet_soc: "15113400",
//     job_onet_job_zone: "3",
//     job_naics_code: "523920",
//     job_naics_name: "Portfolio Management",
//   },
//   {
//     job_id: "SJvv9IDdZqdd2P1VAAAAAA==",
//     employer_name: "Nestle Operational Services Worldwide SA",
//     employer_logo: null,
//     employer_website: "http://www.purina.ch/de",
//     employer_company_type: null,
//     job_publisher: "Your Career Journey With Nestlé | Nestlé Global - Nestlé",
//     job_employment_type: "FULLTIME",
//     job_title: "Front-End Developer Specialist (Hybrid)",
//     job_apply_link:
//       "https://jobdetails.nestle.com/job/New-York-Front-End-Developer-Specialist-%28Hybrid%29-NY-10001/1053804101/",
//     job_apply_is_direct: false,
//     job_apply_quality_score: 0.7968,
//     apply_options: [
//       {
//         publisher: "Your Career Journey With Nestlé | Nestlé Global - Nestlé",
//         apply_link:
//           "https://jobdetails.nestle.com/job/New-York-Front-End-Developer-Specialist-%28Hybrid%29-NY-10001/1053804101/",
//         is_direct: false,
//       },
//       {
//         publisher: "Dice",
//         apply_link:
//           "https://www.dice.com/job-detail/6dc1c52d-76ab-4bfb-a5d1-c5de56050356",
//         is_direct: false,
//       },
//       {
//         publisher: "ZipRecruiter",
//         apply_link:
//           "https://www.ziprecruiter.com/c/Nestle/Job/Front-End-Developer-Specialist-(Hybrid)/-in-New-York,NY?jid=af061f4ebbdb8321",
//         is_direct: false,
//       },
//       {
//         publisher: "SimplyHired",
//         apply_link:
//           "https://www.simplyhired.com/job/agH5fEjaR0ejkWv3R7re0wJSCREaBn44xUf6qASLwDjSs8so5wHZyA",
//         is_direct: false,
//       },
//       {
//         publisher: "LocalJobs.com",
//         apply_link:
//           "https://www.localjobs.com/job/new-york-ny-front-end-developer-specialist-hybrid",
//         is_direct: false,
//       },
//       {
//         publisher: "Indeed",
//         apply_link: "https://www.indeed.com/viewjob?jk=b49dc2d5f94dc9cc",
//         is_direct: false,
//       },
//       {
//         publisher: "Monster",
//         apply_link:
//           "https://www.monster.com/job-openings/front-end-developer-specialist-hybrid-new-york-city-ny--3755289f-6b95-4e4b-b1a4-2bb70544a1cb",
//         is_direct: false,
//       },
//       {
//         publisher: "Diversity Jobs",
//         apply_link:
//           "https://diversityjobs.com/career/7646429/Front-End-Developer-Specialist-Hybrid-New-York-New-York",
//         is_direct: false,
//       },
//     ],
//     job_description:
//       "At Nespresso, we place people and specialty coffee at the heart of what we do. As part of our team, you'll be empowered to inspire, care, act, and innovate to reach your full potential and reimagine what coffee can be. As a certified B Corporation, we're committed to driving our triple bottom line – People, Profit, and Planet – by delivering an exceptional coffee experience that elevates our community, suppliers, farmers, and each other, channeling our growth-minded spirit to set new standards in global coffee culture. Quality, sustainability, diversity, and inclusion are core to who we are and critical to our vision of driving positive change. Throughout our factories, boutiques, and office locations, Nespresso careers are brimming with best-in-class opportunities for your development and growth. Join us!\n\nPOSITION SUMMARY:\n\nThe Front-End Developer Specialist will manage local standalone applications for market initiatives which will in turn improve performance of the Nespresso US eCommerce responsive site. The developer will liaise with another local front-end developers as well as between the US market and Headquarters in Switzerland (often through peer-programming) for all technical eCommerce projects. These projects will be tied to Nespresso global roadmap, local initiatives, and daily operations. As a member of the eCommerce Operations team within the Commercial division, this person will report to the Manager Digital Commerce Web Development and work alongside a growing team of 4 Content Producers and 2 Front End Developers.\n\nRESPONSIBILITES:\n\nDrive local web development within US market to increase membership and conversion:\n• Advise the technical local landing page development (HTML, CSS, JS), ensuring all Nespresso design and technical guidelines are followed by local design-development agency, are AA compliment and in line with industry best practices (knowledge of responsive frameworks and designs)\n• Support validate the technical assessment of projects development from end-to-end, considering technical development, implementation, tracking and documentation\n• Familiarity with node applications and build tools such as web pack or rollup\n• Comfortable working with commandline and have worked with libraries like JQuery and experience with frameworks such as React or Vue. (React Preferred)\n• Understand basic server responses, network request (HTML), CSS and pre-processors (i.e. SASS), JS, (ES6+)\n• Drive development of A/B test and personalization use cases implementations (via Google Optimize or Dynamic Yield), as defined on eCom roadmap. Collaborating with HQ when necessary to successfully launch tests with the objective of improving the customer site experience\n• Collaborate with Content Producers on content publication as needed\n• Identify unrealized opportunities / risks as part of all key roll-outs and launches\n\nManage daily performance of eCommerce platforms:\n• Support Platform stability of nespresso.com and Nespresso app.\n• Ensure a fast, updated, optimized bug free user experience on all eCommerce platforms, following International eBusiness guidelines\n• Developing React based web-application for master site. Flag any risks associated with local front-end workarounds implemented\n• Support resolution of identified bugs and deliver enhancements on existing projects by managing internal backlog deliverables, in alignment with Dev Lead\n\nContribute to a team leading site optimizations at a local level:\n• Work with teams to solve for major issue affecting conversion rate, new member activation, or availability of the products or the platforms\n• Execute on local initiatives as defined by the eCommerce roadmap in collaboration with cross functional stakeholders (Marketing, CRM, IS/IT, CRC) when necessary\n• Deliver project documentation, following best-in-class standards, ensuring business continuity\n• Understand local Market Acceptance Testing (MAT) process and contribute to ways to streamline and find efficiencies\n• Contribute to a growing team, ways of working and knowledge share across internal network\n\nREQUIREMENTS:\n• Bachelor’s Degree\n• Master’s degree in computer science preferred\n• 4+ years’ experience in eCommerce platforms and content management systems (SAP Hybris or similar), including App\n• 2+ years’ experience working with HTML, CSS, JavaScript,ReactJS, Typescript\n• 1+ years' experience in eMerchandising, A/B Testing & personalization , strongly preferred\n• 1+ years’ experience with Web performance Optimization\n• Ability to optimize UI/UX based on advanced analytics data preferred (i.e., Google Analytics, Content Square, Session Cam, Google)\n\nSKILLS:\n• Strong communication and organizational skills\n• Web performance optimization skill is a plus\n• Accuracy, reliability & vigilant attention to detail\n• Project oriented\n\nThe approximate pay range for this position is $105,000- $125,000 base. Please note that the pay range provided is a good faith estimate for the position at the time of posting. Final compensation may vary based on factors including but not limited to knowledge, skills, and abilities as well as geographic location.\n\nNestle offers performance-based incentives and a competitive total rewards package, which includes a 401k with company match, healthcare coverage and a broad range of other benefits. Incentives and/or benefits packages may vary depending on the position. Learn more at:\n\nAbout Us | Nestlé Careers (nestlejobs.com)\n\nRequisition ID#\n\n290867\n\nNestlé Nespresso USA is an equal opportunity employer and is looking for diversity in qualified candidates for employment. If you require an accommodation in order to view or apply to open position, please dial 711 and provide this number to the operator: 1-800-321-6467.\n\nReview our applicant privacy notice before applying at https://www.nestlejobs.com/privacy",
//     job_is_remote: false,
//     job_posted_at_timestamp: 1711411200,
//     job_posted_at_datetime_utc: "2024-03-26T00:00:00.000Z",
//     job_city: "New York",
//     job_state: "NY",
//     job_country: "US",
//     job_latitude: 40.712776,
//     job_longitude: -74.005974,
//     job_benefits: ["retirement_savings", "health_insurance"],
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=front-end+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=front-end+developer&htidocid=SJvv9IDdZqdd2P1VAAAAAA%3D%3D",
//     job_offer_expiration_datetime_utc: null,
//     job_offer_expiration_timestamp: null,
//     job_required_experience: {
//       no_experience_required: false,
//       required_experience_in_months: 48,
//       experience_mentioned: true,
//       experience_preferred: true,
//     },
//     job_required_skills: null,
//     job_required_education: {
//       postgraduate_degree: false,
//       professional_certification: false,
//       high_school: false,
//       associates_degree: false,
//       bachelors_degree: false,
//       degree_mentioned: true,
//       degree_preferred: true,
//       professional_certification_mentioned: true,
//     },
//     job_experience_in_place_of_education: false,
//     job_min_salary: null,
//     job_max_salary: null,
//     job_salary_currency: null,
//     job_salary_period: null,
//     job_highlights: {
//       Qualifications: [
//         "Comfortable working with commandline and have worked with libraries like JQuery and experience with frameworks such as React or Vue",
//         "Bachelor’s Degree",
//         "4+ years’ experience in eCommerce platforms and content management systems (SAP Hybris or similar), including App",
//         "2+ years’ experience working with HTML, CSS, JavaScript,ReactJS, Typescript",
//         "1+ years’ experience with Web performance Optimization",
//         "Strong communication and organizational skills",
//         "Accuracy, reliability & vigilant attention to detail",
//         "Project oriented",
//       ],
//       Responsibilities: [
//         "The Front-End Developer Specialist will manage local standalone applications for market initiatives which will in turn improve performance of the Nespresso US eCommerce responsive site",
//         "The developer will liaise with another local front-end developers as well as between the US market and Headquarters in Switzerland (often through peer-programming) for all technical eCommerce projects",
//         "These projects will be tied to Nespresso global roadmap, local initiatives, and daily operations",
//         "As a member of the eCommerce Operations team within the Commercial division, this person will report to the Manager Digital Commerce Web Development and work alongside a growing team of 4 Content Producers and 2 Front End Developers",
//         "Drive local web development within US market to increase membership and conversion:",
//         "Advise the technical local landing page development (HTML, CSS, JS), ensuring all Nespresso design and technical guidelines are followed by local design-development agency, are AA compliment and in line with industry best practices (knowledge of responsive frameworks and designs)",
//         "Support validate the technical assessment of projects development from end-to-end, considering technical development, implementation, tracking and documentation",
//         "Familiarity with node applications and build tools such as web pack or rollup",
//         "Drive development of A/B test and personalization use cases implementations (via Google Optimize or Dynamic Yield), as defined on eCom roadmap",
//         "Collaborating with HQ when necessary to successfully launch tests with the objective of improving the customer site experience",
//         "Collaborate with Content Producers on content publication as needed",
//         "Identify unrealized opportunities / risks as part of all key roll-outs and launches",
//         "Manage daily performance of eCommerce platforms:",
//         "Support Platform stability of nespresso.com and Nespresso app",
//         "Ensure a fast, updated, optimized bug free user experience on all eCommerce platforms, following International eBusiness guidelines",
//         "Developing React based web-application for master site",
//         "Flag any risks associated with local front-end workarounds implemented",
//         "Support resolution of identified bugs and deliver enhancements on existing projects by managing internal backlog deliverables, in alignment with Dev Lead",
//         "Contribute to a team leading site optimizations at a local level:",
//         "Work with teams to solve for major issue affecting conversion rate, new member activation, or availability of the products or the platforms",
//         "Execute on local initiatives as defined by the eCommerce roadmap in collaboration with cross functional stakeholders (Marketing, CRM, IS/IT, CRC) when necessary",
//         "Deliver project documentation, following best-in-class standards, ensuring business continuity",
//         "Understand local Market Acceptance Testing (MAT) process and contribute to ways to streamline and find efficiencies",
//         "Contribute to a growing team, ways of working and knowledge share across internal network",
//       ],
//       Benefits: [
//         "The approximate pay range for this position is $105,000- $125,000 base",
//         "Nestle offers performance-based incentives and a competitive total rewards package, which includes a 401k with company match, healthcare coverage and a broad range of other benefits",
//         "Incentives and/or benefits packages may vary depending on the position",
//       ],
//     },
//     job_job_title: "Specialist",
//     job_posting_language: "en",
//     job_onet_soc: "15113400",
//     job_onet_job_zone: "3",
//   },
//   {
//     job_id: "CRcOMB81e0ZnFfDvAAAAAA==",
//     employer_name: "Franklin Templeton",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_Ben_Head.jpg",
//     employer_website: "http://www.franklinresources.com",
//     employer_company_type: "Finance",
//     job_publisher: "LinkedIn",
//     job_employment_type: "FULLTIME",
//     job_title: "Front End Developer",
//     job_apply_link:
//       "https://www.linkedin.com/jobs/view/front-end-developer-at-franklin-templeton-3884145485",
//     job_apply_is_direct: false,
//     job_apply_quality_score: 0.6456,
//     apply_options: [
//       {
//         publisher: "LinkedIn",
//         apply_link:
//           "https://www.linkedin.com/jobs/view/front-end-developer-at-franklin-templeton-3884145485",
//         is_direct: false,
//       },
//       {
//         publisher: "ZipRecruiter",
//         apply_link:
//           "https://www.ziprecruiter.com/c/Franklin-Templeton/Job/Front-End-Developer/-in-Stamford,CT?jid=4265756493d21905",
//         is_direct: false,
//       },
//       {
//         publisher: "Diversity Jobs",
//         apply_link:
//           "https://diversityjobs.com/career/7709496/Front-End-Developer-Connecticut-Stamford",
//         is_direct: false,
//       },
//       {
//         publisher: "Jooble",
//         apply_link: "https://jooble.org/jdp/1489345924424668327",
//         is_direct: false,
//       },
//       {
//         publisher: "LifeworQ",
//         apply_link:
//           "https://lifeworq.com/job/1b92c833-f211-4155-8ddd-81494eff0fce",
//         is_direct: false,
//       },
//       {
//         publisher: "CareerBuilder",
//         apply_link: "https://www.careerbuilder.com/job/J3R6HY5WY5FPXKSMZJ1",
//         is_direct: false,
//       },
//       {
//         publisher: "Ladders",
//         apply_link:
//           "https://www.theladders.com/job/front-end-developer-franklintempletoninvestments-stamford-ct_70004830",
//         is_direct: false,
//       },
//       {
//         publisher: "Talentify",
//         apply_link:
//           "https://www.talentify.io/job/front-end-developer-stamford-connecticut-franklin-templeton-856451",
//         is_direct: false,
//       },
//     ],
//     job_description:
//       "At Franklin Templeton, we’re driving our industry forward by developing new and innovative ways to help our clients achieve their investment goals. Our dynamic and diversified firm spans asset management, wealth management, and fintech, offering many ways to help investors make progress toward their goals. Our talented teams working around the globe bring expertise that’s both broad and unique. From our welcoming, inclusive, and flexible culture to our global and diverse business, we offer opportunities not only to help you reach your potential but also to contribute to our clients’ achievements.\n\nCome join us in delivering better outcomes for our clients around the world!\n\nWhat is the FTT – Advisor Digital Solutions Technology group responsible for? FTT – Advisor Digital Solutions Technology group is responsible for development and support of Portfolio Analytics Tool and Competitor Profile Library to enable the working of Portfolio Solutions group and Internal Sales.\n\nWhat is the Front-End Developer for? We are seeking a highly motivated and technical lead software engineer with solid experience in building technology for Digital Solutions Technology group. You will partner with product owners, technical leads, engineers, and other teams to develop complex software components and advise developers on coding standards and guidelines. You will bring excellent problem solving, communication and teamwork skills, along with agile ways of working, strong business insight, and continuous learning to focus on all that you do.\n\nWhat are the ongoing responsibilities of a Front-end Developer?\n\nResponsibilities Include\n• Work with product owner to design and develop software solutions/interfaces to meet business needs and assist in managing the product back.\n• Participate in sprint planning, release planning, and prioritization of work on the platform.\n• Hands-on development, data modelling, code quality, static code analysis, unit testing, design and code reviews, continuous integration, release management, performance tuning and execution.\n• Comprehensive involvement in application lifecycle phases including DevOps process, release deployments and support.\n• Design, prototype and code new software components and applications based on functional specifications across the full stack – services, web and API, infrastructure, and back-end.\n• Coordinate with analyst teams and vendors to execute test plans and provide support during user acceptance testing.\n• Be a highly collaborative, team-oriented, and strong consensus builder; demonstrate an ability to partner across groups, regions, and functions.\n• Proactively engage with key stakeholders to understand business processes\n• Write unit tests to ensure that a high-quality product is delivered.\n• On occasions, be available outside of normal office hours to troubleshoot and resolve critical issues that impacts business workflow.\n• Plan and coordinate cross-team activities to complete assignments.\n• Keep abreast of technology and advise senior management on technical implementation.\n• Mentor junior developers and technical staff.\n\nWhat ideal qualifications, skills & experience would help someone to be successful?\n\nIdeal Candidates Will Have\n• Bachelor’s degree in computer science, Engineering, Mathematics, and/or Information Technology related fields.\n• Excellent development experience with React / Next / TypeScript / NodeJS is required\n• Excellent Database knowledge and working experience on MongoDB\n• A minimum of 7+ years of progressive software development.\n• Solid understanding of RESTful web services.\n• Substantial knowledge in building out application within bi-weekly Agile sprint regiment.\n• Strong knowledge of JIRA, Confluence, Bitbucket, Agile development and DevOps frameworks.\n• Strong knowledge of AWS platform and services\n• Excellent analytical and problem-solving skills with the ability to think quickly and offer alternatives both independently and within teams.\n• Proven ability to work quickly in a dynamic environment with strong attention to detail and accuracy.\n• Highly motivated and able to work independently.\n• Excellent communication skills, both written and verbal.\n• Previous experience working in Asset Management Industry is a plus.\n\nAt Franklin Templeton, we apply a total reward philosophy where all aspects of compensation and benefits are taken into consideration in determining compensation. We expect the salary for this position to range between $128,000 - $150,800\n\nExperience our welcoming culture and reach your professional and personal potential!\n\nOur culture is shaped by our diverse global workforce and strongly held core values. Regardless of your interests, lifestyle, or background, there’s a place for you at Franklin Templeton. We provide employees with the tools, resources, and learning opportunities to help them excel in their career and personal life.\n\nHear more from our employees\n\nBy joining us, you will become part of a culture that focuses on employee well-being and provides multidimensional support for a positive and healthy lifestyle. We understand that benefits are at the core of employee well-being and may vary depending on individual needs. Whether you need support for maintaining your physical and mental health, saving for life’s adventures, taking care of your family members, or making a positive impact in your community, we aim to have your needs covered. Learn more about the wide range of benefits we offer at Franklin Templeton.\n\nHighlights Of Our Benefits Include\n• Three weeks paid time off the first year\n• Medical, dental and vision insurance\n• 401(k) Retirement Plan with 85% company match on your pre-tax and/or Roth contributions, up to the IRS limits\n• Employee Stock Investment Program\n• Tuition Assistance Program\n• Purchase of company funds with no sales charge\n• Onsite fitness center and recreation center*\n• Onsite cafeteria*\n• Only applicable at certain locations\n\nLearn more about the wide range of benefits we offer at Franklin Templeton\n\nFranklin Templeton is an Equal Opportunity Employer. We are committed to providing equal employment opportunities to all applicants and existing employees, and we evaluate qualified applicants without regard to ancestry, age, color, disability, genetic information, gender, gender identity, or gender expression, marital status, medical condition, military or veteran status, national origin, race, religion, sex, sexual orientation, and any other basis protected by federal, state, or local law, ordinance, or regulation.\n\nFranklin Templeton is committed to fostering a diverse and inclusive environment. If you believe that you need an accommodation to search for or apply for one of our positions, please send an email to accommodations@franklintempleton.com. In your email, please include the accommodation you are requesting, the job title, and the job number you are applying for. It may take up to three business days to receive a response to your request. Please note that only accommodation requests will receive a response.",
//     job_is_remote: true,
//     job_posted_at_timestamp: 1712202072,
//     job_posted_at_datetime_utc: "2024-04-04T03:41:12.000Z",
//     job_city: "Stamford",
//     job_state: "CT",
//     job_country: "US",
//     job_latitude: 41.05343,
//     job_longitude: -73.538734,
//     job_benefits: [
//       "health_insurance",
//       "retirement_savings",
//       "dental_coverage",
//       "paid_time_off",
//     ],
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=front-end+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=front-end+developer&htidocid=CRcOMB81e0ZnFfDvAAAAAA%3D%3D",
//     job_offer_expiration_datetime_utc: "2024-05-04T03:41:12.000Z",
//     job_offer_expiration_timestamp: 1714794072,
//     job_required_experience: {
//       no_experience_required: false,
//       required_experience_in_months: null,
//       experience_mentioned: true,
//       experience_preferred: true,
//     },
//     job_required_skills: null,
//     job_required_education: {
//       postgraduate_degree: false,
//       professional_certification: false,
//       high_school: false,
//       associates_degree: false,
//       bachelors_degree: true,
//       degree_mentioned: true,
//       degree_preferred: true,
//       professional_certification_mentioned: false,
//     },
//     job_experience_in_place_of_education: false,
//     job_min_salary: null,
//     job_max_salary: null,
//     job_salary_currency: null,
//     job_salary_period: null,
//     job_highlights: {
//       Qualifications: [
//         "Bachelor’s degree in computer science, Engineering, Mathematics, and/or Information Technology related fields",
//         "Excellent development experience with React / Next / TypeScript / NodeJS is required",
//         "Excellent Database knowledge and working experience on MongoDB",
//         "A minimum of 7+ years of progressive software development",
//         "Solid understanding of RESTful web services",
//         "Substantial knowledge in building out application within bi-weekly Agile sprint regiment",
//         "Strong knowledge of JIRA, Confluence, Bitbucket, Agile development and DevOps frameworks",
//         "Strong knowledge of AWS platform and services",
//         "Excellent analytical and problem-solving skills with the ability to think quickly and offer alternatives both independently and within teams",
//         "Proven ability to work quickly in a dynamic environment with strong attention to detail and accuracy",
//         "Highly motivated and able to work independently",
//         "Excellent communication skills, both written and verbal",
//       ],
//       Responsibilities: [
//         "FTT – Advisor Digital Solutions Technology group is responsible for development and support of Portfolio Analytics Tool and Competitor Profile Library to enable the working of Portfolio Solutions group and Internal Sales",
//         "You will partner with product owners, technical leads, engineers, and other teams to develop complex software components and advise developers on coding standards and guidelines",
//         "You will bring excellent problem solving, communication and teamwork skills, along with agile ways of working, strong business insight, and continuous learning to focus on all that you do",
//         "Work with product owner to design and develop software solutions/interfaces to meet business needs and assist in managing the product back",
//         "Participate in sprint planning, release planning, and prioritization of work on the platform",
//         "Hands-on development, data modelling, code quality, static code analysis, unit testing, design and code reviews, continuous integration, release management, performance tuning and execution",
//         "Comprehensive involvement in application lifecycle phases including DevOps process, release deployments and support",
//         "Design, prototype and code new software components and applications based on functional specifications across the full stack – services, web and API, infrastructure, and back-end",
//         "Coordinate with analyst teams and vendors to execute test plans and provide support during user acceptance testing",
//         "Be a highly collaborative, team-oriented, and strong consensus builder; demonstrate an ability to partner across groups, regions, and functions",
//         "Proactively engage with key stakeholders to understand business processes",
//         "Write unit tests to ensure that a high-quality product is delivered",
//         "On occasions, be available outside of normal office hours to troubleshoot and resolve critical issues that impacts business workflow",
//         "Plan and coordinate cross-team activities to complete assignments",
//         "Keep abreast of technology and advise senior management on technical implementation",
//         "Mentor junior developers and technical staff",
//       ],
//       Benefits: [
//         "We expect the salary for this position to range between $128,000 - $150,800",
//         "Experience our welcoming culture and reach your professional and personal potential!",
//         "Highlights Of Our Benefits Include",
//         "Three weeks paid time off the first year",
//         "Medical, dental and vision insurance",
//         "401(k) Retirement Plan with 85% company match on your pre-tax and/or Roth contributions, up to the IRS limits",
//         "Employee Stock Investment Program",
//         "Tuition Assistance Program",
//         "Purchase of company funds with no sales charge",
//         "Onsite fitness center and recreation center*",
//       ],
//     },
//     job_job_title: null,
//     job_posting_language: "en",
//     job_onet_soc: "15113400",
//     job_onet_job_zone: "3",
//     job_naics_code: "523920",
//     job_naics_name: "Portfolio Management",
//   },
//   {
//     job_id: "caRSNXV2ed4Y88rRAAAAAA==",
//     employer_name: "Ask IT consulting",
//     employer_logo: null,
//     employer_website: "http://www.askitc.com",
//     employer_company_type: null,
//     job_publisher: "ZipRecruiter",
//     job_employment_type: "CONTRACTOR",
//     job_title: "Front End Developer",
//     job_apply_link:
//       "https://www.ziprecruiter.com/c/Ask-IT-consulting/Job/Front-End-Developer/-in-New-York,NY?jid=477fd94fcb378d5a",
//     job_apply_is_direct: false,
//     job_apply_quality_score: 0.6616,
//     apply_options: [
//       {
//         publisher: "ZipRecruiter",
//         apply_link:
//           "https://www.ziprecruiter.com/c/Ask-IT-consulting/Job/Front-End-Developer/-in-New-York,NY?jid=477fd94fcb378d5a",
//         is_direct: false,
//       },
//       {
//         publisher: "Smart Recruiters Jobs",
//         apply_link:
//           "https://jobs.smartrecruiters.com/AskITConsulting/84738712-front-end-developer",
//         is_direct: false,
//       },
//       {
//         publisher: "WhatJobs",
//         apply_link:
//           "https://www.whatjobs.com/job/Front-End-Developer/new-york-new-york-/1533328485",
//         is_direct: false,
//       },
//     ],
//     job_description:
//       "Company Description\n\nAsk IT Consulting Inc, backed by a $500 million Microtek group company, provides an industry leading blend of technology, business consulting, and outsourcing services. Ask IT is a minority-owned enterprise; it has been founded on providing the highest quality possible and on the devotion to customer satisfaction. ASK IT consulting is an equal opportunity employer, which is a global staffing, consulting and technology solutions company, offering industry-specific solutions to fortune 500 clients and worldwide corporations.\n\nJob Description\n\nJob Title: UI Front end Developer\n\nDuration: 6+ Months\n\nLocation : New York\n\nJob Description:\n\nExperience with UI Front End devloper.\n\nvery strong experience with HTML5,CSS and ajax.\n\nExperience with Jquery.\n\nCandidate must have Strong AngularJs.\n\nKnowledge of Java/J2EE systems like spring, hibernate.\n\n-------------------------\n\nAdditional Information\n\nIf you are interested in finding out more about opportunities near you, if you are in need of a staffing firm such as ours, or if you just have a question regarding your resume and career path, please email me at ryanaskitc.com",
//     job_is_remote: false,
//     job_posted_at_timestamp: 1712594400,
//     job_posted_at_datetime_utc: "2024-04-08T16:40:00.000Z",
//     job_city: "New York",
//     job_state: "NY",
//     job_country: "US",
//     job_latitude: 40.712776,
//     job_longitude: -74.005974,
//     job_benefits: null,
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=front-end+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=front-end+developer&htidocid=caRSNXV2ed4Y88rRAAAAAA%3D%3D",
//     job_offer_expiration_datetime_utc: "2024-05-08T00:00:00.000Z",
//     job_offer_expiration_timestamp: 1715126400,
//     job_required_experience: {
//       no_experience_required: false,
//       required_experience_in_months: null,
//       experience_mentioned: true,
//       experience_preferred: false,
//     },
//     job_required_skills: null,
//     job_required_education: {
//       postgraduate_degree: false,
//       professional_certification: false,
//       high_school: false,
//       associates_degree: false,
//       bachelors_degree: false,
//       degree_mentioned: false,
//       degree_preferred: false,
//       professional_certification_mentioned: false,
//     },
//     job_experience_in_place_of_education: false,
//     job_min_salary: null,
//     job_max_salary: null,
//     job_salary_currency: null,
//     job_salary_period: null,
//     job_highlights: {
//       Qualifications: [
//         "Experience with UI Front End devloper",
//         "very strong experience with HTML5,CSS and ajax",
//         "Experience with Jquery",
//         "Candidate must have Strong AngularJs",
//         "Knowledge of Java/J2EE systems like spring, hibernate",
//       ],
//     },
//     job_job_title: null,
//     job_posting_language: "en",
//     job_onet_soc: "15113400",
//     job_onet_job_zone: "3",
//     job_occupational_categories: ["15-1134.00: Web Developers"],
//   },
  
//   {
//     job_id: "q_FbscLkKLlIjURIAAAAAA==",
//     employer_name: "Faire",
//     employer_logo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp97AmIBhZmhQT1pfky74ZBVii2Xtd3E4nYSEe&s=0",
//     employer_website: null,
//     employer_company_type: null,
//     job_publisher: "Greenhouse",
//     job_employment_type: "FULLTIME",
//     job_title: "Staff Front-end Developer - Growth",
//     job_apply_link:
//       "https://boards.greenhouse.io/faire/jobs/7255723002?gh_jid=7255723002",
//     job_apply_is_direct: false,
//     job_apply_quality_score: 0.7612,
//     apply_options: [
//       {
//         publisher: "Greenhouse",
//         apply_link:
//           "https://boards.greenhouse.io/faire/jobs/7255723002?gh_jid=7255723002",
//         is_direct: false,
//       },
//     ],
//     job_description:
//       "About Faire\n\nFaire is an online wholesale marketplace built on the belief that the future is local — independent retailers around the globe are doing more revenue than Walmart and Amazon combined. At Faire, we're using the power of tech, data, and machine learning to connect this thriving community of entrepreneurs across the globe. Picture your favorite boutique in town — we help them discover the best products from around the world to sell in their stores. With the right tools and insights, we believe that we can level the playing field so that small businesses everywhere can compete with these big box and e-commerce giants.\n\nOur engineering team owns the code that makes our marketplace intuitive and beautiful. We care about stunning design, great UX, and good engineering practices -- we love to write software that is secure, tested, easy to maintain, responsive, and performant. We build minimum viable products, deploy to production multiple times per day, A/B test customer-facing changes, listen to the data, and iterate.\n\nAbout the role\n\nOur mission in the Retailer Growth pillar is to efficiently reach, acquire, and engage retailers across their lifecycle. As a Staff Developer on the Retailer Growth pillar you will drive the frontend platform evolution and tooling working alongside product, design, marketing to achieve our mission.\n\nYou’re excited about this role because…\n• You get excited about driving large business impact in a Growth environment.\n• You want to use technology to help your local independent retailers and brands succeed\n• You’re excited by continuous improvement and innovative strategies to propel business growth\n• You like to solve challenging engineering problems related to speed, developer efficiency, and building tools for rapid experimentation\n\nWhat you'll do\n• Collaborate closely with product managers, designers, and marketing to contribute significantly to the success of the business or the engineering platform\n• Identify and capitalize on new opportunities, overseeing complex multi-phase projects across multiple teams and platforms from concept to implementation\n• Optimize web applications for peak performance and scalability, ensuring the delivery of high-quality, fast, and scalable code\n• Develop strategies on what technologies we adopt and utilize to best serve the needs of the business with only high level direction\n• Mentor fellow developers, sharing industry best practices in front-end development\n\nQualifications\n• 7+ years of experience\n• Proficient in HTML, CSS, Typescript, and frameworks/libraries like React\n• Experience in building responsive and user-centric web applications\n• Strong understanding of web performance optimization techniques\n• A bachelor's degree in Computer Science/Software Engineering or equivalent industry experience\n• A love for technology, and an insatiable curiosity for new tools to solve real problems\n\nTechnologies we use and teach\n• Typescript, Javascript\n• React, Next.js\n• Jest, cypress.io\n\nSalary Range\n\nCalifornia / New York: the pay range for this role is $190,500 - $262,500 per year.\n\nColorado / Washington / New Jersey: the pay range for this role is $171,000 - $235,500 per year.\n\nThis role will also be eligible for equity and benefits. Actual base pay will be determined based on permissible factors such as transferable skills, work experience, market demands, and primary work location. The base pay range provided is subject to change and may be modified in the future.",
//     job_is_remote: false,
//     job_posted_at_timestamp: 1708560000,
//     job_posted_at_datetime_utc: "2024-02-22T00:00:00.000Z",
//     job_city: "San Francisco",
//     job_state: "CA",
//     job_country: "US",
//     job_latitude: 37.77493,
//     job_longitude: -122.41942,
//     job_benefits: ["health_insurance"],
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=front-end+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=front-end+developer&htidocid=q_FbscLkKLlIjURIAAAAAA%3D%3D",
//     job_offer_expiration_datetime_utc: null,
//     job_offer_expiration_timestamp: null,
//     job_required_experience: {
//       no_experience_required: false,
//       required_experience_in_months: 84,
//       experience_mentioned: true,
//       experience_preferred: false,
//     },
//     job_required_skills: null,
//     job_required_education: {
//       postgraduate_degree: false,
//       professional_certification: false,
//       high_school: false,
//       associates_degree: false,
//       bachelors_degree: false,
//       degree_mentioned: true,
//       degree_preferred: true,
//       professional_certification_mentioned: false,
//     },
//     job_experience_in_place_of_education: false,
//     job_min_salary: null,
//     job_max_salary: null,
//     job_salary_currency: null,
//     job_salary_period: null,
//     job_highlights: {
//       Qualifications: [
//         "You’re excited by continuous improvement and innovative strategies to propel business growth",
//         "You like to solve challenging engineering problems related to speed, developer efficiency, and building tools for rapid experimentation",
//         "7+ years of experience",
//         "Proficient in HTML, CSS, Typescript, and frameworks/libraries like React",
//         "Experience in building responsive and user-centric web applications",
//         "Strong understanding of web performance optimization techniques",
//         "A bachelor's degree in Computer Science/Software Engineering or equivalent industry experience",
//         "A love for technology, and an insatiable curiosity for new tools to solve real problems",
//       ],
//       Responsibilities: [
//         "Collaborate closely with product managers, designers, and marketing to contribute significantly to the success of the business or the engineering platform",
//         "Identify and capitalize on new opportunities, overseeing complex multi-phase projects across multiple teams and platforms from concept to implementation",
//         "Optimize web applications for peak performance and scalability, ensuring the delivery of high-quality, fast, and scalable code",
//         "Develop strategies on what technologies we adopt and utilize to best serve the needs of the business with only high level direction",
//         "Mentor fellow developers, sharing industry best practices in front-end development",
//       ],
//       Benefits: [
//         "California / New York: the pay range for this role is $190,500 - $262,500 per year",
//         "Colorado / Washington / New Jersey: the pay range for this role is $171,000 - $235,500 per year",
//       ],
//     },
//     job_job_title: "Staff",
//     job_posting_language: "en",
//     job_onet_soc: "15113400",
//     job_onet_job_zone: "3",
//   },
// ];
export default function PersonalizedJobListings() {
  const dispatch = useDispatch();
  const [jobsbykey, setJobsbykey] = useState([]);
    const job = useSelector((state) => state.joblisting.joblisting);

    useEffect(() => {
      if (jobsbykey.length === 0) {
        dispatch(GetJobListingByKeyword(job));
      }
    }, [dispatch, job, jobsbykey]);

    const jobarray = useSelector(
      (state) => state.joblistingbykey.joblistingbykey
    );

    useEffect(() => {
      if (jobarray && jobarray.error && jobarray.error.data) {
        setJobsbykey(jobarray.error.data);
      }
    }, [jobarray]);

  // useEffect(() => {
  //   setJobsbykey(obj);
  // }, []);

  if (jobsbykey.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="perjobliscard">
      {jobsbykey.map((job) => {
        return (
          <div className="card">
            <PersonalizedJobListingscards job={job} />
          </div>
        );
      })}
    </div>
  );
}
