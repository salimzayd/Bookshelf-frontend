import axios from 'axios';


const stance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,

  
});


export default stance;
