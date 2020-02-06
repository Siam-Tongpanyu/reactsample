import React from 'react';
import {Jumbotron, Image, Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

import {Layout} from '../Layouts';

const useStyles = makeStyles(theme => ({
  about: {    
    color: 'white' 
  },
  customcard: {
    'font-size': '16px'
  }
}));

const About = (props)=>{
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.about}>
        <Image src="/assets/about_image.jpg" alt="about me" fluid />
        <Card.ImgOverlay>
          <Card.Title>Think Twice, Code Once!</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Layout>
        <Jumbotron className={classes.customcard}>
          <h2>About Siam Tongpanyu</h2>
          <p>
            I am a senior developer who interesting for develope software and
            coding. I interest to learn new technologys about programming and
            machine learning. I enjoy development more than other fields, the
            time in this sector greatly improved my overall experience and
            skills.
          </p>
          <p>
            As a self-taught professional I really know the hard parts and the
            difficult topics when learning new or improving on already-known
            languages. This background and experience enables me to focus on the
            most relevant key concepts. The success and fun I have in this job
            is immense and really keeps that passion burningly alive.
          </p>
        </Jumbotron>
        <Jumbotron>
          <h2>Skills</h2>
          <Card bg="primary" text="white" className={classes.customcard}>
            <Card.Body>
              <Card.Title>PHP</Card.Title>
              <Card.Text>
                Laravel, Yii Framework, Wordpress, TYPO3, Magento2
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="success" text="white" className={classes.customcard}>
            <Card.Body>
              <Card.Title>Javascript</Card.Title>
              <Card.Text>
                Jquery, Node.js, Express.js, Socket.io, React.js, React Hooks,
                Redux, React Routing, GraphQL
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="secondary" text="white" className={classes.customcard}>
            <Card.Body>
              <Card.Title>SQL and NoSQL Database</Card.Title>
              <Card.Text>Mysql, prosgressSql, MSSQL, MongoDB</Card.Text>
            </Card.Body>
          </Card>
          <Card bg="info" text="white" className={classes.customcard}>
            <Card.Body>
              <Card.Title>Automate Testing</Card.Title>
              <Card.Text>
                Jest for unit test and integration test, Robot Framework
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white" className={classes.customcard}>
            <Card.Body>
              <Card.Title>ETC.</Card.Title>
              <Card.Text>
                Docker, Rest api, MicroServices, SOAP, Git, HTML, CSS, AWS
                (Amazon Web Service), Python
              </Card.Text>
            </Card.Body>
          </Card>
        </Jumbotron>
        <Jumbotron className={classes.customcard}>
          <h2>Tasks Experience</h2>
          <ul>
            <li>
              <p>
                Maintained existing applications and designed and delivered new
                applications with PHP, Node.js, javascript, Rest api and
                Wordpress.
              </p>
            </li>
            <li>
              <p>
                Collaborated with other developers to identify and alleviate
                number of bugs and errors in software.
              </p>
            </li>
            <li>
              <p>
                Researched, designed and implemented scalable applications for
                information identification, extraction, analysis, retrieval and
                indexing.
              </p>
            </li>
            <li>
              <p>
                Wrote and implemented PHP Node.js rest api and javascripts to
                enhance user experience and integrated scripts with Wordpress,
                Magento, Microservices and other applications.
              </p>
            </li>
            <li>
              <p>
                Provided dedicated coaching to interns and new employees, which
                boosted efficiency throughout department.
              </p>
            </li>
            <li>
              <p>
                Met with Project Manager on weekly basis to provide detailed
                project report and milestone updates.
              </p>
            </li>
            <li>
              <p>
                Collaborated with product management to design, build and test
                systems.
              </p>
            </li>
            <li>
              <p>Remedied bug reports and handled other user issues</p>
            </li>
            <li>
              <p>
                Maintained existing applications and designed and delivered new
                applications.
              </p>
            </li>
            <li>
              <p>
                Implemented git with Source Tree for version control across git
                hub network.
              </p>
            </li>
            <li>
              <p>
                Designed and developed reports using PHP Laravel with mysql,
                prosgressSql and MSSQL database
              </p>
            </li>
            <li>
              <p>
                Led team of 6 developers in analysis, develope and rebuild of
                software from beginning design through completion.
              </p>
            </li>
            <li>
              <p>
                Wrote laravel applications in PHP and javascript architecture
                for insurrance and call center industry.
              </p>
            </li>
            <li>
              <p>
                Developed object-oriented software, including Laravel for use in
                insurrance and call center industry.
              </p>
            </li>
            <li>
              <p>
                Wrote and implemented Jquery scripts to enhance user experience
                and integrated scripts with CMS.
              </p>
            </li>
            <li>
              <p>
                Built databases and table structures following SQL architecture
                methodology for web applications.
              </p>
            </li>
          </ul>
        </Jumbotron>
      </Layout>
    </div>
  );
};

export default About;