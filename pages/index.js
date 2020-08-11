import React,{useState} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'
import { Form,Label,Input,FormGroup,Button } from 'reactstrap'
import isRealNumberAndInteger from './functions/isRealNumber'
import isBetweenTableNumber from './functions/isBetweenTableNumber'


export default function Home() {

  const [numero,setNumero] = useState('')
  const [isValid,setIsValid]= useState(false)
  const Router = useRouter()

 const handleSubmit = e=>{
      e.preventDefault()
     
     if( isRealNumberAndInteger(numero)  && isBetweenTableNumber(numero) ){
       Router.push('/commande')
     }else{
      setIsValid(true)
     }  
  }

  const handleChange = e => {
    e.preventDefault()
    setNumero(e.target.value)
  }

  return (
    <div className="page-container">
      <Head>
        <title>online resto-Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>Bienvenue chez Online Resto</h1>

          <Form onSubmit={handleSubmit} >
            <FormGroup>
            <Label for="numeroTable">Entrez le numéro de votre table :</Label>
            <Input required autoFocus onChange={handleChange} value={numero} type="text" name="numero" placeholder="1-10" />
  <p>{isValid ? 'un nombre entre 1-10' : ''}</p>
            <Button color="primary">Lancer</Button>
            </FormGroup>
          </Form>
      </main>

    
    </div>
  )
}
