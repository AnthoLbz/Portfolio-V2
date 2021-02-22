import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { Form, FormGroup, Label, Input } from "reactstrap";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: `${name}, email: ${email}, phone: ${number}`,
      to_name: "Anthony",
      message_html: `${message}`,
    };
    emailjs
      .send(
        "Gmail",
        "template_bz0nawt",
        templateParams,
        "user_ouENljIXQpZmZB2iffsR3"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    resetForm();
    alert("Votre message a bien été envoyé");
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  };
  return (
    <div id="contactPage">
      <div className="contact">
        <Form onSubmit={handleSubmit} id="contact">
          <p className="lead">
            Pour toute demande, n’hésitez pas à me contacter, je reviendrai vers
            vous dans les plus brefs délais !
          </p>
          <FormGroup>
            <Label for="examplePassword">Nom/Prénom</Label>
            <Input
              type="text"
              name="text"
              id="exampleName"
              placeholder="Vos Nom et Prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Téléphone</Label>
            <Input
              type="phone"
              name="phone"
              id="exampleNumber"
              placeholder="Votre numéro de téléphone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Message</Label>
            <Input
              type="textarea"
              name="textarea"
              id="exampleText"
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="buttonGroup">
            <button className="contactButton">Envoyer votre message</button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
