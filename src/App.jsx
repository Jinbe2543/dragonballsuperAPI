import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [characters, setCharacters ] = useState();
  const [imghero, setImghero] = useState();
  console.log(characters)

  const setHero = (e) => {
    setCharacters(e.target.value)
    setImghero(e.target.value)
  }

  useEffect(() => {
    let abortController = new AbortController();

    const loadData = async () => {
      try {
        const response = await axios.get(
          "https://back-dragon-ballzs-mwfw-dev.fl0.io/api"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
    return abortController.abort();
  }, []);

  console.log(data);

  return (
    <>
      <div className="mx-auto min-w-[200px] w-[500px] ">
        <select onChange={(e)=>setCharacters(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {/* {data.characters?.map((item,index)=>{
            <option value={index} key={index}>{item?.name}</option>
          })} */}
          {data.characters?.map((item, index) => (
            <option value={item?.id} key={index}>
              {item?.id}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-auto min-w-[200px] w-[500px] min-h-[200px] h-[800px] bg-black ">
        <div className="m-auto w-[400px] h-[700px] flex flex-col gap-1 bg-green-300">
          <div className="w-full h-[100px] bg-slate-500"></div>
          <div className="w-full h-[500px] bg-white">

          {characters === data.characters.id && <img src={data.characters.img} alt="" className="w-[200px] h-[300px]"/>}

          </div>
          <div className="w-full h-[200px] bg-red-200">
            <div className="w-[250px] h-[50px] bg-orange-950 flex">
              <div className="w-[100px] h-[50px] bg-pink-500"></div>
              <div className="w-[100px] h-[50px] bg-white"></div>
            </div>

            <div className="mx-2 h-[110px] bg-green-200"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
