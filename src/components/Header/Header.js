import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <div className="mx-auto p-4 max-w-[1640px]">
      <header>
        <Navbar />
        <div
          style={{
            backgroundImage:
              "url('https://www.forsa.ie/wp-content/uploads/2020/05/library.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col  text-center min-h-[700px] bg-black/50">
            <h2 className="  mt-[75px] text-white  tracking-tight  text-5xl sm:text-6xl md:text-7xl font-semibold ">
              Find your books.
            </h2>
            <p className=" mt-[55px] px-[50px] text-gray-200 font-semibold tracking-tight  text-2xl sm:text-3xl text-justify ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <SearchForm />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
