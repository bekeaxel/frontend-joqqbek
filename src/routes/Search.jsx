import {Tabs} from 'antd';

import DataList from '../components/DataList';
import SearchBar from '../components/SearchBar';
import '../styles/search.css';


const Search = () => {
    const onChange = (key) => {
        console.log(key);
    };
    
    const items = [ 
        {
          key: '1',
          label: `Notes`,
          children: <DataList />,
        },
        {
          key: '2',
          label: `Solutions`,
          children: `Content of Tab Pane 2`,
        },
        {
          key: '3',
          label: `Exam Solutions`,
          children: `Content of Tab Pane 3`,
        },
      ];

    return(
        <>
            <div className="container">
                <div className="search-container">
                    {/* put action on form */}
                    
                    <SearchBar ></SearchBar>
                </div>
                <div >
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} >

                    </Tabs>
                </div>
            </div>
        </>
    ); 
}


export default Search;