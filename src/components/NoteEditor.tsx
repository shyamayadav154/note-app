import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

function NoteEditor(
    { onSave }: { onSave: (note: { title: string; content: string }) => void },
) {
    const [code, setCode] = useState("");
    const [title, setTitle] = useState("");

    return (
        <section className="card mt-5 border shadow-xl ">
            <article className="card-body ">
                <h2 className="card-title">
                    <input
                        placeholder="Note title"
                        type="text"
                        className="input-primary input input-lg w-full font-bold"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </h2>
                <CodeMirror
                    value={code}
                    onChange={(value: string) => setCode(value)}
                    width="500px"
                    height="30vh"
                    minWidth="100%"
                    minHeight="30vh"
                    className="border"
                    extensions={[
                        markdown({
                            base: markdownLanguage,
                            codeLanguages: languages,
                        }),
                    ]}
                />
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            onSave({ title, content: code });
                        }}
                        disabled={title.trim().length === 0 || code.trim().length === 0}
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </div>
            </article>
        </section>
    );
}

export default NoteEditor;
