import React,{useState,useEffect, useCallback} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {  useRouter } from 'next/router';
import e from 'cors';
import Axios from 'axios';

export default function index() {

    const [identifiant,setIdentifiant] = useState({})
    const [loginResponse,setLoginResponse] = useState('')
    const Router  = useRouter()
    
    const handleLogin = useCallback(e =>{
        e.preventDefault()

        console.log(identifiant)
        //call api to verify login
 
        Axios.post('/api/login',{infoLogin:{...identifiant}})
            .then(data => {
                console.log('datas',data)
                if(data.data.isCorrect){
                    Router.push('/admin/dashboard')
                }else{
                    setLoginResponse('nom ou mot de passe incorrect')
                }
            })
            .catch(error => {
                setLoginResponse('nom ou mot de passe incorrect') 
            })
   
            

    },[identifiant])

useEffect(()=>{
     // Prefetch the dashboard page as the user will go there after the login
     Router.prefetch('/dashboard')
},[])

    const handleChange = e => {
        e.preventDefault()
        
        setIdentifiant({...identifiant,[e.target.name]: e.target.value})
        console.log('change',identifiant)
    }
    return (
        <div>
            <h2>Login Admin</h2>

            <Form onSubmit={handleLogin}>
                <FormGroup>
                    <Label for="utilisateur">Nom d'utilisateur</Label>
                    <Input onChange={handleChange} type="text" name="utilisateur" placeholder="nom d'utilisateur" />
        
                </FormGroup>

                <FormGroup>
                    <Label for="exPassword">Password</Label>
                    <Input onChange={handleChange} type="password" name="password" id="examplePassword" placeholder="mot de passe" />
        
                </FormGroup>

                <Button >login</Button>

    <p>{loginResponse}</p>
            </Form>

            
        </div>
    )
}
