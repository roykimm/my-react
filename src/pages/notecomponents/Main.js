import ReactMarkdown from "react-markdown";


function Main({ activeNote, onUpdateNote }) {

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key] : value,
            lastModified: Date.now(),
        })
    }; 

    if(!activeNote) return <div className="no-active-note">No note selected</div>

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" id="title" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autofocus />
                <textarea id="body" placeholder="내용을 입력하세요." value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)} />
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown className="markdown-preview">
                    {activeNote.body}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Main;