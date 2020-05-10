import axios from 'axios';
 /* To Start the JSON Server
   npm install -g json-server install json-server globally
   cd mock navigate to mock folder
   json-server mockdata.json --port=3456 will run the api server in port 3456
 */
export default axios.create({
    baseURL: `https://5eb567e8de5849001638b63a.mockapi.io/api/v1/`,
    headers: {'Content-Type': 'application/json'}
});
