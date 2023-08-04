import {Tabs} from 'antd'


const Search = () => {
    const onChange = (key) => {
        console.log(key);
    };
    
    const items = [
        {
          key: '1',
          label: `Notes`,
          children: `Content of Tab Pane 1`,
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
                    <form >

                        <input className="search-bar" type="text" placeholder="Search for stuff" />
                        <button>
                            <i className="fa-solid fa-magnifying-glass" style={{color: "#f7faff"}}></i>
                        </button>

                    </form>
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