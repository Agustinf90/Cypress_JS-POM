import ApiHelper from './ApiHelper';

describe('API Tests', () => {
  const apiHelper = new ApiHelper();

  it('Enviar mensaje', () => {
    const params = {
      type: 'whatsapp',
      sendMessage: '',
      text: 'Mensaje desde API Cypress',
      number: '5491140843674',
      route: '226',
      from: 'directv-2agus'
    };
    // Imprimir el endpoint completo
    console.log(`Realizando solicitud a: ${apiHelper.apiUrl}${endpoint}`);

    // Imprimir los parámetros
    console.log('Parámetros de la solicitud:', params);
    apiHelper.sendRequest('/ionikAPI', params)
      .then((response) => {
        expect(response.status).to.eq(200); // Verifica si la respuesta es exitosa (código 200)
        
        // Imprimir el cuerpo de la respuesta en la consola
        console.log(response.body);

        // Puedes agregar más aserciones según la estructura de la respuesta de tu API
      });
  });
});