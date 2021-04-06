import React from 'react';
import {Container} from './styles';

const Register: React.FC = () => (
<Container>

<header>
    <h1>DevLean</h1>
    <h3>Manufatura avançada</h3>
    <h6>Preecha os campos abaixo para efetuar o login</h6>
    <div>
        <input type="text" name="E-mail" placeholder="E-mail"/>
    </div>
    <div>
        <input type="password" name="Senha" placeholder="Senha"/>
    </div>
    <div>
        <button className="close">Login</button>
    </div>
</header>

</Container>

);

export default Register;