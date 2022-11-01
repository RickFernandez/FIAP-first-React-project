import React from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form"
import { Button } from '../common-components/Button/Button';

export function About() {
const {register, handleSubmit, setValue, setFocus} = useForm();
const onSubmit = (e) => { 
    console.log(e);
}

const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');    
    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(res => res.json()).then(data =>{
            console.log(data);
            setValue('address', data.logradouro)
            setValue('bairro', data.bairro)
            setValue('cidade', data.localidade)
            setValue('uf', data.uf)           
            setFocus('addressNumber')            
        })
}

  return (
    <>   
    <h2> Sobre você </h2> 	

    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3"> 
         <Form.Label>
            CEP:        
            <Form.Control type="text" {...register("cep")} onBlur={checkCEP}/>
        </Form.Label>
        </Form.Group>

        < Button style={{ width: '15vw' }} > Buscar </Button>

        <Form.Group className = "mb-3" >
        <Form.Label>
            Rua:        
            <Form.Control type="text" {...register("address")}/>
        </Form.Label>
        </Form.Group>

        <Form.Group className = "mb-3" >
        <Form.Label>
            Número:        
            <Form.Control type="text" {...register("addressNumber")}/>
        </Form.Label>
        </Form.Group>

        <Form.Group className = "mb-3" >
        <Form.Label>
            Bairro:        
            <Form.Control type="text" {...register("bairro")}/>
        </Form.Label>
        </Form.Group>

        <Form.Group className = "mb-3">
        <Form.Label>
            Cidade:        
            <Form.Control type="text" {...register("cidade")}/>
        </Form.Label>
        </Form.Group>

        <Form.Group className = "mb-3">
         <Form.Label>
            Estado:        
            <Form.Control type="text" {...register("uf")}/>
        </Form.Label>
        </Form.Group>    
    </Form>
    </>
  );
}
