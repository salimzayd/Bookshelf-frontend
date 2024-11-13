import axios from 'axios';



const stance = axios.create({
  baseURL: process.env.React_Base_Url,

  
});


export default stance;
