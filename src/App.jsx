import React ,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
import Lists from './Lists';
const App = () => {
    const [currinput, updateinput] = useState('');
    const [items, setItems] = useState([]);
    function showAlert(msg, classname) {
        const divele = document.createElement('div');
        divele.className = `alert ${classname}`;
        divele.appendChild(document.createTextNode(msg));
        // Get parent
        const containerpar = document.getElementById('center-div')
        const imgele = document.getElementById('imgid');
        containerpar.insertBefore(divele, imgele);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    const addItem = (e) => {
        updateinput(e.target.value);
    }
    const itemclick = () => {
        if(currinput===''){
            showAlert('Sorry !! 😠 Enter Some Task Please..🙏 ','alert-danger');
        }
        else{
        setItems((olditems) => {
            return ([...olditems, currinput]);
        })
        updateinput("");
       }
    }
    const deleteitem = (id) => {
        setItems((olditems) => {
            return olditems.filter((arrelem, index) => {
                return index !== id;
            })
        })
    }
    return ( <>
        <div className = "main_div" > 
        <div id="center-div" className = "center_div" >
        <br/>
        <h1> To Do List 💯 </h1>  
        <img id="imgid" src = "https://www.nidesign.co.uk/web-site-seo-design/uploads/your-future-is-created-by-what-you-do-today-not-tomorrow.-motivation-motivated-lifestyle-lifequotes--1080x675.jpg"
        /> 
        <br/>
        <input type = "text"
        placeholder = "Add Your Task 📚"
        onChange = { addItem }
        value = { currinput }
        /> 
        <button onClick = { itemclick }>👍</button>

        <ol > {
            items.map((item, index) => {
                return <Lists
                text = { item }
                key = { index }
                id = { index }
                onSelect = {deleteitem}
                />;
            })
        } 
         </ol>  
         </div >
        </div>  
         </>
    );
}
export default App;
