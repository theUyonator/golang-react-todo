import axios from 'axios';

//Set the base url to the backend to make requests 
const BASE_URL = process.env.GOLANG_REACT_TODO_URL || "http://localhost:4000";

/**
 * Here we create a Todo API class with static methods
 */

class TodoApi {

//Create a sttic method for all requests 

static async request(endpoint, data={}, method="get"){
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get") ? data : {};

    try{
        return (await axios({ url, method, data, params })).data;
    } catch(err){
        console.error("API ERROR:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
    }
}

// Individual API endpoints 
static async getAllTodos() {
    let res = await this.request("api/todos");
    console.log(res)
    return res.todos 
}

static async createTodo(data){
    let res = await this.request("api/todos", data, "post");
    console.log(res)
    return res
}

static async completeTodo(id, data={}){
    let res = await this.request(`api/todos/${id}/complete`, data, "patch");
    console.log(res)
    return res.todos
}

}

export default TodoApi;