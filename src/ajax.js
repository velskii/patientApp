// const apiHost='https://reactnative.dev';
const apiHost = 'http://127.0.0.1:5000';
export default {

    async login(username, password){
        try {
            const response = await fetch(apiHost+'/users/login', 
            {   method: 'POST',
                body: JSON.stringify({
                    userName: username,
                    password: password,
                })
            });
            const json = await response.json();
            return json[0];
          } catch (error) {
            console.error(error);
        }
    },

    async register(username, password, position){
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        try {
            const response = await fetch(apiHost+'/users/register', 
            {   method: 'POST',
                body: JSON.stringify({
                    userName: username,
                    password: password,
                    position: position,
                    created_time: year+'/'+month+'/'+date,
                })
            });
            const json = await response.json();
            return json;
          } catch (error) {
            console.error(error);
        }
    },
    
    async fetchInitialPatients(){
        try {
            // const response = await fetch(apiHost+'/movies.json');
            const response = await fetch(apiHost+'/patients');
            const json = await response.json();
            return json;
          } catch (error) {
            console.error(error);
        }
    },
    async fetchPatientDetail(patientId){
        try {
            const response = await fetch(apiHost+'/patients/' + patientId);
            const json = await response.json();

            return json;
          } catch (error) {
            console.error(error);
        }
    },
    async fetchPatientSearchResults(searchTerm){
        try {
            const response = await fetch(apiHost+'/api/deals?searchTerm=' + searchTerm);
            const json = await response.json();
            return json;
          } catch (error) {
            console.error(error);
        }
    },
    async createTask(userId, taskName, taskTime, taskStatus, ){
        try {
            console.log(taskName)
            console.log(taskTime)
            console.log(taskStatus)
            const response = await fetch(apiHost+'/users/'+userId+'/tasks', 
            {   method: 'POST',
                body: JSON.stringify({
                    taskName: taskName,
                    time: taskTime,
                    status: taskStatus,
                })
            });
            const json = await response.json();
            return json;
          } catch (error) {
            console.error(error);
        }
    },
    async deleteTask( taskId, userId ){
        try {
            const response = await fetch(apiHost+'/users/'+userId+'/tasks/' + taskId, {  method: 'DELETE' });
            const json = await response.json();
            return json;
          } catch (error) {
            console.error(error);
        }
    },
    async fetchTasks(userId){
        try {
            const response = await fetch(apiHost+'/users/'+userId+'/tasks');
            const json = await response.json();
            return json;
          } catch (error) {
            console.error(error);
        }
    },
    async fetchTaskDetail(taskId, userId){
        try {
            const response = await fetch(apiHost+'/users/'+userId+'/tasks/' + taskId);
            const json = await response.json();
            return json[0];
          } catch (error) {
            console.error(error);
        }
    },
    async fetchClinicalRecords(patientId){
        try {
            const response = await fetch(apiHost+ '/patients/' + patientId +'/clinical-records');
            const json = await response.json();
            return json;
          } catch (error) {
            console.error(error);
        }
    }


};