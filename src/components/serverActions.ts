import Ffmpeg from "fluent-ffmpeg";

export async function testFunc() {
  "use server";

  await new Promise(() => {
    Ffmpeg()
      .input("~/public/Videos/vid.mp4")
      .input("~/public/Videos/post.png")
      .complexFilter([
        "[0:v]scale=300:300[0scaled]",
        "[1:v]scale=300:300[1scaled]",
        "[0scaled]pad=600:300[0padded]",
        "[0padded][1scaled]overlay=shortest=1:x=300[output]",
      ])
      .outputOptions(["-map [output]"])
      .output("output.mp4")
      .on("error", function (er: Error) {
        console.log("error occured: ", er.message);
      })
      .on("end", function () {
        console.log("Finished");
      })
      .run();
  });

  console.log("Helloooooo!!");
  return "done";
}
