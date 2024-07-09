import Spinner from "@/components/Spinner";
import { useAuth } from "@/lib/hooks/useAuth";
import { db } from "@/lib/util/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CompleteSignup = () => {
  const user = useAuth()?.user;
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        const userID = user?.uid;
        const userDoc = await getDoc(doc(db, "users", userID));
        if (userDoc.data()?.firstname) {
          console.log("User has completed signup");
          setLoading(false);
          router.push("/");
          return;
        } else {
            setLoading(false)
          return;
        }
      }
    };
    checkUser();
  }, []);
  return <div className="relative h-[100vh]">{loading && <Spinner />}</div>;
};

export default CompleteSignup;
