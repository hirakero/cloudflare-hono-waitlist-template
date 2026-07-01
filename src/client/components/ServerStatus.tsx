import { useEffect, useState } from "react";

export const ServerStatus = () => {
  const [status, setStatus] = useState("abc");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
      })
      .catch((e) => console.log("error:", e));
    // (async () => {
    //   try {
    //     const res = await fetch("/api/health");
    //     const data = await res.json();
    //     setStatus(data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // })();
  });

  return (
    <div>
      <h2 className="text-center text-lg">Server status</h2>
      <p className="text-center text-green-500">{status}</p>
    </div>
  );
};
