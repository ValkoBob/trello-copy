import axios from 'axios';
import store from "./redux/store";


export default axios.create({
  /*baseURL: `https://5eb567e8de5849001638b63a.mockapi.io/api/v1/`,*/
  baseURL: `http://localhost:5000/v1/`
});


