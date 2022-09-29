import { render, screen } from '@testing-library/react';
import Apicall from '../Api/Api'
test('testing api call',async ()=>
{
   const response = await Apicall('http://localhost:8000/Guidelines')
   expect(response[1].Title).toEqual("CSS in JS")
   
})

