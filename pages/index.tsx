import type { NextPage } from "next";
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
type MyChangeEvent = ChangeEvent<{ value: string | number }>;
const Home: NextPage = () => {
  const [email, setEmail] = useState<any>();
  const [feedback, setFeedback] = useState<any>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch('/api/mongodb')
    // fetch("/api/feedback", {
    //   method: "post",
    //   body: JSON.stringify({ email, feedback }),
    //   headers: { 'Content-Type': 'application/json' }
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   });
  };
  const handleEmailChange = (e: MyChangeEvent) => {
    setEmail(e.target.value);
  };
  const handleAreaChange = (e: MyChangeEvent) => {
    setFeedback(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">your email</label>
        <input type="email" id="email" onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="feedback">your feedback</label>
        <textarea cols={30} rows={5} id="feedback" onChange={handleAreaChange}></textarea>
      </div>
      <button>send feedback</button>
    </form>
  );
};

export default Home;
