'use client'
import Navbar from "../navbar";

export default function About() {
  return (
    <div className=" text-center">
      <Navbar/>
      <section className="my-10 p-4 sm:p-8 bg-blue-200 text-center">
        <h2 className="text-lg font-black text-">About Myself</h2>
        <i className="text-bold">
          {" "}
          currently i am studying in{" "}
          <abbr title="governor initiative in artificial intelligence  ">
            GIAIC
          </abbr>{" "}
        </i>
        <p>i am web-devloper and accountant </p>
        <i>i am working in a firm as a juniar accountant in a firm</i>
        <br />
        <i> </i>
      </section>
    </div>
  );
}