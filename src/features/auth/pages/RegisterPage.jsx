import RegisterForm from '../components/RegisterForm';
import '../styles/RegisterPage.css';

const estadisticas = [
  { numero: '1,250+', label: 'Estudiantes' },
  { numero: '85', label: 'Docentes' },
  { numero: '42', label: 'Cursos activos' },
  { numero: '98%', label: 'Tasa de asistencia' },
];

function RegisterPage() {
  return (
    <main className="register-page">
      <section className="register-page__info" aria-label="Información institucional">
        <span className="register-page__badge">Libro de Clases Digital</span>
        <div>
          <p className="register-page__subtitulo">CBO — Sistema de Gestión Académica</p>
          <h1 className="register-page__titulo">Gestiona tu aula de forma eficiente y moderna</h1>
        </div>
        <p className="register-page__descripcion">
          Centraliza el control de asistencia, calificaciones y comunicación con apoderados
          en una sola plataforma segura, diseñada para el Colegio Bernardo O'Higgins.
        </p>
        <div className="register-page__stats">
          {estadisticas.map((stat) => (
            <div key={stat.label} className="register-page__stat-card">
              <span className="register-page__stat-numero">{stat.numero}</span>
              <span className="register-page__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="register-page__form-col" aria-label="Formulario de registro">
        <RegisterForm />
      </section>
    </main>
  );
}

export default RegisterPage;
