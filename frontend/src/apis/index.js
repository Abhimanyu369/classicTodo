import axios from 'axios';
const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default class ApiService {
  static async userLogin(payload) {
    return client.post('login', payload);
  }

  static async getTask(taskId) {
    return client.get('task/' + taskId);
  }
  static async getTasks(userId) {
    return client.get('tasks/' + userId);
  }

  static async createTask(payload) {
    return client.post('task/create', payload);
  }
  static async updateTask(taskId, payload) {
    return client.post('task/update/' + taskId, payload);
  }
  static async deleteTask(taskId) {
    return client.post('task/delete/' + taskId);
  }
}
