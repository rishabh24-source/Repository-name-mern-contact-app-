import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Toast from "./components/Toast";

const API = "http://localhost:5000/api/contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [toast, setToast] = useState("");
  const [theme, setTheme] = useState("dark");

  const fetchContacts = async () => {
    const res = await fetch(API);
    setContacts(await res.json());
  };

  useEffect(() => { fetchContacts(); }, []);

  return (
    <div data-theme={theme}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <ContactForm fetchContacts={fetchContacts} setToast={setToast} />
        <ContactList contacts={contacts} fetchContacts={fetchContacts} setToast={setToast} />
        {toast && <Toast msg={toast} clear={() => setToast("")} />}
      </div>
    </div>
  );
}
