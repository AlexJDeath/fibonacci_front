import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar } from 'react-bootstrap';
import classnames from 'classnames';
import Quote from '../shareds/Quote';
import classes from './contentlayout.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logoutUser, selectUser, User } from '../../store/slices/auth.slice';

function ContentLayout({ children }: { children: React.ReactNode }) {
  /*   $(".toggle-icon").click(function() {
    $(".wrapper").hasClass("toggled") ? ($(".wrapper").removeClass("toggled"), $(".sidebar-wrapper").unbind("hover")) : ($(".wrapper").addClass("toggled"), $(".sidebar-wrapper").hover(function() {
      $(".wrapper").addClass("sidebar-hovered")
    }, function() {
      $(".wrapper").removeClass("sidebar-hovered")
    }))
  }) */

  const [sidebarMinimized, setSidebarMinimized] = useState(false);

  const dispatch = useAppDispatch();
  const user: User | null = useAppSelector(selectUser);
  const cx = classnames;
  const toggleHandler = (e: Event) => {
    setSidebarMinimized((prev) => !prev);
    e.preventDefault();
  };
  return (
    <div className={cx({ [classes.wrapper]: true, [classes.minimized]: sidebarMinimized })}>
      <div className={classes.sidebarWrapper} data-simplebar="true">
        <div className={classes.sidebarHeader}>
          <div className={classes.logo}>
            <img src="/src/assets/defaultimages/logo.svg" alt="fibonacci" />
          </div>
          <div
            className={cx({ [classes.toggleIcon]: true, 'ms-auto': true })}
            role="button"
            aria-label="Toggle Sidebar"
            tabIndex={0}
            onClick={toggleHandler}
            onKeyDown={toggleHandler}
          >
            <i className="bx bx-arrow-to-left" />
          </div>
        </div>
        <ul className={classes.metismenu} id="menu" />
      </div>
      <header className={classes.topHeader}>
        <Navbar>
          <div className="mobile-toggle-menu">
            <i className="bx bx-menu" />
          </div>
          <div className="top-menu ms-auto">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item d-block">
                <Dropdown>
                  <Dropdown.Toggle variant="link" className="dropdown-toggle-nocaret">
                    <i className="bx bx-category" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="grid grid-cols-3 overflow-hidden">
                      <Dropdown.Item>
                        <div className="app-box mx-auto bg-gradient-cosmic text-white">
                          <i className="bx bx-group" />
                        </div>
                        <div className="app-title">Teams</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className="app-box mx-auto bg-gradient-burning text-white">
                          <i className="bx bx-atom" />
                        </div>
                        <div className="app-title">Projects</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className="app-box mx-auto bg-gradient-lush text-white">
                          <i className="bx bx-shield" />
                        </div>
                        <div className="app-title">Tasks</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className="col text-center">
                          <div className="app-box mx-auto bg-gradient-kyoto text-dark">
                            <i className="bx bx-notification" />
                          </div>
                          <div className="app-title">Feeds</div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className="app-box mx-auto bg-gradient-blues text-dark">
                          <i className="bx bx-file" />
                        </div>
                        <div className="app-title">Files</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className="app-box mx-auto bg-gradient-moonlit text-white">
                          <i className="bx bx-filter-alt" />
                        </div>
                        <div className="app-title">Alevvvvvvvvvvvvvvvvvvvvvrts</div>
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item dropdown dropdown-large">
                <div
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {' '}
                  <span className="alert-count">7</span>
                  <i className="bx bx-bell" />
                </div>
                <div className="dropdown-menu dropdown-menu-end">
                  <div>
                    <div className="msg-header">
                      <p className="msg-header-title">Notifications</p>
                      <p className="msg-header-clear ms-auto">Marks all as read</p>
                    </div>
                  </div>
                  <div className="header-notifications-list ps">
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-primary text-primary">
                          <i className="bx bx-group" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New Customers<span className="msg-time float-end">14 Sec ago</span>
                          </h6>
                          <p className="msg-info">5 new user registered</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-danger text-danger">
                          <i className="bx bx-cart-alt" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New Orders <span className="msg-time float-end">2 min ago</span>
                          </h6>
                          <p className="msg-info">You have recived new orders</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-success text-success">
                          <i className="bx bx-file" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            24 PDF File<span className="msg-time float-end">19 min ago</span>
                          </h6>
                          <p className="msg-info">The pdf files generated</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-warning text-warning">
                          <i className="bx bx-send" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Time Response <span className="msg-time float-end">28 min ago</span>
                          </h6>
                          <p className="msg-info">5.1 min avarage time response</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-info text-info">
                          <i className="bx bx-home-circle" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New Product Approved{' '}
                            <span className="msg-time float-end">2 hrs ago</span>
                          </h6>
                          <p className="msg-info">Your new product has approved</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-danger text-danger">
                          <i className="bx bx-message-detail" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New Comments <span className="msg-time float-end">4 hrs ago</span>
                          </h6>
                          <p className="msg-info">New customer comments recived</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-success text-success">
                          <i className="bx bx-check-square" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Your item is shipped{' '}
                            <span className="msg-time float-end">5 hrs ago</span>
                          </h6>
                          <p className="msg-info">Successfully shipped your item</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-primary text-primary">
                          <i className="bx bx-user-pin" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New 24 authors<span className="msg-time float-end">1 day ago</span>
                          </h6>
                          <p className="msg-info">24 new authors joined last week</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-warning text-warning">
                          <i className="bx bx-door-open" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Defense Alerts <span className="msg-time float-end">2 weeks ago</span>
                          </h6>
                          <p className="msg-info">45% less alerts last 4 weeks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-center msg-footer">View All Notifications</div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-large">
                <div
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {' '}
                  <span className="alert-count">8</span>
                  <i className="bx bx-comment" />
                </div>
                <div className="dropdown-menu dropdown-menu-end">
                  <div>
                    <div className="msg-header">
                      <p className="msg-header-title">Messages</p>
                      <p className="msg-header-clear ms-auto">Marks all as read</p>
                    </div>
                  </div>
                  <div className="header-message-list ps">
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Daisy Anderson <span className="msg-time float-end">5 sec ago</span>
                          </h6>
                          <p className="msg-info">The standard chunk of lorem</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Althea Cabardo <span className="msg-time float-end">14 sec ago</span>
                          </h6>
                          <p className="msg-info">Many desktop publishing packages</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Oscar Garner <span className="msg-time float-end">8 min ago</span>
                          </h6>
                          <p className="msg-info">Various versions have evolved over</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Katherine Pechon <span className="msg-time float-end">15 min ago</span>
                          </h6>
                          <p className="msg-info">Making this the first true generator</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Amelia Doe <span className="msg-time float-end">22 min ago</span>
                          </h6>
                          <p className="msg-info">Duis aute irure dolor in reprehenderit</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Cristina Jhons <span className="msg-time float-end">2 hrs ago</span>
                          </h6>
                          <p className="msg-info">The passage is attributed to an unknown</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            James Caviness <span className="msg-time float-end">4 hrs ago</span>
                          </h6>
                          <p className="msg-info">The point of using Lorem</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Peter Costanzo <span className="msg-time float-end">6 hrs ago</span>
                          </h6>
                          <p className="msg-info">It was popularised in the 1960s</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            David Buckley <span className="msg-time float-end">2 hrs ago</span>
                          </h6>
                          <p className="msg-info">Various versions have evolved over</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Thomas Wheeler <span className="msg-time float-end">2 days ago</span>
                          </h6>
                          <p className="msg-info">If you are going to use a passage</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="https://via.placeholder.com/110x110"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Johnny Seitz <span className="msg-time float-end">5 days ago</span>
                          </h6>
                          <p className="msg-info">All the Lorem Ipsum generators</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-center msg-footer">View All Messages</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Dropdown>
            <Dropdown.Toggle className="nav-link dropdown-toggle dropdown-toggle-nocaret">
              <div
                className="d-flex align-items-center nav-link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://via.placeholder.com/110x110"
                  className="user-img"
                  alt="user avatar"
                />
                <div className="user-info ps-3">
                  <div className="user-name mb-0">{user!.name}</div>
                  <div className="designattion mb-0">{user!.role}</div>
                </div>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <i className="bx bx-user" />
                <span>Profile</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <i className="bx bx-cog" />
                <span>Settings</span>
              </Dropdown.Item>
              <Dropdown.Item>
                <i className="bx bx-home-circle" />
                <span>Dashboard</span>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => dispatch(logoutUser())}>
                <i className="bx bx-log-out-circle" />
                <span>Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
      </header>
      <div className="page-wrapper">
        <div className="page-content-wrapper">
          <div className="page-content">{children}</div>
        </div>
      </div>
      <footer className="page-footer">
        <Quote />
      </footer>
    </div>
  );
}

export default ContentLayout;
