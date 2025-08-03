function ContactoPage() {
    return (
    <>
        <h2>Contacto</h2>
            <p>¿Tienes alguna duda o sugerencia? ¡Nos encantaría escucharte!</p>
        <div className="pagina-contacto">
            <div className="info-contacto">
                <h3>Nuestra Librería</h3>
                <p><strong>Dirección:</strong><br />
                Avenida Siempreviva 742<br />
                La Plata, Buenos Aires, Argentina</p>
                
                <p><strong>Teléfono:</strong><br />
                (0221) 456-7890</p>
                
                <p><strong>Email:</strong><br />
                hola@elrincondellector.com</p>
                
                <p><strong>Horarios:</strong><br />
                Lunes a Sábados de 9:00 a 20:00 hs.</p>
            </div>
        <form className="contact-form">
            <h3>Envíanos un Mensaje</h3>
            <div className="form-group">
                <label htmlFor="nombre">Tu Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Tu Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="asunto">Asunto:</label>
                <input type="text" id="asunto" name="asunto" required />
            </div>
            <div className="form-group">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensaje</button>
        </form>
    </div>
    </>
    );
}

export default ContactoPage;