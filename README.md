<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AkshatSaraswat03/hackathon">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ucsfhealth.org%2F-%2Fmedia%2Fproject%2Fucsf%2Fucsf-health%2Ftreatment%2Fhero%2Fmedical-abortion-2x.jpg&f=1&nofb=1" alt="Logo" width="160" height="160">
  </a>

  <h3 align="center">ChikitsApp</h3>

  <p align="center">
    An online portal to simplify the complexities of healthcare in these trying times!
    <br />
    <!-- Yaha Hosted link dalni -->
    <a href=""><strong>Hosted Website »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AkshatSaraswat03/hackathon/tree/master/backend">Backend Code</a>
    ·
    <a href="https://github.com/AkshatSaraswat03/hackathon/tree/master/frontend">Front end code</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      <li><a href="#aim-of-the-project">Aim of the project</a></li>
      </ul>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

 <a href="https://github.com/AkshatSaraswat03/hackathon">
    <img src="readimages/homeimage.png" alt="Logo" width="350" height="200">
  </a>

A web application for easy interaction between patient and doctors . The Covid-19 pandemic has caused extreme logistic issues and because of safety reasons, the general populace has become averse to going outside for even major reasons,so we made this application that allows patients and doctors to register themselves and interact as well as allowing patients to set up appointment with doctors.

A lot of users may feel something is wrong with their body but they do not get it diagnosited to due to a large variety of reasons such as social stigma and personal responsibilities so we have employed a feature that can determine the likelihood of diseases like Heart failure and Sars-Covid19 using basic symptoms as well as body parameters that can be easily calculated at home and according to the result , it would give more information to the user and allow them to set up appointments directly

### Aim of the project

The aim of this project is to make interaction between patients and doctors more seamless and convenient . This project offers one stop solution to different problems faced by patients like appointments with doctors , booking a test online and getting a rough idea of their health condition with the help of machine learning i.e Covid Tests,health Condition and also our platform provides service that allows patient to check the alternatives for a medicine and also the prices of different medicines of different brands 



### What we provide to patients -

📄 Doctor appointment booking

🔬 Lab test booking

🧾 Online prescription & medical history database

💊 Generic drugs to brand name converter & Price Fetcher System 

🧬 Disease prediction services



### For doctors, we provide the following services:
💻 Appointment management system

✒️ Online prescription creation system

⚕️ View medical history and previous appointments of patient


## Built With

These are the major technlogies/frameworks that have been utilized. Other frameworks are mentioned in the acknowledgement.

### Web Application -

MERN application that is express js for the backend react for frontend part and mongo db as out database

* [React-Bootstrap](https://react-bootstrap.github.io/)
* [ExpressJs](http://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)

### Machine Learning Models

The machine learning models were trained in [python](https://www.python.org/) using scikit-learn library.
The dataset for Covid prediction was taken from this [Kaggle spreadsheet](https://www.kaggle.com/bitsofishan/covid19-patient-symptoms) while the dataset for heart disease prediction was from the [UCI dataset](https://www.kaggle.com/ronitf/heart-disease-uci) also  hosted on Kaggle.
The Covid model uses a multinomial Naive bayes algorithm while the heart disease prediction model uses a support vector machine whose hyper-parameters have been tuned using grid-search over the rbf kernel.

* [Scikit-Learn](https://react-bootstrap.github.io/)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)

### Data fetching

The data for nearby hospitals and vaccine centers is fetched by running queries on the here API. The alternate medicine name and price fetching is done using beautiful soup  scraper on python
* [Here](https://developer.here.com/)
* [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/)



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.



### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AkshatSaraswat03/hackathon.git
   ```

2. Move to the root directory and install NPM packages
   ```sh
   npm install
   ```
3. Move to the fronted directory and install the frontend packages using the same command
  ```sh
   npm install
   ```
4. Move back to the root folder and then run the following to activate both the frontedn and backend
   ```sh
   npm run dev
   ```



<!-- USAGE EXAMPLES -->
## Usage

After running the 'npm run dev' command  on the terminal, you'll be redirected to localhost:3000/ from where you can perform all of the following operations via following the navbar or entering their routes:

### 1. Registering a visitor as a user or a doctor

1. As a User


2. As a doctor

### 2. Performing encrypted safe logins for both the categories

### 3. Scheduling appointments and getting prescriptions

### 4. Viewing a dashboard

### 5. Booking an appointment as a user

### 6. Booking a test

### 7. Heart disease Probabilistic prediction

### 8. Coronavirus Probabilistic prediction

### 9. Finding the data related to a particular medicine by scraping through online websites

### 10. Covid-19 vaccination page









<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact
[Akshat Saraswat](https://github.com/AkshatSaraswat03/hackathon)
[Ayush Mishra](https://github.com/AYUSHNSUT)
[Kapish Garg](https://github.com/kapishgarg14)
[Rhythm Nayyer](https://github.com/ryths23)
[Jai Kumar](https://github.com/ryths23)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [MongooseJs](https://www.npmjs.com/package/mongoose)
* [Flask CORS](https://flask-cors.readthedocs.io/en/latest/)
* [Axios](https://www.npmjs.com/package/axios)


