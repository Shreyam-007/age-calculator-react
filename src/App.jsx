import { useCallback, useEffect, useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [birthDate, setBirthDate] = useState("");

  const ageCalculator = useCallback(() => {
    const birthDateArray = birthDate.split("-");
    if (birthDateArray.length === 3) {
      const birthYear = parseInt(birthDateArray[0], 10);
      const birthMonth = parseInt(birthDateArray[1], 10);
      const birthDay = parseInt(birthDateArray[2], 10);

      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();

      let calculatedAge = currentYear - birthYear;

      if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDay < birthDay)
      ) {
        calculatedAge--;
      }

      setAge(calculatedAge);
    } else {
      setAge("0");
    }
  }, [birthDate]);

  useEffect(() => {
    ageCalculator();
  }, []);
  return (
    <>
      <div
        className="flex flex-wrap bg-cover w-full h-screen place-content-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/7100322/pexels-photo-7100322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto border-2 rounded-lg backdrop-blur-md text-center bg-white/30 p-4">
            <div className="">
              <h1 className="text-white font-bold text-4xl p-1 tracking-wider">
                Age Calculator
              </h1>
            </div>
            <div className="w-full">
              <p className="font-bold p-3 text-xl">Enter your Date of Birth</p>
            </div>
            <div className="w-full p-2">
              <input
                className="rounded-lg px-2 py-1 cursor-pointer"
                type="date"
                id="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <div className="w-full p-2">
              <button
                className="px-3 py-1.5 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 hover:contrast-125"
                onClick={ageCalculator}
              >
                Calculate Age
              </button>
            </div>
            <div className="w-full">
              <p className="font-bold text-xl">
                You are <span className="text-blue-600">{age}</span> years old
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
