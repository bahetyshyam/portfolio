import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Shyam Bahety";
  }, []);
  const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const data = new FormData(form);
    fetch("https://formspree.io/mjvawvqv", {
      headers: {
        Accept: "application/json",
      },
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.status === 200) {
          alert(
            "Thank you for reaching out to me. I will get back to you soon."
          );
          form.reset();
        } else {
          alert(
            "Oops. An error occured. Please check your internet connection or refresh "
          );
          form.reset();
        }
      })
      .catch(() => {
        alert(
          "Oops. An error occured. Please check your internet connection or refresh "
        );
        form.reset();
      });
  };

  return (
    <div className="flex items-center w-full">
      <div className="w-full px-5 py-5">
        <p className="text-blue-600 text-3xl md:text-4xl font-semibold leading-tight">
          Have any queries or intrested in a project? Contact me.
        </p>
        <form className="mt-6" onSubmit={submitForm}>
          <div className="mb-4">
            <label className="block text-xl mb-2">Name</label>
            <input
              className="w-full shadow appearance-none border px-4 py-2 focus:outline-none focus:border-blue-600"
              type="text"
              name="name"
              required={true}
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2">Email</label>
            <input
              className="w-full shadow appearance-none border px-4 py-2 focus:outline-none focus:border-blue-600"
              type="email"
              name="email"
              required={true}
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full shadow appearance-none border px-4 py-2 focus:outline-none focus:border-blue-600"
              name="message"
              required={true}
            />
          </div>
          <button className="px-4 py-2 w-full text-xl rounded-sm font-semibold shadow-lg bg-blue-700 text-gray-100 border-solid border-2 border-blue-700 focus:outline-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
