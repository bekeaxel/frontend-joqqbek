import '../styles/home.css';
import SearchBar from '../components/SearchBar'

const Home = () => {
    return(
        <>
            <div className="container-h">
                <div className="search-container">
                    {/* put action on form */}
                    <SearchBar />
                </div>
            </div>
        </>
    ); 
}

// <Form className="d-flex navbar-form" role="search">
//                         <FormControl className="navbar-formcontrol"
//                             type="search"   
//                             placeholder="Search"
//                             aria-label="Search"
//                         >
//                         </FormControl>s
//                         <Button className="" type="submit">
//                             <i className="fa-solid fa-magnifying-glass" style={{color: "#f7faff"}}></i>
//                         </Button>
//                     </Form>

export default Home;