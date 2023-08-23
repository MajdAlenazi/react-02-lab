export default function LogIn() {
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6 flex justify-center items-center">
        <div className="mb-4 flex flex-col justify-center items-center">
          <h1 className="text-4xl p-5 font-bold text-lime-800">Log In</h1>

          <input
            className="shadow appearance-none border rounded p-5 mb-5 text-gray-700"
            type="text"
            placeholder="Username"
          />
          <input
            className="shadow appearance-none border rounded w-full p-5 text-gray-700 "
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-400 m-4 w-3/4 h-3/4 rounded text-3xl p-3 font-bold">
            Sing up
          </button>
        </div>
      </form>
    </>
  );
}
