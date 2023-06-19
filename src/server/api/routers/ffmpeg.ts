// import { z } from "zod";
import Ffmpeg from "fluent-ffmpeg";
// import FfmpegCommand from "fluent-ffmpeg";
import type Error from "next/error";
// import { resolve } from "path";
// import "node_modules/fluent-ffmpeg";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const ffmpegRouter = createTRPCRouter({
  test: publicProcedure.query(() => {
    // console.log("Hello from the query router");
    return { state: "success", msg: "Hello from the test" };
  }),

  ffmpegTest: publicProcedure
    // .input(z.object({ b: z.string() }))
    .mutation(() => {
      // const command = Ffmpeg()
      //   .input("~/public/Videos/vid.mp4")
      //   .format("mp4")
      //   .output("~/public/Videos/vid2.mp4")
      //   .toFormat("mp4");

      console.log("Hello from the test");

      const prom = new Promise((resolve, reject) => {
        Ffmpeg()
          .input("~/../public/Videos/vid.mp4")
          .input("~/../public/Videos/post.png")
          .complexFilter([
            "[0:v]scale=300:300[0scaled]",
            "[1:v]scale=300:300[1scaled]",
            "[0scaled]pad=600:300[0padded]",
            "[0padded][1scaled]overlay=shortest=1:x=300[output]",
          ])
          .outputOptions(["-map [output]"])
          .output("~/../public/Videos/output.mp4")
          .on("error", function (er: Error) {
            console.log("error occured: ");
            reject(er);
          })
          .on("end", function () {
            console.log("Processing finished !");
            // return { state: "success", msg: "Hello from the test" };
            resolve("done");
          })
          .run();
      });

      return prom;

      // command.
    }),
});
