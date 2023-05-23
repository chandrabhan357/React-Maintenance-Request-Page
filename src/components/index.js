import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faHouse,
  faUser,
  faPeopleLine,
  faToolbox,
  faWifi,
  faLaptop
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assests/download.jpg";

const Page = () => {
  return (
    <>
      <div className="Section">
        <span className="border">
          <strong>Welcome Patrick Samuel</strong>&nbsp;
        </span>
        <span className="border">
          <button className="Style-Button">Edit Profile</button>&nbsp;
        </span>
        <span>
          <button className="Style-Button st">Log-Out</button>
        </span>
        <div className="display">
          <FontAwesomeIcon icon={faDesktop} />
          <span>Computer ID#: 143153315</span>
          <span className="border">
            <button className="Style-Button">Change Computer Settings</button>
            &nbsp;
          </span>
          &nbsp;
          <a href=" " class="border">
            About BuildingLink.com{" "}
          </a>
          <span>
            <button className="Style-Button st1">General Help</button>&nbsp;
          </span>
        </div>
      </div>
      <div className="imgcont">
        <img className="Tower" src={Logo} alt="Tower" height="4%" width="4%" />
        <span>The Chamberlain</span>
      </div>
      <main className="container">
        <div className="nav-bar">
          <div className="Upper-option">
            <h6 className="Mar-up">Quick Search</h6>
            <div className="space">
              <input
                className="search"
                type="text"
                id="name"
                placeholder="Unit # or name"
              />
            </div>
          </div>
          <div className="nav">
            <span>
              <FontAwesomeIcon icon={faHouse} /> Dashboard
            </span>
            <span>
              <FontAwesomeIcon icon={faUser} /> Manage
            </span>
            <span>
              <FontAwesomeIcon icon={faPeopleLine} /> Front Desk
            </span>
            <span>
              <FontAwesomeIcon icon={faToolbox} /> Maintenance
            </span>
            <span>
              <FontAwesomeIcon icon={faWifi} /> Communicate
            </span>
            <span>
              <FontAwesomeIcon icon={faLaptop} /> Resident Site
            </span>
            <span className="left">
              Other
            </span>
          </div>
        </div>
        <div className="lay">
          <span>New Maintenance Request</span>
          <div class="MuiBox-root css-p1u9s4">
            <div className=" MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 box">
              <div className="box-item MuiGrid-item">
                <div className="inner-box">
                  <div className="css-ype7bp">
                    <span class="MuiTypography-root MuiTypography-button css-45izr7">
                      Request details &nbsp;
                    </span>
                    <form className="MuiBox-root css-1wrmftn" role="form">
                      <div class="MuiBox-root css-n2lc3p">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Search unit number or name &nbsp;
                        </span>
                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-e5c77h">
                          <input
                            placeholder="Enter Unit # or Name"
                            type="text"
                            class="MuiInputBase-input css-1bqqmdo"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="MuiBox-root css-gg7pca">
                        <div class="MuiBox-root css-1ogwwfi">
                          <span class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary css-15z8n">
                            <input
                              class="PrivateSwitchBase-input css-1m9pwf3"
                              type="checkbox"
                              data-indeterminate="false"
                            />
                          </span>
                          <span class="MuiTypography-root MuiTypography-button css-sqltrg">
                            &nbsp;&nbsp;Do not show to residents &nbsp;
                          </span>
                        </div>
                        <div class="MuiBox-root css-1wrmftn">
                          <a
                            class="MuiTypography-root MuiTypography-button css-vxvnq5"
                            href=" "
                          >
                            Assign to management Unit
                          </a>
                        </div>
                      </div>
                      <div class="MuiBox-root css-n2lc3p">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Problem Description &nbsp;
                        </span>
                        <div class="MuiBox-root css-n2lc3p">
                          <textarea className="style" row="8"></textarea>
                        </div>
                      </div>
                      <div class="MuiBox-root css-n2lc3p">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Category &nbsp;
                        </span>
                        <div class="MuiBox-root css-n2lc3p">
                          <select className="style1">
                            <option>Select</option>
                            <option value="apples">Server Problem</option>
                            <option value="oranges">Maintenance Error</option>
                          </select>
                        </div>
                      </div>
                      <div class="MuiBox-root css-1wrmftn">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Permission to enter &nbsp;
                        </span>
                        <div class="MuiBox-root css-n2lc3p">
                          <input type="radio" name="permission" />
                          <span class="MuiTypography-root MuiTypography-button css-sqltrg">
                            &nbsp;&nbsp;Yes &nbsp;
                          </span>
                          <input type="radio" name="permission" />
                          <span class="MuiTypography-root MuiTypography-button css-sqltrg">
                            &nbsp;&nbsp;No &nbsp;
                          </span>
                        </div>
                      </div>
                      <div class="MuiBox-root css-n2lc3p">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Entry Instructions &nbsp;
                        </span>
                        <div class="MuiBox-root css-n2lc3p">
                          <textarea className="style" row="8"></textarea>
                        </div>
                      </div>
                      <div class="MuiBox-root css-n2lc3p">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Images &nbsp;
                        </span>
                        <span class="MuiTypography-root MuiTypography-button css-sqltrg">
                          &nbsp;&nbsp; Supported files JPG, JPEG, PNG, BMP, and
                          GIF of up to 4MB &nbsp;
                        </span>
                        <div
                          accept="image/*"
                          class="MuiInputBase-root MuiInputBase-colorPrimary css-e5c77h"
                        >
                          <input
                            type="file"
                            class="MuiInputBase-input css-1bqqmdo"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="MuiBox-root css-n2lc3p">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Documents &nbsp;
                        </span>
                        <span class="MuiTypography-root MuiTypography-button css-sqltrg">
                          &nbsp;&nbsp; Supported files PDF, DOC, DOCX, XLS, and
                          XLSX of up to 4MB &nbsp;
                        </span>
                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-e5c77h">
                          <input
                            placeholder="Password"
                            type="file"
                            class="MuiInputBase-input css-1bqqmdo"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="MuiBox-root css-n2lc3p">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Create with status &nbsp;
                        </span>
                        <div class="MuiBox-root css-n2lc3p">
                          <input type="radio" name="permission" />
                          <span class="MuiTypography-root MuiTypography-button css-sqltrg">
                            &nbsp;&nbsp;Open &nbsp;
                          </span>
                          <input type="radio" name="permission" />
                          <span class="MuiTypography-root MuiTypography-button css-sqltrg">
                            &nbsp;&nbsp;Hold &nbsp;
                          </span>
                          <input type="radio" name="permission" />
                          <span class="MuiTypography-root MuiTypography-button css-sqltrg">
                            &nbsp;&nbsp;Close &nbsp;
                          </span>
                        </div>
                      </div>
                      <div class="MuiBox-root css-n2lc3p">
                        <span class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary css-15z8n">
                          <input
                            class="PrivateSwitchBase-input css-1m9pwf3"
                            type="checkbox"
                            data-indeterminate="false"
                          />
                        </span>
                        <span class="MuiTypography-root MuiTypography-button css-sqltrg">
                          &nbsp;&nbsp;Print Work Order &nbsp;
                        </span>
                        <span class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary css-15z8n">
                          <input
                            class="PrivateSwitchBase-input css-1m9pwf3"
                            type="checkbox"
                            data-indeterminate="false"
                          />
                        </span>
                        <span class="MuiTypography-root MuiTypography-button css-sqltrg">
                          &nbsp;&nbsp;High urgency &nbsp;
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-5 css-lxazra">
                <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1ikvzz0">
                  <div class="MuiBox-root css-ype7bp">
                    <span class="MuiTypography-root MuiTypography-button css-45izr7">
                      Additional details &nbsp;
                    </span>
                    <form class="MuiBox-root css-1wrmftn" role="form">
                      <div class="MuiBox-root css-1wrmftn">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Assigned employee &nbsp;
                        </span>
                        <div class="MuiBox-root css-1wrmftn">
                          <select className="style1">
                            <option>Select</option>
                            <option value="apples">Red Apples</option>
                            <option value="oranges">Outrageous Oranges</option>
                            <option value="tomatoes">
                              Technically a Fruit Tomatoes
                            </option>
                            <option value="bananas">Bodacious Bananas</option>
                          </select>
                        </div>
                      </div>
                      <div class="MuiBox-root css-1wrmftn">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Date Required &nbsp;
                        </span>
                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-e5c77h">
                          <input
                            type="date"
                            class="MuiInputBase-input css-1bqqmdo"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="MuiBox-root css-1wrmftn">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Assigned vendor &nbsp;
                        </span>
                        <div class="MuiBox-root css-1wrmftn">
                          <select className="style1">
                            <option>Select</option>
                            <option value="apples">Red Apples</option>
                            <option value="oranges">Outrageous Oranges</option>
                            <option value="tomatoes">
                              Technically a Fruit Tomatoes
                            </option>
                            <option value="bananas">Bodacious Bananas</option>
                          </select>
                        </div>
                      </div>
                      <div class="MuiBox-root css-1wrmftn">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Equipment &nbsp;
                        </span>
                        <div class="MuiBox-root css-1wrmftn">
                          <select className="style1">
                            <option>Select</option>
                            <option value="apples">Red Apples</option>
                            <option value="oranges">Outrageous Oranges</option>
                            <option value="tomatoes">
                              Technically a Fruit Tomatoes
                            </option>
                            <option value="bananas">Bodacious Bananas</option>
                          </select>
                        </div>
                      </div>
                      <div class="MuiBox-root css-1wrmftn">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Email notifications &nbsp;
                        </span>
                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-e5c77h">
                          <input
                            type="text"
                            class="MuiInputBase-input css-1bqqmdo"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="MuiBox-root css-1wrmftn">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Additional emails &nbsp;
                        </span>
                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-e5c77h">
                          <input
                            type="text"
                            class="MuiInputBase-input css-1bqqmdo"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="MuiBox-root css-1wrmftn">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Contact numbers &nbsp;
                        </span>
                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-e5c77h">
                          <input
                            type="text"
                            class="MuiInputBase-input css-1bqqmdo"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="MuiBox-root css-n2lc3p">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Optional reference number &nbsp;
                        </span>
                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-e5c77h">
                          <input
                            type="text"
                            class="MuiInputBase-input css-1bqqmdo"
                            value=""
                          />
                        </div>
                      </div>
                      <div class="MuiBox-root css-1wrmftn">
                        <span class="MuiTypography-root MuiTypography-button css-vxvnq5">
                          Priority(1-99) &nbsp;
                        </span>
                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-e5c77h">
                          <input
                            type="number"
                            class="MuiInputBase-input css-1bqqmdo"
                            value=""
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
