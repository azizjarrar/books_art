import React from 'react';
import Nav_bar from './Nav_Bar'
import style from '../style/homepage.module.css'

class Home_Page extends React.Component {
    render() {
        return (
            <div id="home_page_id" className={style.home_page_body}>
                <Nav_bar></Nav_bar>
                <div className={style.books_accueil_container}>
                    <div className={style.leftside}>
                        <h1 className={style.h1_title}>Category</h1>
                        <div className={style.books_category}>
                            <div className={style.catergory_name_div}><label class= {style.container}>music<input type="checkbox"  /><span class= {style.checkmark}></span></label></div>
                            <div className={style.catergory_name_div}><label class= {style.container}>MiliTary<input type="checkbox"  /><span class= {style.checkmark}></span></label> </div>
                            <div className={style.catergory_name_div}><label class= {style.container}>Science<input type="checkbox"  /><span class= {style.checkmark}></span></label></div>
                            <div className={style.catergory_name_div}><label class= {style.container}>World History <input type="checkbox"  /><span class= {style.checkmark}></span></label></div>
                            <div className={style.catergory_name_div}><label class= {style.container}>Arts<input type="checkbox"  /><span class= {style.checkmark}></span></label> </div>
                            <div className={style.catergory_name_div}><label class= {style.container}>romance<input type="checkbox"  /><span class= {style.checkmark}></span></label></div>           
                            <div className={style.catergory_name_div}><label class= {style.container}>Technology<input type="checkbox"  /><span class= {style.checkmark}></span></label></div>
                            <div className={style.catergory_name_div}><label class= {style.container}>Philosoinputhy <input type="checkbox"  /><span class= {style.checkmark}></span></label></div>
                            <div className={style.catergory_name_div}><label class= {style.container}>geography<input type="checkbox"  /><span class= {style.checkmark}></span></label></div>
                            <div className={style.catergory_name_div}><label class= {style.container}>Love<input type="checkbox"  /><span class= {style.checkmark}></span></label></div>
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
