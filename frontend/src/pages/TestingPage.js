// import Slider from "react-slick";
// import Batman from '../assets/batman.png'
// import Spiderman from '../assets/spiderman.png'
// import '../styles/steppersStyle.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const TestingPage = () => {

//     function Arrow(props) {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={className}
//                 style={{ ...style, display: "block", background: "black", color:'w' }}
//                 onClick={onClick}
//             />
//         );
//     }
//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         nextArrow: <Arrow />,
//         prevArrow: <Arrow />,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="container" style={{ padding: '4rem' }}>

//             <Slider {...settings}>
//                 <div className="card">
//                     <img src={Batman} alt="Batman" style={{ width: '100%' }} />
//                     <div className="card-body">
//                         <h2>Slick title</h2>
//                         <p>This is slick</p>
//                     </div>
//                 </div>
//                 <div>
//                     <h3>1</h3>
//                 </div>
//                 <div>
//                     <h3>2</h3>
//                 </div>
//                 <div>
//                     <h3>3</h3>
//                 </div>
//                 <div>
//                     <h3>4</h3>
//                 </div>
//                 <div>
//                     <h3>5</h3>
//                 </div>
//                 <div>
//                     <h3>6</h3>
//                 </div>
//             </Slider>


//         </div>
//     );
// };

// export default TestingPage;
