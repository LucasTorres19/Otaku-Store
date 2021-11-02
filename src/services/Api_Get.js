export default  async function Api_get(APIURL){

    try{

    const PROXYURL = "https://gentle-sands-04799.herokuapp.com/";

    const QUERY = await fetch(PROXYURL + APIURL)
    
    const DATA = await QUERY.json()
    
    return DATA
    
}
    catch{

        return(console.log("Error al hacer get a la api."))
    }
}