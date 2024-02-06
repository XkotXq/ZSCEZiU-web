import { Editor, EditorState, ContentState, convertFromRaw } from 'draft-js';
import "draft-js/dist/Draft.css"
import { useState } from "react"

const Rawcontenttoeditor = ({ rawContent }) => {
    const loadedRawContentBlocksOnly = {
        blocks: rawContent.blocks,
        entityMap: {},
    };
    const contentState = convertFromRaw(loadedRawContentBlocksOnly);

    const editorState = EditorState.createWithContent(contentState);

    return (
        <div>
            <Editor editorState={editorState} readOnly />
        </div>
    );
};
export default Rawcontenttoeditor;