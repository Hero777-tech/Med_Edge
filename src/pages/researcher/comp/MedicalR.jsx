import React, { useState } from "react";
import style from "./MedicalR.module.css";

function MedicalR() {
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
      <div className={style.scrollContainer}>
        <h3>Database</h3>
        <div>
          <h4>Medical Research Database</h4>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
            <h5 className={style.view} onClick={() => handleItemClick("view1")}>
              Access Database
            </h5>
          </p>
          <h4>Genetic Sequence Database</h4>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
            <h5 className={style.view} onClick={() => handleItemClick("view2")}>
              Access Database
            </h5>
          </p>
        </div>
        <h3>Research Tools</h3>
        <div>
          <h4>Static Analytic Tools</h4>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
            <h5 className={style.view} onClick={() => handleItemClick("view1")}>
              Access Database
            </h5>
          </p>
          <h4>Static Analytic Tools</h4>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
            <h5 className={style.view} onClick={() => handleItemClick("view1")}>
              Access Database
            </h5>
          </p>
          <h4>Static Analytic Tools</h4>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
            <h5 className={style.view} onClick={() => handleItemClick("view1")}>
              Access Database
            </h5>
          </p>
          <h4>Static Analytic Tools</h4>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
            <h5 className={style.view} onClick={() => handleItemClick("view1")}>
              Access Database
            </h5>
          </p>
          <h4>Static Analytic Tools</h4>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
            <h5 className={style.view} onClick={() => handleItemClick("view1")}>
              Access Database
            </h5>
          </p>
          <h4>Static Analytic Tools</h4>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
            <h5 className={style.view} onClick={() => handleItemClick("view1")}>
              Access Database
            </h5>
          </p>
          <h4>Static Analytic Tools</h4>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
            <h5 className={style.view} onClick={() => handleItemClick("view1")}>
              Access Database
            </h5>
          </p>
          <h4>Static Analytic Tools</h4>
          <p>
            Abstract: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium architecto tempora eveniet perferendis eaque facilis.
            <h5 className={style.view} onClick={() => handleItemClick("view1")}>
              Access Database
            </h5>
          </p>
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

export default MedicalR;
