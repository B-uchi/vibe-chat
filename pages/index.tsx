import { useAuth } from "@/lib/hooks/useAuth";


export default function Home() {
  const user = useAuth()?.user;
  console.log(user)
  return (
    <div className="">Homee</div>
  );
}
