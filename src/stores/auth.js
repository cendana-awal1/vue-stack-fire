import { ref } from "vue";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { defineStore } from "pinia";
import router from "../router";

export const useAuthFire = defineStore("authfire", () => {
  const user = ref(null);
  const setUser = (u) => {
    user.value = u;
  };
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser(auth.currentUser);
      router.push("/");

    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const fecthUser = async () => {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

      if (router.isReady() && router.currentRoute.value.path === "/login") {
        router.push("/");
      
    }
  };

  return {
    user,setUser,login,logout,fecthUser
  };
});
