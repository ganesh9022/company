import React, { useState, useEffect } from "react";
import { Grid, Dialog } from "@radix-ui/themes";
import { MdNotifications } from "react-icons/md";
import { IoMdMic } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Notificationmodal from "./Notificationmodal";
import "./Style.css";
import { UserButton, UserProfile } from "@clerk/clerk-react";
import { useSpeechRecognition } from "react-speech-recognition";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFound, setShowFound] = useState(false); // State for showing "Word Found" popup
  const [showNotFound, setShowNotFound] = useState(false); // State for showing "Word Not Found" popup
  const [showMicPopup, setShowMicPopup] = useState(false); // State for showing mic popup
  const [chatbotResponse, setChatbotResponse] = useState(""); // Chatbot response

  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    // Simulate an ML search process with a brief delay
    const mlSearch = async (term) => {
      try {
        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simulated ML logic
        const foundResults = searchInPage(term);
        if (foundResults.length > 0) {
          setShowFound(true);
          setShowNotFound(false);
          setChatbotResponse(`I found ${foundResults.length} occurrences of "${term}".`);
        } else {
          setShowFound(false);
          setShowNotFound(true);
          setChatbotResponse(`Sorry, I couldn't find any occurrences of "${term}".`);
        }
      } catch (error) {
        console.error("ML Search Error:", error);
      }
    };

    if (searchTerm !== "") {
      mlSearch(searchTerm);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(searchTerm.trim()); // Trim any whitespace
  };

  const handleMicClick = () => {
    setShowMicPopup(true);
  };

  const handleMicSearch = () => {
    setSearchTerm(transcript);
    setShowMicPopup(false);
    resetTranscript();
  };

  const searchInPage = (term) => {
    const bodyText = document.body.innerText;
    const searchTermLower = term.toLowerCase();
    const searchTermUpper = term.toUpperCase();
    const searchRegex = new RegExp(`\\b(${searchTermLower}|${searchTermUpper})\\b`, "gi");

    return bodyText.match(searchRegex) || [];
  };

  return (
    <div>
      <Grid row="auto" gap="3" width="auto">
        <div className="logo-sidebar fixed top-4 right-0 mr-3 flex items-center p-2 flex-wrap">
          <Notificationmodal />

          <form onSubmit={handleSubmit} className="hidden md:flex items-center bg-white border rounded-full p-2">
            <IoIosSearch size="1.2em" />
            <input
              type="text"
              placeholder="  Search here"
              className="outline-none bg-transparent"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <IoMdMic size="1.2em" onClick={handleMicClick} style={{ cursor: "pointer" }} />
          </form>
          <div className="ml-5">
            <Dialog.Root>
              <Dialog.Trigger>
                <UserButton />
              </Dialog.Trigger>
              <Dialog.Content>
                <UserProfile />
              </Dialog.Content>
            </Dialog.Root>
          </div>

          <div className="md:hidden flex items-center">
            <MdNotifications size="1.5em" color="white" />
          </div>
          <button
            data-collapse-toggle="logo-sidebar"
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </Grid>

      {/* Word Found Popup */}
      {showFound && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <p className="text-lg font-semibold mb-2">Word found: "{searchTerm}"</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowFound(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Word Not Found Popup */}
      {showNotFound && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <p className="text-lg font-semibold mb-2">Word not found: "{searchTerm}"</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowNotFound(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Chatbot Result Popup */}
      {chatbotResponse && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <p className="text-lg font-semibold mb-2">{chatbotResponse}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={() => setChatbotResponse("")}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mic Popup */}
      {showMicPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <p className="text-lg font-semibold mb-2">Speak your search term</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={handleMicSearch}
            >
              Search
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-2"
              onClick={() => setShowMicPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
