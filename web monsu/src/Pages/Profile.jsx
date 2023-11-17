import React from "react";
import { useState } from "react";
const [currentUser, setCurrentUser] = useState(null);

const UserProfile = ({ currentUser }) => {
  return (
    <div>
      <h2>User Profile</h2>
      {currentUser && (
        <div>
          <p>Selamat datang, {currentUser.namaLengkap}! Login berhasil!</p>
          <p>Nama Lengkap: {currentUser.namaLengkap}</p>
          <p>No Hp: {currentUser.noHp}</p>
          <p>Email: {currentUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
