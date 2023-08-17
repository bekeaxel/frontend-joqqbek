import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../styles/resource.css'

const Resource = () => {
    const defaultLayout = defaultLayoutPlugin(); 
    return <div className='resource-container'>

        <div className="pdf-resource-container">
            <h2>title of pdf maybe some other stuff as well</h2>
            <Viewer fileUrl={'https://pdfobject.com/pdf/sample.pdf'} plugins={[defaultLayout]} />;
        </div>
    </div>
}

export default Resource;