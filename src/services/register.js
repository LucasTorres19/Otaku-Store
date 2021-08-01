const sendRegister = async (data,url)=>{

    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error: ',error))
    .then(response => console.log('Success:', response))

}

export{sendRegister}