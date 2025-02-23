// МОДАЛЬНОЕ ОКНО ПРИ ВЫБОРЕ КАРТОЧКИ:

import { useState } from "react";
import "./App.css";

const users = [
  { id: 1, name: "Alex Adams", age: 23 },
  { id: 2, name: "John Doe", age: 25 },
  { id: 3, name: "Emily Smith", age: 22 },
  { id: 4, name: "Michael Brown", age: 30 },
  { id: 5, name: "Sarah Johnson", age: 27 },
  { id: 6, name: "David Williams", age: 24 },
  { id: 7, name: "Laura Miller", age: 26 },
  { id: 8, name: "James Taylor", age: 29 },
  { id: 9, name: "Sophia Davis", age: 21 },
  { id: 10, name: "Daniel Moore", age: 28 },
];

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modal, setModal] = useState(false);

  const trueModal = (user) => {
    setSelectedUser(user);
    setModal(true);
  };

  const falseModal = () => {
    setSelectedUser(null);  
    setModal(false);
  };

  return (
    <>
    
      {modal && (
        <div className="modal-container">
          <div className="modal">
            <div className="profile-container">
              <h1>{selectedUser?.name}</h1>
              <p>{selectedUser?.age} years old</p>
            <button className="close-btn" onClick={() => falseModal(false)}>&times;</button>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        {users.map((user, index) => (
          <div
            className="profile-container"
            key={user.id}
            onClick={() => trueModal(user)}
          >
            <h1>{user.name}</h1>
            <p>{user.age} years old</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// - - - - - - - - - - - - - - - - - - - - - - - - - 

// СТИЛИ CSS ДЛЯ НЕГО:

// body {
//     font-family: Arial, sans-serif;
//     background-color: #f4f4f9;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 20px;
//   }
  
//   .profile-container {
//     background-color: #ffffff;
//     border-radius: 10px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     padding: 30px;
//     text-align: center;
//     width: 250px;
//     transition: 0.5s ease;
//   }
  
//   .profile-container h1 {
//     font-size: 24px;
//     color: #333;
//     margin-bottom: 10px;
//   }
  
//   .profile-container b {
//     font-size: 18px;
//     color: #555;
//   }
  
//   .container {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 20px;
//   }
  
//   .modal-container {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100vh;
//     background: rgba(0, 0, 0, 0.5);
//     backdrop-filter: blur(10px);
//     justify-content: center;
//     align-items: center;
//     z-index: 1000;
//   }
  
//   .modal {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
  
//   .modal-content {
//     background: white;
//     padding: 20px;
//     border-radius: 10px;
//     text-align: center;
//     width: 300px;
//     position: relative;
//   }
  
//   .close-btn {
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     font-size: 24px;
//     cursor: pointer;
//     border: none;
//   }
  
//   .profile-container:hover {
//     transition: 0.5s ease;
//     box-shadow: 0 14px 15px rgba(0, 0, 0, 0);
//   }
  