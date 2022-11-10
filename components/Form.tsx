import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Funtion to handle form when it is submitted
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Notify user with a toast message of pending sending of message
    toast.info("Sending Your Message....", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    const form = {
      name,
      email,
    };

    // Submit Data To API
    await fetch("/api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.status === 200) {
        // Notify user with a toast message of successfully sending their message
        toast.success("Message Sent Successfully", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        // Notify user with a toast message of error trying to send their message
        toast.error("Error Occured, Try Again", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    });

    // Clear Form Fields
    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Your Name */}
      <div className="mt-14">
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          required
          className="w-full h-14 p-5 rounded-lg bg-formBG dark:bg-darkBG2 border-none focus:ring-1 focus:ring-main"
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Full Name"
        />
      </div>

      {/* Your Email */}
      <div className="mt-14">
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          required
          className="w-full h-14 p-5 rounded-lg bg-formBG dark:bg-darkBG2 border-none focus:ring-1 focus:ring-main"
          type="email"
          id="email"
          name="name"
          placeholder="Enter Your Email Address"
        />
      </div>

      {/* Submit Button */}
      <button
        // onClick={handleClick}
        type="submit"
        className="w-full font-semibold bg-main text-darkBG p-4 text-center rounded-lg mt-10 hover:bg-darkBG hover:text-white"
      >
        Send
      </button>
    </form>
  );
}
