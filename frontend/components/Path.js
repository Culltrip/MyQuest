const hostname = 'quest-task.herokuapp.com';
const url = hostname + '/api';

let path = {}

path.deleteQuest = url + '/deleteQuest';
path.createQuest = url + '/createQuest';
path.updateQuest = url + '/updateQuest';
path.listQuest = url + '/listQuest';
path.viewQuest = url + '/viewQuest';
path.createTask = url + '/createTask';
path.deleteTask = url + '/deleteTask';
path.updateTask = url + '/updateTask';
path.listTask = url + '/listTask';
path.viewTask = url + '/viewTask';
path.viewUser = url + '/viewUser';
path.updateUser = url + '/updateUser';
path.confirm = url + '/confirm';
path.resendCode = url + '/resendCode';
path.login = url + '/login';
path.register = url + '/register';


export default path


