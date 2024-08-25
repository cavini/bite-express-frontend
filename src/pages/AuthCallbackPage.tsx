import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useCreateMyUser } from "../api/MyUserApi";
import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <Loader2 scale={16 / 9} className="ml-2 h-4 w-full animate-spin" />;
};

export default AuthCallbackPage;
