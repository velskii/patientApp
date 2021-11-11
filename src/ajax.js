// const apiHost='https://reactnative.dev';
const apiHost = 'http://127.0.0.1:5000';
export default {
    
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
    async fetchTasks(){
        try {
            const response = await fetch(apiHost+'/users/101/tasks');
            const json = await response.json();
            return json;
          } catch (error) {
            console.error(error);
        }
    },
    async fetchTaskDetail(taskId){
        try {
            const response = await fetch(apiHost+'/users/101/tasks/' + taskId);
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