import { useState } from "react";
const API = "http://localhost:5000/api/contacts";

export default function ContactForm({ fetchContacts, setToast }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });

  const submit = async e => {
    e.preventDefault();
    await fetch(API, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(form)
    });
    setForm({ name:"", email:"", phone:"", message:"" });
    fetchContacts();
    setToast("Contact Added Successfully");
    setTimeout(() => setToast(""), 2500);
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
      <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
      <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
      <button>Add Contact</button>
    </form>
  );
}
