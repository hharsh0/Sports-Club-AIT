import { useState,useRef } from "react";
import Steps from "../../../components/Steps";
import { useRouter } from "next/router";
import {projectFirestore, storage} from '../../../firebase/config'


function Register() {
  const [count, setCount] = useState(1);
  const router = useRouter();
  const { slug } = router.query;
  const [teamMembers, setTeamMembers] = useState<any>([]);
  const [selectedOptionYear, setSelectedOptionYear] = useState("");
  const [selectedOptionGame, setSelectedOptionGame] = useState("");
  const [footballFormate, setFootballFormate] = useState("")
  const [gender, setGender] = useState("")
  const [file, setFile] = useState<File | null>();
  const [error, setError] = useState<any>(null);
  const [uploaded, setUploaded] = useState(false);
  const [done, setDone] = useState(false)


  const handleFileInputChange = (event:any) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
    if (file) {
      setUploaded(true)
    }
  };

  const handleUploadButtonClick = () => {
    if (file) {
      const fileRef = storage.ref().child(file.name);
      fileRef
        .put(file)
        .then(() => {
          console.log("File uploaded successfully!");
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Please select a file to upload.");
    }
  };

  const handleOptionChange = (event: any) => {
    setSelectedOptionYear(event.target.value);
  };

  const handleOptionChangeGame = (event: any) => { 
    setSelectedOptionGame(event.target.value);
  }

  const handleFootballFormate = (event:any) => {
    setFootballFormate(event.target.value)
  }

  const handleGender = (event: any) => {
    setGender(event.target.value)
  }

  

  // const handleClick = () => {
  //   if (count > 3) {
  //     return;
  //   } else if (count < 3) {
  //     setCount(count + 1);
  //   }
  // };

  const handleClickPrev = () => {
    if (count < 1) {
      return;
    } else if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddTeamMember = () => {
    setTeamMembers([...teamMembers, {}]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // @ts-ignore: Object is possibly 'null'.
    const leaderName = document.getElementById("leader-name").value;
    // @ts-ignore: Object is possibly 'null'.
    const collegeName = document.getElementById("college-name").value;
    // @ts-ignore: Object is possibly 'null'.
    const teamLeaderEmail = document.getElementById("leader-email").value;
    // @ts-ignore: Object is possibly 'null'.
    const gameChoosen = document.getElementById("Game").value;
    // @ts-ignore: Object is possibly 'null'.
    const teamLeaderAddress = document.getElementById("Address").value;
    // @ts-ignore: Object is possibly 'null'.
    const transactionId = document.getElementById("transaction-number").value;

    const yearOfStudy = selectedOptionYear;
    const isTeamEvent = selectedOptionGame;
    const footballType = footballFormate;
    const playerGender = gender;
    // @ts-ignore: Object is possibly 'null'.
    const teamMembersDetails = teamMembers.map((teamMember, index) => ({
      // @ts-ignore: Object is possibly 'null'.
      name: document.getElementById(`teamMemberName${index}`).value,
      // @ts-ignore: Object is possibly 'null'.
      email: document.getElementById(`teamMemberEmail${index}`).value,
    }));

    const body = {
      leaderName,
      collegeName,
      teamLeaderEmail,
      gameChoosen,
      teamLeaderAddress,
      yearOfStudy,
      isTeamEvent,
      teamMembersDetails,
      footballType,
      playerGender,
      transactionId,
    };

    console.log(body);

    try {
      // if (uploaded) {
        handleUploadButtonClick();
        projectFirestore.collection("teams").add(body);
      setDone(true)
      console.log(done)
      // } 
      if (done) {
        alert("Registration Successful!")
        router.push("/");
      }
      if (count < 3) {
        setCount(count + 1);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className="relative my-4 flex w-screen flex-col items-center">
        <div className="my-10 w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] px-5 xl:px-0">
          <section id="form" className="mt-2">
            <Steps count={count} />
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 my-4 text-2xl">
                Team Leader Details
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="leader-name"
                  name="team_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  College Name
                </label>

                <input
                  type="text"
                  id="college-name"
                  name="last_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  Email
                </label>

                <input
                  type="email"
                  id="leader-email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  Phone Number
                </label>

                <input
                  type="number"
                  id="PhoneNumber"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  Address
                </label>

                <input
                  type="text"
                  id="Address"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  Game
                </label>

                <input
                  type="text"
                  id="Game"
                  name="password_confirmation"
                  value={slug}
                  className="pointer-events-none mt-1 w-full cursor-not-allowed rounded-md border-gray-200 bg-white text-sm text-gray-900 opacity-75 shadow-sm focus:outline-none"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">
                  Year of Study
                </label>

                <>
                  <div className="my-4 flex items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value="first-year"
                      checked={selectedOptionYear === "first-year"}
                      onChange={handleOptionChange}
                      className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      First year
                    </label>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value="second-year"
                      checked={selectedOptionYear === "second-year"}
                      onChange={handleOptionChange}
                      className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Second year
                    </label>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value="third-year"
                      checked={selectedOptionYear === "third-year"}
                      onChange={handleOptionChange}
                      className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Third year
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value="fourth-year"
                      checked={selectedOptionYear === "fourth-year"}
                      onChange={handleOptionChange}
                      className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Forth year
                    </label>
                  </div>
                </>
              </div>
              <div className="col-span-6 sm:col-span-3">
                Is it a Team event?
                <>
                  <div className="my-4 flex items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value="yes"
                      checked={selectedOptionGame === "yes"}
                      onChange={handleOptionChangeGame}
                      className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value="no"
                      checked={selectedOptionGame === "no"}
                      onChange={handleOptionChangeGame}
                      className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      No
                    </label>
                  </div>
                </>
              </div>
              {slug === "football" && (
                <div className="col-span-6 sm:col-span-3">
                  Which Football formate do you want to participate?
                  <>
                    <div className="my-4 flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value="6-per-side"
                        checked={footballFormate === "6-per-side"}
                        onChange={handleFootballFormate}
                        className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900"
                      >
                        6-per-side
                      </label>
                    </div>
                    <div className="mb-4 flex items-center">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value="11-per-side"
                        checked={footballFormate === "11-per-side"}
                        onChange={handleFootballFormate}
                        className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900"
                      >
                        11-per-side
                      </label>
                    </div>
                  </>
                </div>
              )}
              <div className="col-span-6 sm:col-span-3">
                Category
                <>
                  <div className="my-4 flex items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGender}
                      className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Male
                    </label>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGender}
                      className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Female
                    </label>
                  </div>
                </>
              </div>
              <div className="col-span-6 mt-4 text-2xl">
                Team Members Details
              </div>
              {teamMembers.map((teamMember: any, index: any) => (
                <div key={index} className="col-span-6 sm:col-span-3">
                  <div className="col-span-6 my-4 text-lg">
                    Team Member {index + 1}
                  </div>
                  <label className="my-2 block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id={`teamMemberName${index}`}
                    name={`teamMemberName${index}`}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                  />
                  <label className="my-2 block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id={`teamMemberEmail${index}`}
                    name={`teamMemberEmail${index}`}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                  />
                  <label className="my-2 block text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id={`teamMemberNumber${index}`}
                    name={`teamMemberNumber${index}`}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                  />
                </div>
              ))}
              <div
                onClick={handleAddTeamMember}
                className="col-span-6 flex h-20 w-20 cursor-pointer items-center justify-center bg-white drop-shadow duration-500 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <div className="col-span-6 mt-4 text-2xl">Payment</div>
                <div className="my-2 text-sm text-gray-800">
                  Please make payment to the given upi id below
                </div>
                <div className="my-2 text-sm text-gray-800">
                  UPI ID : kumarp4456@okaxis
                </div>
                <div className="relative mt-4 w-full">
                  <input
                    required
                    type="file"
                    id="file-input"
                    name="file-input"
                    className="absolute hidden"
                    onChange={handleFileInputChange}
                  />
                  <label
                    htmlFor="file-input"
                    className="block w-full cursor-pointer rounded-lg bg-gray-200 p-4 transition-colors duration-300 hover:bg-gray-300 md:inline-block md:w-auto"
                  >
                    <span className="mb-2 block text-lg font-medium text-gray-700">
                      Upload screenshot of payment
                    </span>
                    <span className="block text-sm text-gray-500">
                      Max file size: 500 KB
                    </span>
                    <span className="text-green-500">{file && file.name}</span>
                  </label>
                  <span
                    id="file-name"
                    className="absolute inset-y-0 right-0 flex items-center pr-4 font-medium text-gray-600"
                  />
                </div>
                {error && (
                  <div className="my-2 text-sm text-red-500">{error}</div>
                )}
                <label className="mt-4 block text-sm font-medium text-gray-900">
                  Enter transaction ID of UPI
                </label>
                <input
                  required
                  type="number"
                  id="transaction-number"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm"
                />
              </div>

              <div className="col-span-6 flex w-full justify-between">
                <button
                  onClick={handleClickPrev}
                  className={`invisible ${
                    count === 1 && "mr-auto cursor-not-allowed opacity-50"
                  } notched inline-block shrink-0 bg-black px-12 py-3 text-sm font-medium text-white transition duration-500 hover:scale-110 focus:outline-none dark:bg-[#2CF0FE] dark:text-black`}
                >
                  {count >= 1 && "Prev"}
                </button>
                <button
                  // onClick={handleClick}
                  className="notched inline-block shrink-0 bg-black px-12 py-3 text-sm font-medium text-white transition duration-500 hover:scale-110 focus:outline-none dark:bg-[#2CF0FE] dark:text-black"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Register;
