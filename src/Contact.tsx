import Form from "./components/Form";

const ContactMe = () => {
  return (
    <div className="flex justify-center pt-3">
      <form className="flex-col">
        <label>
          Name:
          <input type={"text"} name={"name"} />
        </label>
        <button
          className="rounded px-6 py-2 color text-white hover:opacity-50 border-none"
          style={{ backgroundColor: "blue" }}
        >
          Submit
        </button>{" "}
      </form>
    </div>
  );
};

export default ContactMe;
