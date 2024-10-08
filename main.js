document.addEventListener('DOMContentLoaded', () => {
    const infoSection = document.getElementById('infoSection');
  
    // Función para mostrar datos generales
    const mostrarDatosGenerales = () => {
      infoSection.innerHTML = `
        <h2>Datos Generales de Valledupar</h2>
        <p><strong>Población:</strong> 500,000 habitantes (aproximadamente)</p>
        <p><strong>Departamento:</strong> Cesar</p>
        <p><strong>Fundación:</strong> 6 de enero de 1550</p>
      `;
    };
  
    // Función para mostrar lugares turísticos
    const mostrarLugaresTuristicos = () => {
      infoSection.innerHTML = `
        <h2>Lugares Turísticos de Valledupar</h2>
        <ul>
          <li><strong>Parque de la Leyenda Vallenata:</strong> Lugar donde se celebra el Festival Vallenato.</li>
          <li><strong>Río Guatapurí:</strong> Conocido por su belleza y significado cultural.</li>
          <li><strong>Piedra del Indio:</strong> Monumento natural icónico de la región.</li>
        </ul>
      `;
    };
  
    // Función para mostrar el clima
    const mostrarClima = () => {
      infoSection.innerHTML = `
        <h2>Clima en Valledupar</h2>
        <p><strong>Temperatura:</strong> 30°C (promedio anual)</p>
        <p><strong>Clima:</strong> Tropical con temporada de lluvias y seca.</p>
      `;
    };
  
    // Eventos para los botones de navegación
    document.getElementById('btnDatos').addEventListener('click', (e) => {
      e.preventDefault();
      mostrarDatosGenerales();
    });
  
    document.getElementById('btnLugares').addEventListener('click', (e) => {
      e.preventDefault();
      mostrarLugaresTuristicos();
    });
  
    document.getElementById('btnClima').addEventListener('click', (e) => {
      e.preventDefault();
      mostrarClima();
    });
  });
  