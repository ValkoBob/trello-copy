import React from "react";

export const CardSidebar = () => {
  return (
      <>
        <div className="sidebar-card">
          <h3>Додати до картки</h3>
          <div className="sidebar-elements">
            <div className="sidebar-elements__item">
              Учасники
            </div>
          </div>
        </div>
        <div className="sidebar-card">
          <h3>Дії</h3>
          <div className="sidebar-elements">
            <div className="sidebar-elements__item">
              Перемістити
            </div>
            <div className="sidebar-elements__item">
              Копіювати
            </div>
            <div className="sidebar-elements__item">
              Стежити
            </div>
          </div>
        </div>
      </>
  )
}
