import axios from 'axios';
import { TodoPost } from '../interfaces/TodoInterface';

axios.defaults.headers.post['Content-Type'] = 'application/json-patch+json';

const baseURL = 'http://localhost:5000';
const todoURL = baseURL + '/todo';


export default class TodoApi {
    getAll = () => axios.get(todoURL)
    getOne = (id: number) => axios.get(todoURL + `/${id}`)
    add = (todo: TodoPost) => axios.post(todoURL, todo)
    delete = (id: number) => axios.delete(todoURL + `/${id}`)
}