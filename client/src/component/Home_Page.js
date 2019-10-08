import React from 'react';
import Nav_bar from './Nav_Bar'
import style from '../style/homepage.module.css'

class Home_Page extends React.Component {
    render() {
        return (
            <div className={style.home_page_body}>
                <Nav_bar></Nav_bar>
                <div className={style.books_accueil_container}>
                    <div className={style.leftside}>
                        <div className={style.books_category}>
                            <div className={style.catergory_name_div}>music<input type="checkbox" className={style.catergory_name}/></div>
                            <div className={style.catergory_name_div}>Science MiliTary<input type="checkbox" className={style.catergory_name}/> </div>
                            <div className={style.catergory_name_div}>Library Science<input type="checkbox" className={style.catergory_name}/> </div>
                            <div className={style.catergory_name_div}>World History<input type="checkbox" className={style.catergory_name}/> </div>
                            <div className={style.catergory_name_div}>Arts<input type="checkbox" className={style.catergory_name}/> </div>
                            <div className={style.catergory_name_div}>romance<input type="checkbox" className={style.catergory_name}/> </div>
                            <div className={style.catergory_name_div}>Technology<input type="checkbox" className={style.catergory_name}/> </div>
                            <div className={style.catergory_name_div}>Philosoinputhy<input type="checkbox" className={style.catergory_name}/> </div>
                            <div className={style.catergory_name_div}>auxiliary<input type="checkbox" className={style.catergory_name}/>  </div>
                            <div className={style.catergory_name_div}>geograph<input type="checkbox" className={style.catergory_name}/> </div>
                        </div>
                    </div>
                    <div className={style.rightside}>
                        <div className={style.all_posts}></div>
                    </div>
                </div>
            </div>
        )
    }



}


export default Home_Page;
