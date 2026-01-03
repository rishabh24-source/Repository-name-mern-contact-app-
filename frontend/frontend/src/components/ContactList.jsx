const API = "http://localhost:5000/api/contacts";

export default function ContactList({ contacts, fetchContacts, setToast }) {
  const del = async id => {
    await fetch(`${API}/${id}`, { method:"DELETE" });
    fetchContacts();
    setToast("Contact Deleted");
    setTimeout(() => setToast(""), 2500);
  };

  return (
    <>
      {contacts.map(c => (
        <div className="contact-card" key={c._id}>
          <div className="contact-info">
            <strong>{c.name}</strong>
            <span>{c.phone}</span>
            <span>{c.email}</span>
          </div>
          <button className="delete" onClick={()=>del(c._id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
