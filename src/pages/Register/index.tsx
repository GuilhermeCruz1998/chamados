import React from 'react';
import {Container} from './styles';

const Register: React.FC = () => (
<Container>

<header>
    <h1>Cadastro Devlean</h1>
    <h6>Preecha os campos abaixo para efetuar o cadastro</h6>

    <div>
        <input className = "Campos" type="text" name="Nome" placeholder="Nome"/>
    </div>
    <div>
        <input className = "Campos" type="text" name="Sobrenome" placeholder="Sobrenome"/>
    </div>
    <div>
        <input className = "Campos" type="text" name="E-mail" placeholder="E-mail"/>
    </div>
    <div>
        <input className = "Campos" type="password" name="Senha" placeholder="Senha"/>
    </div>
    <div className = "login-button">
        <a className="Login" href="/register">Registrar-se</a>
    </div>
</header>

</Container>

);

export default Register;