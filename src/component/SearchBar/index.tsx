import type React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearch } from "../../hooks/useSearch";
import "./style.css";

type FormData = Readonly<{
  message: string;
}>;

type Message = "message";

export function SearchBar() {
  const { search, setSearch } = useSearch();

  const { handleSubmit, watch, register } = useForm<FormData>();
  const [isCompositionEnd, setIsCompositionEnd] = useState<boolean>(false);
  const watchMessage = watch<Message>("message");
  const [isSend, setIsSend] = useState<boolean>(false);
  const jaRegexp = /^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const id = setTimeout(() => {
      setIsSend(false);
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [isSend]);

  function submit(data: FormData) {
    if (!isSend) {
      setSearch(data.message);
      setIsSend(true);
    }
  }

  function enterText({
    key,
    ctrlKey,
    metaKey,
  }: React.KeyboardEvent<HTMLInputElement>) {
    if (
      !watchMessage ||
      watchMessage.trim().length === 0 ||
      (watchMessage.match(jaRegexp) && !isCompositionEnd)
    ) {
      return;
    }

    if (key === "Enter" && (ctrlKey || metaKey)) {
      submit({ message: watchMessage });
      setIsCompositionEnd(false);
    }
  }

  return (
    <div className="container">
      <form action="" className="form" onSubmit={handleSubmit(submit)}>
        <input
          defaultValue={search}
          type="text"
          className="input"
          placeholder="uuid"
          onKeyDown={enterText}
          onCompositionEnd={() => {
            setIsCompositionEnd(true);
          }}
          {...register("message")}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
}
