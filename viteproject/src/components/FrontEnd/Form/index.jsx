import "./Form.css";
const Form = () => {
  return (
    <div>
      <nav className="containerForm">
          <h1>Estacionamento</h1    >
        <section>
          <nav id="shadow"></nav>
          <form action="">
            <label htmlFor="placa" name="placa">Placa</label>
            <input type="text" name="placa" id="placa" />
            <label htmlFor="modelo">Modelo</label>
            <input type="text" name="modelo" id="modelo" />
          </form>
        </section>
      </nav>
    </div>
  );
};
export default Form;
