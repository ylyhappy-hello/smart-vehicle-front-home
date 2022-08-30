import { http } from '@/plugins/axios';
interface User {
  name: string;
  age: number;
  avatar: string;
}
function info() {
  return http.request<User>({
    url: 'info',
  });
}
interface userLogin {
  token: string;
}
function login() {
  return http.request<userLogin>({
    url: 'login',
    method: 'post',
  });
}
export default { info, login };