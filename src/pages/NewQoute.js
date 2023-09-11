import {React, useEffect} from 'react'
import QuoteForm from "../components/quotes/QuoteForm"
import {useHistory} from "react-router-dom"
import useHttp from '../components/hooks/use-http'
import {addQuote} from '../components/lib/api'


const NewQoute = () => {

  const {sendRequest,status}=  useHttp(addQuote);

  const history = useHistory();

  useEffect(()=>{
    if (status==="completed"){
        history.push('/qoutes');
    }

  },[status,history])

    const addQuoteHAndler= quoteData=>{
      sendRequest(quoteData);

        
    }
  return (
    <QuoteForm onAddQuote={addQuoteHAndler} isLoading={status==="pending"}/>
  )
}

export default NewQoute

