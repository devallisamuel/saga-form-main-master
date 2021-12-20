 const Home = ({form}) => {
     return <>
        {form.map((val,index) => <ul key = {index}>
            <li>{val.name}</li>
            <li>{val.email}</li>
            <li>{val.password}</li>
            <li>{val.phone}</li>
            </ul>)}
     </>
 }
 export  default Home;