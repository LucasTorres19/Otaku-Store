export default async function sendRegister(data,url){
    const PROXY = "https://gentle-sands-04799.herokuapp.com/"
    const jsonData = JSON.stringify(data)

    fetch(PROXY + url,{
        method:"POST",
        body:JSON.stringify(jsonData),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.json()))
    .catch(error => console.error('Error: ',error))
    .then(response => console.log('Success:', response))

}

