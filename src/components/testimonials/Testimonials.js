import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Testimonials.css';

const testimonials = [
    {
        quote: "This product is amazing! I've seen incredible results.",
        author: "John Doe",
    },
    {
        quote: "Excellent customer service and a high-quality product.",
        author: "Jane Smith",
    },
    {
        quote: "I would highly recommend this to anyone!",
        author: "Michael Johnson",
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials-section">
            <h2>Testimonials</h2>
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                interval={3000} // Change slide every 3 seconds
                centerMode
                centerSlidePercentage={50}
            >
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <p>"{testimonial.quote}"</p>
                        <h3>- {testimonial.author}</h3>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Testimonials;
