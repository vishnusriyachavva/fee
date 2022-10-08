import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Carousel} from 'react-bootstrap';
import Navbar from './Navbar'
const Pagenotfound = () => {
    return (
        <div>
         
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/erasing-fees-picture-id935580390?b=1&k=20&m=935580390&s=170667a&w=0&h=Hw4akonFqg8p01pO5pEzyuztp-8K6sg7odfZOYH-XUc="
      
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3> */}
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/youth-hostel-dorm-room-picture-id182498079?b=1&k=20&m=182498079&s=170667a&w=0&h=Atdn_7sfYF1rBo7JjGGHxUTysDq_lHnKLOVbWnXbLl0="
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1626265774643-f1943311a86b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9zdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Pagenotfound;