import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSubmit, ON_SUBMIT,SubmitAction } from './redux/action/action';
import { connect,useSelector } from 'react-redux';
import { Routes,Route } from  "react-router-dom";
import { useNavigate } from 'react-router-dom';

import Home from './components/Home';
import Form from './components/Form';
function App(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const formValue = useSelector(state => state.reducer);
  const navigate = useNavigate()

  // const dispatch = useDispatch()


  function handleSubmit(e) {

    e.preventDefault();
    // dispatch action that stores data in state
    let form = {
      name,
      email,
      password,
      phone
    };
    props.dispatch(onSubmit(form));
    return navigate('Home');
  }
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Form setName = {setName} 
      setEmail = {setEmail} 
      setPassword = {setPassword} 
      setPhone = {setPhone} 
      handleSubmit = {handleSubmit}/>}/>
      <Route path =  '/Home' element = {<Home form = {formValue}/>}/>
      </Routes>

      {/* {formValue .map((form,index) => <h1 key = {index}>{form.name}</h1>)} */}
    </div>
  );
}
const mapStateToProps = function (state) {
  // console.log(state.reducer);
  return {
    form: state.reducer
  }
}

export default connect(mapStateToProps) (App);
