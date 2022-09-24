import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const handller = async () => {
    const user = await axios.get("http://localhost:3000/all-user");
    setUser(user.data);
    setFiltered(user.data);
  };
  useEffect(() => {
    handller();
  }, []);
  console.log(search);
  console.log(user);
  useEffect(() => {
    setUser(filtered);
    const val = filtered.filter((x) => {
      if (x?.name?.includes(search)) {
        return x;
      }
    });
    setUser(val);
  }, [search]);

  console.log(search);

  return (
    <div>
      <div className="flex">
        <aside className="fixed bg-white h-screen p-5 shadow mt-5 overflow-auto	cursor-pointer">
          <input
            className="flex text-2xl border-1 m-5 p-3 border-2 "
            type="search"
            placeholder=" Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex flex-col text-left ">
            <div>
              {user.map((x, id) => {
                return (
                  <div key={id} className="border-b-2 mb-4">
                    <div> {x.name}</div>
                    <div> {x.email}</div>
                  </div>
                );
              })}
            </div>
            <router-link
              to="/"
              className="hover:bg-gray-400 px-12 py-2 rounded"
            >
              <i className="fa fa-dashboard"></i>
              <span className=""></span>
            </router-link>
          </div>
        </aside>
        <main className="bg-gray-200 flex  flex-1">
          <transition name="slide-fade">
            <router-view>bnbnsmdb</router-view>
          </transition>
        </main>
      </div>
    </div>
  );
};

export default Profile;
