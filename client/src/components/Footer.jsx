import React from 'react';

function Footer() {
    return (
        <>
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5>Контакты</h5>
                        <p>Адрес: город Джаваскриптбург, ул. Реактов, 123</p>
                        <p>Email: <a href="mailto:info@example.com" className="text-white">info@example.com</a></p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;