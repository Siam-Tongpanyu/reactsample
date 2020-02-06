import React from 'react';
import {Jumbotron, Image, Card } from 'react-bootstrap';
import {Layout} from '../Layouts';
import './home.css';

const Home = (props)=>{
return (
  <div>   
    <Card className="bg-dark text-white">
        <Image src="assets/program_home.jpg" alt="programmer life" fluid />
        <Card.ImgOverlay>
          <Card.Title>
            Welcome to Siam Sample Code
          </Card.Title>
          <Card.Text>
            This is a sample website with React, React-Router, Hook, Redux,
            React-Bootstrap and Material-UI
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    <Layout>
      <Jumbotron>
        <h2>Siam Tongpanyu as Senior Programmer</h2>
        <p>
          Highly-skilled software development professional bringing more than 10
          years in software design, development and integration. Advanced
          knowledge of PHP, Node.js, react, laravel, REST API, databases and
          javascript programming languages.
        </p>
        <p>
          Effective at supporting team needs with high-quality code, subject
          matter expertise and collaboration skills. Skilled programmer and
          complex problem-solver experienced in data analytics.
        </p>
        <p>
          Senior Programmer with more than 10 years of experience. Committed to
          providing high-level solutions that drive business and provide
          outstanding cost efficiency. History mentoring and training others in
          best practices.
        </p>
      </Jumbotron>
    </Layout>
  </div>
);
};

export default Home;