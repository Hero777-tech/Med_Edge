import React, { useState } from "react";
import style from "./Publication.module.css";

function Myproject() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const renderTableContent = () => {
    switch (selectedItem) {
      case "view1":
        return (
          <>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            dolorem nesciunt, laborum earum praesentium voluptate a facilis fuga
            placeat! Ipsa rem eaque beatae odio ullam cumque enim reiciendis
            voluptates, illum quaerat iure quam vel esse dolore recusandae velit
            odit architecto nobis neque accusantium! Magnam eveniet deleniti
            natus odio sunt dolorum lorem400.
            <button onClick={handleClose} className={style.cancelButton}>
              Cancel
            </button>
          </>
        );
      case "view2":
        return (
          <>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero velit
            quibusdam, corporis esse molestias ab qui eaque voluptatibus
            inventore iusto magnam, ex, eum ducimus dignissimos tenetur
            exercitationem voluptatem sunt et ipsam maxime. Sint illo voluptates
            nisi explicabo placeat temporibus, non expedita repudiandae, nam
            doloribus minus libero nulla voluptate error, doloremque voluptatum
            ratione cupiditate molestiae nobis! Reiciendis aspernatur molestiae
            quod quisquam. Officiis recusandae mollitia blanditiis error ipsa
            optio itaque nostrum fugiat! Molestias totam corporis ea suscipit
            labore ut ducimus voluptatum nobis!
            <button onClick={handleClose} className={style.cancelButton}>
              Cancel
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {" "}
      <div className={style.right}>
        <h2>Publications</h2>
        <div className={style.pub}>
          <h5>Publication Title 1</h5>
          <h6>Author: Author A, Author B, Author C</h6>
          <h6>Journal: Journal X</h6>
          <h6>Date: 03/03/2024</h6>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
          </p>
          <h5 className={style.view} onClick={() => handleItemClick("view1")}>
            View Details
          </h5>
        </div>
        <div className={style.pub}>
          <h5>Publication Title 2</h5>
          <h6>Author: Author A, Author B, Author C</h6>
          <h6>Journal: Journal Y</h6>
          <h6>Date: 04/04/2024</h6>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, officia dolor omnis placeat consectetur nam deleniti
            veniam ipsum. lorem400
          </p>
          <h5 className={style.view} onClick={() => handleItemClick("view2")}>
            View Details
          </h5>
        </div>
        {selectedItem && (
          <div className={style.overlay}>
            <div className={style.detailContent}>{renderTableContent()}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Myproject;
