import { useState } from "react";
export default function FormValidation(){
  const [form, setForm] = useState({name:"", email:""});
  const[errors, setErrors] = useState({});

  const validate = ()=>{
    let err = {};
    if (! form.name.trim()) err.name = "Name required";
    if (! form.email.includes("@"))
      err.email="Valid email required";
    setErrors(err);
    return Object.keys(err).length===0;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if(validate()) alert(" Form Submitted")
  };
return(
  <form onSubmit={handleSubmit}>
    <h3>Form Validation</h3>
    <input placeholder="Name" value={form.name} onChange={e=> setForm({...form, name:e.target.value})}/>
    <p className="text-red-400">{errors.name}</p>

    <input placeholder= "Email" value={form.email} onChange={e=> setForm({...form, email:e.target.value})}/>
    <p className="text-red-400">{errors.email}</p>
    <button>Submit</button>
  </form>
)
}