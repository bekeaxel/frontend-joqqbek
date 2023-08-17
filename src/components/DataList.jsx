import { useState, useEffect } from 'react';
import '../styles/datalist.css'

const DataList = () => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        // populate pages backend call??
        var list = []
        for (let i=0; i<7; i++) {
            list.push("en rad");
        }
        setPages(list);
    }, [pages, setPages]);



    return <> 
            <div>
                {pages.map((page, index) => (
                    <ul>
                        <li onClick={() => {console.log("hej")}} 
                            className="list-item">
                            {page}
                        </li>
                    </ul>
                ))}
            </div>
        </>
}

export default DataList;