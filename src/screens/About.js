import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function About() {
  return (
    <>
        <h2>Sobre você</h2>

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />

            <Form.Text className="text-muted">
            Iremos te mandar uma confirmação da conta.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu sobrenome" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" />

            <Form.Text className="text-muted">
            Deve ter um símbolo, letra maiúscula, número, e no mínimo 8 caracteres.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Telefone</Form.Label>
            <Row>
                <Form.Control as={Col} type="number" placeholder="DDD" inline/>
                <Form.Control as={Col} type="number" placeholder="00000" inline/>
                <Form.Control as={Col} type="number" placeholder="0000" inline/>
            </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRadio">
            <Form.Label>Conecte-se (Opcional): </Form.Label>
                    <Form.Check type="radio" label="GitHub" />
                    <Form.Check type="radio" label="Redes Sociais" />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            CEP/ Endereço
            </Form.Label>
            <Form.Control plaintext placeholder="00000-000" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Apresentação Pessoal</Form.Label>
            <Form.Control as="textarea" rows={7} placeholder="Uma breve apresentação sobre você;" />
        </Form.Group>

        <Button variant="danger" type="">
            Cancelar
        </Button>

        <Button variant="success" type="submit">
            Salvar
        </Button>

        <Button variant="warning" type="submit">
            Alterar
        </Button>
        </Form>
    </>
  );
}
