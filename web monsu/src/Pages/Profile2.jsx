import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Components/_Auth2/FirebaseAuth"; // Pastikan db telah diinisialisasi dari konfigurasi Firebase Anda

const Profile = () => {
  const [user, setUser] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (userData) => {
      if (userData) {
        setUser(userData);

        try {
          // Mengambil data tambahan dari Firestore
          const docRef = doc(db, "userInfo", userData.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            // Jika dokumen ada, atur informasi tambahan ke dalam state
            setAdditionalInfo(docSnap.data());
          } else {
            console.log("Dokumen tidak ditemukan!");
          }
        } catch (error) {
          console.error("Error fetching additional info:", error);
        }
      } else {
        // Pengguna tidak masuk, arahkan ke halaman login
        navigate("/signin");
      }
    });

    // Bersihkan langganan saat komponen dibongkar
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-around items-center md:mx-44 mx-5 mt-8">
      <h1 className="text-center m-10">Profile Page</h1>
      {user && additionalInfo && (
        <div className="text-center">
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
          <p>Nama Lengkap: {additionalInfo.NamaLengkap}</p>
          <p>No Hp: {additionalInfo.NoHp}</p>
          {/* Tambahkan informasi profil lainnya sesuai kebutuhan */}
        </div>
      )}
    </div>
  );
};

export default Profile;
