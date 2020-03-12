import React from 'react'; // 8.5K (gzipped: 3.4K)
import ReactDOM from 'react-dom'; //109.7K (gzipped: 35.2K)
import App from "./component/App";
import 'bootstrap/dist/css/bootstrap.min.css';// 154K  (gzipped)

// import './index.css';

// import moviesData from "./moviesData";
//
// // console.log(moviesData)
// // import App from './App';
// // import * as serviceWorker from './serviceWorker';
// const movie ={
//     title: "Avengers: Infinity War",
//     vote_average: 8.5,
//     image: "https://kino-teatr.ua/public/main/films/2019-07/x2_poster_5d1c544d25c1e.jpg",
//     overview: "Описание фильма Приключения маленького Реми"
//
// }
//
// function Image (props) {
//     console.log("Image props", props);
//     return (
//         <img src={props.src} alt={props.alt}/>
//     )
// }
//
// // function MovieItem(props) {
// //     console.log("props = ", props);
// //     const {data: {title, vote_average, image} } = props;
// //     return (
// //         <div>
// //             <img src={image} alt={title}/>
// //             <p>{title}</p>
// //             <p>{vote_average}</p>
// //         </div>
// //     );
// // }
//
// class MovieItem extends  React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             show: false,
//             like: false
//         }
//     }
//
//     toggleOverview = () => {
//         this.setState({
//             show: !this.state.show
//         });
//     }
//     handleLike = () => {
//         this.setState({
//             like : !this.state.like
//         })
//     }
//
//     render() {
//         const {data: {title, vote_average, image,overview} } = this.props;
//         console.log("state",this.state);
//         return (
//             <div style={{width: "250px"}}>
//                 <img style={{width: "100%"}} src={image} alt={title}/>
//                 <p>{title}</p>
//                 <p>{vote_average}</p>
//                 <div
//                     style={{display: "flex", justifyContent: "space-between"}}>
//                 <button  className={this.state.like ? "btn-like" : ""} type="button" onClick={this.handleLike}
//
//                 >Like</button>
//                 <button type="button" onClick={this.toggleOverview}
//                 >{this.state.show ? "Hide" : "Show"}
//                 </button>
//                 </div>
//                 {this.state.show ? <p>{overview}</p> : null}
//             </div>
//         )
//     }
// }
//
// function App() {
//     return (
//         <div>
//             <MovieItem data = {movie}/>
//         </div>
//     );
// }

ReactDOM.render(<App />, document.getElementById('root'));



