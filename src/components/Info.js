import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="main-info">
      <div className="container-info">
        <div className="row">
          {/* Column1 */}
          <div className="col-info">
            <h4>Info</h4>
            <ul className="list-unstyled-info">
              <li>
                <span>
                  感謝您的信任與支持！ 我們嚴選食材與用心製作，
                  以下為三款產品的製程 方便您了解，敬請安心食用!
                  <strong>建議最佳賞味期10~14天</strong>
                  <br/>貼心提醒 雪Q餅容易因天氣而改變軟硬度，
                  若當您品嚐時偏硬純屬自然現象!
                </span>
              </li>
            </ul>
          </div>
          {/* Column2 */}
        </div>

      </div>
    </div>
  );
};

export default Info;
