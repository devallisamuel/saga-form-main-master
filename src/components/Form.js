const Form = (props) => {
    return <>
         <div className='App' >
        <div className='form'>
        <form onSubmit = {props.handleSubmit}>
         <div>    
            <label>Name:
            <input type="text"
              placeholder='name'
              onChange={(e) => props.setName(e.target.value)}
              onBlur={(e) => props.setName(e.target.value)}/>
            </label>
          </div>
          <div>
            <label>Email:
            <input type="text"  
            placeholder='Email' 
            onChange={(e) => props.setEmail(e.target.value)}
            onBlur={(e) => props.setEmail(e.target.value)}/>
            </label>
          </div>
          <div>
          <label>Password:
          <input type="password" 
          onChange={(e) => props.setPassword(e.target.value)} 
          onBlur={(e) => props.setPassword(e.target.value)} 
          placeholder='password'/>
          </label>
          </div>

          <div>
          <label>
            Phone:
            <input type="number" 
            placeholder='number' 
            onChange={(e) => props.setPhone(e.target.value)}  
            onBlur={(e) => props.setPhone(e.target.value)}/>
          </label>
          </div>
          <button type='submit'>Submit</button>
        </form>
        </div>
      </div>
    </>
}
export default Form;