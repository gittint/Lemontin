import {Link} from 'react-router-dom'

function Home (){
    return( 
        <div className="grid">
                {/* banner  */}
                <div className="app-container__banner">
                    <img src="./assets/img/banner-index-1.png" alt="" className="app-container__banner-img app-container__banner-img-js app-container__banner-img--active"/>
                    <img src="./assets/img/banner-index-2.png" alt="" className="app-container__banner-img app-container__banner-img-js"/>
                    <img src="./assets/img/banner-index-3.png" alt="" className="app-container__banner-img app-container__banner-img-js"/>
                    <img src="./assets/img/banner-index-4.png" alt="" className="app-container__banner-img app-container__banner-img-js"/>
                    <img src="./assets/img/banner-index-5.png" alt="" className="app-container__banner-img app-container__banner-img-js"/>
                    <img src="./assets/img/banner-index-6.png" alt="" className="app-container__banner-img app-container__banner-img-js"/>
                    
                    <div className="list-dot">
                        <i className="fa-solid fa-circle dot-icon" ></i>
                        <i className="fa-solid fa-circle dot-icon" ></i>
                        <i className="fa-solid fa-circle dot-icon" ></i>
                        <i className="fa-solid fa-circle dot-icon" ></i>
                        <i className="fa-solid fa-circle dot-icon" ></i>
                        <i className="fa-solid fa-circle dot-icon" ></i>
                    </div>
                </div>

                {/* welcome  */}
                <div className="app-container__content">
                    <div className="content__welcome">
                        <h2 className="content__welcome-header">
                            <Link to="/" className="content__welcome-header--link">Chào mừng đến Le Monde Steak</Link>                            
                        </h2>
                        <p className="content__welcome-header--text">Le Monde Steak là hệ thống Bít Tết theo phong cách thành thị Pháp đầu tiên tại Việt Nam, nơi thực khách tự do trải nghiệm những món ăn mang hương vị Pháp đầy lôi cuốn và tận hưởng khoảnh khắc thư giãn trong không gian mở gần gũi với thiên nhiên, lãng mạn đặc trưng của Pháp. Tất cả tạo nên một sự cộng hưởng mạnh mẽ, để lại trong lòng bạn ấn tượng khó quên.</p>
                        
                        {/* blog  */}
                        <div className="content__welcome-blog grid__row">
                            <div className="content__welcome-blog-item grid__column-3">
                                <Link to="/blog-1" className="content__welcome-blog-item--link">
                                    <div className="content__welcome-blog-item--background">
                                        <img src="./assets/img/blog1-1.png" alt="" className="content__welcome-blog-item--img"/>
                                    </div>
                                    <div className="content__welcome-blog-item--lable">
                                        Nguyên liệu nhà làm
                                    </div>
                                </Link>                              
                            </div>

                            <div className="content__welcome-blog-item grid__column-3">
                                <Link to="/blog-2" className="content__welcome-blog-item--link">
                                    <div className="content__welcome-blog-item--background">
                                        <img src="./assets/img/blog2.jpg" alt="" className="content__welcome-blog-item--img"/>
                                    </div>
                                    <div className="content__welcome-blog-item--lable">
                                        Phong cách ẩm thực
                                    </div>
                                </Link>
                            </div>

                            <div className="content__welcome-blog-item grid__column-3">
                                <Link to="/blog-3" className="content__welcome-blog-item--link">
                                    <div className="content__welcome-blog-item--background">
                                        <img src="./assets/img/blog3.png" alt="" className="content__welcome-blog-item--img"/>
                                    </div>
                                    <div className="content__welcome-blog-item--lable">
                                        Trải nghiệm nhà hàng
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* menu  */}
                <div className="app-container__content">
                    <div className="main-menu">
                        <div className="main-menu__header header-border-bottom">
                            <h3 className="main-menu__header--text header-border-bottom__text">Thực đơn</h3>
                        </div>

                        <ul className="main-menu__list">
                            <li className="main-menu__list-item">
                                <Link to="/menu-1" className="main-menu__list-item--link">
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">Bếp trưởng gợi ý</p> 
                                    </div>
                                    
                                    <div className="main-menu__list-item--box main-menu__list-item--box--active" >
                                        <img src="./assets/img/menu1.png" alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link>
                            </li>

                            <li className="main-menu__list-item">
                                <Link to="/menu-2" className="main-menu__list-item--link" >
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">Đồ ăn</p> 
                                    </div>
                                    
                                    <div className="main-menu__list-item--box">
                                        <img src="./assets/img/menu2.png" alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link>
                            </li>

                            <li className="main-menu__list-item">
                                <Link to="/menu-3" className="main-menu__list-item--link" >
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">Đồ uống</p> 
                                    </div>
                                    
                                    <div className="main-menu__list-item--box">
                                        <img src="./assets/img/menu3.png" alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link>
                            </li>

                            <li className="main-menu__list-item">
                                <Link to="/menu-4" className="main-menu__list-item--link" >
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">Set combo</p>
                                    </div>
                                     
                                    <div className="main-menu__list-item--box">
                                        <img src="./assets/img/menu4.png" alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link>
                            </li>

                            <li className="main-menu__list-item">
                                <Link to="/menu-5" className="main-menu__list-item--link" >
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">Thực đơn mới</p> 
                                    </div>
                                   
                                    <div className="main-menu__list-item--box">
                                        <img src="./assets/img/menu3.png" alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* local  */}
                <div className="app-container__content">
                    <div className="content-local">
                        <div className="content-local__header header-border-bottom">
                            <h3 className="content-local__header--text header-border-bottom__text">Nhà hàng</h3>
                        </div>

                        <ul className="content-local__list">
                            <li className="content-local__item">
                                <div className="content-local__item-link">
                                    <div className="content-local__item-box-img">
                                        <img src="./assets/img/local1.png" alt="" className="content-local__item-img"/>
                                    </div>
                                    <div className="content-local__item-content">
                                        <div className="content-local__item-content-header" >
                                            Le Monde Steak Hà Nội 1
                                        </div>
                                        <div className="content-local__item-content-text">
                                            <p>Trần Đại Nghĩa, Hai Bà Trưng, Hà Nội</p>
                                            <p>Hotline: 0123456789</p>
                                        </div>
                                    </div>

                                    <div className="content-local__item-map content-local__item-map--active" >
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.820923446237!2d105.84317294948336!3d20.999814294075357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac762d07f055%3A0x927f2d7abb74f088!2zUC4gVHLhuqduIMSQ4bqhaSBOZ2jEqWEsIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1649580516472!5m2!1svi!2s" width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>

                            </li>

                            <li className="content-local__item">
                                <div className="content-local__item-link">
                                    <div className="content-local__item-box-img">
                                        <img src="./assets/img/local2.png" alt="" className="content-local__item-img"/>
                                    </div>
                                    <div className="content-local__item-content">
                                        <div className="content-local__item-content-header" >
                                            Le Monde Steak Hà Nội 2
                                        </div>
                                        <div className="content-local__item-content-text">
                                            <p>Phố Vọng, Hai Bà Trưng, Hà Nội</p>
                                            <p>Hotline: 0123456789</p>
                                        </div>
                                    </div>

                                    <div className="content-local__item-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8800334481934!2d105.84044284948332!3d20.997445494156192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac6fe1ad54fd%3A0xb27ac24459c954ea!2zUC4gVuG7jW5nLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1649583201184!5m2!1svi!2s" width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>

                            </li>

                            <li className="content-local__item">
                                <div className="content-local__item-link">
                                    <div className="content-local__item-box-img">
                                        <img src="./assets/img/local3.jpg" alt="" className="content-local__item-img"/>
                                    </div>
                                    <div className="content-local__item-content">
                                        <div className="content-local__item-content-header" >
                                            Le Monde Steak Hà Nội 3
                                        </div>
                                        <div className="content-local__item-content-text">
                                            <p>Định Công Hạ, Phương Mai, Hà Nội</p>
                                            <p>Hotline: 0123456789</p>
                                        </div>
                                    </div>

                                    <div className="content-local__item-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.246840640713!2d105.82520154948303!3d20.98274019465736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acf5bcc09397%3A0x98ddb7b767b4c8db!2zxJDhu4tuaCBDw7RuZyBI4bqhLCDEkOG7i25oIEPDtG5nLCBIb8OgbmcgTWFpLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1649583551762!5m2!1svi!2s" width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>

                                
                            </li>

                            <li className="content-local__item">
                                <div className="content-local__item-link">
                                    <div className="content-local__item-box-img">
                                        <img src="./assets/img/local1.png" alt="" className="content-local__item-img"/>
                                    </div>
                                    <div className="content-local__item-content">
                                        <div className="content-local__item-content-header" >
                                            Le Monde Steak Hà Nội 4
                                        </div>
                                        <div className="content-local__item-content-text">
                                            <p>Quan Nhân, Thanh Xuân, Hà Nội</p>
                                            <p>Hotline: 0123456789</p>
                                        </div>
                                    </div>

                                    <div className="content-local__item-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5344.168498897582!2d105.808487653371!3d21.00383692972372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac996d7831ff%3A0xfd2eed2d5abbd7ab!2zUC4gUXVhbiBOaMOibiwgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1649583620668!5m2!1svi!2s" width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div> 
        </div>
    )
}

export default Home;