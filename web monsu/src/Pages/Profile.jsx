import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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
        navigate("/login");
      }
    });

    // Bersihkan langganan saat komponen dibongkar
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div className="max-w-md bg-emerald-300 rounded-xl w-full mx-auto items-center p-10 mt-40">
      <div className="">
        <h1 className="text-xl font-bold text-center mb-12">Profile Page</h1>
        {user && additionalInfo && (
          <div className="text-left">
            {console.log(user)}
            {/* <p>UID: {user.uid}</p> */}
            <p className="mb-3 ">
              <span className="font-bold text-left text-sm ">
                Nama Lengkap :
              </span>
              <span className="mt-2 flex justify-center bg-emerald-200 rounded-xl p-1 text-m">
                {" "}
                {additionalInfo.NamaLengkap}
              </span>
            </p>
            <p className="mb-3">
              <span className="font-bold text-sm">No Hp :</span>
              <span className="mt-2 flex justify-center bg-emerald-200 rounded-xl p-1 text-m">
                {" "}
                {additionalInfo.NoHp}
              </span>
            </p>
            <p className="mb-3">
              <span className="font-bold text-sm">Email :</span>
              <span className="mt-2 flex justify-center bg-emerald-200 rounded-xl p-1 text-m">
                {" "}
                {user.email}
              </span>
            </p>
            {/* Tambahkan informasi profil lainnya sesuai kebutuhan */}
            <button
              className="w-full py-3 mt-8 relative rounded-2xl bg-emerald-500 mx-2 text-black font-bold hover:text-white transition cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
