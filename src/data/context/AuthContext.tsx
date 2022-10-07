// External Libraries
import { createContext, useEffect, useState } from "react";
import router from "next/router";
import firebase from "../../firebase/config";
import Cookies from "js-cookie";

// Models
import User from "../../model/User";

// Interface
interface AuthContextProps {
  user?: User;
  isLoading?: boolean;
  register?: (email: string, password: string) => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imageUrl: firebaseUser.photoURL,
  };
}

function manageCookie(logged: boolean) {
  if (logged) {
    Cookies.set("admin-front-auth", logged, {
      expires: 7, // dias
    });
  } else {
    Cookies.remove("admin-front-auth");
  }
}

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  async function configureSession(firebaseUser) {
    if (firebaseUser?.email) {
      const user = await usuarioNormalizado(firebaseUser);
      setUser(user);
      manageCookie(true);
      setIsLoading(false);
      return user.email;
    }

    setUser(null);
    manageCookie(false);
    setIsLoading(false);
    return false;
  }

  async function register(email, password) {
    try {
      setIsLoading(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await configureSession(resp.user);
      router.push("/");
    } finally {
      // entra aqui independente do sucesso ou erro no  try
      setIsLoading(false);
    }
  }

  async function login(email, password) {
    try {
      setIsLoading(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      await configureSession(resp.user);
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  }

  async function loginGoogle() {
    try {
      setIsLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configureSession(resp.user);
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    try {
      setIsLoading(true);
      await firebase.auth().signOut();
      await configureSession(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-front-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(configureSession);
      return () => cancel();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    // value (estado q vai ser compartilhado para todos os componentes)
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        register,
        login,
        loginGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
