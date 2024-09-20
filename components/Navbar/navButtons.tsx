import AppLogo from "../AppLogo";
import React from "react";

export type navButtonsType = React.ReactElement<React.SVGProps<SVGElement>>;

type navProps = {
  current: string|null;
  goToPage: (page: string) => any;
};

export default function NavButtons({
  current,
  goToPage,
}: navProps): React.ReactNode {
  const home: navButtonsType = (
    <svg
      onClick={() => goToPage("dashboard")}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="hover:fill-[#FC4747] cursor-pointer"
        d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
        fill={current === "dashboard" ? "#fff" : "#5A698F"}
      />
    </svg>
  );

  const navMoviesBtn: navButtonsType = (
    <svg
      onClick={() => goToPage("dashboard/movies")}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="hover:fill-[#FC4747] cursor-pointer"
        d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
        fill={current === "dashboard/movies" ? "#fff" : "#5A698F"}
      />
    </svg>
  );

  const navTvSeriesBtn: navButtonsType = (
    <svg
      onClick={() => goToPage("dashboard/tv")}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="hover:fill-[#FC4747] cursor-pointer"
        d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
        fill={current === "dashboard/tv" ? "#fff" : "#5A698F"}
      />
    </svg>
  );

  const navBookmarkBtn: navButtonsType = (
    <svg
      onClick={() => goToPage("dashboard/bookmarks")}
      width="17"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="hover:fill-[#FC4747] cursor-pointer"
        d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
        fill={current === "dashboard/bookmarks" ? "#fff" : "#5A698F"}
      />
    </svg>
  );

  const uploadBTN = (
    <svg
      onClick={() => goToPage('upload')}
      className="hover:fill-[#FC4747] cursor-pointer"
      fill="#5A698F"
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>upload-cloud</title>{" "}
        <path d="M0 16v-1.984q0-3.328 2.336-5.664t5.664-2.336q1.024 0 2.176 0.352 0.576-2.752 2.784-4.544t5.056-1.824q3.296 0 5.632 2.368t2.368 5.632q0 0.896-0.32 2.048 0.224-0.032 0.32-0.032 2.464 0 4.224 1.76t1.76 4.224v2.016q0 2.496-1.76 4.224t-4.224 1.76h-0.384q0.288-0.8 0.352-1.44 0.096-1.312-0.32-2.56t-1.408-2.208l-4-4q-1.76-1.792-4.256-1.792t-4.224 1.76l-4 4q-0.96 0.96-1.408 2.24t-0.32 2.592q0.032 0.576 0.256 1.248-2.72-0.608-4.512-2.784t-1.792-5.056zM10.016 22.208q-0.096-0.96 0.576-1.6l4-4q0.608-0.608 1.408-0.608 0.832 0 1.408 0.608l4 4q0.672 0.64 0.608 1.6-0.032 0.288-0.16 0.576-0.224 0.544-0.736 0.896t-1.12 0.32h-1.984v6.016q0 0.832-0.608 1.408t-1.408 0.576-1.408-0.576-0.576-1.408v-6.016h-2.016q-0.608 0-1.088-0.32t-0.768-0.896q-0.096-0.288-0.128-0.576z"></path>{" "}
      </g>
    </svg>
  );

  const genAIBTN = (
    <svg
      onClick={() => goToPage('genAI')}
      className="cursor-pointer"
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="#5A698F"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#5A698F"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          className="hover:fill-[#FC4747] cursor-pointer"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0V2H13L16 8.5L13 15H3L0 8.5L3 2H7V0H9ZM4.59794 11.7384L8 12.2618L11.4021 11.7384L11.0979 9.76163L8 10.2382L4.90206 9.76163L4.59794 11.7384ZM7 6.75C7 7.44036 6.44036 8 5.75 8C5.05964 8 4.5 7.44036 4.5 6.75C4.5 6.05964 5.05964 5.5 5.75 5.5C6.44036 5.5 7 6.05964 7 6.75ZM10.25 8C10.9404 8 11.5 7.44036 11.5 6.75C11.5 6.05964 10.9404 5.5 10.25 5.5C9.55964 5.5 9 6.05964 9 6.75C9 7.44036 9.55964 8 10.25 8Z"
          fill="#5A698F"
        ></path>{" "}
      </g>
    </svg>
  );

  return (
    <div role="presentation" className="flex 2xl:flex-col sm:gap-7 2xl:mt-[-13rem] items-center gap-3 xl:gap-10">
      {home}
      {navMoviesBtn}
      {navTvSeriesBtn}
      {navBookmarkBtn}
      {uploadBTN}
      {genAIBTN}
    </div>
  );
}
