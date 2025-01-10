import React from 'react';
import { ContentEditableEvent, default as WysiwygEditor } from 'react-simple-wysiwyg';

const Editor = ({ text, setText }: { text: string; setText: (text: string) => void}) => (
    <WysiwygEditor value={text} onChange={(e: ContentEditableEvent) => setText(e.target.value)} />
);

export default Editor;