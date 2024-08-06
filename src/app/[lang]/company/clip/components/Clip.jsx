"use client";
import screen from "@/public/project-image/screen-recording.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ClipOption from "./ClipOption";

function autoResize(e) {
  const textarea = e.currentTarget;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

function renameClip(clipId, clipName) {
  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/clip/${clipId}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({ clipName }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.status === "fail" || data.status === "error") {
        console.log("data space faild....", data);
        // setLoader(false);
      } else {
        console.log("data folder dd....", data.data);
        // setLoader(false);
      }
    })
    .catch((error) => {
      console.log(error);
      // setLoader(false);
    });
}

function handleRename(e, setClipName, item, setRename) {
  if (e.currentTarget.value.trim() !== "") {
    setClipName(e.currentTarget.value);
    renameClip(item.clip_id, e.currentTarget.value.trim());
  }
  setRename(false);
}

function handleDate(date) {
  // let d = new Date(date).toLocaleDateString();
  let d = new Date(date).toDateString();
  return d;
}


// export default function Clip({item,setClipOpt,clipOpt,setLeft,setTop}) {
export default function Clip({ item }) {
  const [clipOpt, setClipOpt] = useState(false);
  const [left, setLeft] = useState("");
  const [top, setTop] = useState("");
  const [clipName, setClipName] = useState(item.title);
  const [clipTitle, setClipTitle] = useState(item.title);
  const [rename, setRename] = useState(false);

  return (
    <>
      <div _nghost-ng-c734340672="" className={clipOpt && "active"}>
        <div className="cu-clip-card__content">
          <Link
            href={`/en/company/clip/${item.clip_id}`}
            className="cu-clip-card__link "
          >
            <Image
              src={screen}
              alt="cover clip"
              width={"100%"}
              height={"100%"}
              className="object-cover"
            />
          </Link>

          <div className="cu-clip-card__overlay"></div>

          <div className="cu-clip-card__actions md:flex">
            <div>
              <button className="btn-normal clip-copy-button">
                <div _nghost-ng-c4133689536="">
                  <svg
                    width={"1rem"}
                    height={"1rem"}
                    className="block"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.843 3.743a5.95 5.95 0 1 1 8.414 8.414l-2.55 2.55a1 1 0 0 1-1.414-1.414l2.55-2.55a3.95 3.95 0 1 0-5.586-5.586l-2.55 2.55a1 1 0 1 1-1.414-1.414l2.55-2.55Zm2.45 4.55a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6Zm-6.586 1a1 1 0 0 1 0 1.414l-2.55 2.55a3.95 3.95 0 0 0 5.586 5.586l2.55-2.55a1 1 0 1 1 1.414 1.414l-2.55 2.55a5.95 5.95 0 1 1-8.414-8.414l2.55-2.55a1 1 0 0 1 1.414 0Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div>
              <button
                className={`btn-normal clip-copy-button ${clipOpt && "active"}`}
                onClick={(e) => {
                  let left = e.currentTarget.getBoundingClientRect().left;
                  let top = e.currentTarget.getBoundingClientRect().top;
                  setLeft(left);
                  setTop(top);
                  // setActive(true);
                  setClipOpt(true);
                }}
              >
                <div _nghost-ng-c4133689536="">
                  <svg
                    className="block w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.2 13.6a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm-7.2 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm-7.2 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="cu-clip-card__footer">
          <div className="cu-clip-card__editable-title">
            {rename ? (
              <>
                <div className="cu-clip-card__title-edit hidden">
                  {clipName}
                </div>
                <textarea
                  rows={1}
                  value={clipTitle}
                  autoFocus
                  name="clipName"
                  onChange={(e) => {
                    const textarea = e.currentTarget;
                    setClipTitle(textarea.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleRename(e, setClipName, item, setRename);
                      if (clipTitle.trim() === "") {
                        setClipTitle(item.title);
                      }
                    }
                  }}
                  onInput={autoResize}
                  onResize={autoResize}
                  onFocus={autoResize}
                  className="cu-clip-card__title-edit"
                  onBlur={(e) => {
                    handleRename(e, setClipName, item, setRename);
                    if (clipTitle.trim() === "") {
                      setClipTitle(item.title);
                    }
                  }}
                ></textarea>
              </>
            ) : (
              <Link
                href={`/en/company/clip/${item.clip_id}`}
                className="cu-clip-card__title"
              >
                {clipName}
              </Link>
            )}
          </div>

          <span className="cu-clip-card__date">{handleDate(item.create_date)}</span>
        </div>
      </div>

      {clipOpt && (
        <ClipOption
          setClipOpt={setClipOpt}
          left={left}
          top={top}
          setRename={setRename}
          clipName={clipName}
          clip={item}
        />
      )}
    </>
  );
}
