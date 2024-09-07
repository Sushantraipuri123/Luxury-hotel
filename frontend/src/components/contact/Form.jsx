import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("message sent")
    reset(); // Reset the form after successful submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Your Name"
        type="text"
        className={`bg-transparent px-3 py-3 w-100 josefin border my-3 ${
          errors.name ? "border-danger" : ""
        }`}
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p className="text-danger">{errors.name.message}</p>}

      <input
        placeholder="Your Email"
        type="text"
        className={`bg-transparent px-3 py-3 w-100 josefin border my-3 ${
          errors.email ? "border-danger" : ""
        }`}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p className="text-danger">{errors.email.message}</p>}

      <input
        placeholder="Subject"
        type="text"
        className={`bg-transparent px-3 py-3 w-100 josefin border my-3 ${
          errors.subject ? "border-danger" : ""
        }`}
        {...register("subject", { required: "Subject is required" })}
      />
      {errors.subject && <p className="text-danger">{errors.subject.message}</p>}

      <textarea
        name="message"
        className={`w-100 border josefin f-22 p-3 my-3 ${
          errors.message ? "border-danger" : ""
        }`}
        placeholder="Write Message Here"
        {...register("message", { required: "Message is required" })}
      ></textarea>
      {errors.message && <p className="text-danger">{errors.message.message}</p>}

      <button type="submit" className="btn-main josefin mb-2 w-100">
        Send Message
      </button>
    </form>
  );
}

export default Form;
