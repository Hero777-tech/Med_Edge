import React, { useState } from "react";
import style from "./Myproject.module.css";

function Myproject() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderTableContent = () => {
    switch (selectedItem) {
      case "first":
        return (
          <>
            <div>
              {" "}
              <div className="div">
                <h3>project 1 detail</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, aliquam? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Soluta, illum?
                </p>
                <h6>team members</h6>
                <ul>
                  <li>venu gopal</li>
                  <li>shashi kumar</li>
                  <li>kundan krishan</li>
                </ul>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      case "second":
        return (
          <>
            <div className="li">
              {" "}
              <div className="div">
                <h3>project 2 detail</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, aliquam? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Soluta, illum?
                </p>
                <h6>team members</h6>
                <ul>
                  <li>venu gopal</li>
                  <li>shashi kumar</li>
                  <li>kundan krishan</li>
                </ul>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      case "third":
        return (
          <>
            <div className="div">
              <h3>project 3 detail</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                aliquam? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Soluta, illum?
              </p>
              <h6>team members</h6>
              <ul>
                <li>venu gopal</li>
                <li>shashi kumar</li>
                <li>kundan krishan</li>
              </ul>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={style.right}>
        <div className={style.up}>
          <div>
            <div className={style.tag}>
              <span className={style.span}>Projects</span>
            </div>
            <div className={style.view}>
              {" "}
              <span className={style.span}>Status</span>
            </div>
          </div>
          <hr />
          <div>
            <div className={style.tag}>first project</div>
            <div className={style.view}>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleItemClick("first")}
              >
                view
              </button>
            </div>
          </div>
          <div>
            <div className={style.tag}>second project</div>
            <div className={style.view}>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleItemClick("second")}
              >
                view
              </button>
            </div>
          </div>
          <div>
            <div className={style.tag}>third project</div>
            <div className={style.view}>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleItemClick("third")}
              >
                view
              </button>
            </div>
          </div>
        </div>
        <div className={style.down}>{renderTableContent()}</div>
      </div>
    </>
  );
}

export default Myproject;
