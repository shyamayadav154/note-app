import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import type { RouterOutputs } from "~/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

function NoteCard({ note, onDelete, isLoading }: {
    note: Note;
    isLoading: boolean;
    onDelete: (id: string) => void;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (isLoading) return <div className="card mt-5 border sahdow-xl">Loading...</div>;

        return (
        <article className="card mt-5 border sahdow-xl">
            <div className="card-body p-3 m-0">
                <div
                    className={`collapse collapse-arrow ${isExpanded ? "collapse-open" : ""
                        } `}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="collapse-title text-xl font-bold">
                        {note.title}
                    </div>
                    <div className="collapse-content">
                        <article className="prose  lg:prose-xl">
                            <ReactMarkdown>{note.content}</ReactMarkdown>
                        </article>
                    </div>
                    <div className="card-actions mx-2 flex justify-end">
                        <button onClick={() => onDelete(note.id)} className="btn btn-xs btn-warning">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </article>
        );
}

        export default NoteCard;
