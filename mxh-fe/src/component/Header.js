import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import {useSelector} from "react-redux";


const Header = () => {
    const navigate = useNavigate()
    const account = useSelector(state => {
        return state.account.currentAccount
    })

    return (
        <>
            <div className="postoverlay"></div>

            <div className="responsive-header">
                <div className="mh-head first Sticky">
			<span className="mh-btns-left">
				<a className="" href="#menu"><i className="fa fa-align-justify"></i></a>
			</span>

                    <span className="mh-text">
				<a href="newsfeed.html" title=""><img src="/images/logo2.png" alt=""/></a>
			</span>

                    <span className="mh-btns-right">
				<a className="fa fa-sliders" href="#shoppingbag"></a>
			</span>
                </div>
                <nav id="menu" className="res-menu">
                </nav>
                <nav id="shoppingbag">
                </nav>
            </div>

            <div className="topbar stick" style={{position: "fixed", width: "100%"}}>
                <div className="logo">

                    <Link title="" to="/home"><img src="/images/logo3.png" alt=""/></Link>

                </div>
                <div className="top-area">
                    <div className="main-menu">
				<span>
			    	<i className="fa fa-braille"></i>
			    </span>
                    </div>
                    <div className="top-search">
                        <form method="post" className="">
                            <input type="text" placeholder="Search People, Pages, Groups etc"/>
                            <button data-ripple><i className="ti-search"></i></button>
                        </form>
                    </div>
                    <div className="page-name">
                        <span >Newsfeed</span>
                    </div>
                    <ul className="setting-area">
                        <li><Link to="/home" title="Home" data-ripple=""><i className="fa fa-home"></i></Link>
                        </li>
                        <li>
                            <a title="Friend Requests">
                                <i className="fa fa-user"></i><em className="bg-red">5</em>
                            </a>

                        </li>
                        <li>
                            <a href="#" title="Notification" data-ripple="">
                                <i className="fa fa-bell"></i><em className="bg-purple">7</em>
                            </a>
                            <div className="dropdowns">
                                <span>4 New Notifications <a href="#" title="">Mark all as read</a></span>
                                <ul className="drops-menu">
                                    <li>
                                        <a href="notifications.html" title="">
                                            <figure>
                                                <img src="/images/resources/thumb-1.jpg" alt=""/>
                                                <span className="status f-online"></span>
                                            </figure>
                                            <div className="mesg-meta">
                                                <h6>sarah Loren</h6>
                                                <span>commented on your new profile status</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <figure>
                                                <img src="/images/resources/thumb-2.jpg" alt=""/>
                                                <span className="status f-online"></span>
                                            </figure>
                                            <div className="mesg-meta">
                                                <h6>Jhon doe</h6>
                                                <span>Nicholas Grissom just became friends. Write on his wall.</span>
                                                <i>4 hours ago</i>
                                                <figure>
                                                    <span>Today is Marina Valentine’s Birthday! wish for celebrating</span>
                                                    <img src="images/birthday.png" alt=""/>
                                                </figure>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <figure>
                                                <img src="/images/resources/thumb-3.jpg" alt=""/>
                                                <span className="status f-online"></span>
                                            </figure>
                                            <div className="mesg-meta">
                                                <h6>Andrew</h6>
                                                <span>commented on your photo.</span>
                                                <i>Sunday</i>
                                                <figure>
                                                    <span>"Celebrity looks Beautiful in that outfit! We should see each"</span>
                                                    <img src="/images/resources/admin.jpg" alt=""/>
                                                </figure>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <figure>
                                                <img src="/images/resources/thumb-4.jpg" alt=""/>
                                                <span className="status f-online"></span>
                                            </figure>
                                            <div className="mesg-meta">
                                                <h6>Tom cruse</h6>
                                                <span>nvited you to attend to his event Goo in</span>
                                                <i>May 19</i>
                                            </div>
                                        </a>
                                        <span className="tag">New</span>
                                    </li>
                                    <li>
                                        <a href="notifications.html" title="">
                                            <figure>
                                                <img src="/images/resources/thumb-5.jpg" alt=""/>
                                                <span className="status f-online"></span>
                                            </figure>
                                            <div className="mesg-meta">
                                                <h6>Amy</h6>
                                                <span>Andrew Changed his profile picture. </span>
                                                <i>dec 18</i>
                                            </div>
                                        </a>
                                        <span className="tag">New</span>
                                    </li>
                                </ul>
                                <a href="notifications.html" title="" className="more-mesg">View All</a>
                            </div>
                        </li>
                        <li>
                            <a href="#" title="Messages" data-ripple=""><i className="fa fa-commenting"></i><em
                                className="bg-blue">9</em></a>
                            <div className="dropdowns">
                                <span>5 New Messages <a href="#" title="">Mark all as read</a></span>
                                <ul className="drops-menu">
                                    <li>
                                        <a className="show-mesg" href="#" title="">
                                            <figure>
                                                <img src="/images/resources/thumb-1.jpg" alt=""/>
                                                <span className="status f-online"></span>
                                            </figure>
                                            <div className="mesg-meta">
                                                <h6>sarah Loren</h6>
                                                <span><i className="ti-check"></i> Hi, how r u dear ...?</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="show-mesg" href="#" title="">
                                            <figure>
                                                <img src="/images/resources/thumb-2.jpg" alt=""/>
                                                <span className="status f-offline"></span>
                                            </figure>
                                            <div className="mesg-meta">
                                                <h6>Jhon doe</h6>
                                                <span><i className="ti-check"></i> We’ll have to check that at the office and see if the client is on board with</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="show-mesg" href="#" title="">
                                            <figure>
                                                <img src="/images/resources/thumb-3.jpg" alt=""/>
                                                <span className="status f-online"></span>
                                            </figure>
                                            <div className="mesg-meta">
                                                <h6>Andrew</h6>
                                                <span> <i className="fa fa-paperclip"></i>Hi Jack's! It’s Diana, I just wanted to let you know that we have to reschedule..</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="show-mesg" href="#" title="">
                                            <figure>
                                                <img src="/images/resources/thumb-4.jpg" alt=""/>
                                                <span className="status f-offline"></span>
                                            </figure>
                                            <div className="mesg-meta">
                                                <h6>Tom cruse</h6>
                                                <span><i
                                                    className="ti-check"></i> Great, I’ll see you tomorrow!.</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag">New</span>
                                    </li>
                                    <li>
                                        <a className="show-mesg" href="#" title="">
                                            <figure>
                                                <img src="/images/resources/thumb-5.jpg" alt=""/>
                                                <span className="status f-away"></span>
                                            </figure>
                                            <div className="mesg-meta">
                                                <h6>Amy</h6>
                                                <span><i className="fa fa-paperclip"></i> Sed ut perspiciatis unde omnis iste natus error sit </span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag">New</span>
                                    </li>
                                </ul>
                                <a href="chat-messenger.html" title="" className="more-mesg">View All</a>
                            </div>
                        </li>
                        <li><a href="#" title="Languages" data-ripple=""><i className="fa fa-globe"></i><em>EN</em></a>
                        </li>
                        <li><a href="#" title="Help" data-ripple=""><i className="fa fa-question-circle"></i></a>
                            <div className="dropdowns helps">
                                <span>Quick Help</span>
                                <form method="post">
                                    <input type="text" placeholder="How can we help you?"/>
                                </form>
                                <span>Help with this page</span>
                                <ul className="help-drop">
                                    <li><a href="forum.html" title=""><i className="fa fa-book"></i>Community &
                                        Forum</a></li>
                                    <li><a href="faq.html" title=""><i className="fa fa-question-circle-o"></i>FAQs</a>
                                    </li>
                                    <li><a href="career.html" title=""><i
                                        className="fa fa-building-o"></i>Carrers</a></li>
                                    <li><a href="privacy.html" title=""><i className="fa fa-pencil-square-o"></i>Terms
                                        & Policy</a></li>
                                    <li><a href="#" title=""><i className="fa fa-map-marker"></i>Contact</a></li>
                                    <li><a href="#" title=""><i className="fa fa-exclamation-triangle"></i>Report a
                                        Problem</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div  className="user-img">
                        <h5>{account.name}</h5>

                        <Link  to={`/home/PersonalPage/MyTimeline/${account.idAccount}`}>
                            <img style={{borderRadius: '50%', width: 45, height:45}} className="ml-3"
                                 src={account.avatar}></img>
                        </Link>
                        <span className="status f-online"></span>

                    </div>

                    <div style={{float: "right", marginTop: 23, marginLeft:10}}>
                        <a style={{ color:"red"}} is={'button'} onClick={ () => {
                            swal({
                                title: "Đăng xuất tài khoản.",
                                text: "Bạn có muốn đăng xuất tài khoản",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                                .then((willOut) => {
                                    if (willOut) {
                                        localStorage.clear();
                                        swal(`Đã đăng xất tài khoản!`, {
                                            icon: "success",
                                        })
                                        navigate('/')
                                        ;
                                    } else {
                                        navigate('/home')
                                    }
                                });
                        }}><i className="ml-3 ti-power-off " style={{fontSize: 20}}></i>
                        </a>
                    </div>

                </div>
                <nav>
                    <ul className="nav-list">
                        <li><a className="" href="#" title=""><i className="fa fa-home"></i> Home Pages</a>
                            <ul>
                                <li><a href="index.html" title="">Pitnik Default</a></li>
                                <li><a href="company-landing.html" title="">Company Landing</a></li>
                                <li><a href="pitrest.html" title="">Pitrest</a></li>
                                <li><a href="redpit.html" title="">Redpit</a></li>
                                <li><a href="redpit-category.html" title="">Redpit Category</a></li>
                                <li><a href="soundnik.html" title="">Soundnik</a></li>
                                <li><a href="soundnik-detail.html" title="">Soundnik Single</a></li>
                                <li><a href="career.html" title="">Pitjob</a></li>
                                <li><a href="shop.html" title="">Shop</a></li>
                                <li><a href="classified.html" title="">Classified</a></li>
                                <li><a href="pitpoint.html" title="">PitPoint</a></li>
                                <li><a href="pittube.html" title="">Pittube</a></li>
                                <li><a href="chat-messenger.html" title="">Messenger</a></li>
                            </ul>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-film"></i> Pittube</a>
                            <ul>
                                <li><a href="pittube.html" title="">Pittube</a></li>
                                <li><a href="pittube-detail.html" title="">Pittube single</a></li>
                                <li><a href="pittube-category.html" title="">Pittube Category</a></li>
                                <li><a href="pittube-channel.html" title="">Pittube Channel</a></li>
                                <li><a href="pittube-search-result.html" title="">Pittube Search Result</a></li>
                            </ul>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-female"></i> PitPoint</a>
                            <ul>
                                <li><a href="pitpoint.html" title="">PitPoint</a></li>
                                <li><a href="pitpoint-detail.html" title="">Pitpoint Detail</a></li>
                                <li><a href="pitpoint-list.html" title="">Pitpoint List style</a></li>
                                <li><a href="pitpoint-without-baner.html" title="">Pitpoint without Banner</a></li>
                                <li><a href="pitpoint-search-result.html" title="">Pitpoint Search</a></li>
                            </ul>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-graduation-cap"></i> Pitjob</a>
                            <ul>
                                <li><a href="career.html" title="">Pitjob</a></li>
                                <li><a href="career-detail.html" title="">Pitjob Detail</a></li>
                                <li><a href="career-search-result.html" title="">Job seach page</a></li>
                                <li><a href="social-post-detail.html" title="">Social Post Detail</a></li>
                            </ul>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-repeat"></i> Timeline</a>
                            <ul>
                                <li><a href="timeline.html" title="">Timeline</a></li>
                                <li><a href="timeline-photos.html" title="">Timeline Photos</a></li>
                                <li><a href="timeline-videos.html" title="">Timeline Videos</a></li>
                                <li><a href="timeline-groups.html" title="">Timeline Groups</a></li>
                                <li><a href="timeline-friends.html" title="">Timeline Friends</a></li>
                                <li><a href="timeline-friends2.html" title="">Timeline Friends-2</a></li>
                                <li><a href="about.html" title="">Timeline About</a></li>
                                <li><a href="blog-posts.html" title="">Timeline Blog</a></li>
                                <li><a href="friends-birthday.html" title="">Friends' Birthday</a></li>
                                <li><a href="newsfeed.html" title="">Newsfeed</a></li>
                                <li><a href="search-result.html" title="">Search Result</a></li>
                            </ul>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-heart"></i> Favourit Page</a>
                            <ul>
                                <li><a href="fav-page.html" title="">Favourit Page</a></li>
                                <li><a href="fav-favers.html" title="">Fav Page Likers</a></li>
                                <li><a href="fav-events.html" title="">Fav Events</a></li>
                                <li><a href="fav-event-invitations.html" title="">Fav Event Invitations</a></li>
                                <li><a href="event-calendar.html" title="">Event Calendar</a></li>
                                <li><a href="fav-page-create.html" title="">Create New Page</a></li>
                                <li><a href="price-plans.html" title="">Price Plan</a></li>
                            </ul>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-forumbee"></i> Forum</a>
                            <ul>
                                <li><a href="forum.html" title="">Forum</a></li>
                                <li><a href="forum-create-topic.html" title="">Forum Create Topic</a></li>
                                <li><a href="forum-open-topic.html" title="">Forum Open Topic</a></li>
                                <li><a href="forums-category.html" title="">Forum Category</a></li>
                            </ul>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-star-o"></i> Featured</a>
                            <ul>
                                <li><a href="chat-messenger.html" title="">Messenger (Chatting)</a></li>
                                <li><a href="notifications.html" title="">Notifications</a></li>
                                <li><a href="badges.html" title="">Badges</a></li>
                                <li><a href="faq.html" title="">Faq's</a></li>
                                <li><a href="contribution.html" title="">Contriburion Page</a></li>
                                <li><a href="manage-page.html" title="">Manage Page</a></li>
                                <li><a href="weather-forecast.html" title="">weather-forecast</a></li>
                                <li><a href="statistics.html" title="">Statics/Analytics</a></li>
                                <li><a href="shop-cart.html" title="">Shop Cart</a></li>
                            </ul>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-gears"></i> Account Setting</a>
                            <ul>
                                <li><a href="setting.html" title="">Setting</a></li>
                                <li><a href="privacy.html" title="">Privacy</a></li>
                                <li><a href="support-and-help.html" title="">Support & Help</a></li>
                                <li><a href="support-and-help-detail.html" title="">Support Detail</a></li>
                                <li><a href="support-and-help-search-result.html" title="">Support Search</a></li>
                            </ul>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-lock"></i> Authentication</a>
                            <ul>
                                <li><a href="login.html" title="">Login Page</a></li>
                                <li><a href="register.html" title="">Register Page</a></li>
                                <li><a href="logout.html" title="">Logout Page</a></li>
                                <li><a href="coming-soon.html" title="">Coming Soon</a></li>
                                <li><a href="error-404.html" title="">Error 404</a></li>
                                <li><a href="error-404-2.html" title="">Error 404-2</a></li>
                                <li><a href="error-500.html" title="">Error 500</a></li>
                            </ul>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-wrench"></i> Tools</a>
                            <ul>
                                <li><a href="typography.html" title="">Typography</a></li>
                                <li><a href="popup-modals.html" title="">Popups/Modals</a></li>
                                <li><a href="post-versions.html" title="">Post Versions</a></li>
                                <li><a href="sliders.html" title="">Sliders / Carousel</a></li>
                                <li><a href="google-map.html" title="">Google Maps</a></li>
                                <li><a href="widgets.html" title="">Widgets</a></li>
                            </ul>
                        </li>
                    </ul>

                </nav>
            </div>
            {/*xong topbar*/}

            <div className="fixed-sidebar right">
                <div className="chat-friendz">
                    <ul className="chat-users">
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend1.jpg" alt=""/>
                                <span className="status f-online"></span>
                            </div>
                        </li>
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend2.jpg" alt=""/>
                                <span className="status f-away"></span>
                            </div>
                        </li>
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend3.jpg" alt=""/>
                                <span className="status f-online"></span>
                            </div>
                        </li>
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend4.jpg" alt=""/>
                                <span className="status f-offline"></span>
                            </div>
                        </li>
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend5.jpg" alt=""/>
                                <span className="status f-online"></span>
                            </div>
                        </li>
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend6.jpg" alt=""/>
                                <span className="status f-online"></span>
                            </div>
                        </li>
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend7.jpg" alt=""/>
                                <span className="status f-offline"></span>
                            </div>
                        </li>
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend8.jpg" alt=""/>
                                <span className="status f-online"></span>
                            </div>
                        </li>
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend9.jpg" alt=""/>
                                <span className="status f-away"></span>
                            </div>
                        </li>
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend10.jpg" alt=""/>
                                <span className="status f-away"></span>
                            </div>
                        </li>
                        <li>
                            <div className="author-thmb">
                                <img src="images/resources/side-friend8.jpg" alt=""/>
                                <span className="status f-online"></span>
                            </div>
                        </li>
                    </ul>
                    <div className="chat-box">
                        <div className="chat-head">
                            <span className="status f-online"></span>
                            <h6>Bucky Barnes</h6>
                            <div className="more">
                                <div className="more-optns"><i className="ti-more-alt"></i>
                                    <ul>
                                        <li>block chat</li>
                                        <li>unblock chat</li>
                                        <li>conversation</li>
                                    </ul>
                                </div>
                                <span className="close-mesage"><i className="ti-close"></i></span>
                            </div>
                        </div>
                        <div className="chat-list">
                            <ul>
                                <li className="me">
                                    <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt=""/>
                                    </div>
                                    <div className="notification-event">
								<span className="chat-message-item">
HI, Jack i have faced a problem with your software. are you available now, when i install this i have to received an error.
								</span>
                                        <span className="notification-date"><time dateTime="2004-07-24T18:18"
                                                                                  className="entry-date updated">Today at 2:12pm</time></span>
                                    </div>
                                </li>
                                <li className="you">
                                    <div className="chat-thumb"><img src="images/resources/chatlist2.jpg" alt=""/>
                                    </div>
                                    <div className="notification-event">
								<span className="chat-message-item">
									Hi tina, Please let me know your purchase code, and show me the screnshot of error.
								</span>
                                        <span className="notification-date"><time dateTime="2004-07-24T18:18"
                                                                                  className="entry-date updated">Today at 2:14pm</time></span>
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt=""/>
                                    </div>
                                    <div className="notification-event">
								<span className="chat-message-item">
									Yes, sure please wait a while, i ll show you the complete error list. Thank you.
								</span>
                                        <span className="notification-date"><time dateTime="2004-07-24T18:18"
                                                                                  className="entry-date updated">Today at 2:15pm</time></span>
                                    </div>
                                </li>
                            </ul>
                            <form className="text-box">
                                <textarea placeholder="Post enter to post..."></textarea>
                                <div className="add-smiles">
                                    <span title="add icon" className="em em-expressionless"></span>
                                    <div className="smiles-bunch">
                                        <i className="em em---1"></i>
                                        <i className="em em-smiley"></i>
                                        <i className="em em-anguished"></i>
                                        <i className="em em-laughing"></i>
                                        <i className="em em-angry"></i>
                                        <i className="em em-astonished"></i>
                                        <i className="em em-blush"></i>
                                        <i className="em em-disappointed"></i>
                                        <i className="em em-worried"></i>
                                        <i className="em em-kissing_heart"></i>
                                        <i className="em em-rage"></i>
                                        <i className="em em-stuck_out_tongue"></i>
                                    </div>
                                </div>

                                <button type="submit"></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*xong right sidebar user chat*/}

            <div className="fixed-sidebar left">
                <div className="menu-left">
                    <ul className="left-menu">
                        <li>
                            <a className="menu-small" href="#" title="">
                                <i className="ti-menu"></i>
                            </a>
                        </li>

                        <li>
                            <a href="newsfeed.html" title="Newsfeed Page" data-toggle="tooltip"
                               data-placement="right">
                                <i className="ti-magnet"></i>
                            </a>
                        </li>
                        <li>
                            <a href="forum.html" title="Forum" data-toggle="tooltip" data-placement="right">
                                <i className="fa fa-forumbee"></i>
                            </a>
                        </li>
                        <li>
                            <a href="timeline-friends.html" title="Friends" data-toggle="tooltip"
                               data-placement="right">
                                <i className="ti-user"></i>
                            </a>
                        </li>
                        <li>
                            <a href="fav-page.html" title="Favourit page" data-toggle="tooltip"
                               data-placement="right">
                                <i className="fa fa-star-o"></i>
                            </a>
                        </li>
                        <li>
                            <a href="chat-messenger.html" title="Messages" data-toggle="tooltip"
                               data-placement="right">
                                <i className="ti-comment-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a href="notifications.html" title="Notification" data-toggle="tooltip"
                               data-placement="right">
                                <i className="fa fa-bell-o"></i>
                            </a>
                        </li>

                        <li>
                            <a href="statistics.html" title="Account Stats" data-toggle="tooltip"
                               data-placement="right">
                                <i className="ti-stats-up"></i>
                            </a>
                        </li>

                        <li>
                            <a href="support-and-help.html" title="Help" data-toggle="tooltip"
                               data-placement="right">
                                <i className="fa fa-question-circle-o">
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="faq.html" title="Faq's" data-toggle="tooltip" data-placement="right">
                                <i className="ti-light-bulb"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="left-menu-full">
                    <ul className="menu-slide">
                        <li><a className="closd-f-menu" href="#" title=""><i className="ti-close"></i> close
                            Menu</a></li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-home"></i> Home Pages</a>
                            <ul className="submenu">
                                <li><a href="index.html" title="">Pitnik Default</a></li>
                                <li><a href="company-landing.html" title="">Company Landing</a></li>
                                <li><a href="pitrest.html" title="">Pitrest</a></li>
                                <li><a href="redpit.html" title="">Redpit</a></li>
                                <li><a href="redpit-category.html" title="">Redpit Category</a></li>
                                <li><a href="soundnik.html" title="">Soundnik</a></li>
                                <li><a href="soundnik-detail.html" title="">Soundnik Single</a></li>
                                <li><a href="career.html" title="">Pitjob</a></li>
                                <li><a href="shop.html" title="">Shop</a></li>
                                <li><a href="classified.html" title="">Classified</a></li>
                                <li><a href="pitpoint.html" title="">PitPoint</a></li>
                                <li><a href="pittube.html" title="">Pittube</a></li>
                                <li><a href="chat-messenger.html" title="">Messenger</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-film"></i> Pittube</a>
                            <ul className="submenu">
                                <li><a href="pittube.html" title="">Pittube</a></li>
                                <li><a href="pittube-detail.html" title="">Pittube single</a></li>
                                <li><a href="pittube-category.html" title="">Pittube Category</a></li>
                                <li><a href="pittube-channel.html" title="">Pittube Channel</a></li>
                                <li><a href="pittube-search-result.html" title="">Pittube Search Result</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-female"></i>PitPoint</a>
                            <ul className="submenu">
                                <li><a href="pitpoint.html" title="">PitPoint</a></li>
                                <li><a href="pitpoint-detail.html" title="">Pitpoint Detail</a></li>
                                <li><a href="pitpoint-list.html" title="">Pitpoint List style</a></li>
                                <li><a href="pitpoint-without-baner.html" title="">Pitpoint without Banner</a></li>
                                <li><a href="pitpoint-search-result.html" title="">Pitpoint Search</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-graduation-cap"></i>Pitjob</a>
                            <ul className="submenu">
                                <li><a href="career.html" title="">Pitjob</a></li>
                                <li><a href="career-detail.html" title="">Pitjob Detail</a></li>
                                <li><a href="career-search-result.html" title="">Job seach page</a></li>
                                <li><a href="social-post-detail.html" title="">Social Post Detail</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-repeat"></i>Timeline</a>
                            <ul className="submenu">
                                <li><a href="timeline.html" title="">Timeline</a></li>
                                <li><a href="timeline-photos.html" title="">Timeline Photos</a></li>
                                <li><a href="timeline-videos.html" title="">Timeline Videos</a></li>
                                <li><a href="timeline-groups.html" title="">Timeline Groups</a></li>
                                <li><a href="timeline-friends.html" title="">Timeline Friends</a></li>
                                <li><a href="timeline-friends2.html" title="">Timeline Friends-2</a></li>
                                <li><a href="about.html" title="">Timeline About</a></li>
                                <li><a href="blog-posts.html" title="">Timeline Blog</a></li>
                                <li><a href="friends-birthday.html" title="">Friends' Birthday</a></li>
                                <li><a href="newsfeed.html" title="">Newsfeed</a></li>
                                <li><a href="search-result.html" title="">Search Result</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-heart"></i>Favourit Page</a>
                            <ul className="submenu">
                                <li><a href="fav-page.html" title="">Favourit Page</a></li>
                                <li><a href="fav-favers.html" title="">Fav Page Likers</a></li>
                                <li><a href="fav-events.html" title="">Fav Events</a></li>
                                <li><a href="fav-event-invitations.html" title="">Fav Event Invitations</a></li>
                                <li><a href="event-calendar.html" title="">Event Calendar</a></li>
                                <li><a href="fav-page-create.html" title="">Create New Page</a></li>
                                <li><a href="price-plans.html" title="">Price Plan</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-forumbee"></i>Forum</a>
                            <ul className="submenu">
                                <li><a href="forum.html" title="">Forum</a></li>
                                <li><a href="forum-create-topic.html" title="">Forum Create Topic</a></li>
                                <li><a href="forum-open-topic.html" title="">Forum Open Topic</a></li>
                                <li><a href="forums-category.html" title="">Forum Category</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-star-o"></i>Featured</a>
                            <ul className="submenu">
                                <li><a href="chat-messenger.html" title="">Messenger (Chatting)</a></li>
                                <li><a href="notifications.html" title="">Notifications</a></li>
                                <li><a href="badges.html" title="">Badges</a></li>
                                <li><a href="faq.html" title="">Faq's</a></li>
                                <li><a href="contribution.html" title="">Contriburion Page</a></li>
                                <li><a href="manage-page.html" title="">Manage Page</a></li>
                                <li><a href="weather-forecast.html" title="">weather-forecast</a></li>
                                <li><a href="statistics.html" title="">Statics/Analytics</a></li>
                                <li><a href="shop-cart.html" title="">Shop Cart</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-gears"></i>Account Setting</a>
                            <ul className="submenu">
                                <li><a href="setting.html" title="">Setting</a></li>
                                <li><a href="privacy.html" title="">Privacy</a></li>
                                <li><a href="support-and-help.html" title="">Support & Help</a></li>
                                <li><a href="support-and-help-detail.html" title="">Support Detail</a></li>
                                <li><a href="support-and-help-search-result.html" title="">Support Search</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-lock"></i>Authentication</a>
                            <ul className="submenu">
                                <li><a href="login.html" title="">Login Page</a></li>
                                <li><a href="register.html" title="">Register Page</a></li>
                                <li><a href="logout.html" title="">Logout Page</a></li>
                                <li><a href="coming-soon.html" title="">Coming Soon</a></li>
                                <li><a href="error-404.html" title="">Error 404</a></li>
                                <li><a href="error-404-2.html" title="">Error 404-2</a></li>
                                <li><a href="error-500.html" title="">Error 500</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a className="" href="#" title=""><i
                            className="fa fa-wrench"></i>Tools</a>
                            <ul className="submenu">
                                <li><a href="typography.html" title="">Typography</a></li>
                                <li><a href="popup-modals.html" title="">Popups/Modals</a></li>
                                <li><a href="post-versions.html" title="">Post Versions</a></li>
                                <li><a href="sliders.html" title="">Sliders</a></li>
                                <li><a href="google-map.html" title="">Google Maps</a></li>
                                <li><a href="widgets.html" title="">Widgets</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/*left sidebar menu*/}

        </>
    )
}
export default Header;
