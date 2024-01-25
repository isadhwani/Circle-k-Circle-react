import { useState } from "react";
import EmailLink from "./EmailLink";

const circles = [["aanya sehgal", "shannon damuth", "maya waugh", "amanda gomes", "jake woo"],
["isaac sadhwani", "anjana sunil kumar", "cindy chou", "maddy tansley"],
["luke chasse", "liam sutton", "lauren chiasson", "ava alaeddini"],
["michelle wang", "anne merritt", "xinlei (linda) liu", "pehel jain", "chan raksmey lim"],
["lauren phan", "ethan pon", "christopher david", "dhruv miyani", "lindsay navick"],
["katelyn luong", "ria jansun", "dominick doyle", "jihee han"],
["talia lipman", "nina james", "zachary upson", "ellie gatoff", "zak kahn"],
["sruthi chintalacharuvu", "yu jie law", "izzy bulow", "meira wang"],
["karma vijay", "jihee han", "abdullah awois",	"linda lin"]]

const toSentenceCase = (str) => {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export default function App() {



  const [foundCircle, setFoundCircle] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [showAllCircles, setShowAllCircles] = useState(false);


  const findCircle = () => {
    for (let i = 0; i < circles.length; i++) {
      if (circles[i].includes(searchName.toLowerCase()) !== false) {
        setFoundCircle(circles[i]);
        return;
      }
    }
    // If the name is not found in any circle
    setFoundCircle(null);
  };






  return (

    <div>

      <div className="flex items-center justify-center min-h-screen bg-gray-300">

        <div className="bg-gray-600 p-8 rounded-md text-white">
          <h1 className="text-4xl font-bold">Welcome to Circle K Circles!</h1>
          <br />
          <form className="bg-inherit">
            <div className="mb-4">
              <label className="text-1xl font-bold" htmlFor="username">
                Enter your full name
              </label>
              <input
                onChange={(e) => {
                  setSearchName(e.target.value)
                }}
                className="justify-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Jayson Tatum" />
            </div>


            <div className="flex space-x-4">

              <button onClick={findCircle}

                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Find my Circle!
              </button>

              <button onClick={() => setShowAllCircles(true)}

                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Show All Circles
              </button>
            </div>
          </form>

          <br />

          {foundCircle && (
            <div>
              <h1 className="text-2xl font-bold">Circle Found!</h1>
              <div className="list-disc">
                {foundCircle.map((name) => (
                  <li>{toSentenceCase(name)}</li>
                ))}
              </div>

  
            </div>
          )}

          <br/>

          {showAllCircles && (
            <div>
              <h1 className="text-2xl font-bold">All Circles</h1>
              <div className="list-none">
                {circles.map((circle) => (
                  <li>
                    <div className="list-disc">
                      {circle.map((name) => (
                        <li>{toSentenceCase(name)}</li>
                      ))}
                    </div>
                    <br />
                  </li>
                ))}
              </div>

              <button onClick={() => setShowAllCircles(false)}

                  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Hide Circles 
                </button>
            </div>

          )}
        </div>



      </div>
    </div>
  );

}


