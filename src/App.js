import { useState } from "react";

const circles = [["Aanya Sehgal", "Shannon Damuth", "Maya Waugh", "Amanda Gomes", "Jake Woo"],
["Isaac Sadhwani", "Anjana Sunil Kumar", "Cindy Chou", "Maddy Tansley"],
["Luke Chasse", "Liam Sutton", "Lauren Chiasson", "Ava Alaeddini", "Linda Lin"],
["Michelle Wang", "Anne Merritt", "Xinlei (Linda) Liu", "Pehel Jain", "Chan Raksmey Lim"],
["Lauren Phan", "Ethan Pon", "Christopher David", "Dhruv Miyani", "Lindsay Navick"],
["Katelyn Luong", "Ria Jansun", "Dominick Doyle", "Jihee Han"],
["Talia Lipman", "Nina James", "Zachary Upson", "Ellie Gatoff", "Zak Kahn"],
["Sruthi Chintalacharuvu", "Yu Jie Law", "Izzy Bulow", "Meira Wang"]]

export default function App() {



  const [foundCircle, setFoundCircle] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [showAllCircles, setShowAllCircles] = useState(false);


  const findCircle = () => {
    console.log("searching for " + searchName)
    // console.log("searching for " + searchName())
    for (let i = 0; i < circles.length; i++) {
      if (circles[i].includes(searchName) !== false) {
        console.log("Found " + searchName + " in circle " + i)
        setFoundCircle(circles[i]);
        return;
      }
    }
    // If the name is not found in any circle
    setFoundCircle(null);
  };






  return (

    <div>

      <div class="flex items-center justify-center min-h-screen bg-gray-300">

        <div class="bg-gray-600 p-8 rounded-md text-white">
          <h1 class="text-4xl font-bold">Welcome to Circle K Circles!</h1>
          <br />
          <form class="bg-inherit">
            <div class="mb-4">
              <label class="text-1xl font-bold" for="username">
                Enter your full name
              </label>
              <input
                onChange={(e) => {
                  setSearchName(e.target.value)
                }}
                class="justify-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="John Doe" />
            </div>


            <div class="flex space-x-4">

              <button onClick={findCircle}

                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Find my Circle!
              </button>

              <button onClick={() => setShowAllCircles(true)}

                class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Show All Circles
              </button>
            </div>
          </form>

          <br />

          {foundCircle && (
            <div>
              <h1 class="text-2xl font-bold">Circle Found!</h1>
              <div class="list-disc">
                {foundCircle.map((name) => (
                  <li>{name}</li>
                ))}
              </div>
            </div>
          )}

          {showAllCircles && (
            <div>
              <h1 class="text-2xl font-bold">All Circles</h1>
              <div class="list-none">
                {circles.map((circle) => (
                  <li>
                    <div class="list-disc">
                      {circle.map((name) => (
                        <li>{name}</li>
                      ))}
                    </div>
                    <br />
                  </li>
                ))}
              </div>
            </div>

          )}
        </div>



      </div>
    </div>
  );

}
