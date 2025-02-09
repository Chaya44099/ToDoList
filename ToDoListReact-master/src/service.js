import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

const myService =  {
  getTasks: async () => {
    const result = await axios.get('/tasks');
    if (Array.isArray(result.data))
    return result.data
    else {
      return [];
    }
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    //TODO
    const result=await axios.post('/tasks', {name,isComplete:false});
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    //TODO
    const result= await axios.put('/tasks/'+id, {isComplete});
    return result;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask', id)
    const result=await axios.delete('/tasks/'+id);
    return result.data;
  }
};
export default myService;
