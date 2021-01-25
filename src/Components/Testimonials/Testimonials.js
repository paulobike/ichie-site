import Testimonial from './Testimonial/Testimonial';

const Testimonials = () => {
    const testimonials = [
        {
            body: 'I have been dealing with Logo Investment Limited for many years now. During this time they have played an integral part in the growth of our business by assisting me in the financial side of my business. They are good at what they do.',
            author: 'Anthony Kirlman',
            proof: 'Kirl chocolates',
            image: '',
            stars: 5
        },
        {
            body: 'May I take this opportunity to thank you for your ongoing efficiency and speed in dealing with transactions over the years. My brother also has always been very happy with your service. It contrasts sharply with that of other companies, particularly utilities and also other brokers. ',
            author: 'Joe Benson',
            proof: '',
            image: '',
            stars: 4
        },
        {
            body: 'Without a second thought, I would enlist the services of Forte Trade Limited – time and time again. They take all the stress out of investing. ',
            author: 'Oxlade Anderson',
            proof: '',
            image: '',
            stars: 5
        },
    ]
    
    return (
        <div className="swiper-wrapper">
            {
                testimonials.map((testimonial, i) => (
                    <Testimonial body={testimonial.body}
                    author={testimonial.author}
                    proof={testimonial.proof}
                    image={testimonial.image}
                    key={i}
                    stars={testimonial.stars} />
                ))
            }
        </div>
    )
};

export default Testimonials;