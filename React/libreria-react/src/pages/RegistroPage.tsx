function RegistroPage() {
    return (
    <form className="registration-form">
        <h2>Crea tu Cuenta</h2>
        <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required />
        </div>
        <div className="form-group">
            <label htmlFor="nacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="nacimiento" name="nacimiento" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
            <label>Sexo:</label>
            <label><input type="radio" name="sexo" value="fem" /> Femenino</label>
            <label><input type="radio" name="sexo" value="masc" /> Masculino</label>
            <label><input type="radio" name="sexo" value="otro" /> Otro</label>
        </div>
        <div className="form-group">
            <label htmlFor="tema">Tema Favorito:</label>
            <select id="tema" name="tema">
                <option value="psicologia">Psicología</option>
                <option value="romance_juvenil">Romance Juvenil</option>
                <option value="fantasia">Fantasía</option>
                <option value="ciencia_ficcion">Ciencia Ficción</option>
            </select>
        </div>
        <button type="submit" className="submit-btn">Registrarme</button>
    </form>
    );
}

export default RegistroPage;