import "./Menu.css";

function Menu() {
  return (
    <div className="bg-[url('../assets/img/sfondoMenu.jpg')] bg-cover bg-no-repeat w-screen h-screen py-10">
      <div className="md:container md:mx-auto">
        <p className="text-6xl md:text-9xl text-center md:text-left text-white font-bold mb-20">
          Kiki's Key
        </p>
        <div>
          <input
            type="button"
            value="Gioca"
            className="bg-yellow-500 hover:bg-yellow-400 text-4xl text-white font-bold py-2 px-20 mt-20 border-b-4 border-yellow-700 hover:yellow-blue-500 rounded"
          />
        </div>

        <input
          type="button"
          value="Opzioni"
          className="bg-yellow-500 hover:bg-yellow-400 text-4xl text-white font-bold py-2 px-20 mt-20 border-b-4 border-yellow-700 hover:yellow-blue-500 rounded"
        />
      </div>
    </div>
  );
}

export default Menu;
