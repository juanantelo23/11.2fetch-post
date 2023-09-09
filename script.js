document.getElementById("formulario").addEventListener("submit", async (event) =>{
event.preventDefault();

const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const nacimiento = document.getElementById("nacimiento").value;

const data = {
    nombre: nombre,
    apellido: apellido,
    fechaDeNacimiento: nacimiento
};

const URL = "https://jsonplaceholder.typicode.com/users"

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    // Realiza la solicitud POST
    const response = await fetch(URL, options);
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    const responseData = await response.json();
    // Maneja la respuesta según corresponda
    console.log('Respuesta:', responseData);
  } catch (error) {
    // Maneja los errores
    console.error('Ocurrió un error:', error);
  }
});


