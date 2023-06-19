// import React from "react";
// import TestServer from "~/components/Test-Server";
import { api } from "~/utils/api";

export default function devDashboard() {
  const returnData = api.ffmpeg.test.useQuery();

  const testFunc = api.ffmpeg.ffmpegTest.useMutation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    testFunc.mutate();
  }

  return (
    <main>
      Test Text
      <div>
        Status: {returnData.data ? returnData.data.state : "Loading State..."}
      </div>
      <div> Data: {returnData.data ? returnData.data.msg : "Loading data"}</div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Test</button>
      </form>
    </main>
  );
}
