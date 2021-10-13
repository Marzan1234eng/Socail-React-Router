import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const Home = () => {
     const [post, setPost] = useState([]);
     const [randUser, setRandUser] = useState({});
     const [meal, setMeal] = useState({});
     const [search, setSearch] = useState('');
     const [food, setFood] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPost(data))

        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setRandUser(data))

        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
            .then(res => res.json())
            .then(data => setMeal(data))
    },[])

    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setFood(data.meals))
        console.log(food)
    } ,[search])

    const [like, setLike] = useState('');
    const handleColor = () => {
        /*const color =  like ? '' : "primary";
        setLike(color);*/ /*way 1 */
        setLike(like ? '' : "primary"); /*way 2*/

    }

    const handleChange = (event) =>{
        console.log(event.target.value)
        setSearch(event.target.value);
    }
    return (
        <div>
            <h1>Searching food baba</h1>
            <input onChange={handleChange} type="text" placeholder="search food"/>
            <h3>Total meal found : {food ? food?.length: 0}</h3>

            {
                food?.map(fd => <li>{fd.strMeal}</li>)
            }

            <h1>Food Name: {meal?.meals?.[0].strMeal}</h1>


            <h2>{randUser.results && randUser.results[0].gender}</h2>
            <h2>{randUser.results && randUser.results[0].name.first}</h2>
            <ThumbUpAltIcon onClick={handleColor} color={like} >

            </ThumbUpAltIcon>
            <AccessAlarmIcon></AccessAlarmIcon>
            {
                post.map(pd => <Post post={pd}>

                </Post>)
            }
        </div>
    );
};

export default Home;