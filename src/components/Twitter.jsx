"use client";

import {
  ChatBubbleLeftEllipsisIcon,
  HandThumbUpIcon,
  BookmarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

export default function Twitter() {
  const [comment, setComment] = useState();

  return (
    <article className="col-span-8 flex w-full flex-col justify-center rounded-3xl bg-white px-8 py-6 text-slate-900">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-x-3">
          <div className="w-max rounded-full bg-secondary p-3">
            <Image
              src={"/vector-male.png"}
              alt="vector male"
              width={40}
              height={40}
            />
          </div>
          <div>
            <h1 className="font-semibold">Uthonn</h1>
            <p className="opacity-60">@sulthonaw</p>
          </div>
        </div>
        <div>
          <button className="rounded-full bg-sky-500 px-8 py-2 font-semibold text-white">
            Follow
          </button>
        </div>
      </div>
      <p className=" my-5 ms-4">
        Hi, I am 18 years old. And I am an intern at MejaKita as a front-end
      </p>
      <div className="ms-4 flex gap-x-5 [&>svg]:cursor-pointer">
        <HandThumbUpIcon className="h-6 w-6 stroke-slate-600 " />
        <ChatBubbleLeftEllipsisIcon className="h-6 w-6 stroke-slate-600 " />
        <BookmarkIcon className="h-6 w-6 stroke-slate-600 " />
      </div>
      <div className="ms-0 mt-5">
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="w-full rounded-full border-2 px-5 py-2 text-sm focus:bg-slate-100 focus:outline-none"
            placeholder="Can you tell me a joke?"
          />
          <button>
            <PaperAirplaneIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div>
        <ul>
          <li className="ms-4 mt-5">
            <h1 className="text-sm">Unknown</h1>
            <p className="ms-2 text-xs">
              <span className="font-semibold">Comment: </span>anjayy...
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}
