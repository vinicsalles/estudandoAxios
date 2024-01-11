const getData = async () =>{
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data
    }catch(error){
        console.log(error)
    }
}
getData()
 

const container = document.querySelector("#user-container");

const printData = async () =>{
    const data = await getData();
    data.forEach((user) => {
        const div = document.createElement("div");

        const elementoNome = document.createElement("h2");

        elementoNome.textContent = user.name;

        div.appendChild(elementoNome);

        container.appendChild(div);
    })
};

printData();
 




