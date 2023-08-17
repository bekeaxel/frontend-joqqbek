import { Viewer } from '@react-pdf-viewer/core';
import {defaultPlugin} from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css';

const Resource = () => {
    return <div className="resource-container">
       <Viewer fileUrl={'https://pdfobject.com/pdf/sample.pdf'} />;
    </div>
}

export default Resource;